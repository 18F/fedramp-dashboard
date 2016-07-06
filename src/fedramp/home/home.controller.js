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
        var lastFilterType = '';
        var downloadBlob = null;
        var rawData = fedrampData.all();

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
         * Sort by property.
         * @member {string}
         * @memberof Controllers.HomeController
         **/
        self.sortBy = 'name';

        /**
         * Sort direction is ascending
         * @member {boolean}
         * @memberof Controllers.HomeController
         **/
        self.sortAscending = true;
        
        /**
         * The data after filters have been applied
         * @member {array}
         * @memberof Controllers.HomeController
         */
        self.filteredData = rawData;

        /**
         * The type of filter applied to the data
         * @member {string}
         * @memberof Controllers.HomeController
         */
        self.filterType = '';

        /**
         * The filter specific options
         * @member {array}
         * @memberof Controllers.HomeController
         */
        self.filterOptions = [];

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
            return rawData && rawData.length > 0;
        };

        /**
         * Applies the filter(s) to the raw data set
         * @public
         * @memberof Controllers.HomeController
         *
         * @param {string} type
         *  (optional) The filter type
         * @param {string} filter
         *  (optional) The filter value
         */
        self.applyFilter = function (type, filter) {
            type = type ? type : self.filterType;
            filter = filter ? filter : self.filter;

            // If there is no filter applied then we show everything
            if (!type || !filter) {
                self.filteredData = rawData;
                sortData();
                return;
            }

            // Place any items matching the filter in an array so we
            // can replace the filtered data in bulk and reduce UI
            // flickering.
            var prefiltered = [];

            switch (type) {
            case 'csp':
                for (let i = 0; i < rawData.length; i++) {
                    let p = rawData[i];
                    if (p.name.indexOf(filter) !== -1) {
                        prefiltered.push(p);
                    }
                }
                break;

            case 'cso':
                for (let i = 0; i < rawData.length; i++) {
                    let p = rawData[i];
                    if (p.pkg.indexOf(filter) !== -1) {
                        prefiltered.push(p);
                    }
                }
                break;

            case 'agency':
                for (let i = 0; i < rawData.length; i++) {
                    let p = rawData[i];
                    if ((p.sponsoringAgency + p.sponsoringSubagency).indexOf(filter) !== -1) {
                        prefiltered.push(p);
                    } else {
                        // NOTE: Determine if it is necessary to check the leveraged ATO letters
                        for (let j = 0; j < p.atoLetters.length; j++) {
                            let l = p.atoLetters[j];
                            if ((l.authorizingAgency + l.authorizingSubagency).indexOf(filter) !== -1) {
                                prefiltered.push(p);
                                break;
                            }
                        }
                    }
                }
                break;

            case '3pao':
                for (let i = 0; i < rawData.length; i++) {
                    let p = rawData[i];
                    if (p.independentAssessor.indexOf(filter) !== -1) {
                        prefiltered.push(p);
                    }

                    for (let j = 0; j < p.atoLetters.length; j++) {
                        let l = p.atoLetters[j];
                        if (l.independentAssessor.indexOf(filter) !== -1) {
                            prefiltered.push(p);
                            break;
                        }
                    }
                }
                break;
            }

            self.filteredData = prefiltered;
            sortData();
            self.downloadUrl = '#';
            downloadBlob = null;

            // Parse the data here
            var csv = CsvService.toCsv(CsvService.flatten(prefiltered));
            if (csv) {
                downloadBlob = new Blob([csv], {type: 'text/csv;charset=utf-8;' });
                self.downloadUrl = window.URL.createObjectURL(downloadBlob);
            }
        };

        /**
         * Toggles the checked state for the major filters
         * @public
         * @memberof Controllers.HomeController
         *
         * @param {string} type
         *  (optional) The filter type
         */
        self.toggleFilter = function (type) {

            self.filterType = type;

            if (lastFilterType === type) {
                self.filterType = '';
                return;
            }

            lastFilterType = type;
            var options = [];

            switch (type) {
            case 'csp':
                fedrampData.providers().forEach(x => options.push(x.name));
                break;

            case 'cso':
                fedrampData.products().forEach(x => options.push(x.name));
                break;

            case 'agency':
                fedrampData.agencies().forEach(x => options.push(x.name));
                break;

            case '3pao':
                fedrampData.assessors().forEach(x => options.push(x.name));
                break;
            }

            self.filterOptions = options;
        };

        /**
         * Filters and transforms data for download
         * @public
         * @memberof Controllers.HomeController
         */
        self.download = function () {
            $log.info('Download clicked');

            if (navigator.msSaveBlob && downloadBlob) {
                // IE 11 and Edge
                navigator.msSaveBlob(downloadBlob, self.filename());
            }
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

        /**
         * Sorts the filtered data
         */
        function sortData () {
            if (!self.sortBy || self.sortBy.length === 0) {
                return;
            }
            
            self.filteredData = self.filteredData.sort(function (a, b) {
                if (a[self.sortBy] === b[self.sortBy]) {
                    return 0;
                }

                if (self.sortAscending) {
                    return a[self.sortBy] < b[self.sortBy] ? -1 : 1;
                }
                return a[self.sortBy] > b[self.sortBy] ? -1 : 1;
            });
        }
    }
})();
