(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('agenciesGrid', {
            templateUrl: 'templates/components/agencies-grid.html',
            controller: AgenciesGrid,
            controllerAs: 'controller',
            bindings: {
                rawItems: '<?',
                onUpdate: '&?'
            }
        });

    AgenciesGrid.$inject = ['$log', 'fedrampData', '$attrs'];

    /**
     * @constructor
     * @memberof Components
     */
    function AgenciesGrid ($log, fedrampData, $attrs) {
        var self = this;

        /**
         * The filtered data
         * @member {array}
         * @memberof Components.AgenciesGrid
         */
        self.filteredData = [];

        /**
         * The agencies
         * @member {array}
         * @memberof Components.AgenciesGrid
         */
        self.agencies = self.rawItems || fedrampData.agencies();

        /**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Components.AgenciesGrid
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */
        self.onUpdate = function (func) {
            return function (items, state) {
                self.filteredData = items;
                if (func) {
                    func({items: items});
                }
            };
        }(self.onUpdate);

        /**
         * Flag to hide filters
         */
        self.hideFilters = angular.isDefined($attrs.hideFilters) ? $attrs.hideFilters : false;

        /**
         * Flag to toggle filters on mobile
         */
        self.toggleFilters = false;

        /**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Components.AgenciesGrid
         *
         * @param {array} products
         *  Array of items available
         *
         * @returns
         *  An array of option values for filtering
         */
        self.reuseRangeOptions = function (agencies) {
            return [
                {value: {min: 0, max:5}, label: '0 - 5', selected: false},
                {value: {min: 6, max:10}, label: '5 - 10', selected:false},
                {value: {min: 11, max:1000}, label: '> 10', selected:false}];
        };

        /**
         * Filter the data set by the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.AgenciesController
         *
         * @param {object} agency
         *  The agency to compare
         * @param {integer} index
         *  The current index within the array of items
         * @param {array} arr
         *  Array of items
         * @param {array} selectedOptions
         *  Array of selected options
         *
         * @returns
         *  The matched item or null
         */
        self.reuseRangeFilter = function (agency, index, arr, selectedOptions) {
            return selectedOptions.find(function (option) {
                if (agency.products.length >= option.value.min && agency.products.length <= option.value.max) {
                    return agency;
                }
            });
        };
    }
})();
