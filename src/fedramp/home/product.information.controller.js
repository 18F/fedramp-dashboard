(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('ProductInformationController', ProductInformationController);

    ProductInformationController.$inject = ['$log', '$stateParams', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function ProductInformationController ($log, $stateParams, fedrampData, helperService) {
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
        $log.info(self.item);
    }
})();
