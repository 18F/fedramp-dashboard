(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('AssessorsController', AssessorsController);

    AssessorsController.$inject = ['$log', 'assessors'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function AssessorsController ($log, assessors) {
        var self = this;

        self.sidebar = false;
        self.filteredData = [];
        self.assessors = assessors;
        self.reuseRangeOptions = reuseRangeOptions;
        self.reuseRangeFilter = reuseRangeFilter;
        self.onUpdate = onUpdate;

        self.heavyUsers = function () {
            let heavy = self.filteredData.filter(x => x.reuses >= 5).length;
            return Math.round((heavy / self.filteredData.length) * 100);
        };

        function onUpdate (items) {
            self.filteredData = items;
        }

        function reuseRangeOptions (assessors) {
            return [
                {value: {min: 0, max: 5}, label: '0 - 5', selected: false}, 
                {value: {min: 6, max: 10}, label: '5 - 10', selected: false},
                {value: {min: 11, max: 1000}, label: '> 10', selected: false}];
        }

        function reuseRangeFilter (assessor, index, arr, selectedOptions) {
            return selectedOptions.find(function (option) {
                if (assessor.reuses >= option.value.min && assessor.reuses <= option.value.max) {
                    return option;
                }
            });
        }
    }
})();
