(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('downloadCsv', {
            transclude: true,
            template: '<a href="{{controller.downloadUrl}}" download="{{controller.filename()}}" ng-click="controller.download()"><ng-transclude/></a>',
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

        /**
         * Listens when updates are made to content. Prepares the download
         * url when updates come in.
         */
        function $onChanges(changes){
            $log.debug(changes);
            prepareDownload();
        }


        /**
         * Generates the appropriate csv content and blob and sets it on the downloadUrl
         */
        function prepareDownload(){
            var csv = CsvService.toCsv(CsvService.flatten(self.content));
            if (csv) {
                var downloadBlob = new Blob([csv], {type: 'text/csv;charset=utf-8;' });
                self.downloadUrl = window.URL.createObjectURL(downloadBlob);
            }
        }

        /**
         * Filters and transforms data for download
         * @public
         * @memberof Components.DownloadCsv
         */
        function download () {
            $log.info('Download clicked');

            if (navigator.msSaveBlob && downloadBlob) {
                // IE 11 and Edge
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

        // self.$onInit = function () {};
        // self.$onChanges = function (changes) {};
        // self.$onDestroy = function () {};
        // self.$postLink = function () {};
    }
})();
