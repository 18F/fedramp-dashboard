(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .factory('StorageData', StorageDataFactory);

    StorageDataFactory.$inject = ['StorageManager', 'Data', 'Agency', 'Assessor', 'Product', 'Provider'];

    function StorageDataFactory (StorageManager, Data, Agency, Assessor, Product, Provider) {
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
                    if (!d.name || names.includes(d.name)) {
                        continue;
                    }

                    names.push(d.name);

                    let item = new Provider();
                    item.name = d.name;
                    items.push(item);
                }

                items.forEach(item => {
                    item.products = self.products().filter(x => x.name === item.name);
                    item.products.forEach(prod => {
                        item.reuses += prod.reuses;

                        item.products.forEach(prod => {
                            prod.serviceModels.forEach(model => {
                                if (!item.serviceModels.includes(model)) {
                                    item.serviceModels.push(model);
                                }
                            });
                        });

                        item.products.forEach(prod => {
                            prod.deplomentModels.forEach(model => {
                                if (!item.deploymentModels.includes(model)) {
                                    item.deploymentModels.push(model);
                                }
                            });
                        });

                        item.products.forEach(prod => {
                            if (!item.designations.includes(prod.deploymentModel)) {
                                item.designations.push(prod.deploymentModel);
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
                    if (!d.pkg || names.includes(d.pkg)) {
                        continue;
                    }

                    names.push(d.pkg);

                    let item = new Product();
                    item.name = d.pkg;
                    item.provider = d.name;
                    item.pkgId = d.pkgId;
                    item.serviceModels = d.serviceModel;
                    item.deploymentModel = d.deploymentModel;
                    item.designation = d.designation;
                    item.impactLevel = d.impactLevel;
                    items.push(item);
                }

                items.forEach(item => {
                    data.forEach(d => {
                        if (d.pkg === item.name) {
                            if (d.sponsoringAgency && !item.agencies.includes(d.sponsoringAgency)) {
                                item.agencies.push(d.sponsoringAgency);
                            }

                            if (d.sponsoringSubagency && !item.agencies.includes(d.sponsoringSubagency)) {
                                item.agencies.push(d.sponsoringSubagency);
                            }

                            d.atoLetters.forEach(a => {
                                if (d.authorizationAgency && !item.agencies.includes(a.authorizingAgency)) {
                                    item.agencies.push(d.authorizingAgency);
                                }

                                if (d.authorizingSubagency && !item.agencies.includes(a.authorizingSubagency)) {
                                    item.agencies.push(d.authorizingSubagency);
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

                    if (d.sponsoringAgency && !names.includes(d.sponsoringAgency)) {
                        names.push(d.sponsoringAgency);
                        let item = new Agency();
                        item.name = name;
                        items.push(item);
                    }

                    if (d.sponsoringSubagency && !names.includes(d.sponsoringSubagency)) {
                        names.push(d.sponsoringSubagency);
                        let item = new Agency();
                        item.name = name;
                        items.push(item);
                    }
                }

                // Nested
                for (let i = 0; i < data.length; i++) {
                    let d = data[i];
                    for (let j = 0; j < d.atoLetters.length; j++) {
                        let l = d.atoLetters[j];

                        if (l.authorizingAgency && !names.includes(l.authorizingAgency)) {
                            names.push(l.authorizingAgency);
                            let item = new Agency();
                            item.name = l.authorizingAgency;
                            items.push(item);
                        }

                        if (l.authorizingSubagency && !names.includes(l.authorizingSubagency)) {
                            names.push(l.authorizingSubagency);
                            let item = new Agency();
                            item.name = l.authorizingSubagency;
                            items.push(item);
                        }
                    }
                }

                items.forEach(item => {
                    data.forEach(d => {
                        if (d.sponsoringAgency === item.name || d.sponsoringSubagency === item.name || d.atoLetters.filter(x => x.authorizingAgency === item.name || x.authorizingSubagency === item.name)) {
                            if (!item.products.includes(d.pkg)) {
                                item.products.push(d.pkg);
                            }

                            if (!item.providers.includes(d.name)) {
                                item.providers.push(d.name);
                            }

                            if (!item.assessors.includes(d.independentAssessor)) {
                                item.assessors.push(d.independentAssessor);
                            }
                        }

                        if (d.sponsoringAgency === item.name || d.sponsoringSubagency === item.name) {
                            item.sponsored++;
                        }

                        if (d.authorizingAgency === item.name || d.authorizingSubagency === item.name) {
                            item.authorized++;
                        }
                    });
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
                    if (!d.independentAssessor || names.includes(d.independentAssessor)) {
                        continue;
                    }

                    names.push(d.independentAssessor);

                    let item = new Assessor();
                    item.name = d.independentAssessor;
                    items.push(item);
                }

                // Nested
                for (let i = 0; i < data.length; i++) {
                    let d = data[i];
                    for (let j = 0; j < d.atoLetters.length; j++) {
                        let l = d.atoLetters[j];
                        let name = '';

                        if (!l.independentAssessor || names.includes(l.independentAssessor)) {
                            continue;
                        }

                        names.push(l.independentAssessor);

                        let item = new Assessor();
                        item.name = l.independentAssessor;
                        items.push(item);
                    }
                }

                items.forEach(item => {
                    data.forEach(d => {
                        if (d.independentAssessor === item.name) {
                            if (!item.products.includes(d.pkg)) {
                                item.products.push(d.pkg);
                            }

                            if (!item.providers.includes(d.name)) {
                                item.providers.push(d.name);
                            }

                            if (!item.agencies.includes(d.sponsoringAgency)) {
                                item.agencies.push(d.sponsoringAgency);
                            }

                            if (!item.agencies.includes(d.sponsoringSubagency)) {
                                item.agencies.push(d.sponsoringSubagency);
                            }
                        }

                        d.atoLetters.forEach(a => {
                            if (a.independentAssessor === item.name) {
                                if (!item.agencies.includes(a.authorizingAgency)) {
                                    item.agencies.push(a.authorizingAgency);
                                }

                                if (!item.agencies.includes(a.authorizingSubagency)) {
                                    item.agencies.push(a.authorizingSubagency);
                                }
                            }
                        });
                    });
                });

                return items;
            };

            return self.init(options);
        }

        StorageData.prototype = Object.create(StorageManager.prototype);
        StorageData.prototype.constructor = StorageData;

        return StorageData;
    }
})();
