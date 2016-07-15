(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('ProductComparisonController', ProductComparisonController);

    ProductComparisonController.$inject = ['$log', '$state', '$stateParams', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function ProductComparisonController ($log, $state, $stateParams, fedrampData, helperService) {
        var self = this;

        /**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProductComparisonController
         */
        self.items = fedrampData.products();

        /**
         * The first item
         * @member {object}
         * @memberof Controllers.ProductComparisonController
         */
        self.first = self.items.find(x => helperService.slugify(x.name) === $stateParams.first);

        /**
         * The second item
         * @member {object}
         * @memberof Controllers.ProductComparisonController
         */
        self.second = self.items.find(x => helperService.slugify(x.name) === $stateParams.second);

        /**
         * Close the first item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.ProductComparisonController
         */
        self.closeFirst = function () {
            let baseUrl = '/product/' + $stateParams.second;
            helperService.navigateTo(baseUrl + helperService.queryString());
        };

        /**
         * Close the second item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.ProductComparisonController
         */
        self.closeSecond = function () {
            let baseUrl = '/product/' + $stateParams.first;
            helperService.navigateTo(baseUrl + helperService.queryString());
        };

        helperService.scrollTo('scrollToContent');
    }
})();
