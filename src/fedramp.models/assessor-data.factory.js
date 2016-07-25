(function () {
    'use strict';

    angular
        .module('fedramp.models')
        .factory('AssessorData', AssessorDataFactory);

    AssessorDataFactory.$inject = [];

    function AssessorDataFactory () {
        return AssessorData;

        /**
         * The raw assessors data model with opinionated transformations
         * @constructor
         * @memberof Models
         */
        function AssessorData (options) {
            // Scope `this` to self
            var self = this;

            var mapping = {
                'name': 'name',
                'Accreditation_Date' : 'accreditationDate'
            };

            /**
             * Assessor name
             * @member {string}
             * @memberof Models.AssessorData
             */
            self.name = '';

            /**
             * Assessor accreditation date
             * @member {Date}
             * @memberof Models.AssessorData
             */
            self.accreditationDate = '';

            /**
             * Initialize the assessor data object.
             *
             * @param {object} options
             *  A dictionary of options to configure the assessor
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
                    self[key] = options[x];
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
                var id = '' + self.name + self.accreditationDate;
                if (id.length === 0) {
                    return null;
                }
                return id;
            };

            return self.init(options);
        }

    }
})();
