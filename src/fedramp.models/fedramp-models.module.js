/**
 * @namespace Models
 */
(function () {
    'use strict';

    angular
        .module('fedramp.models', [])
        .run(run);

    run.$inject = ['$log'];

    function run ($log) {
        $log.debug('fedramp.model module initializing');
    }
})();
