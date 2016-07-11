(function () {
    'use strict';

    angular
        .module('fedramp.models')
        .factory('Product', ProductFactory);

    ProductFactory.$inject = [];

    function ProductFactory () {
        /**
         * The product (CSO)
         * @constructor
         * @memberof Models
         */
        function Product () {
            // Scope `this` to self
            var self = this;

            self.type = 'product';
            self.name = '';
            self.pkgId = '';
            self.reuses = 0;
            self.provider = '';
            self.agencies = [];
            self.deploymentModel = '';
            self.designation = '';
            self.serviceModels = [];
            self.impactLevel = '';
            self.logo = '';
            self.authorizationDate = '';
            self.expectedCompliance = '';
        }

        return Product;
    }
})();
