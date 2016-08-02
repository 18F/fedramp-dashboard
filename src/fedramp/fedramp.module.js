/**
 * @namespace Controllers
 */
(function () {
    'use strict';

    angular
        .module('fedramp', [
            'ui.router',
            'ngSticky',
            'fedramp.models',
            'fedramp.services',
            'fedramp.components'
        ])
        .config(['$compileProvider', 'fedrampDataProvider', function ($compileProvider, fedrampDataProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob|data):/);
            $compileProvider.debugInfoEnabled(false);
            fedrampDataProvider.defaults.cache = true;
        }])
        .run(run);

    run.$inject = ['$log','$rootScope'];

    function run ($log, $rootScope) {
        $log.debug('fedramp module initializing');
        $rootScope.$on("$stateChangeError", $log.debug.bind($log));
    }
})();
