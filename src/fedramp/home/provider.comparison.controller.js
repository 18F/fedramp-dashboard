(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('ProviderComparisonController', ProviderComparisonController);

    ProviderComparisonController.$inject = ['$log', '$state', '$stateParams', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function ProviderComparisonController ($log, $state, $stateParams, fedrampData, helperService) {
        var self = this;

        /**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProviderComparisonController
         */
        self.items = fedrampData.providers();

        /**
         * The first item
         * @member {object}
         * @memberof Controllers.ProviderComparisonController
         */
        self.first = self.items.find(x => helperService.slugify(x.name) === $stateParams.first);

        /**
         * The second item
         * @member {object}
         * @memberof Controllers.ProviderComparisonController
         */
        self.second = self.items.find(x => helperService.slugify(x.name) === $stateParams.second);

        /**
         * Close the first item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.ProviderComparisonController
         */
        self.closeFirst = function () {
            $state.go(
                'fedramp.app.' + self.second.type + '.information',
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
         * @memberof Controllers.ProviderComparisonController
         */
        self.closeSecond = function () {
            $state.go(
                'fedramp.app.' + self.first.type + '.information',
                {
                    name: $stateParams.first
                },
                {
                    reload: true
                });
        };
    }
})();
