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
            let baseUrl = '/agency/' + $stateParams.second;
            helperService.navigateTo(baseUrl + helperService.queryString());
        };

        /**
         * Close the second item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.AgencyComparisonController
         */
        self.closeSecond = function () {
            let baseUrl = '/agency/' + $stateParams.first;
            helperService.navigateTo(baseUrl + helperService.queryString());
        };

        helperService.scrollTo('scrollToContent');
    }
})();
