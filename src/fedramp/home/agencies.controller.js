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

        self.sidebar = true;
        self.filteredData = [];
        self.agencies = agencies;
        self.reuseRangeOptions = reuseRangeOptions;
        self.reuseRangeFilter = reuseRangeFilter;
        self.onUpdate = onUpdate;

        function onUpdate (items) {
            self.filteredData = items;
        }

        function reuseRangeOptions (agencies) {
            return [
                {value: {min: 0, max: 5}, label: '0 - 5', selected: false}, 
                {value: {min: 6, max: 10}, label: '5 - 10', selected: false},
                {value: {min: 11, max: 1000}, label: '> 10', selected: false}];
        }

        function reuseRangeFilter (agency, index, arr, selectedOptions) {
            return selectedOptions.find(function (option) {
                if (agency.reuses >= option.value.min && agency.reuses <= option.value.max) {
                    return option;
                }
            });
        }
    }
})();
