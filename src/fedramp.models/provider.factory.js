(function () {
    'use strict';

    angular
        .module('fedramp.models')
        .factory('Provider', ProviderFactory);

    ProviderFactory.$inject = [];

    function ProviderFactory () {
        /**
         * The cloud service provider.
         * @constructor
         * @memberof Models
         */
        function Provider () {
            // Scope `this` to self
            var self = this;

            /**
             * The model type
             * @member {string}
             * @memberof Models.Provider
             */
            self.type = 'provider';

            /**
             * The provider name
             * @member {string}
             * @memberof Models.Provider
             */
            self.name = '';

            /**
             * The number of times the provider was used
             * @member {integer}
             * @memberof Models.Provider
             */
            self.reuses = 0;

            /**
             * Products associated to the provider
             * @member {array}
             * @memberof Models.Provider
             */
            self.products = [];

            /**
             * Deployment models associated to the provider
             * @member {array}
             * @memberof Models.Provider
             */
            self.deploymentModels = [];

            /**
             * Service models associated to the provider
             * @member {array}
             * @memberof Models.Provider
             */
            self.serviceModels = [];

            /**
             * Statuses/designatinos associated to the provider
             * @member {array}
             * @memberof Models.Provider
             */
            self.designations = [];

            /**
             * Agencies associated to the provider
             * @member {array}
             * @memberof Models.Provider
             */
            self.agencies = [];

            /**
             * The logo URL
             * @member {string}
             * @memberof Models.Provider
             */
            self.logo = '';
        }

        return Provider;
    }
})();
