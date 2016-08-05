(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('downloadCsv', {
            templateUrl: 'src/templates/components/download-csv.html',
            controller: DownloadCsv,
            controllerAs: 'controller',
            bindings: {
                // Contains array of information to be transformed into csv
                content: '<'
            }
        });

    DownloadCsv.$inject = ['$log', 'CsvService'];

    /**
     * @constructor
     * @memberof Components
     */
    function DownloadCsv ($log, CsvService) {
        var self = this;

        self.$onChanges = $onChanges;
        self.download = download;
        self.filename = filename;
        self.disabled = false;

        /**
         * Listens when updates are made to content. Prepares the download
         * url when updates come in.
         */
        function $onChanges (changes) {
            prepareDownload();
        }

        /**
         * Generates the appropriate csv content and blob and sets it on the downloadUrl
         */
        function prepareDownload () {
            self.disabled = false;

            let csv = CsvService.toCsv(CsvService.flatten(self.content));
            if (csv) {
                let downloadBlob = new Blob([csv], {type: 'text/csv;charset=utf-8;' });
                self.downloadUrl = window.URL.createObjectURL(downloadBlob);
            } else {
                // Disable button if there is no data
                self.disabled = true;
            }
        }

        /**
         * Filters and transforms data for download
         * @public
         * @memberof Components.DownloadCsv
         */
        function download () {
            // IE 11 and Edge
            if (navigator.msSaveBlob && downloadBlob) {
                navigator.msSaveBlob(downloadBlob, self.filename());
            }
        }

        /**
         * Generates the file name to be used when downloading the data
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  A file name in the format "fedramp-YYYY-mm-dd.csv"
         */
        function filename (date) {
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
        }
    }
})();
