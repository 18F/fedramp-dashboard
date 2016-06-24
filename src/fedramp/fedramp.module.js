(function () {
    'use strict';

    angular
        .module('fedramp', [
            'ui.router',
            'fedramp.models',
            'fedramp.services'
        ])
        .run(run);

    run.$inject = ['$log','DatasourceService', 'StorageManager', 'StorageProvider', 'ProviderService'];

    function run ($log, DatasourceService, StorageManager, StorageProvider, ProviderService) {
        $log.debug('FedRAMP Module Initializing');
    }
})();
