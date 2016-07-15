(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('grid', {
            controller: Grid,
            controllerAs: 'gridController',
            bindings: {
                // Contains original unfiltered dataset
                rawItems: '<',

                // Determines whether grid will maintain state via query params
                savedState: '<',

                onUpdate: '&',
                state: '<'
            }
        });

    Grid.$inject = ['$log', '$location'];

    /**
     * @constructor
     * @memberof Components
     * @example <grid items="items" raw-items="agencies" saved-state="true"></grid>
     */
    function Grid ($log, $location) {
        var self = this;

        // Maintains a list of filters
        var filters = [];
        var sorts = [];


        self.$onInit = $onInit;
        self.addFilter = addFilter;
        self.addSort = addSort;
        self.doFilter = doFilter;
        self.clearFilters = clearFilters;
        self.updateSort = updateSort;
        self.stateUpdate = stateUpdate;

        self.state = self.state || {};

        // Default sort to utilize for results
        self.defaultSort = null;
        self.items = [];

        function $onInit(){
            if(!self.onUpdate){
                throw 'Specify an onUpdate function! Otherwise, you don\' get updates.';
            }
            self.items = self.rawItems;
            //self.onUpdate({items: self.rawItems});
        }


        /**
         * Iterates through all the results obtained from all child grid filters and
         * executes all filter funcs to reduce the data to a single dataset
         *
         * To describe somewhat visually, imagine if we have two filters
         *
         * <grid-filter property="agency"></grid-filter>
         * <grid-filter property="deploymentModel"></grid-filter>
         *
         * Agency may result with a data set containing {1, 2, 3, 4} 
         * while
         * DeploymentModel may contain a dataset with {a,b,c}
         *
         * However, if we apply the filterfunc from each filter to every single data point,
         * we may end up with {1,2,a,c}
         * @public
         * @memberof Components.Grid
         */
        function doFilter(){
            var combinedFilterResults = [];

            // Iterate through each filter and retrieve the data it has individually filtered
            filters.forEach(function(filter){
                combinedFilterResults = combinedFilterResults.concat(filter.filtered);
            });

            // Remove duplicates
            combinedFilterResults = Array.from(new Set(combinedFilterResults));

            var filtered = null;
            // Iterate through each filter to extract what it has found
            filters.forEach(function(filter){

                // Filter the data!
                combinedFilterResults = combinedFilterResults.filter(filter.filterFunc);
            });

            // Apply default sort if one exists
            if(self.defaultSort){
                combinedFilterResults.sort(self.defaultSort.sortFunc);
            }

            self.items = combinedFilterResults;

            // Pass updated dataset
            self.onUpdate({items: combinedFilterResults, state: self.state});
        }

        /**
         * Iterates through all filters and clears out their options
         * @public
         * @memberof Components.Grid
         */
        function clearFilters(){
            filters.forEach(function(filter){
                filter.clear();
            });
        }

        /**
         * When first loading, all child grid-filter components will call this method to add
         * themselves to this controller.
         * @public
         * @memberof Components.Grid
         */
        function addFilter(filter){
            filters.push(filter);
        }

        /**
         * When sorts first load, they will add themselves to this controller using this method
         */
        function addSort(sort){
            sorts.push(sort);
        }

        /**
         * Updates the state of all sorts so that the latest one used is the only one that's 
         * activated.
         */
        function updateSort(){
            sorts.forEach(function(sort){
                if(!angular.equals(sort, self.defaultSort)){
                    sort.clear();
                }
            });
        }

        function stateUpdate(state){
            state = angular.extend(self.state, state);
            self.onUpdate({items: self.items, state: state});
        }
    }

})();
