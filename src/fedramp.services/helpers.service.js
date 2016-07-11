(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .service('helperService', HelperService);

    HelperService.$inject = ['$log'];

    /**
     * @constructor
     * @memberof Services
     */
    function HelperService ($log) {
        var self = this;
        
        /**
         * Takes a string and creates a string in slug format for URLs
         * @public
         * @memberof Services.HelperService
         *
         * @param {string} s
         *  The string
         *
         * @returns
         *  A slugified string
         */
        self.slugify = function (s) {
            return s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        };

        /**
         * Creates a formatted date string
         * @public
         * @memberof Services.HelperService
         *
         * @returns
         *  Today's date formatting as YYYY/mm/dd
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

        /**
         * Creates a formatted date string
         * @public
         * @memberof Services.HelperService
         *
         * @param {string} str
         *  The date in string format
         *
         * @returns
         *  Today's date formatting as mm/dd/YYYY
         */
        self.toDate = function (str) {
            if (!str) {
                return '';
            }
            
            var d = new Date(str);
            var dd = d.getDate();
            var mm = d.getMonth() + 1;
            var yyyy = d.getFullYear();

            if (dd < 10) {
                dd = '0' + dd;
            } 

            if (mm < 10) {
                mm = '0' + mm;
            } 

            return mm + '/' + dd + '/' + yyyy;
        };
    }
})();
