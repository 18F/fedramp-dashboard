(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'providers'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function HomeController ($log, providers) {
        var self = this;

        /**
         * The title displayed on the home page
         * @member {string}
         * @memberof Controllers.HomeController
         */
        self.title = 'FedRAMP';

        /**
         * The data after filters have been applied
         * @member {array}
         * @memberof Controllers.HomeController
         */
        self.filteredData = [];

        /**
         * The type of filter applied to the data
         * @member {string}
         * @memberof Controllers.HomeController
         */
        self.filterType = '';

        /**
         * The filter applied to the data
         * @member {string}
         * @memberof Controllers.HomeController
         */
        self.filter = '';

        /**
         * Determines if data is present
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  A value indicating if any data is stored
         */
        self.hasData = function () {
            return providers && providers.length > 0;
        };

        /**
         * Applies the filter(s) to the raw data set
         * @public
         * @memberof Controllers.HomeController
         */
        self.applyFilter = function (type, filter) {
            type = type ? type : self.filterType;
            filter = filter ? filter : self.filter;

            // If there is no filter applied then we show everything
            if (!type || !filter) {
                self.filteredData = providers;
                return;
            }

            // Place any items matching the filter in an array so we
            // can replace the filtered data in bulk and reduce UI
            // flickering.
            var prefiltered = [];
            var i, p, j, l;

            switch (type) {
            case 'csp':
                for (i = 0; i < providers.length; i++) {
                    p = providers[i];
                    if (p.name.indexOf(filter) !== -1) {
                        prefiltered.push(p);
                    }
                }
                break;

            case 'cso':
                for (i = 0; i < providers.length; i++) {
                    p = providers[i];
                    if (p.pkg.indexOf(filter) !== -1) {
                        prefiltered.push(p);
                    }
                }
                break;

            case 'agency':
                for (i = 0; i < providers.length; i++) {
                    p = providers[i];
                    if ((p.sponsoringAgency + p.sponsoringSubagency).indexOf(filter) !== -1) {
                        prefiltered.push(p);
                    } else {
                        // NOTE: Determine if it is necessary to check the leveraged ATO letters
                        for (j = 0; j < p.atoLetters.length; j++) {
                            l = p.atoLetters[j];
                            if ((l.authorizingAgency + l.authorizingSubagency).indexOf(filter) !== -1) {
                                prefiltered.push(p);
                                break;
                            }
                        }
                    }
                }
                break;

            case '3pao':
                // TODO: I believe the 3pao references apply to the
                // "Independent Assessor" column in the originating source.
                // If that is the case this is currently not mapped in the
                // JSON data source.
                break;
            }

            self.filteredData = prefiltered;
        };

        /**
         * Filters and transforms data for download
         * @public
         * @memberof Controllers.HomeController
         */
        self.download = function () {
            $log.info('Download clicked');
        };

        /**
         * Generates the file name to be used when downloading the data
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  A file name in the format "fedramp-YYYY-mm-dd.csv"
         */
        self.filename = function (date) {
            if (!date) {
                date = new Date();
            }
            
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();

            if (dd < 10) {
                dd = '0' + dd;
            } 

            if (mm < 10) {
                mm = '0' + mm;
            } 

            return 'fedramp-' + yyyy + '-' + mm + '-' + dd + '.csv';
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
            var totalAuthorized = 0;

            for (var i = 0; i < providers.length; i++) {
                if (providers[i].active === 'Active') {
                    totalAuthorized++;
                }
            }

            return totalAuthorized;
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
            var leveragedAtos = 0;
            var costSavings = 0;
            var estimatedSavings = 250000;

            for (var i = 0; i < providers.length; i++) {
                var p = providers[i];
                for (var j = 0; j < p.atoLetters.length; j++) {
                    if (p.atoLetters[j].active === 'Active') {
                        leveragedAtos++;
                    }
                }
            }

            costSavings = estimatedSavings * leveragedAtos;
            return Number(costSavings).toLocaleString('en');
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
            var leveragedAtos = 0;
            var costSavings = 0;

            for (var i = 0; i < providers.length; i++) {
                var p = providers[i];
                if (p.active !== 'Active') {
                    continue;
                }
                
                for (var j = 0; j < p.atoLetters.length; j++) {
                    if (p.atoLetters[j].active === 'Active') {
                        leveragedAtos++;
                    }
                }
            }

            return leveragedAtos;
        };
    }
})();
