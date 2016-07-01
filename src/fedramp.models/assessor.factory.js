(function () {
    'use strict';

    angular
        .module('fedramp.models')
        .factory('Assessor', AssessorFactory);

    AssessorFactory.$inject = [];

    function AssessorFactory () {
        /**
         * The independent assessor
         * @constructor
         * @memberof Models
         */
        function Assessor (options) {
            // Scope `this` to self
            var self = this;

            self.type = 'assessor';
            self.name = '';
            self.reuses = 0;
            self.providers = [];
            self.products = [];
            self.agencies = [];
            self.pointOfContact = '';
            self.email = '';
            self.url = '';
        }

        return Assessor;
    }
})();
