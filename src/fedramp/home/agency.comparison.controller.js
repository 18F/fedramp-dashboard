(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('AgencyComparisonController', AgencyComparisonController);

    AgencyComparisonController.$inject = ['$log', '$state', '$stateParams', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function AgencyComparisonController ($log, $state, $stateParams, fedrampData, helperService) {
        var self = this;

        /**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.AgencyComparisonController
         */
        self.items = fedrampData.agencies();

        /**
         * The first item
         * @member {object}
         * @memberof Controllers.AgencyComparisonController
         */
        self.first = self.items.find(x => helperService.slugify(x.name) === $stateParams.first);

        /**
         * The second item
         * @member {object}
         * @memberof Controllers.AgencyComparisonController
         */
        self.second = self.items.find(x => helperService.slugify(x.name) === $stateParams.second);

        /**
         * Close the first item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.AgencyComparisonController
         */
        self.closeFirst = function () {
            $state.go(
                'fedramp.' + self.second.type + '.information',
                {
                    name: $stateParams.second
                },
                {
                    reload: true
                });
        };

        /**
         * Close the second item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.AgencyComparisonController
         */
        self.closeSecond = function () {
            $state.go(
                'fedramp.' + self.first.type + '.information',
                {
                    name: $stateParams.first
                },
                {
                    reload: true
                });
        };
    }
})();
