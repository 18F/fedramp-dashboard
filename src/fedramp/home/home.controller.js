(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'fedrampData', 'CsvService', 'Cache', '$state', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function HomeController ($log, fedrampData, CsvService, Cache, $state, helperService) {
        var self = this;

        /**
         * The title displayed on the home page
         * @member {string}
         * @memberof Controllers.HomeController
         */
        self.title = 'FedRAMP';

        /**
         * Total authorized cloud service providers
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total authorized cloud service providers
         */
        self.totalAuthorized = Cache.wrap('totalAuthorized')(function () {
            return fedrampData.products().filter(x => x.designation === 'Compliant').length;
        });

        /**
         * The total number of products that are In-Process
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total number of in-process products
         */
        self.totalInProcess = Cache.wrap('totalInProcess')(function () {
            return fedrampData.products().filter(x => x.designation === 'In Process').length;
        });

        /**
         * The total number of products that are Ready
         *
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total number of fedramp ready products
         */
        self.totalReady = Cache.wrap('totalReady')(function () {
            return fedrampData.products().filter(x => x.designation === 'FedRAMP Ready').length;
        });

        /**
         * Takes user to products grid and applies status filter.
         * @public
         * @memberof Controllers.HomeController
         */
        self.filterProducts = function (status) {
            $state.go('fedramp.app.home.products', {}, {
                reload: true,
                queryParams: {
                    status: status
                }
            }).then(function () {
                helperService.scrollTo('products-grid');
            });
        };
    }
})();
