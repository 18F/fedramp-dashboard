/**
 * @namespace Controllers
 */
(function () {
    'use strict';

    angular
        .module('fedramp', [
            'ui.router',
            'fedramp.models',
            'fedramp.services',
            'fedramp.components'
        ])
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob|data):/);
            $compileProvider.debugInfoEnabled(false);
        }])
        .run(run);

    run.$inject = ['$log','$rootScope'];

    function run ($log, $rootScope) {
        $log.debug('fedramp module initializing');
        $rootScope.$on("$stateChangeError", $log.debug.bind($log));
    }
})();
