(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('AgenciesController', AgenciesController);

    AgenciesController.$inject = ['$log', 'agencies'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function AgenciesController ($log, agencies) {
        var self = this;

        /**
         * The filtered data
         * @member {array}
         * @memberof Controllers.AgenciesController
         */
        self.filteredData = [];

        /**
         * The agencies
         * @member {array}
         * @memberof Controllers.AgenciesController
         */
        self.agencies = agencies;

        /**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.AgenciesController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */
        self.onUpdate = function (items, state) {
            self.filteredData = items;
        };

        /**
         * Determine how many "heavy" users are in the system
         * @public
         * @member {object}
         * @memberof Controllers.AgenciesController
         *
         * @returns
         *  The number of heavy usages
         */
        self.heavyUsers = function () {
            let heavy = self.filteredData.filter(x => x.reuses >= 5).length;
            return self.filteredData.length === 0 ? 0 : Math.round((heavy / self.filteredData.length) * 100);
        };

        /**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.AgenciesController
         *
         * @param {array} agencies
         *  Array of items available
         *
         * @returns
         *  An array of option values for filtering
         */
        self.reuseRangeOptions = function (agencies) {
            return [
                {value: {min: 0, max: 5}, label: '0 - 5', selected: false}, 
                {value: {min: 6, max: 10}, label: '5 - 10', selected: false},
                {value: {min: 11, max: 1000}, label: '> 10', selected: false}];
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
