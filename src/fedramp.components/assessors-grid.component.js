(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('assessorsGrid', {
            templateUrl: 'src/templates/components/assessors-grid.html',
            controller: AssessorGrid,
            controllerAs: 'controller',
            bindings: {
                rawItems: '<?',
                onUpdate: '&?'
            }
        });

    AssessorGrid.$inject = ['$log', 'fedrampData', '$attrs'];

    /**
     * @constructor
     * @memberof Components
     */
    function AssessorGrid ($log, fedrampData, $attrs) {
        var self = this;

        /**
         * The filtered data
         * @member {array}
         * @memberof Components.AssessorsGrid
         */
        self.filteredData = [];

        /**
         * The assessors
         * @member {array}
         * @memberof Components.AssessorsGrid
         */
        self.assessors = gridFilter(self.rawItems || fedrampData.assessors());

        /**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Components.AssessorsGrid
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
         * @memberof Components.AssessorsGrid
         *
         * @param {array} products
         *  Array of items available
         *
         * @returns
         *  An array of option values for filtering
         */
        self.reuseRangeOptions = function (assessors) {
            return [
                {value: {min: 0, max:5}, label: '0 - 5', selected: false},
                {value: {min: 6, max:10}, label: '5 - 10', selected:false},
                {value: {min: 11, max:1000}, label: '> 10', selected:false}];
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

        /**
         * Filter the data set by the accredited vendors
         * @private
         * @member {object}
         * @memberof Controllers.AssessorsController
         *
         * @param {object} assessors
         *  The items to compare
         *
         * @returns
         *  A pre-filtered array of items to use in the grid
         */
        function gridFilter (assessors) {
            if (!assessors || assessors.length === 0) {
                return [];
            }
            return assessors.filter(x => x.accreditationDate);
        }
    }
})();
