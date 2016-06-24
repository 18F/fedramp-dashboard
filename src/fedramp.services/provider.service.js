(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .service('ProviderService', ProviderService);

    ProviderService.$inject = ['$log', 'StorageManager', 'StorageProvider', 'Provider', 'DatasourceService'];

    /**
     * @constructor
     * @memberof Services
     */
    function ProviderService ($log, StorageManager, StorageProvider, Provider, DatasourceService) {
        var self = this;
        var dataUrl = 'https://raw.githubusercontent.com/18F/fedramp-micropurchase/master/data/data.json';

        /**
         * Issue a GET request for the given URL.
         * @public
         * @memberof Services.ProviderService
         *
         * @returns
         *  The response as a promise
         */
        self.pull = function () {
            return DatasourceService.pull(dataUrl).then(function (providerData) {
                var meta = providerData.meta;
                var data = providerData.data;
                var sp = new StorageProvider();

                for (var i = 0; i < data.length; i++) {
                    var p = new Provider(data[i]);
                    sp.update(p.hash(), p);
                }

                return sp.all();
            });
        };
    }
})();
