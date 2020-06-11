(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('gridSearch', {
            templateUrl: 'templates/components/grid-search.html',
            controller: GridSearch,
            controllerAs: 'controller',
            require: {
                gridController: '^grid'
            },
            bindings: {
                // Property expression. Tells search which property to search on.
                property: '@',
                // Placeholder text to display on input field
                placeholder: '@',
                id: '@',
                filterFunc: '<'
            }
        });

    GridSearch.$inject = ['Searcher'];

    /**
     * Allows a dataset to be searched using free text searches. This component utilizes a property
     * expression to determine which field to search on. See {@link Services.Searcher Searcher} example for
     * property expression samples.
     *
     * If no property is specified, a custom filterFunc can be passed in to include custom
     * filtering logic.
     *
     * Requires to be nested within a [Grid]{@link Components.Grid} component.
     *
     * @example
     * // Using property expression
     * <grid-search property="product.name in products" placeholder="Search by Product Name"></grid-search>
     *
     * // Using custom filter function
     * <grid-search filter-func="myCustomFilterFunc" placeholder="Search by Product Name or Provider Name"></grid-search>
     * @constructor
     * @memberof Components
     */
    function GridSearch (Searcher) {
        /**
         * Reference to current GridSearch
         */
        var self = this;

        /**
         * Used to traverse an object to search for values on a given property
         */
        var searcher = new Searcher();

        // Exposed functions
        self.$onInit = $onInit;
        self.search = search;
        self.clear = clear;
        self.restoreState = restoreState;

        /**
         * Contains array of filtered items
         * @member {array}
         * @memberof Components.GridSearch
         */
        self.filtered = [];

        /**
         * Initializes the component and validates the existence of specific attributes
         * @memberof Components.GridSearch
         */
        function $onInit () {
            if (!self.id) {
                throw 'Id is required for grid search filter';
            }
            if (!self.property && !self.filterFunc) {
                throw 'If property is not specified, filterFunc must be provided';
            }

            self.filterFunc = (self.filterFunc ? wrapFilterFunc(self.filterFunc) : filterFunc);
            self.gridController.addFilter(self);
            restoreState();
            search();
        }

        /**
         * Filter applied to dataset when user searches
         *
         * @public
         * @memberof Components.GridSearch
         *
         * @param {object} obj
         * The current object instance within a dataset being filtered
         * @param {int} index
         * The index of the current object
         * @param {array} arr
         * Reference to the dataset being filtered
         */
        function filterFunc (obj, index, arr) {
            if (self.searchTerm) {
                var found = searcher.prop(self.property).contains(obj, self.searchTerm);
                if (found.length > 0) {
                    return obj;
                } else {
                    return null;
                }
            } else {
                return obj;
            }
        }

        /**
         * Every time a user searches, we filter based on the entire dataset and then internally
         * store the results and call doFilter() on the parent dataset to appropriately merge results from
         * all relevant fitlers.
         *
         * @public
         * @memberof Components.GridSearch
         */
        function search () {
            saveState();
            self.filtered = self.gridController.rawItems.filter(self.filterFunc);
            self.gridController.doFilter();
        }

        /**
         * Stores the current search parameters to state.
         *
         * @public
         * @memberof Components.GridSearch
         */
        function saveState () {
            if (self.searchTerm) {
                self.gridController.state[self.id] = self.searchTerm;
            } else {
                delete self.gridController.state[self.id];
            }
        }

        /**
         * Extracts state informatin to restore search filter
         *
         * @public
         * @memberof Components.GridSearch
         */
        function restoreState () {
            var params = self.gridController.state;
            if (!(self.id in params)) {
                return null;
            }
            self.searchTerm = params[self.id];
        }

        /**
         * When a custom filterFunc is provided, we wrap it with this function in order to properly
         * pass the searchTerm to the passed in function.
         *
         * @public
         * @memberof Components.GridSearch
         * @param {function} func
         * Custom filterFunc to be wrapped
         *
         * @returns
         * A function that has been wrapped to contain an additonal parameters
         */
        function wrapFilterFunc (func) {
            return function (obj, index, arr) {
                return func(obj, index, arr, self.searchTerm);
            };
        }

        /**
         * Clears the search text
         *
         * @public
         * @memberof Components.GridSearch
         */
        function clear () {
            self.searchTerm = '';
            search();
        }
    }
})();
