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

        /**
         * Creates a formatted date string
         * @private
         * @memberof Models.Settings
         *
         * @returns
         *  Today's date formatting as mm/dd/YYYY
         */
        self.today = function () {
            var d = new Date();
            var dd = d.getDate();
            var mm = d.getMonth() + 1;
            var yyyy = d.getFullYear();

            if (dd < 10) {
                dd = '0' + dd;
            } 

            if (mm < 10) {
                mm = '0' + mm;
            } 

            return yyyy + '/' + mm + '/' + dd;
        };
    }
})();
