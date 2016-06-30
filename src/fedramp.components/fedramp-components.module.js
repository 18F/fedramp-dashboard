/**
 * @namespace Components
 */
(function () {
    'use strict';

    angular
        .module('fedramp.components', ['fedramp.models', 'fedramp.services'])
        .run(run);

    run.$inject = ['$log'];

    function run ($log) {
        $log.debug('fedramp.components module initializing');
    }
})();
