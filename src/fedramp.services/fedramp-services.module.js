/**
 * @namespace Services
 */
(function () {
    'use strict';

    angular
        .module('fedramp.services', ['fedramp.models'])
        .run(run);

    run.$inject = ['$log'];

    function run ($log) {
        $log.debug('fedramp.services module initializing');
    }
})();
