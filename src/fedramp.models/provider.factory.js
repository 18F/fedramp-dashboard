(function () {
    'use strict';

    angular
        .module('fedramp.models')
        .factory('Provider', ProviderFactory);

    ProviderFactory.$inject = ['AtoLetter'];

    function ProviderFactory (AtoLetter) {
        /**
         * The cloud service provider.
         * @constructor
         * @memberof Models
         */
        function Provider (options) {
            // Scope `this` to self
            var self = this;

            var mapping = {
                'Cloud_Service_Provider_Name': 'name',
                'Cloud_Service_Provider_Package': 'pkg',
                'Path': 'path',
                'Designation': 'designation',
                'Package_ID': 'pkgId',
                'Service_Model': 'serviceModel',
                'Deployment_Model': 'deploymentModel',
                'Impact_Level': 'impactLevel',
                'Original_Authorization_Date': 'authorizationDate',
                'Original_Expiration_Date': 'expirationDate',
                'Sponsoring_Agency': 'sponsoringAgency',
                'Sponsoring_Subagency': 'sponsoringSubagency',
                'Active': 'active',
                'CSP_URL': 'cspUrl',
                'Underlying_CSP_Package_ID': 'underlyingCspPackages',
                'Stage': 'stage',
                'Independent_Assessor': 'independentAssessor',
                'Leveraged_ATO_Letters': 'atoLetters'
            };

            /**
             * Cloud service provider name
             * @member {string}
             * @memberof Models.Provider
             */
            self.name = '';

            /**
             * Package name
             * @member {string}
             * @memberof Models.Provider
             */
            self.pkg = '';

            /**
             * Package identifier
             * @member {string}
             * @memberof Models.Provider
             */
            self.pkgId = '';

            /**
             * Path
             * @member {string}
             * @memberof Models.Provider
             */
            self.path = '';

            /**
             * Designation
             * @member {string}
             * @memberof Models.Provider
             */
            self.designation = '';

            /**
             * Service model
             * @member {array}
             * @memberof Models.Provider
             */
            self.serviceModel = [];

            /**
             * Deployment model
             * @member {string}
             * @memberof Models.Provider
             */
            self.deploymentModel = '';

            /**
             * Impact level
             * @member {string}
             * @memberof Models.Provider
             */
            self.impactLevel = '';

            /**
             * Authorization date
             * @member {date}
             * @memberof Models.Provider
             */
            self.authorizationDate = null;

            /**
             * Expiration date
             * @member {date}
             * @memberof Models.Provider
             */
            self.expirationDate = null;

            /**
             * Sponsoring agency
             * @member {string}
             * @memberof Models.Provider
             */
            self.sponsoringAgency = '';

            /**
             * Sponsoring subagency
             * @member {string}
             * @memberof Models.Provider
             */
            self.sponsoringSubagency = '';

            /**
             * Active status
             * @deprecated
             * @member {string}
             * @memberof Models.Provider
             */
            self.active = '';

            /**
             * The CSP URL
             * @member {string}
             * @memberof Models.Provider
             */
            self.cspUrl = '';

            /**
             * Underlying CSP packages
             * @member {array}
             * @memberof Models.Provider
             */
            self.underlyingCspPackages = [];

            /**
             * Stage in validation process
             * @member {string}
             * @memberof Models.Provider
             */
            self.stage = '';

            /**
             * The independent assessor
             * @member {string}
             * @memberof Models.Provider
             */
            self.independentAssessor = '';

            /**
             * Leveraged ATO letters
             * @member {array}
             * @memberof Models.Provider
             */
            self.atoLetters = [];

            /**
             * Initialize the provider object.
             *
             * @param {object} options
             *  A dictionary of options to configure the provider
             *
             * @returns
             *  The provider
             */
            self.init = function (options) {
                if (!options) {
                    return;
                }

                for (var x in options) {
                    if (!options.hasOwnProperty(x)) {
                        continue;
                    }

                    var key = mapping[x];
                    var letter = null;
                    if (key) {
                        if (key === 'atoLetters') {
                            for (let i = 0; i < options[x].length; i++) {
                                self[key].push(new AtoLetter(options[x][i]));
                            }
                        } else {
                            self[key] = options[x];
                        }
                    } else {
                        if (self.hasOwnProperty(x)) {
                            if (x === 'atoLetters') {
                                for (let i = 0; i < options[x].length; i++) {
                                    self[x].push(new AtoLetter(options[x][i]));
                                }
                            } else {
                                self[x] = options[x];
                            }
                        }
                    }
                }

                return self;
            };

            /**
             * Get a unique hash or identifier for the provider.
             * @public
             * @memberof Models.Provider
             *
             * @returns
             *  The hash
             */
            self.hash = function () {
                var id = '' + self.name + self.pkg + self.pkgId + self.sponsoringAgency;
                if (id.length === 0) {
                    return null;
                }
                return id;
            };

            return self.init(options);
        }

        return Provider;
    }
})();
