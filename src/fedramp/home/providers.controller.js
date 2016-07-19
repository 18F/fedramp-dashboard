(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('ProvidersController', ProvidersController);

    ProvidersController.$inject = ['$log', 'providers'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function ProvidersController ($log, providers) {
        var self = this;

        /**
         * The filtered data
         * @member {array}
         * @memberof Controllers.ProvidersController
         */
        self.filteredData = [];

        /**
         * The providers
         * @member {array}
         * @memberof Controllers.ProvidersController
         */
        self.providers = providers;

        /**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.ProvidersController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         * @param {object} state
         *  The current state of the grid
         */
        self.onUpdate = function (items, state) {
            self.filteredData = items;
        };

        /**
         * Determine how many compliant items are in the filtered data
         * @public
         * @member {object}
         * @memberof Controllers.ProvidersController
         *
         * @returns
         *  The number of compliant items
         */
        self.compliant = function () {
            let compliant = self.filteredData.filter(x => x.designations.includes('Compliant') || x.designations.includes('In PMO Review')).length;
            return self.filteredData.length === 0 ? 0 : Math.round((compliant / self.filteredData.length) * 100);
        };

        /**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.ProvidersController
         *
         * @param {array} providers
         *  Array of items available
         *
         * @returns
         *  An array of option values for filtering
         */
        self.reuseRangeOptions = function (providers) {
            return [
                {value: {min: 0, max:5}, label: '0 - 5', selected: false}, 
                {value: {min: 6, max:10}, label: '5 - 10', selected:false},
                {value: {min: 11, max:1000}, label: '> 10', selected:false}];
        };

        /**
         * Filter the data set by the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.ProvidersController
         *
         * @param {object} provider
         *  The product to compare
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
        self.reuseRangeFilter = function (provider, index, arr, selectedOptions) {
            return selectedOptions.find(function (option) {
                if (provider.reuses >= option.value.min && provider.reuses <= option.value.max) {
                    return provider;
                }
            });
        };
    }
})();
