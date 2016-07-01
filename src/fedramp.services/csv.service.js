(function(){
    'use strict';

    angular
        .module('fedramp.services')
        .service('CsvService', CsvService);

    CsvService.$inject = ['$log'];

    /**
     * @constructor
     * @memberof Services
     */
    function CsvService($log) {

        var self = this;
        self.flatten = flatten;
        self.toCsv = toCsv;

        /**
         * Takes an object and converts to a csv string
         *
         * @public
         * @memberof Service.CsvService
         *
         * @returns
         * A csv string representation of an object.
         */
        function toCsv (data, config) {
            return Papa.unparse(data, config);
        }

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
        function flatten (data) {
            let rows = [];

            for (let i = 0; i < data.length; i++) {
                rows.push(flattenObject(data[i]));
            }

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
