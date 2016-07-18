(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'fedrampData', 'CsvService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function HomeController ($log, fedrampData, CsvService) {
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
        self.totalAuthorized = function () {
            return fedrampData.products().length;
        };

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
    }
})();
