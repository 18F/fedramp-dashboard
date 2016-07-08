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

                // Load any initial selected values. For instance, to restore filter state
                initialValues: '<',

                // Whether to render expanded template vs the dropdown
                expanded: '<',

                // Whether to initially render expanded mode with panels opened
                opened: '<'
            }
        });

    GridFilter.$inject = ['$location'];

    /**
     * @constructor
     * @memberof Components
     * @example <grid-filter property="name" header="Name" options="" initialValues="" expanded="true" opened="true"></grid-filter>
     */
    function GridFilter ($location) {
        var self = this;
        self.gridFilterOptionsTemplatePath = "src/fedramp.components/grid-filter-options.html";
        
        // Options available to filter based on property
        self.options = [];

        // Options that have been selected
        self.selectedOptionValues = [];

        // List of filtered data based on this particular filter
        self.filtered = [];

        // Whether to initially render expanded mode with panels opened
        self.opened = true;

        // Exposed public functions
        self.$onInit = $onInit;
        self.filterFunc = filterFunc;
        self.applyFilter = applyFilter;
        self.selectOption = selectOption;
        self.clear = clear;
        self.reloadOptions = reloadOptions;
        self.loadInitialValues = loadInitialValues;

        function $onInit(){
            // We give the parent controller a reference to this filter
            self.gridController.addFilter(self);

            // If no options have been loaded, we load default ones
            if(self.options.length === 0){
                loadDefaultOptions();        
            }

            // Apply pre-selected options
            if(self.initialValues && self.initialValues.length > 0){
                loadInitialValues(self.initialValues);
                applyFilter();
            }

            if(self.gridController.savedState){
                var initialValues = loadSavedOptions();
                if(!initialValues || initialValues.length === 0){
                    return;
                }

                loadInitialValues(initialValues.split(','));
                applyFilter();
            }
        }


        /**
         * Checks if any relevant query params exist containing filter values to load and then
         * adds them
         */
        function loadSavedOptions(){
            var params = $location.search();
            if(!(self.property in params)){
                return null;
            }
            var values = params[self.property];
            return values;
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
            applyFilter();
        }

        /**
         * Filter using current property to populate a list containing items relevant to current filter.
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
         * Filter function applied when using $filter('filter'); When a match occurs, 
         * we return the object being compared. When we return null, that means to exclude
         * the object from the filtered dataset
         * @public
         * @memberof Components.GridFilter
         */
        function filterFunc(obj, index, arr){
            // When no option is selected, return everything
            if(self.selectedOptionValues.length === 0){
                return obj;
            }
            var property = obj[self.property];

            // Handle when object is array
            if(angular.isArray(property)){
                return arrayFilterFunc(obj, index, arr);
            }

            // Handle when basic object
            if(angular.isString(property) || angular.isNumber(property)){
                return objectFilterFunc(obj, index, arr);
            }

            throw 'Invalid object. Cannot filter';
        }

        /**
         * Generic filter that finds where a property value is found within
         * the list of selection options.
         */
        function objectFilterFunc(obj, index, arr){
            var value = obj[self.property];
            var foundObject = self.selectedOptionValues.find(function(option){
                return option.value === value;
            });
            return foundObject;
        }


        /**
         * Generic filter that finds where a selected option is found within an array property
         */
        function arrayFilterFunc(obj, index, arr){
            var values = obj[self.property];
            var found = false;

            values.forEach(function(value){
                var foundObject = self.selectedOptionValues.find(function(option){
                    return option.value.trim() === value.trim();
                });
                if(foundObject){
                    found = true;
                }
            });

            if(found){
                return obj;
            }
            return null;
        }

        /**
         * Loads a distinct list of values found in the specified property attribute.
         * If the property value is a basic string, an array of strings will be set for the options.
         *
         * If the property is an array, each instance of the array will be iterated to extract the contents to
         * generate an array containing unique values. This is done by using a set.
         */
        function loadDefaultOptions(){
            reloadOptions(self.gridController.rawItems);
        }


        /**
         * Loads a distinct list of possible values from the provided source. Values will
         * be extracted using the filters `property` binding value
         */
        function reloadOptions(source){
            var set = new Set();
            source.forEach(function(obj){
                var property = obj[self.property];

                // Handle when object is array
                if(angular.isArray(property)){
                    property.forEach(x=> set.add(x.trim()));
                    //return arrayFilterFunc(obj, index, arr);
                }

                // Handle when basic object
                if(angular.isString(property) || angular.isNumber(property)){
                    set.add(property);
                }
            });
            self.options = toOptionArray(set);
        }

        /**
         * Takes a basic list of values in an array [x, y, z] and transforms it to
         * an array of option objects
         *
         * [{ value: x, selected: false}]
         */
        function toOptionArray(data){
            var options = [];
            Array.from(data).forEach(x=> 
                options.push({
                    value: x,
                    selected: false
                })
            );
            return options;
        }

        /**
         * Loads options that should be selected on initial load
         * @public
         * @memberof Components.GridFilter
         */
        function loadInitialValues(initialValues){
            self.selectedOptionValues = toOptionArray(initialValues);

            self.selectedOptionValues.forEach(function(selectedOption){
                self.options.forEach(function(option){
                    if(option.value === selectedOption.value){
                        option.selected = true;
                    }
                });
            });
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
    }
})();
