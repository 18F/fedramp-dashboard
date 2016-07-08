(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('ProvidersController', ProvidersController);

    ProvidersController.$inject = ['$log', 'providers'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function ProvidersController ($log, providers) {
        var self = this;
        self.providers = providers;
        $log.debug(providers);
    }
})();
