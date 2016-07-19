(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('SitemapController', SitemapController);

    SitemapController.$inject = ['$log', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function SitemapController ($log, fedrampData, helperService) {
        var self = this;

        /**
         * All providers in the system
         *
         * @member {array}
         * @memberof Controllers.SitemapController
         */
        self.providers = fedrampData.providers();

        /**
         * All products in the system
         *
         * @member {array}
         * @memberof Controllers.SitemapController
         */
        self.products = fedrampData.products();

        /**
         * All agencies in the system
         *
         * @member {array}
         * @memberof Controllers.SitemapController
         */
        self.agencies = fedrampData.agencies();

        /**
         * All assessors in the system
         *
         * @member {array}
         * @memberof Controllers.SitemapController
         */
        self.assessors = fedrampData.assessors();

        /**
         * The current date
         *
         * @member {string}
         * @memberof Controllers.SitemapController
         */
        self.today = helperService.today();

        /**
         * Helper to slugify a string for a URL
         *
         * @member {function}
         * @memberof Controllers.SitemapController
         */
        self.slugify = helperService.slugify;
    }
})();
