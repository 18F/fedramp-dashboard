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
        var products = fedrampData.products();

        /**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProductInformationController
         */
        self.items = products.filter(x => helperService.slugify(x.name) !== $stateParams.name);

        /**
         * The item
         * @member {object}
         * @memberof Controllers.ProductInformationController
         */
        self.item = products.find(x => helperService.slugify(x.name) === $stateParams.name);

        /**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.ProductInformationController
         */
        self.close = function () {
            helperService.navigateTo('/products' + helperService.queryString());
        };

        /**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.ProductInformationController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */
        self.onUpdate = function(items){
            self.filteredData = items;
        };

        helperService.scrollTo('scrollToContent');
    }
})();
