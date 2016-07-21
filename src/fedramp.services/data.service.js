(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .service('DataService', DataService);

    DataService.$inject = ['$log', 'StorageManager', 'StorageData', 'Data', 'DatasourceService'];

    /**
     * @constructor
     * @memberof Services
     */
    function DataService ($log, StorageManager, StorageData, Data, DatasourceService) {
        var self = this;
        var dataUrl = 'https://raw.githubusercontent.com/18F/fedramp-data/master/data/data.json';

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
                let storage = new StorageData();
                storage.clear();

                for (let i = 0; i < data.length; i++) {
                    let d = new Data(data[i]);
                    storage.update(d.hash(), d);
                }

                return storage;
            });
        };
    }
})();
