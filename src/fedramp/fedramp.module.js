/**
 * @namespace Controllers
 */
(function () {
    'use strict';

    angular
        .module('fedramp', [
            'ui.router',
            'fedramp.models',
            'fedramp.services'
        ])
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob|data):/);
        }])
        .run(run);

    run.$inject = ['$log','$rootScope'];

    function run ($log, $rootScope) {
        $log.debug('FedRAMP Module Initializing');
        $rootScope.$on("$stateChangeError", $log.debug.bind($log));
    }
})();
