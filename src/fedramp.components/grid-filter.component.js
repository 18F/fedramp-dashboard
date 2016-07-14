(function(){
    "use strict";
    angular
        .module('fedramp.components')
        .component('gridFilter', {
            controller: GridFilter,
            controllerAs: 'controller',
            templateUrl: 'src/fedramp.components/grid-filter.html',
            require: {
                // We require that this component live inside of <grid></grid> so it can
                // communicate and share information
                gridController: '^grid'
            },
            bindings: {
                // The property on a list to manage
                property: '@',

                // User friendly text to describe filter
                header: '@',

                // Any options that can be selected by this filter. If none are passed in, a distinct list
                // of all possible values for the current property are populated.
                options: '<',

                // Load any initial selected values. For instance, to restore filter state. In the form
                // {value: <value>, label: <label>, selected: <boolean>}
                selectedOptionValues: '<',

                // Whether to render expanded template vs the dropdown
                expanded: '<',

                // Whether to initially render expanded mode with panels opened
                opened: '<',

                // Custom function that returns available filter options. Defaults to default func if not provided
                optionsFunc: '<',

                // Custom function that performs a comparison when filtering. Defaults to default func if not provides
                filterFunc: '<',

                // Identifier for filter
                id: '@'
            }
        });

    GridFilter.$inject = ['$location', '$parse', '$element'];

    /**
     * @constructor
     * @memberof Components
     * @example 
     * <grid-filter property="name" header="Name" options="" expanded="true" opened="true"></grid-filter>
     */
    function GridFilter ($location, $parse, $element) {
        var self = this;

        // Regex to parse out array based filter keys
        var ARRAY_FILTER_REGEX = /^(.*)\sin\s(.+)$/;

        // Default template used to render option values
        self.gridFilterOptionsTemplatePath = "src/fedramp.components/grid-filter-options.html";
        
        // Options available to filter based on property
        self.options = [];

        // Options that have been selected
        self.selectedOptionValues = self.selectedOptionValues || [];

        // List of filtered data based on this particular filter
        self.filtered = [];

        // Whether to initially render expanded mode with panels opened
        self.opened = true;

        // Exposed public functions
        self.$onInit = $onInit;
        self.applyFilter = applyFilter;
        self.selectOption = selectOption;
        self.clear = clear;
        //self.doFilter = doFilter;
        self.loadOptions = loadOptions;
        self.$postLink = $postLink;

        //Array parsing expressions
        self.parser = null;

        function $onInit(){
            if(!self.id){
                throw 'Please add an id attribute';
            }
            if(!self.property && (!self.optionsFunc || !self.filterFunc)){
                throw 'If property is not specified, optionsFunc and filterFunc must be passed in';
            }

            // We check if we're filtering on a property that contains multiple values
            self.isArray = self.property ? (self.property.match(ARRAY_FILTER_REGEX) !== null) : false;

            // Allow custom optionsFunc and filterFuncs to be passed for custom filtering
            self.optionsFunc = self.optionsFunc || optionsFunc;
            // Wrap custom func
            self.filterFunc = (self.filterFunc ? wrapFilterFunc(self.filterFunc) : filterFunc);

            if(self.isArray){
                configureArrayParsers();
            }
            // We give the parent controller a reference to this filter
            self.gridController.addFilter(self);

            // If no options have been loaded, we load default ones
            if(self.options.length === 0){
                self.loadOptions(self.gridController.rawItems);
            }

            if(self.gridController.savedState){
                var selected = loadSavedOptions();
                if(selected){
                    self.selectedOptionValues = selected;
                    applyFilter();
                }
            }
        }

        function $postLink(){
            if(self.expanded){
                $element.addClass('grid-filter-expanded');
            }
        }

        /**
         * Checks if any relevant query params exist containing filter values to load and then
         * adds them
         */
        function loadSavedOptions(){
            var params = $location.search();
            if(!(self.id in params)){
                return null;
            }
            var values = params[self.id];
            var selected = [];
            values.split(',').forEach(function(val){
                selected.push({
                    value: val,
                    selected: true
                });
                self.options.forEach(function(option){
                    if(option.value === val){
                        option.selected = true;
                    }
                });
            });
            return selected;
        }

        /**
         * Toggles the selection of an option and then executes filter.
         * @public
         * @memberof Components.GridFilter
         */
        function selectOption(option){
            option.selected = !option.selected;
            var pos = self.selectedOptionValues.findIndex(x=>x.value === option.value);
            if(pos == -1){
                self.selectedOptionValues.push(option);
            } else {
                self.selectedOptionValues.splice(pos,1);
            }

            if(self.gridController.savedState){
                saveState();
            }
            applyFilter();
        }

        /**
         * If save state is activated, stores the selected results in the query string.
         *
         * TODO: Need to appropriately handle complex objects in query param
         */
        function saveState(){
            if(self.selectedOptionValues && self.selectedOptionValues.length > 0){
                var options =  self.selectedOptionValues.map(function(option){
                    return option.value;
                }).join(',');
                $location.search(self.id, options);
            } else {
                $location.search(self.id, null);
            }
        }

        /**
         * Filter using current property or filterFunc to populate a list containing items relevant to current filter.
         * Then, we call the doFilter() on the parent gridController which will consolidate and merge all filtered
         * data from other filters.
         * @public
         * @memberof Components.GridFilter
         */
        function applyFilter(){
            self.filtered = self.gridController.rawItems.filter(self.filterFunc);
            self.gridController.doFilter();
        }


        /**
         * Executes a filter on the current data set.
         *
         * If custom behavior is required, this method may be overriden by passing in
         * a function for this component.
         *
         * @param {object} obj Current object in dataset being filtered
         * @param {int} index Index of current object
         * @param {array} arr Array containing entire dataset being filtered
         * @param {array} selectedOptionValues Array of options that have been selected by the user
         *
         * @return
         *  whether an object was found within the selected options.
         */
        function filterFunc(obj, index, arr, selectedOptionValues){
            
            // When no option is selected, return everything
            if(self.selectedOptionValues.length === 0){
                return obj;
            }

            // Handle when property being searched is an array
            if(self.isArray){
                return arrayFilterFunc(obj, index, arr);
            }

            // Handle when basic object
            return objectFilterFunc(obj, index, arr);
        }


        /**
         * Generic filter that finds where a property value is found within
         * the list of selection options.
         *
         * @param {object} obj Current object in dataset being filtered
         * @param {int} index Index of current object
         * @param {array} arr Array containing entire dataset being filtered
         */
        function objectFilterFunc(obj, index, arr){
            var value = $parse(self.property)(obj);
            var foundObject = self.selectedOptionValues.find(function(option){
                return comparator(obj, option);
            });
            return foundObject;
        }


        /**
         * Generic filter that finds where a selected option is found within an array property
         *
         * @param {object} obj Current object in dataset being filtered
         * @param {int} index Index of current object
         * @param {array} arr Array containing entire dataset being filtered
         */
        function arrayFilterFunc(obj, index, arr){
            var values = arrayFilterValues(obj);
            return values.find(function(val){
                return self.selectedOptionValues.find(function(option){
                    return val === option.value;
                });
            });
        }


        /**
         * Creates an array containing all values for a particular key that is an array. 
         *
         * @example
         * //For instance
         * //if property had the following
         * 
         *  <grid-filter property="i in serviceModels"></grid-filter>
         *
         * // and the data set looked like
         * {
         *     name: 'blah',
         *     serviceModels:['IaaS', 'PaaS']
         * },
         * {
         *     name: 'blah2',
         *     serviceModels:['SaaS']
         * }
         * // This would return ['IaaS', 'PaaS', 'SaaS']
         * 
         * //Or if using an object key 
         *
         *  <grid-filter property="i.name in products" ></grid-filter->
         *
         * //and the data set looked like
         * {
         *     name: 'blah',
         *     products:[{name:'Product1']
         * },
         * {
         *     name: 'blah2',
         *     products:[{name:'Product2']
         * }
         *
         * This would return ['Product1', 'Product2']
         */
        function arrayFilterValues(obj){
            return self.parser.valuesFunc(obj)
                .reduce(function(p,c){
                    if(self.parser.valueIsObject){
                        p.push(self.parser.valueFunc(c));
                    } else {
                        p.push(c);
                    }
                    return p;
                }, []);
        }


        /**
         * Default comparator when filtering items. 
         */
        function comparator(obj, option){
            return obj[self.property] === option.value;
        }
        /**
         * Loads a distinct list of values found in the specified property attribute.
         * If the property value is a basic string, an array of strings will be set for the options.
         *
         * If the property is an array, each instance of the array will be iterated to extract the contents to
         * generate an array containing unique values. This is done by using a set.
         */
        function loadOptions(source){
            self.options = self.optionsFunc(source);
        }


        /**
         * Creates a set of options for a particular property to be filtered on. If the property
         * being filtered on contains an array of possible values, then we delegate to array options func.
         *
         * Override this method to add custom options.
         *
         * @example
         * //Sample dataset to return if overriding
         * {
         *      value: value,
         *      label: label,
         *      selected: boolean
         * }
         *
         * @param source The dataset to generate options from.
         *
         * @returns {array}  
         * An array of options that can be selected to filter. These must be in the form 
         */
        function optionsFunc(source){
            var options = [];
            if(self.isArray){
                options =  arrayOptionsFunc(source);
            } else {
                var cache = {};
                source.forEach(function(obj){
                    var val = $parse(self.property)(obj);
                    if(!cache[val]){
                        options.push({
                            label: val,
                            value: val,
                            selected: false
                        });
                        cache[val] = true;
                    }
                });
            }
            options.sort(function(o1, o2){
                if(o1.value === o2.value){
                    return 0;
                }
                if(o1.label < o2.label){
                    return -1;
                }

                return 1;
            });
            return options;
        }

        /**
         * Generates a list of option values for an array key
         */
        function arrayOptionsFunc(source){
            var cache = {};
            var options = [];
            source.forEach(function(obj){
                var values = arrayFilterValues(obj);
                values.forEach(function(val){
                    if(!cache[val]){
                        options.push({
                            label: val,
                            value: val,
                            selected: false
                        });
                        cache[val] = true;
                    }
                });
            });
            return options;
        }

        /**
         * When filtering on a property that may contain multiple values, configures necessary
         * parsers to allow the data to be iterated and compared against. 
         *
         * @example
         * //$parse is a service that allows an expression to be evaluated against an object. For instance
         * //given:
         *
         * var person = {
         *  name: 'John',
         *  dogs: ['Dog1']
         * };
         *
         * // $parse('name')(person) => 'John'
         * // $parse('dogs')(person) => ['Dog1']
         *
         *
         */
        function configureArrayParsers(){
            var match = self.property.match(/^(.*)\sin\s(.+)$/);
            var keyExpression = match[1].split('.').splice(1).join('.');
            var valuesExpression = match[2];
            self.parser = {};
            self.parser.valuesFunc = $parse(valuesExpression);
            self.parser.valueFunc = $parse(keyExpression);
            self.parser.valueIsObject = (!!keyExpression);
        }

        /**
         * Clears filter and resets dataset
         * @public
         * @memberof Components.GridFilter
         */
        function clear(){
            self.selectedOptionValues = [];
            self.options.forEach(x=> x.selected = false);
            applyFilter();
        }

        /**
         * Wraps a custom filter func with some additonal pre-processing logic to ensure
         * that a filter without any selected options is returned. We also ensure to pass an additonal
         * parameter selectedOptionValues to the callers.
         */
        function wrapFilterFunc(func){
            return function(obj, index, arr){
                if(self.selectedOptionValues.length === 0){
                    return obj;
                }
                return func(obj, index, arr, self.selectedOptionValues);
            };
        }
    }
})();
