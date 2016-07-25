/**
 * @namespace Services
 */
(function () {
    'use strict';

    angular
        .module('fedramp.services', ['fedramp.models'])
        // Path to data.json
        .constant('dataUrl', 'https://raw.githubusercontent.com/18F/fedramp-data/new-schema/data/data.json')
        .run(run);

    run.$inject = ['$log'];

    function run ($log) {
        $log.debug('fedramp.services module initializing');
    }
})();
