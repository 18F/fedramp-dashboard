(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('AssessorInformationController', AssessorInformationController);

    AssessorInformationController.$inject = ['$log', '$state', '$stateParams', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function AssessorInformationController ($log, $state, $stateParams, fedrampData, helperService) {
        var self = this;
        var assessors = fedrampData.assessors();

        /**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.AssessorInformationController
         */
        self.items = assessors.filter(x => helperService.slugify(x.name) !== $stateParams.name);

        /**
         * The item
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         */
        self.item = assessors.find(x => helperService.slugify(x.name) === $stateParams.name);

        /**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         */
        self.close = function () {
            helperService.navigateTo('/assessors' + helperService.queryString());
        };

        /**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */
        self.onUpdate = function(items){
            self.filteredData = items;
        };

        /**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         *
         * @param {array} assessors
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
         * @memberof Controllers.AssessorInformationController
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
                    return assessor;
                }
            });
        };

        helperService.scrollTo('scrollToContent');
    }
})();
