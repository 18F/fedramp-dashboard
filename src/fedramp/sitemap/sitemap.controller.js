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
        self.providers = fedrampData.providers();
        self.products = fedrampData.products();
        self.agencies = fedrampData.agencies();
        self.assessors = fedrampData.assessors();
        self.today = helperService.today();
        self.slugify = helperService.slugify;
    }
})();
