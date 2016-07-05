(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .service('helperService', HelperService);

    HelperService.$inject = ['$log'];

    function HelperService ($log) {
        var self = this;
        
        self.slugify = function (s) {
            return s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        };
    }
})();
