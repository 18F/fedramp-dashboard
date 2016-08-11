/**
 * @namespace Services
 */
(function () {
    'use strict';

    angular
        .module('fedramp.services', ['fedramp.models'])
        .constant('dataUrl', 'https://raw.githubusercontent.com/18F/fedramp-data/master/data/data.json')
        .constant('dictionaryUrl', 'https://raw.githubusercontent.com/18F/fedramp-data/master/dictionary/dictionary.json')
        .run(run);

    run.$inject = ['$log'];

    function run ($log) {
        $log.debug('fedramp.services module initializing');
    }
})();
