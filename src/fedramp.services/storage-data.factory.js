(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .factory('StorageData', StorageDataFactory);

    StorageDataFactory.$inject = ['StorageManager', 'Data', 'Agency', 'Assessor', 'Product', 'Provider', 'AssessorData', 'helperService'];

    function StorageDataFactory (StorageManager, Data, Agency, Assessor, Product, Provider, AssessorData, helperService) {
        /**
         * Provides storage specific functionality that extends the StorageManager
         * @constructor
         * @memberof Services
         * @extends StorageManager
         */
        function StorageData (options) {
            StorageManager.call(this);
            var self = this;
            var rawAssessors = (options && options.Assessors ? cleanAssessors(options.Assessors) : []);
            self.storageContainer = 'data';

            /**
             * Transforms the raw object to a specifec model
             * @public
             * @memberof Services.StorageData
             *
             * @param {Object} raw
             *  The JSON object
             *
             * @returns
             *  The item
             */
            self.transform = function (raw) {
                return new Data(raw);
            };

            /**
             * Extracts unique providers
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of providers
             */
            self.providers = function () {
                let names = [];
                let items = [];
                let data = self.all();

                for (let i = 0; i < data.length; i++) {
                    let d = data[i];
                    if (!include(d.name, names)) {
                        continue;
                    }

                    names.push(d.name.trim());

                    let item = new Provider();
                    item.name = d.name.trim();
                    item.logo = d.cspUrl;
                    items.push(item);
                }

                items.forEach(item => {
                    item.products = self.products().filter(x => x.provider === item.name);

                    item.products.forEach(prod => {
                        prod.name = prod.name.trim();
                        item.reuses += prod.reuses;

                        item.products.forEach(prod => {
                            if (prod.serviceModels) {
                                prod.serviceModels.forEach(model => {
                                    if (include(model, item.serviceModels)) {
                                        item.serviceModels.push(model.trim());
                                    }
                                });
                            }

                            if (prod.deploymentModel) {
                                if (include(prod.deploymentModel, item.deploymentModels)) {
                                    item.deploymentModels.push(prod.deploymentModel.trim());
                                }
                            }

                            if (include(prod.designation, item.designations)) {
                                item.designations.push(prod.designation.trim());
                            }

                            if (validAgency(prod.sponsoringAgency) && include(prod.sponsoringAgency, item.agencies)) {
                                item.agencies.push(prod.sponsoringAgency.trim());
                            }

                            if (validAgency(prod.authorizingAgency) && include(prod.authorizingAgency, item.agencies)) {
                                item.agencies.push(prod.authorizingAgency.trim());
                            }

                            if (validAgency(prod.authorizingSubagency) && include(prod.authorizingSubagency, item.agencies)) {
                                item.agencies.push(prod.authorizingSubagency.trim());
                            }

                            prod.agencies.forEach(a => {
                                if (validAgency(a) && include(a, item.agencies)) {
                                    item.agencies.push(a);
                                }
                            });
                        });
                    });

                    // Sort any service models
                    item.serviceModels = item.serviceModels ? item.serviceModels.map(x => x.trim()).sort() : [];
                });

                return items;
            };

            /**
             * Extracts unique products
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of products
             */
            self.products = function () {
                let names = [];
                let items = [];
                let data = self.all();

                for (let i = 0; i < data.length; i++) {
                    let d = data[i];
                    if (!include(d.pkg, names)) {
                        continue;
                    }

                    names.push(d.pkg.trim());

                    let item = new Product();
                    item.name = d.pkg.trim();
                    item.provider = d.name.trim();
                    item.pkgId = d.pkgId.trim();
                    item.serviceModels = d.serviceModel ? d.serviceModel.map(x => x.trim()).sort() : [];
                    item.deploymentModel = d.deploymentModel.trim();
                    item.designation = d.designation.trim();
                    item.impactLevel = d.impactLevel.trim();
                    item.logo = d.cspUrl.replace('https://marketplace.fedramp.gov/', '');
                    item.independentAssessor = d.independentAssessor;
                    item.authorizationType = d.path;
                    item.sponsoringAgency = d.sponsoringAgency;
                    item.authorizingAgency = d.authorizingAgency;
                    item.authorizingSubagency = d.authorizingSubagency;
                    item.authorizationDate = helperService.toDate(d.authorizationDate);
                    item.expectedCompliance = helperService.toDate(d.expectedCompliance);
                    item.compliantDate = helperService.toDate(d.compliantDate);
                    item.expirationDate = helperService.toDate(d.expirationDate);
                    item.fedrampReadyDate = helperService.toDate(d.fedrampReadyDate);
                    item.inProcessDate = helperService.toDate(d.inProcessDate);
                    item.serviceDescription = safeTrim(d.csoDescription);
                    item.website = safeTrim(d.cspWebsite);
                    item.pocName = safeTrim(d.pocName);
                    item.pocEmail = safeTrim(d.pocEmail);
                    item.agencyPocName = safeTrim(d.agencyPocName);
                    item.agencyPocEmail = safeTrim(d.agencyPocEmail);

                    // Find all products that depend on the current product
                    // jshint ignore:start
                    data.forEach(d => {
                        if (d.underlyingCspPackages.includes(item.pkgId)) {
                            item.dependents.push(d.pkg.trim());
                        }
                    });
                    // jshint ignore:end

                    item.reuses = d.atoLetters.length ;
                    // Calculate number of authorizations
                    let leveraged = data.filter(x => x ? x.underlyingCspPackages.includes(d.pkgId) : false); // jshint ignore:line
                    if (leveraged.length > 0) {
                        // Add the unleveraged ATOs that use this CSP (if not and underlying CSP will be 0)
                        item.reuses += leveraged.length;

                        // Add leveraged ATO of CSP dependencies
                        item.reuses += leveraged
                            .map(x => x.atoLetters.length)
                            .reduce((p, c) => p + c);
                    }
                    item.authorizations = item.reuses + (!['In Process', 'FedRAMP Ready'].includes(item.designation) ? 1 : 0);
                    items.push(item);
                }

                let addAgencies = (d, item) => {
                    if (validAgency(d.sponsoringAgency) && include(d.sponsoringAgency, item.agencies)) {
                        item.agencies.push(d.sponsoringAgency.trim());
                    }

                    if (validAgency(d.authorizingAgency) && include(d.authorizingAgency, item.agencies)) {
                        item.agencies.push(d.authorizingAgency.trim());
                    }

                    if (validAgency(d.authorizingSubagency) && include(d.authorizingSubagency, item.agencies)) {
                        item.agencies.push(d.authorizingSubagency.trim());
                    }

                    d.atoLetters.forEach(a => {
                        if (validAgency(a.authorizingAgency) && include(a.authorizingAgency, item.agencies)) {
                            item.agencies.push(a.authorizingAgency.trim());
                        }

                        if (validAgency(a.authorizingSubagency) && include(a.authorizingSubagency, item.agencies)) {
                            item.agencies.push(a.authorizingSubagency.trim());
                        }
                    });
                };

                items.forEach(item => {
                    data.forEach(d => {
                        if (d.pkg.trim() === item.name) {
                            addAgencies(d, item);
                        }
                    });

                    // Add agencies that use dependent products.
                    if(item.hasOwnProperty('dependents')) {
                        item.dependents.forEach(name => {
                            let d = data.find(item => { return item.pkg.trim() === name; });

                            addAgencies(d, item);
                        });
                    }
                });

                return items;
            };

            /**
             * Extracts unique agencies
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of agencies
             */
            self.agencies = function () {
                let names = [];
                let items = [];
                let data = self.all();

                // NOTE: There is currently only one field for agency logo's. This
                // maps to the authorizing agency so we need to backfill sponsoring
                // agency information.

                // Top level
                for (let i = 0; i < data.length; i++) {
                    let d = data[i];

                    if (validAgency(d.sponsoringAgency)) {
                        if (include(d.sponsoringAgency, names)) {
                            names.push(d.sponsoringAgency.trim());
                            let item = new Agency();
                            item.name = d.sponsoringAgency.trim();
                            item.logo = d.sponsoringAgencyLogo.trim();
                            item.pocName = safeTrim(d.agencyPocName);
                            item.pocEmail = safeTrim(d.agencyPocEmail);
                            items.push(item);
                        } else {
                            let idx;
                            for (idx = 0; idx < items.length; idx++) {
                                if (items[idx].name === d.sponsoringAgency.trim()) {
                                    break;
                                }
                            }

                            if (items[idx]) {
                                items[idx].pocName = d.agencyPocName.trim();
                                items[idx].pocEmail = d.agencyPocEmail.trim();
                                if (d.sponsoringAgencyLogo.trim()) {
                                    items[idx].logo = d.sponsoringAgencyLogo.trim();
                                }
                            }
                        }
                    }

                    if (validAgency(d.authorizingAgency)) {
                        if (include(d.authorizingAgency, names)) {
                            names.push(d.authorizingAgency.trim());
                            let item = new Agency();
                            item.name = d.authorizingAgency.trim();
                            item.logo = d.sponsoringAgencyLogo.trim();
                            item.pocName = safeTrim(d.agencyPocName);
                            item.pocEmail = safeTrim(d.agencyPocEmail);
                            items.push(item);
                        } else {
                            let idx;
                            for (idx = 0; idx < items.length; idx++) {
                                if (items[idx].name === d.authorizingAgency.trim()) {
                                    break;
                                }
                            }

                            if (items[idx]) {
                                items[idx].pocName = d.agencyPocName.trim();
                                items[idx].pocEmail = d.agencyPocEmail.trim();
                                if (d.sponsoringAgencyLogo.trim()) {
                                    items[idx].logo = d.sponsoringAgencyLogo.trim();
                                }
                            }
                        }
                    }

                    if (validAgency(d.authorizingSubagency)) {
                        if (include(d.authorizingSubagency, names)) {
                            names.push(d.authorizingSubagency.trim());
                            let item = new Agency();
                            item.name = d.authorizingSubagency.trim();
                            item.logo = d.sponsoringAgencyLogo.trim();
                            item.pocName = safeTrim(d.agencyPocName);
                            item.pocEmail = safeTrim(d.agencyPocEmail);
                            items.push(item);
                        } else {
                            let idx;
                            for (idx = 0; idx < items.length; idx++) {
                                if (items[idx].name === d.authorizingSubagency.trim()) {
                                    break;
                                }
                            }

                            if (items[idx]) {
                                items[idx].pocName = d.agencyPocName.trim();
                                items[idx].pocEmail = d.agencyPocEmail.trim();
                                if (d.sponsoringAgencyLogo.trim()) {
                                    items[idx].logo = d.sponsoringAgencyLogo.trim();
                                }
                            }
                        }
                    }
                }

                // Nested
                for (let i = 0; i < data.length; i++) {
                    let d = data[i];
                    for (let j = 0; j < d.atoLetters.length; j++) {
                        let l = d.atoLetters[j];

                        if (validAgency(l.authorizingAgency) && include(l.authorizingAgency, names)) {
                            names.push(l.authorizingAgency.trim());
                            let item = new Agency();
                            item.name = l.authorizingAgency.trim();
                            item.pocName = l.pocName.trim();
                            item.pocEmail = l.pocEmail.trim();
                            item.logo = l.logo.trim();
                            items.push(item);
                        } else {
                            let idx;
                            for (idx = 0; idx < items.length; idx++) {
                                if (items[idx].name === l.authorizingAgency.trim()) {
                                    break;
                                }
                            }

                            if (items[idx]) {
                                items[idx].pocName = l.pocName.trim();
                                items[idx].pocEmail = l.pocEmail.trim();
                                if (l.logo.trim()) {
                                    items[idx].logo = l.logo.trim();
                                }
                            }
                        }

                        if (validAgency(l.authorizingSubagency) && include(l.authorizingSubagency, names)) {
                            names.push(l.authorizingSubagency.trim());
                            let item = new Agency();
                            item.name = l.authorizingSubagency.trim();
                            item.pocName = l.pocName.trim();
                            item.pocEmail = l.pocEmail.trim();
                            item.logo = l.logo.trim();
                            items.push(item);
                        } else {
                            let idx;
                            for (idx = 0; idx < items.length; idx++) {
                                if (items[idx].name === l.authorizingSubagency.trim()) {
                                    break;
                                }
                            }

                            if (items[idx]) {
                                items[idx].pocName = l.pocName.trim();
                                items[idx].pocEmail = l.pocEmail.trim();
                                if (l.logo.trim()) {
                                    items[idx].logo = l.logo.trim();
                                }
                            }
                        }
                    }
                }

                let addProducts = (d, item) => {
                    d.atoLetters
                        .filter(x => safeTrim(x.authorizingAgency) === item.name || safeTrim(x.authorizingSubagency) === item.name)
                        .forEach(a => {
                            item.authorized++;
                            if (include(d.pkg, item.products)) {
                                item.products.push(d.pkg.trim());
                            }

                            if (include(d.name, item.providers)) {
                                item.providers.push(d.name.trim());
                            }

                            if (include(a.independentAssessor, item.assessors)) {
                                item.assessors.push(a.independentAssessor.trim());
                            }
                        });

                    if (safeTrim(d.sponsoringAgency) === item.name) {
                        item.sponsored++;
                        if (include(d.pkg, item.products)) {
                            item.products.push(d.pkg.trim());
                        }

                        if (include(d.name, item.providers)) {
                            item.providers.push(d.name.trim());
                        }

                        if (include(d.independentAssessor, item.assessors)) {
                            item.assessors.push(d.independentAssessor.trim());
                        }
                    }

                    if (safeTrim(d.authorizingAgency) === item.name || safeTrim(d.authorizingSubagency) === item.name) {
                        item.authorized++;
                        if (include(d.pkg, item.products)) {
                            item.products.push(d.pkg.trim());
                        }

                        if (include(d.name, item.providers)) {
                            item.providers.push(d.name.trim());
                        }

                        if (include(d.independentAssessor, item.assessors)) {
                            item.assessors.push(d.independentAssessor.trim());
                        }
                    }
                };

                items.forEach(item => {
                    // Add all primary products.
                    data.forEach(d => {
                        addProducts(d, item);
                    });

                    // For each primary product, add its underlying products to the list.
                    item.products.forEach(name => {
                        let product = data.find(item => { return item.pkg.trim() === name; });

                        if (product.hasOwnProperty('underlyingCspPackages')) {
                            product.underlyingCspPackages.forEach(function (pkgId) {
                                let underlying = data.find(item => { return item.pkgId.trim() === pkgId; });

                                if (include(underlying.pkg, item.products)) {
                                    item.products.push(underlying.pkg.trim());
                                }

                                if (include(underlying.name, item.providers)) {
                                    item.providers.push(underlying.name.trim());
                                }

                                if (include(underlying.independentAssessor, item.assessors)) {
                                    item.assessors.push(underlying.independentAssessor.trim());
                                }
                            });
                        }
                    });

                    item.reuses = item.sponsored + item.authorized;
                });

                return items;
            };

            /**
             * Extracts unique independent assessors
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of independent assessors
             */
            self.assessors = function () {
                let names = [];
                let items = [];
                let data = self.all();

                // Top level
                for (let i = 0; i < data.length; i++) {
                    let d = data[i];
                    if (!include(d.independentAssessor, names)) {
                        continue;
                    }

                    names.push(d.independentAssessor.trim());

                    let item = new Assessor();
                    item.name = d.independentAssessor.trim();
                    item = fillFromRawAssessor(item);
                    items.push(item);
                }

                // Nested
                for (let i = 0; i < data.length; i++) {
                    let d = data[i];
                    for (let j = 0; j < d.atoLetters.length; j++) {
                        let l = d.atoLetters[j];
                        let name = '';

                        if (!include(l.independentAssessor, names)) {
                            continue;
                        }

                        names.push(l.independentAssessor.trim());

                        let item = new Assessor();
                        item = fillFromRawAssessor(item);
                        item.name = l.independentAssessor.trim();
                        items.push(item);
                    }
                }

                items.forEach(item => {
                    data.forEach(d => {
                        if (safeTrim(d.independentAssessor) === item.name) {
                            if (include(d.pkg, item.products)) {
                                item.products.push(d.pkg.trim());
                            }

                            if (include(d.name, item.providers)) {
                                item.providers.push(d.name.trim());
                            }

                            if (validAgency(d.sponsoringAgency) && include(d.sponsoringAgency, item.agencies)) {
                                item.agencies.push(d.sponsoringAgency.trim());
                            }

                            if (validAgency(d.authorizingAgency) && include(d.authorizingAgency, item.agencies)) {
                                item.agencies.push(d.authorizingAgency.trim());
                            }

                            if (validAgency(d.authorizingSubagency) && include(d.authorizingSubagency, item.agencies)) {
                                item.agencies.push(d.authorizingSubagency.trim());
                            }
                        }

                        d.atoLetters.forEach(a => {
                            if (safeTrim(a.independentAssessor) === item.name) {
                                if (include(d.pkg, item.products)) {
                                    item.products.push(d.pkg.trim());
                                }

                                if (include(d.name, item.providers)) {
                                    item.providers.push(d.name.trim());
                                }

                                if (validAgency(a.authorizingAgency) && include(a.authorizingAgency, item.agencies)) {
                                    item.agencies.push(a.authorizingAgency.trim());
                                }

                                if (validAgency(a.authorizingSubagency) && include(a.authorizingSubagency, item.agencies)) {
                                    item.agencies.push(a.authorizingSubagency.trim());
                                }
                            }
                        });
                    });

                    item.reuses = item.products.length;
                });

                // Fill up assessors that haven't been matched with assessors in provider array
                rawAssessors.forEach(raw => {
                    let found = false;
                    items.forEach(item => {
                        if (raw.name.trim() === item.name.trim()) {
                            found = true;
                        }
                    });
                    if (!found) {
                        let assessor = new Assessor();
                        assessor.name = raw.name;
                        assessor = fillFromRawAssessor(assessor);
                        items.push(assessor);
                    }
                });
                return items;
            };

            function safeTrim (s) {
                if (s) {
                    return s.trim();
                }
                return '';
            }

            function include (s, a) {
                let st = safeTrim(s);
                if (st && a) {
                    return !a.includes(st);
                }
                return false;
            }

            function validAgency (agency) {
                return agency && include(agency, ['JAB Authorization', 'CSP Supplied']);
            }

            /**
             * Finds the assessor using a name from the list of raw assessors.
             *
             * @returns
             * Assessor being populated.
             */
            function fillFromRawAssessor (assessor) {
                for (let x = 0; x < rawAssessors.length; x++) {
                    var assessorData = new AssessorData(rawAssessors[x]);
                    if (safeTrim(assessorData.name) === safeTrim(assessor.name)) {
                        assessor.accreditationDate = helperService.toDate(assessorData.accreditationDate);
                        assessor.description = assessorData.description;
                        assessor.logo = assessorData.logo;
                        assessor.pocName = assessorData.pocName;
                        assessor.pocEmail = assessorData.pocEmail;
                        assessor.website = assessorData.website;
                        assessor.remediation = assessorData.remediation;
                        assessor.founded = assessorData.founded;
                        assessor.primaryOfficeLocations = assessorData.primaryOfficeLocations;
                        assessor.fedrampAssessed = assessorData.fedrampAssessed;
                        assessor.provideConsultingServices = assessorData.provideConsultingServices;
                        assessor.descriptionOfConsultingServices = assessorData.descriptionOfConsultingServices;
                        assessor.consultingServicesTo = assessorData.consultingServicesTo;
                        assessor.additionalCyberFrameworks = assessorData.additionalCyberFrameworks;
                        break;
                    }
                }

                return assessor;
            }

            /**
             * Removes empty objects `{}` from raw assessor data list
             *
             * @returns
             * Array of assessors without empty objects
             */
            function cleanAssessors (assessors) {
                for (let x = assessors.length - 1; x >= 0; x--) {
                    if (Object.keys(assessors[x]).length === 0) {
                        assessors.splice(x, 1);
                    }
                }
                return assessors;
            }

            return self.init(options);
        }

        StorageData.prototype = Object.create(StorageManager.prototype);
        StorageData.prototype.constructor = StorageData;

        return StorageData;
    }
})();
