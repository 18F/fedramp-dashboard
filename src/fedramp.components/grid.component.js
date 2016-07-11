(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('grid', {
            controller: Grid,
            controllerAs: 'gridController',
            bindings: {
                // Contains all the filtered items
                items: '=',

                // Contains original unfiltered dataset
                rawItems: '<',

                // Determines whether grid will maintain state via query params
                savedState: '<'
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

        self.$onInit = $onInit;
        self.addFilter = addFilter;
        self.doFilter = doFilter;
        self.clearFilters = clearFilters;

        function $onInit(){
            if(!self.items){
                self.items = self.rawItems;
            }
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

                // If the current filter has no data, skip it
                if(filter.filtered.length === 0){
                    return;
                }

                // Filter the data!
                combinedFilterResults = combinedFilterResults.filter(filter.doFilter);
            });

            self.items = combinedFilterResults;
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
    }

})();
