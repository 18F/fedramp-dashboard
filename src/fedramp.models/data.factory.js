(function () {
    'use strict';

    angular
        .module('fedramp.models')
        .factory('Data', DataFactory);

    DataFactory.$inject = ['AtoLetter'];

    function DataFactory (AtoLetter) {
        /**
         * The raw data model with opinionated transformations
         * @constructor
         * @memberof Models
         */
        function Data (options) {
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
                'Sponsoring_Agency_Logo': 'sponsoringAgencyLogo',
                'Authorizing_Agency': 'authorizingAgency',
                'Authorizing_Subagency': 'authorizingSubagency',
                'CSP_URL': 'cspUrl',
                'Stage': 'stage',
                'Independent_Assessor': 'independentAssessor',
                'Underlying_CSP_Package_ID': 'underlyingCspPackages',
                'FedRAMP_Website_URL': 'fedrampWebsite',
                'CSP_Website': 'cspWebsite',
                'CSO_Description': 'csoDescription',
                'Expected_Compliance_Date': 'expectedCompliance',
                'Announcement_Date': 'compliantDate',
                'Fedramp_Ready_Date': 'fedrampReadyDate',
                'CSP_POC_Name': 'pocName',
                'CSP_POC_Email': 'pocEmail',
                'Leveraged_ATO_Letters': 'atoLetters',
                'FedRAMP_In-Process_Date': 'inProcessDate'
            };

            /**
             * Cloud service provider name
             * @member {string}
             * @memberof Models.Data
             */
            self.name = '';

            /**
             * Package name
             * @member {string}
             * @memberof Models.Data
             */
            self.pkg = '';

            /**
             * Package identifier
             * @member {string}
             * @memberof Models.Data
             */
            self.pkgId = '';

            /**
             * Path
             * @member {string}
             * @memberof Models.Data
             */
            self.path = '';

            /**
             * Designation
             * @member {string}
             * @memberof Models.Data
             */
            self.designation = '';

            /**
             * Service model
             * @member {array}
             * @memberof Models.Data
             */
            self.serviceModel = [];

            /**
             * Deployment model
             * @member {string}
             * @memberof Models.Data
             */
            self.deploymentModel = '';

            /**
             * Impact level
             * @member {string}
             * @memberof Models.Data
             */
            self.impactLevel = '';

            /**
             * Authorization date
             * @member {date}
             * @memberof Models.Data
             */
            self.authorizationDate = null;

            /**
             * Expiration date
             * @member {date}
             * @memberof Models.Data
             */
            self.expirationDate = null;

            /**
             * Sponsoring agency
             * @member {string}
             * @memberof Models.Data
             */
            self.sponsoringAgency = '';

            /**
            * The sponsoring agency logo
            * @member {string}
            * @memberof Models.Data
            */
            self.sponsoringAgencyLogo = '';

            /**
            * Authorizing agency
            * @member {string}
            * @memberof Models.Data
            */
            self.authorizingAgency = '';

            /**
            * Authorizing subagency
            * @member {string}
            * @memberof Models.Data
            */
            self.authorizingSubagency = '';

            /**
             * The CSP URL
             * @member {string}
             * @memberof Models.Data
             */
            self.cspUrl = '';

            /**
             * Stage in validation process
             * @member {string}
             * @memberof Models.Data
             */
            self.stage = '';

            /**
             * The independent assessor
             * @member {string}
             * @memberof Models.Data
             */
            self.independentAssessor = '';

            /**
             * Underlying CSP packages
             * @member {array}
             * @memberof Models.Data
             */
            self.underlyingCspPackages = [];

            /**
             * The FedRAMP website
             * @member {string}
             * @memberof Models.Data
             */
            self.fedrampWebsite = '';

            /**
             * The CSP website
             * @member {string}
             * @memberof Models.Data
             */
            self.cspWebsite = '';

            /**
             * The CSO package services description
             * @member {string}
             * @memberof Models.Data
             */
            self.csoDescription = '';

            /**
             * Date of expected compliance
             * @member {date}
             * @memberof Models.Data
             */
            self.expectedCompliance = null;

            /**
             * Date of announcement when compliant
             * @member {date}
             * @memberof Models.Data
             */
            self.compliantDate = null;

            /**
             * Date of FedRAMP Ready
             * @member {date}
             * @memberof Models.Data
             */
            self.fedrampReadyDate = null;

            /**
             * The product point of contact name
             * @member {string}
             * @memberof Models.Data
             */
            self.pocName = '';

            /**
             * The product point of contact email
             * @member {string}
             * @memberof Models.Data
             */
            self.pocEmail = '';

            /**
             * Leveraged ATO letters
             * @member {array}
             * @memberof Models.Data
             */
            self.atoLetters = [];

            /**
             * Date when cso became fedramp ready
             * @member {date}
             * @memberof Models.Data
             */
            self.fedrampReady = null;

            /**
             * Date when cso became in-process
             * @member {date}
             * @memberof Models.Data
             */
            self.inProcessDate = null;

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
             * @memberof Models.Data
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

        return Data;
    }
})();
