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

        /**
         * The filtered data
         * @member {array}
         * @memberof Controllers.AssessorsController
         */
        self.filteredData = [];

        /**
         * The assessors
         * @member {array}
         * @memberof Controllers.AssessorsController
         */
        self.assessors = assessors;

        /**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.AssessorsController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */
        self.onUpdate = function (items, state) {
            self.filteredData = items;
        };


        /**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.AssessorsController
         *
         * @param {array} agencies
         *  Array of items available
         *
         * @returns
         *  An array of option values for filtering
         */
        self.reuseRangeOptions = function (assessors) {
            return [
                {value: {min: 0, max: 5}, label: '0 - 5', selected: false}, 
                {value: {min: 6, max: 10}, label: '5 - 10', selected: false},
                {value: {min: 11, max: 1000}, label: '> 10', selected: false}];
        };

        /**
         * Filter the data set by the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.AssessorsController
         *
         * @param {object} assessor
         *  The assessor to compare
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
        self.reuseRangeFilter = function (assessor, index, arr, selectedOptions) {
            return selectedOptions.find(function (option) {
                if (assessor.reuses >= option.value.min && assessor.reuses <= option.value.max) {
                    return option;
                }
            });
        };
    }
})();
