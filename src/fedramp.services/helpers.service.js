(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .service('helperService', HelperService);

    HelperService.$inject = ['$log', '$location'];

    /**
     * @constructor
     * @memberof Services
     */
    function HelperService ($log, $location) {
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

        /**
         * Scrolls to an anchor
         * @public
         * @memberof Services.HelperService
         *
         * @param {string} anchor
         *  The anchor element's ID
         */
        self.scrollTo = function (anchor) {
            if (anchor) {
                // Minor delay so most of the page is rendered.
                setTimeout(function () {
                    let el = document.getElementById(anchor);
                    if (!el) {
                        return;
                    }
                    
                    let y = el.offsetTop;
                    let node = el;

                    while (node.offsetParent && node.offsetParent != document.body) {
                        node = node.offsetParent;
                        y += node.offsetTop;
                    }

                    scrollTo(0, y);
                }, 100);
            }
        };

        /**
         * Navigate to a given URL
         * @public
         * @memberof Services.HelperService
         *
         * @param {string} url
         *  The URL to navigate the browser to
         */
        self.navigateTo = function (url) {
            $location.url(url);
        };

        /**
         * Get the query string from the location search
         * @public
         * @memberof Services.HelperService
         *
         * @returns
         *  The query string
         */
        self.queryString = function () {
            let query = '';
            let search = $location.search();

            for (let n in search) {
                if (query.length > 0) {
                    query += '&';
                }
                query += n + '=' + search[n];
            }

            if (query.length > 0) {
                query = '?' + query;
            }

            return query;
        };
    }
})();
