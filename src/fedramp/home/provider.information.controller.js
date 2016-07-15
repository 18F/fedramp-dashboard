(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('ProviderInformationController', ProviderInformationController);

    ProviderInformationController.$inject = ['$log', '$state', '$stateParams', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function ProviderInformationController ($log, $state, $stateParams, fedrampData, helperService) {
        var self = this;

        /**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProviderInformationController
         */
        self.items = fedrampData.providers();

        /**
         * The item
         * @member {object}
         * @memberof Controllers.ProviderInformationController
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

        /**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.ProviderInformationController
         */
        self.close = function () {
            $state.go('fedramp.app.home.providers', {}, { reload: true });
        };

        helperService.scrollTo('scrollToContent');
    }
})();
