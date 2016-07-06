(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('AgenciesController', AgenciesController);

    AgenciesController.$inject = ['$log', 'agencies'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function AgenciesController ($log, agencies) {
        var self = this;
        $log.debug(agencies);

        self.agencies = agencies;
    }
})();
