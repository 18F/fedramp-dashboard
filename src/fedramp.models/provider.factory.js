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
        function Provider (options) {
            // Scope `this` to self
            var self = this;

            self.type = 'provider';
            self.name = '';
            self.reuses = 0;
            self.products = [];
            self.deploymentModels = [];
            self.serviceModels = [];
            self.designations = [];
            self.logo = '';
        }

        return Provider;
    }
})();
