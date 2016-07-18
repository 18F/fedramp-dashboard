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

        self.filteredData = [];
        self.providers = providers;
        self.reuseRangeOptions = reuseRangeOptions;
        self.reuseRangeFilter = reuseRangeFilter;
        self.onUpdate = onUpdate;

        function onUpdate (items, state) {
            self.filteredData = items;
        }

        self.compliant = function () {
            let compliant = self.filteredData.filter(x => x.designations.includes('Compliant') || x.designations.includes('In PMO Review')).length;
            return self.filteredData.length === 0 ? 0 : Math.round((compliant / self.filteredData.length) * 100);
        };

        function reuseRangeOptions (providers) {
            return [
                {value: {min: 0, max:5}, label: '0 - 5', selected: false}, 
                {value: {min: 6, max:10}, label: '5 - 10', selected:false},
                {value: {min: 11, max:1000}, label: '> 10', selected:false}];
        }

        function reuseRangeFilter (provider, index, arr, selectedOptions) {
            return selectedOptions.find(function (option) {
                if (provider.reuses >= option.value.min && provider.reuses <= option.value.max) {
                    return option;
                }
            });
        }
    }
})();
