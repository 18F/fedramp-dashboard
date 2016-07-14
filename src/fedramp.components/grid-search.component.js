(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('gridSearch', {
            templateUrl: 'src/fedramp.components/grid-search.html',
            controller: GridSearch,
            controllerAs: 'controller',
            require: {
                gridController: '^grid'
            },
            bindings: {
                // Property expression. Tells search which property to search on. 
                property: '@',
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

        function $onInit(){
            if(!self.id){
                throw 'Id is required for grid search filter';
            }
            if(!self.property && !self.filterFunc){
                throw 'If property is not specified, filterFunc must be provided';
            }
            
            self.filterFunc = self.filterFunc || filterFunc;
            self.gridController.addFilter(self);
        }

        /**
         * Filter applied to dataset when user searches
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
         */
        function search(){
            var filtered = self.gridController.rawItems.filter(self.filterFunc);
            self.filtered = filtered;
            self.gridController.doFilter();
        }

    }
})();
