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

                // Callback function called when grid update occurs
                onUpdate: '&',

                // Flag that hides filters
                hideFilters: '@',

                // Flag whether to save/restore state
                saveState: '<'
            }
        });

    Grid.$inject = ['$log', '$location'];

    /**
     * @constructor
     * @memberof Components
     * @example <grid raw-items="dataToFilter" on-update="onUpdate(items, state)"></grid>
     */
    function Grid ($log, $location) {
        /**
         * Reference to current Grid
         */
        var self = this;

        /**
         * Maintains list of added filters. A filter can be a {@link Components.GridFilter} or
         * {@link Components.GridSearch}
         * @member {array}
         * @memberof Components.Grid
         */
        var filters = [];

        /**
         * Maintains list of added sorters
         * @member {array}
         * @memberof Components.Grid
         */
        var sorts = [];

        // Exposed functions
        self.$onInit = $onInit;
        self.addFilter = addFilter;
        self.addSort = addSort;
        self.doFilter = doFilter;
        self.clearFilters = clearFilters;
        self.updateSort = updateSort;
        self.doUpdate = doUpdate;

        /**
         * Stores saved values to be stored in URL
         * @member {object}
         * @memberof Components.Grid
         */
        self.state = {};

        /**
         * Currently applied sort on dataset
         * @member {Components.GridSort}
         * @memberof Components.Grid
         */
        self.activeSort = null;

        /**
         * Contains array of currently filtered items
         * @member {array}
         * @memberof Components.Grid
         */
        self.items = [];

        /**
         * Generate a description of the applied filters for printing.
         * @public
         * @memberof Components.Grid
         *
         * @returns
         *  A human readable description of the filters applied
         */
        self.printDescription = function () {
            let message = '';

            if (filters) {
                filters.forEach(f => {
                    let name = '';
                    if (f.header) {
                        name = f.header;
                    } else if (f.property) {
                        name = f.property;
                    }

                    let vals = '';
                    if (f.selectedOptionValues) {
                        f.selectedOptionValues.forEach(o => {
                            if (vals.length > 0) {
                                vals += ', or ';
                            }

                            vals += o.label;
                        });
                    }

                    if (name.length && vals.length) {
                        if (message.length > 0) {
                            message += ' and ';
                        }

                        message += name + ' is ' + vals;
                    }
                });
            }

            return message.length === 0 ? 'No filters applied' : message;
        };

        /**
         * Initializes the component.
         */
        function $onInit () {
            if (!self.onUpdate) {
                throw 'Specify an onUpdate function! Otherwise, you don\' get updates.';
            }
            self.hideFilters = angular.isDefined(self.hideFilters) ? self.hideFilters : false;
            self.saveState = angular.isDefined(self.saveState) ? self.saveState : true;

            if (self.saveState) {
                self.state = $location.search() || {};
            }
            self.items = self.rawItems;
            self.doUpdate();
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
        function doFilter () {
            var combinedFilterResults = [];

            // Iterate through each filter and retrieve the data it has individually filtered
            filters.forEach(function (filter) {
                combinedFilterResults = combinedFilterResults.concat(filter.filtered);
            });

            // Remove duplicates
            combinedFilterResults = Array.from(new Set(combinedFilterResults));

            var filtered = null;
            // Iterate through each filter to extract what it has found
            filters.forEach(function (filter) {
                // Filter the data!
                combinedFilterResults = combinedFilterResults.filter(filter.filterFunc);
            });

            // Apply default sort if one exists
            if (self.activeSort) {
                combinedFilterResults.sort(self.activeSort.sortFunc);
            }

            self.items = combinedFilterResults;
            self.doUpdate();
        }

        /**
         * Iterates through all filters and clears out their options
         * @public
         * @memberof Components.Grid
         */
        function clearFilters () {
            filters.forEach(function (filter) {
                filter.clear();
            });
        }

        /**
         * When first loading, all child grid-filter components will call this method to add
         * themselves to this controller.
         * @public
         * @memberof Components.Grid
         *
         * @param {Components.GridFilter} filter
         * Instance of a GridFilter component
         */
        function addFilter (filter) {
            filters.push(filter);
        }

        /**
         * When sorts first load, they will add themselves to this controller using this method
         * @public
         * @memberof Components.Grid
         *
         * @param {Components.GridSort} sort
         * Instance of a GridSort component
         */
        function addSort (sort) {
            sorts.push(sort);
        }

        /**
         * Updates the state of all sorts so that the latest one used is the only one that's
         * activated.
         * @public
         * @memberof Components.Grid
         */
        function updateSort () {
            sorts.forEach(function(sort){
                if (!angular.equals(sort, self.activeSort)) {
                    sort.clear();
                }
            });
        }

        /**
         * Updates the state information for the grid by storing saved filters and sorting information in the $location.search().
         * Then executes the callback method to pass back state and list of items to calling clients.
         *
         * @public
         * @memberof Components.Grid
         *
         * @param {object} state
         * Object containing key/value data to add to the state
         */
        function doUpdate () {
            if (self.saveState) {
                $location.search(self.state);
            }
            self.onUpdate({items: self.items, state: self.state});
        }
    }
})();
