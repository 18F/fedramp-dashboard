(function () {
    'use strict';

    angular
        .module('fedramp.models')
        .factory('Agency', AgencyFactory);

    AgencyFactory.$inject = [];

    function AgencyFactory () {
        /**
         * The agency
         * @constructor
         * @memberof Models
         */
        function Agency (options) {
            // Scope `this` to self
            var self = this;

            self.type = 'agency';
            self.name = '';
            self.reuses = 0;
            self.sponsored = 0;
            self.authorized = 0;
            self.providers = [];
            self.products = [];
            self.assessors = [];
        }

        return Agency;
    }
})();
