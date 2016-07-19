(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('gridSearch', {
            templateUrl: 'src/templates/components/grid-search.html',
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
     * @example
     * <grid-search property="product.name in products" placeholder="Search by Product Name"></grid-search>
     *
     * <grid-search filter-func="myCustomFilterFunc" placeholder="Search by Product Name or Provider Name"></grid-search>
     * @constructor
     * @memberof Components
     */
    function GridSearch (Searcher) {
        var self = this;
        var searcher = new Searcher();
        self.filtered = [];
        self.$onInit = $onInit;
        self.search = search;
        self.clear = clear;
        self.restoreState = restoreState;

        function $onInit(){
            if(!self.id){
                throw 'Id is required for grid search filter';
            }
            if(!self.property && !self.filterFunc){
                throw 'If property is not specified, filterFunc must be provided';
            }
            
            self.filterFunc = (self.filterFunc ? wrapFilterFunc(self.filterFunc) : filterFunc);
            self.gridController.addFilter(self);
            restoreState();
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
        function filterFunc(obj, index, arr){
            if(self.searchTerm){
                var found = searcher.prop(self.property).contains(obj, self.searchTerm);
                if(found.length > 0){
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
        function search(){
            saveState();
            var filtered = self.gridController.rawItems.filter(self.filterFunc);
            self.filtered = filtered;
            self.gridController.doFilter();
        }

        /**
         * Stores the current search parameters to state.
         *
         * @public
         * @memberof Components.GridSearch
         */
        function saveState(){
            if(self.searchTerm){
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
        function restoreState(){
            var params = self.gridController.state;
            if(!(self.id in params)){
                return null;
            }
            self.searchTerm = params[self.id];
            self.gridController.doFilter();
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
        function wrapFilterFunc(func){
            return function(obj, index, arr){
                return func(obj, index, arr, self.searchTerm);
            };
        }

        /**
         * Clears the search text
         *
         * @public
         * @memberof Components.GridSearch
         */
        function clear(){
            self.searchTerm = '';
            search();
        }
    }
})();
