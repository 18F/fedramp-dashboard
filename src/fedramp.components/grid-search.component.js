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
                placeholder: '@'
            }
        });

    GridSearch.$inject = ['Searcher'];

    /**
     * Allows a dataset to be searched using free text searches. This component utilizes a property 
     * expression to determine which field to search on. See {@link Services.Searcher Searcher} example for 
     * property expression samples.
     *
     * @example
     * <grid-search property="product.name in products" placeholder="Search by Product Name"></grid-search>
     * @constructor
     * @memberof Components
     */
    function GridSearch (Searcher) {
        var self = this;
        self.filtered = [];
        self.$onInit = $onInit;

        self.search = search;
        self.doFilter = doFilter;

        function $onInit(){
            self.gridController.addFilter(self);
        }

        /**
         * Filter applied to dataset when user searches
         */
        function doFilter(obj, index, arr){
            if(self.searchTerm){
                var found = new Searcher(obj, self.property).search(self.searchTerm);
                return found;
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
            var filtered = self.gridController.rawItems.filter(self.doFilter);
            self.filtered = filtered;
            self.gridController.doFilter();
        }

    }
})();
