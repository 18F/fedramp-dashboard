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
         * Display the tiles in an expanded format
         * @member {boolean}
         * @memberof Controllers.HomeController
         **/
        self.expandTiles = true;
        
        /**
         * The download URL
         * @member {string}
         * @memberof Controllers.HomeController
         */
        self.downloadUrl = '#';

        /**
         * Filters and transforms data for download
         * @public
         * @memberof Controllers.HomeController
         */
        self.download = function () {
            // IE 11 and Edge
            if (navigator.msSaveBlob && downloadBlob) {
                navigator.msSaveBlob(downloadBlob, self.filename());
            }
        };

        /**
         * Total authorized cloud service providers
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total authorized cloud service providers
         */
        self.totalAuthorized = Cache.wrap('totalAuthorized')(function () {
            return fedrampData.products().filter(x => x.designation !== 'In-Process').length;
        });

        /**
         * The cost savings at a fixed rate per re-use
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total cost savings
         */
        self.totalCostSavings = function () {
            return Number(250000 * self.leveragedAtos()).toLocaleString('en');
        };

        /**
         * The total leveraged ATO letters from authorized cloud service providers
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total leveraged ATO letters
         */
        self.leveragedAtos = function () {
            let products = fedrampData.products();
            if (products.length) {
                return products.map(x => x.reuses).reduce((p, c) => p + c);
            }
            return 0;
        };

        /**
         * The total number of products that are In-Process
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total number of in-process products
         */
        self.totalInProcess = Cache.wrap('totalInProcess')(function(){
            return fedrampData.products().filter(x => x.designation === 'In-Process').length;
        });

        /**
         * The total number of products that are Ready
         * TODO: Need to validate how this will be calculated
         *
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total number of fedramp ready products
         */
        self.totalReady = Cache.wrap('totalReady')(function(){
            return 0;
        });


        /**
         * Takes user to products grid and applies status filter.
         * @public
         * @memberof Controllers.HomeController
         */
        self.filterProducts = function(status){
            $state.go('fedramp.app.home.products', {}, {
                reload: true,
                queryParams: {
                    status: status
                }
            }).then(function(){
                helperService.scrollTo('products-grid');
            });
        };

    }
})();
