(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('ProductInformationController', ProductInformationController);

    ProductInformationController.$inject = ['$log', '$state', '$stateParams', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function ProductInformationController ($log, $state, $stateParams, fedrampData, helperService) {
        var self = this;

        /**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProductInformationController
         */
        self.items = fedrampData.products();

        /**
         * The item
         * @member {object}
         * @memberof Controllers.ProductInformationController
         */
        self.item = self.items.find(x => helperService.slugify(x.name) === $stateParams.name);

        /**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.ProductInformationController
         */
        self.close = function () {
            $state.go('fedramp.app.home.products', {}, { reload: true });
        };

        helperService.scrollTo('scrollToContent');
    }
})();
