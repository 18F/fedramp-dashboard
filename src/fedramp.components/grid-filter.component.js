(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('gridFilter', {
            controller: GridFilter,
            controllerAs: 'controller',
            templateUrl: 'src/templates/components/grid-filter.html',
            require: {
                // We require that this component live inside of <grid></grid> so it can
                // communicate and share information
                gridController: '^grid'
            },
            bindings: {
                // The property on a list to manage. Specify a property expression here.
                property: '@',

                // User friendly text to describe filter
                header: '@',

                // Any options that can be selected by this filter. If none are passed in, a distinct list
                // of all possible values for the current property are populated.
                options: '<',

                // Load any initial selected values. For instance, to restore filter state. In the form
                // {value: <value>, label: <label>, selected: <boolean>}
                selectedOptionValues: '<',

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

    GridFilter.$inject = ['$location', '$element', '$httpParamSerializer', 'Searcher'];

    /**
     * A generic filtering component that utilizes a property expression to extract all available options for a given
     * property. 
     *
     * If a property expression is not provided, a custom filterFunc and optionsFunc must be provided
     *
     * @example
     * // Given the following object being searched:
     *
     * {
     *      name: 'John Doe',
     *      nickname: 'JD',
     *      counts: [1,2,3,4],
     *      products: [{
     *          name: 'Prod',
     *          related: [{
     *              relatedItemName: 'Some related item'   
     *          }]
     *      }]
     *
     * }
     *
     *
     *
     * Property expression examples:
     *
     * 'i.relatedItemName in products.related' => would search everything in relatedItemName
     * 'i.name in products' => would search everything in the name key in products
     * 'i in counts' => would searching everything in the counts array
     * 'nickname' => would search in nickname
     * If a property expression is not provided, a filterFunc and optionsFunc must be provided.
     *
     * @example 
     * // Example HTML
     * <grid-filter property="name" header="Name" options="" opened="true"></grid-filter>
     *
     * // Example of custom filterFunc
     *
     * function myCustomFilterFunc(myObj, index, arr, selectedOptions){
     *      selectedOptionValues.forEach(function(selectedOption){
     *          if(myObj.someProperty === selectedOption.value){
     *              return myObj;
     *          }
     *          return null;
     *      });
     * }
     *
     * // Example of custom optionsFunc
     * function myCustomOptionsFunc(dataset){
     *     return [{
     *          label: 'Option 1',
     *          value: 'My val'
     *     }];
     * }
     *
     * @constructor
     * @memberof Components
     */
    function GridFilter ($location, $element, $httpParamSerializer, Searcher) {
        var self = this;
        var selectedCss = 'grid-filter-selected';
        var OBJECT_PARAM_REGEX = /\:\((.+?)\),{0,}/;
        var PARAM_DELIMITER = ';';

        // Options available to filter based on property
        self.options = [];

        // Options that have been selected
        self.selectedOptionValues = self.selectedOptionValues || [];

        // List of filtered data based on this particular filter
        self.filtered = [];

        // Whether to initially render expanded mode with panels opened
        self.opened = (angular.isDefined(self.opened) ? self.opened :  true);

        // Exposed public functions
        self.$onInit = $onInit;
        self.applyFilter = applyFilter;
        self.selectOption = selectOption;
        self.clear = clear;
        self.loadOptions = loadOptions;
        self.restoreState = restoreState;
        self.toggleExpand = toggleExpand;

        function $onInit () {
            if (!self.id) {
                throw 'Please add an id attribute';
            }

            if (!self.property && (!self.optionsFunc || !self.filterFunc)) {
                throw 'If property is not specified, optionsFunc and filterFunc must be passed in';
            }

            // Allow custom optionsFunc and filterFuncs to be passed for custom filtering
            self.optionsFunc = self.optionsFunc || optionsFunc;

            // Wrap custom func
            self.filterFunc = (self.filterFunc ? wrapFilterFunc(self.filterFunc) : filterFunc);

            // We give the parent controller a reference to this filter
            self.gridController.addFilter(self);

            // If no options have been loaded, we load default ones
            // Also, if tab is not expanded, then don't load anything
            if (self.opened && self.options.length === 0) {
                self.loadOptions(self.gridController.rawItems);
            }

            restoreState();
        }

        /**
         * Checks if any relevant query params exist containing filter values to load and then
         * adds them. Non-primitive objects are stored in the query param as follows:
         *
         * paramName=:(<json_representation>),:(<json_representation>)
         *
         * @public
         * @memberof Components.GridFilter
         *
         */
        function restoreState () {
            var params = self.gridController.state;
            if (!(self.id in params)) {
                return null;
            }

            var values = params[self.id];
            var selected = [];
            self.opened = true;
            self.loadOptions(self.gridController.rawItems);

            // Check if loading non-primitive object
            var m = values.match(OBJECT_PARAM_REGEX);
            if (m) {
                values = values.split(OBJECT_PARAM_REGEX)
                    // Remove empty results
                    .filter(Boolean)
                    // Convert to js object
                    .map(x => angular.fromJson(x))
                    .forEach(function (val) {
                        selected.push({
                            value: val,
                            selected: true 
                        });
                        self.options.forEach(function (option) {
                            if (angular.equals(option.value, val)) {
                                option.selected = true;
                            }
                        });
                    });
            } else {
                // Handle basic primitive options
                values.split(PARAM_DELIMITER).forEach(function (val) {
                    selected.push({
                        value: (val),
                        selected: true
                    });
                    self.options.forEach(function (option) {
                        if (option.value === val) {
                            option.selected = true;
                        }
                    });
                });
            }

            // Ensure label is set for options
            selected.forEach(x => {
                self.options.forEach(o => {
                    if(angular.equals(o.value, x.value)){
                        x.label = o.label;
                    }
                });
            });

            self.selectedOptionValues = selected;
            if (self.selectedOptionValues) {
                applyFilter();
            }
        }

        /**
         * Toggles the selection of an option and then executes filter.
         * @public
         * @memberof Components.GridFilter
         */
        function selectOption (option) {
            option.selected = !option.selected;
            var pos = self.selectedOptionValues.findIndex(x => angular.equals(x.value,option.value));
            if (pos == -1) {
                self.selectedOptionValues.push(option);
            } else {
                self.selectedOptionValues.splice(pos,1);
            }

            saveState();
            applyFilter();
        }

        /**
         * Stores all selected values to the grid state. Primitive values get stored as a comma-separated list 
         * of strings. Non-primitive values (objects) get stored as a json string.
         *
         * @public
         * @memberof Components.GridFilter
         */
        function saveState () {
            if (self.selectedOptionValues && self.selectedOptionValues.length > 0) {
                var options =  self.selectedOptionValues.map(function (option) {
                    // When non-primitive object, store as json
                    if (angular.isObject(option.value)) {
                        return ':(' + angular.toJson(option.value) + ')';
                    }
                    // Handle basic primitive value
                    return option.value;
                }).join(PARAM_DELIMITER);
                self.gridController.state[self.id] = options;
            } else {
                delete self.gridController.state[self.id];
            }
        }

        /**
         * Filter using current property or filterFunc to populate a list containing items relevant to current filter.
         * Then, we call the doFilter() on the parent gridController which will consolidate and merge all filtered
         * data from other filters.
         * @public
         * @memberof Components.GridFilter
         */
        function applyFilter () {
            toggleCss();
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
        function filterFunc (obj, index, arr, selectedOptionValues) {
            // When no option is selected, return everything
            if (self.selectedOptionValues.length === 0) {
                return obj;
            }

            return self.selectedOptionValues.find(function (option) {
                let found = new Searcher().prop(self.property).equals(obj, option.value);
                if (found.length > 0) {
                    return obj;
                }
                return null;
            });
        }

        /**
         * Loads an array of available options
         *
         * @public
         * @memberof Components.GridFilter
         *
         * @param {array} source
         * Dataset from which to generate available options from.
         */
        function loadOptions (source) {
            self.options = self.optionsFunc(source);
        }

        /**
         * Creates a set of options for a particular property to be filtered on. If an optionsFunc
         * is NOT passed in, utilizes the property expression passed into `property` to automatically
         * traverse the dataset for available options. 
         *
         * You can also override this method to add custom options.
         *
         * @example
         * //Sample dataset to return if overriding
         * {
         *      value: value,
         *      label: label,
         *      selected: boolean
         * }
         *
         * @public
         * @memberof Components.GridFilter
         *
         * @param {array} source 
         * The dataset to generate options from.
         *
         * @returns {array}  
         * An array of options that can be selected to filter. 
         */
        function optionsFunc (source) {
            var options = [];
            var cache = {};
            new Searcher().prop(self.property).criteriaFunc(source, function (obj, value) {
                if (!cache[value]) {
                    cache[value] = true;
                    options.push({
                        label: value,
                        value: value, 
                        selected: false
                    });
                    return value;
                }
            });

            options.sort(function (o1, o2) {
                if (o1.label < o2.label) {
                    return -1;
                }
                if (o1.label > o2.label) {
                    return 1;
                }
                return 0;
            });
            return options;
        }

        /**
         * Clears filter and resets dataset
         * @public
         * @memberof Components.GridFilter
         */
        function clear () {
            self.selectedOptionValues = [];
            self.options.forEach(x => x.selected = false);
            delete self.gridController.state[self.id];
            applyFilter();
        }

        /**
         * Wraps a custom filter func with some additonal pre-processing logic to ensure
         * that a filter without any selected options is returned. We also ensure to pass an additonal
         * parameter selectedOptionValues to the callers.
         *
         * @public
         * @memberof Components.GridFilter
         */
        function wrapFilterFunc (func) {
            return function (obj, index, arr) {
                if (self.selectedOptionValues.length === 0) {
                    return obj;
                }
                return func(obj, index, arr, self.selectedOptionValues);
            };
        }

        /**
         * Toggles the selected css class.
         *
         * @public
         * @memberof Components.GridFilter
         */
        function toggleCss () {
            if (self.selectedOptionValues.length > 0) {
                $element.addClass(selectedCss);
            } else {
                $element.removeClass(selectedCss);
            }
        }

        /**
         * Toggles the opening and closing of filter options. If a filter was initially closed,
         * the options are then generated.
         */
        function toggleExpand () {
            if (!self.opened && self.options.length === 0) {
                self.loadOptions(self.gridController.rawItems);
            }
            self.opened = !self.opened;
        }
    }
})();
