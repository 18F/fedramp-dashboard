(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .service('DataService', DataService);

    DataService.$inject = ['$log', 'StorageData', 'Data', 'DatasourceService', 'dataUrl'];

    /**
     * @constructor
     * @memberof Services
     */
    function DataService ($log, StorageData, Data, DatasourceService, dataUrl) {
        var self = this;

        /**
         * Issue a GET request for the given URL.
         * @public
         * @memberof Services.DataService
         *
         * @returns
         *  The response as a promise
         */
        self.pull = function () {
            return DatasourceService.pull(dataUrl).then(function (response) {
                let meta = response.meta;
                let data = response.data;
                let storage = new StorageData({Assessors: data.Assessors});
                storage.clear();

                for (let i = 0; i < data.Providers.length; i++) {
                    let d = new Data(data.Providers[i]);
                    storage.update(d.hash(), d);
                }

                return storage;
            });
        };
    }
})();
