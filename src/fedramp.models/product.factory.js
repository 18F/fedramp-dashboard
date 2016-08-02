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

            /**
             * The model type
             * @member {string}
             * @memberof Models.Product
             */
            self.type = 'product';

            /**
             * The product name
             * @member {string}
             * @memberof Models.Product
             */
            self.name = '';

            /**
             * The package identifier
             * @member {string}
             * @memberof Models.Product
             */
            self.pkgId = '';

            /**
             * The number of times the product was used
             * @member {integer}
             * @memberof Models.Product
             */
            self.reuses = 0;

            /**
             * The provider name
             * @member {string}
             * @memberof Models.Product
             */
            self.provider = '';

            /**
             * Agencies associated to the product
             * @member {array}
             * @memberof Models.Product
             */
            self.agencies = [];

            /**
             * The deployment model
             * @member {string}
             * @memberof Models.Product
             */
            self.deploymentModel = '';

            /**
             * The designation or status
             * @member {string}
             * @memberof Models.Product
             */
            self.designation = '';

            /**
             * Service models
             * @member {array}
             * @memberof Models.Product
             */
            self.serviceModels = [];

            /**
             * The impact level
             * @member {string}
             * @memberof Models.Product
             */
            self.impactLevel = '';

            /**
             * The logo URL
             * @member {string}
             * @memberof Models.Product
             */
            self.logo = '';

            /**
             * The authorization date
             * @member {string}
             * @memberof Models.Product
             */
            self.authorizationDate = '';

            /**
             * The expected compliance date
             * @member {string}
             * @memberof Models.Product
             */
            self.expectedCompliance = '';

            /**
             * The compliance date
             * @member {string}
             * @memberof Models.Product
             */
            self.compliantDate = '';

            /**
             * The expiration date
             * @member {string}
             * @memberof Models.Product
             */
            self.expirationDate = '';

            /**
             * The independent assessor name
             * @member {string}
             * @memberof Models.Product
             */
            self.independentAssessor = '';

            /**
             * The authorization type
             * @member {string}
             * @memberof Models.Product
             */
            self.authorizationType = '';

            /**
             * The sponsoring agency name
             * @member {string}
             * @memberof Models.Product
             */
            self.sponsoringAgency = '';

            /**
             * Number of authorizations 
             * @member {number}
             * @memberof Models.Product
             */
            self.authorizations = 0;

            /**
             * Text used to describe primary metric label
             * @member {string}
             * @memberof Models.Product
             */
             self.useLabel = 'Authorizations';

            /**
             * The service description
             * @member {string}
             * @memberof Models.Product
             */
            self.serviceDescription = '';

            /**
             * The product point of contact name
             * @member {string}
             * @memberof Models.Product
             */
            self.pocName = '';

            /**
             * The product point of contact email
             * @member {string}
             * @memberof Models.Product
             */
            self.pocEmail = '';

            /**
             * Products dependent on the current product
             * @member {array}
             * @memberof Models.Product
             */
            self.dependents = [];

            /**
             * Date product became fedramp ready
             * @member {date}
             * @memberof Models.Product
             */
            self.fedrampReadyDate = null;

            /**
             * Date product became in-process
             * @member {date}
             * @memberof Models.Product
             */
            self.inProcessDate = null;
        }

        return Product;
    }
})();
