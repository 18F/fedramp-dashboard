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

        self.similarItems = function () {
            let similar = [];
            let models = self.item.serviceModels;
            let name = self.item.name;
            
            self.items.filter(x => x.name !== name).forEach(x => {
                for (let i = 0; i < models.length; i++) {
                    if (x.serviceModels.includes(models[i])) {
                        similar.push(x);
                        break;
                    }
                }
            });

            return similar;
        };

        self.onUpdate = function(items){
            self.filteredData = items;
        };

        /**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.ProductInformationController
         */
        self.close = function () {
            helperService.navigateTo('/products' + helperService.queryString());
        };

        helperService.scrollTo('scrollToContent');
    }
})();
