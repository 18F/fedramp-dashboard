(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .factory('StorageData', StorageDataFactory);

    StorageDataFactory.$inject = ['StorageManager', 'Data', 'Agency', 'Assessor', 'Product', 'Provider', 'helperService'];

    function StorageDataFactory (StorageManager, Data, Agency, Assessor, Product, Provider, helperService) {
        /**
         * Provides storage specific functionality that extends the StorageManager
         * @constructor
         * @memberof Services
         * @extends StorageManager
         */
        function StorageData (options) {
            StorageManager.call(this);

            var self = this;
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
                        });

                        item.products.forEach(prod => {
                            if (prod.deploymentModel) {
                                if (include(prod.deploymentModel, item.deploymentModels)) {
                                    item.deploymentModels.push(prod.deploymentModel.trim());
                                }
                            }
                        });

                        item.products.forEach(prod => {
                            if (include(prod.designation, item.designations)) {
                                item.designations.push(prod.designation.trim());
                            }
                        });

                    });
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
                    item.serviceModels = d.serviceModel ? d.serviceModel : [];
                    item.deploymentModel = d.deploymentModel.trim();
                    item.designation = d.designation.trim();
                    item.impactLevel = d.impactLevel.trim();
                    item.logo = d.cspUrl;
                    item.authorizationDate = helperService.toDate(d.authorizationDate);
                    item.expectedCompliance = helperService.toDate(d.expectedCompliance);

                    item.reuses = d.atoLetters.length;
                    let leveraged = data.filter(x => x ? x.underlyingCspPackages.includes(d.pkgId) : false);
                    if (leveraged.length > 0) {
                        // Add the unleveraged ATOs that use this CSP (if not and underlying CSP will be 0)
                        item.reuses += leveraged.length;

                        // Add leveraged ATO of CSP dependencies
                        item.reuses += leveraged
                            .map(x => x.atoLetters.length)
                            .reduce((p, c) => p + c);
                    }

                    item.serviceModels = item.serviceModels.map(x=>x.trim());

                    items.push(item);
                }

                items.forEach(item => {
                    data.forEach(d => {
                        if (d.pkg === item.name) {
                            if (include(d.sponsoringAgency, item.agencies)) {
                                item.agencies.push(d.sponsoringAgency.trim());
                            }

                            d.atoLetters.forEach(a => {
                                if (include(a.authorizingAgency, item.agencies)) {
                                    item.agencies.push(a.authorizingAgency.trim());
                                }

                                if (include(a.authorizingSubagency, item.agencies)) {
                                    item.agencies.push(a.authorizingSubagency.trim());
                                }
                            });
                        }
                    });
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
                
                // Top level
                for (let i = 0; i < data.length; i++) {
                    let d = data[i];

                    if (include(d.sponsoringAgency, names)) {
                        names.push(d.sponsoringAgency.trim());
                        let item = new Agency();
                        item.name = d.sponsoringAgency.trim();
                        items.push(item);
                    }
                }

                // Nested
                for (let i = 0; i < data.length; i++) {
                    let d = data[i];
                    for (let j = 0; j < d.atoLetters.length; j++) {
                        let l = d.atoLetters[j];

                        if (include(l.authorizingAgency, names)) {
                            names.push(l.authorizingAgency.trim());
                            let item = new Agency();
                            item.name = l.authorizingAgency.trim();
                            items.push(item);
                        }

                        if (include(l.authorizingSubagency, names)) {
                            names.push(l.authorizingSubagency.trim());
                            let item = new Agency();
                            item.name = l.authorizingSubagency.trim();
                            items.push(item);
                        }
                    }
                }

                items.forEach(item => {
                    data.forEach(d => {
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

                            if (include(d.sponsoringAgency, item.agencies)) {
                                item.agencies.push(d.sponsoringAgency.trim());
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

                                if (include(a.authorizingAgency, item.agencies)) {
                                    item.agencies.push(a.authorizingAgency.trim());
                                }

                                if (include(a.authorizingSubagency, item.agencies)) {
                                    item.agencies.push(a.authorizingSubagency.trim());
                                }
                            }
                        });
                    });

                    item.reuses = item.products.length;
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

            return self.init(options);
        }

        StorageData.prototype = Object.create(StorageManager.prototype);
        StorageData.prototype.constructor = StorageData;

        return StorageData;
    }
})();
