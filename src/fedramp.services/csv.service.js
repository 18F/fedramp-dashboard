(function(){
    'use strict';

    angular
        .module('fedramp.services')
        .service('CsvService', CsvService);

    CsvService.$inject = ['$log', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Services
     */
    function CsvService ($log, fedrampData, helperService) {

        var self = this;
        self.raw = fedrampData.all();

        /**
         * Takes an object and converts to a csv string
         *
         * @public
         * @memberof Service.CsvService
         *
         * @returns
         * A csv string representation of an object.
         */
        self.toCsv = function (data, config) {
            return Papa.unparse(data, config);
        };

        /**
         * Iterates through an array creating an array of flattened objects
         *
         * @public
         * @memberof Services.CsvService
         *
         * @param {array} data
         *  An array of complex objects
         *
         * @returns
         *  A flatten array of array values
         */
        self.flatten = function (data) {
            let rows = [];

            // {
            //     CloudServiceProvider: '',
            //     CloudServiceOffering: '',
            //     Type: '',
            //     LeveragedATO: '',
            //     AuthorizationDate: '',
            //     Agency: '',
            //     Subagency: '',
            //     IndependentAssessor: ''
            // }

            data.forEach(x => {
                switch (x.type) {
                case 'product':
                    rows = rows.concat(productFilter(x.pkgId));
                    break;

                case 'agency':
                    rows = rows.concat(agencyFilter(x.name));
                    break;

                case 'assessor':
                    rows = rows.concat(assessorFilter(x.name));
                    break;
                }
            });

            return rows;
        };

        function productFilter (pkgId) {
            let rows = [];

            let products = self.raw.filter(x => x.pkgId === pkgId);
            if (products && products.length !== 0) {
                let p = products[0];

                // Populate the parent
                rows.push(flattenObject({
                    CloudServiceProvider: p.name,
                    CloudServiceOffering: p.pkg,
                    Type: p.path,
                    LeveragedATO: 'No',
                    AuthorizationDate: helperService.toDate(p.authorizationDate),
                    Agency: p.sponsoringAgency,
                    Subagency: '',
                    IndependentAssessor: p.independentAssessor
                }));

                // Populate any leveraged ATOs
                p.atoLetters.forEach(x => {
                    rows.push(flattenObject({
                        CloudServiceProvider: p.name,
                        CloudServiceOffering: p.pkg,
                        Type: p.path,
                        LeveragedATO: 'Yes',
                        AuthorizationDate: helperService.toDate(x.compliantDate),
                        Agency: x.authorizingAgency,
                        Subagency: x.authorizingSubagency,
                        IndependentAssessor: x.independentAssessor
                    }));
                });
            }

            return rows;
        }

        function agencyFilter (name) {
            let rows = [];

            self.raw.forEach(p => {
                if (p.sponsoringAgency.trim() === name) {
                    // Populate the parent
                    rows.push(flattenObject({
                        CloudServiceProvider: p.name,
                        CloudServiceOffering: p.pkg,
                        Type: p.path,
                        LeveragedATO: 'No',
                        AuthorizationDate: helperService.toDate(p.authorizationDate),
                        Agency: p.sponsoringAgency,
                        Subagency: '',
                        IndependentAssessor: p.independentAssessor
                    }));
                }

                // Populate any leveraged ATOs
                p.atoLetters.forEach(x => {
                    if (x.authorizingAgency.trim() === name || x.authorizingSubagency.trim() === name) {
                        rows.push(flattenObject({
                            CloudServiceProvider: p.name,
                            CloudServiceOffering: p.pkg,
                            Type: p.path,
                            LeveragedATO: 'Yes',
                            AuthorizationDate: helperService.toDate(x.compliantDate),
                            Agency: x.authorizingAgency,
                            Subagency: x.authorizingSubagency,
                            IndependentAssessor: x.independentAssessor
                        }));
                    }
                });
            });

            return rows;
        }

        function assessorFilter (name) {
            let rows = [];

            self.raw.forEach(p => {
                if (p.independentAssessor.trim() === name) {
                    // Populate the parent
                    rows.push(flattenObject({
                        CloudServiceProvider: p.name,
                        CloudServiceOffering: p.pkg,
                        Type: p.path,
                        LeveragedATO: 'No',
                        AuthorizationDate: helperService.toDate(p.authorizationDate),
                        Agency: p.sponsoringAgency,
                        Subagency: '',
                        IndependentAssessor: p.independentAssessor
                    }));
                }

                // Populate any leveraged ATOs
                p.atoLetters.forEach(x => {
                    if (x.independentAssessor.trim() === name) {
                        rows.push(flattenObject({
                            CloudServiceProvider: p.name,
                            CloudServiceOffering: p.pkg,
                            Type: p.path,
                            LeveragedATO: 'Yes',
                            AuthorizationDate: helperService.toDate(x.compliantDate),
                            Agency: x.authorizingAgency,
                            Subagency: x.authorizingSubagency,
                            IndependentAssessor: x.independentAssessor
                        }));
                    }
                });
            });

            return rows;
        }

        /**
         * Iterates through the properties of an object creating a flat structure
         *
         * @public
         * @memberof Services.CsvService
         *
         * @param {object} obj
         *
         * @returns
         *  A flattened object
         */
        function flattenObject (obj) {
            let flat = {};

            for (let prop in obj) {
                if (typeof obj[prop] === 'function') {
                    continue;
                } else if (Array.isArray(obj[prop])) {
                    if (obj[prop].length === 0) {
                        flat[unicornString(prop)] = '';
                        continue;
                    }
                    
                    if (typeof obj[prop][0] === 'string') {
                        flat[unicornString(prop)] = obj[prop].join(', ');
                    } else if (typeof obj[prop][0] === 'object') {
                        let a = flatten(obj[prop]);
                        for (let i = 0; i < a.length; i++) {
                            let o = a[i];
                            for (let p in o) {
                                flat[unicornString(prop) + ' - ' + unicornString(p)] = o[p];
                            }
                        }
                    }
                } else if (typeof obj[prop] === 'object') {
                    let o = flattenObject(obj[prop]);

                    for (let p in o) {
                        flat[unicornString(prop) + ' - ' + unicornString(p)] = o[p];
                    }
                } else {
                    flat[unicornString(prop)] = obj[prop];
                }
            }

            return flat;
        }

        /**
         * Creates a magical and readable string from camelcase
         *
         * @public
         * @memberof Services.CsvService
         *
         * @param {string} camelCase
         *
         * @returns
         *  A human readable string
         */
        function unicornString (camelCase) {
            return camelCase
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, function (s) { return s.toUpperCase(); });
        }
    }
})();
