/**
 * @namespace Controllers
 */
(function () {
    'use strict';

    angular
        .module('fedramp', [
            'ui.router',
            'ngAria',
            'ngSticky',
            'fedramp.models',
            'fedramp.services',
            'fedramp.components'
        ])
        .config(['$compileProvider', 'fedrampDataProvider', function ($compileProvider, fedrampDataProvider) {
            // Allows the use of blob/data for exporting csv          
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob|data):/);

            // Removes debug css classes and other angular information that is written to the DOM
            $compileProvider.debugInfoEnabled(false);

            // Enables caching within application for single user session. Goes away
            // after user refreshes
            fedrampDataProvider.defaults.cache = true;
        }])
        .run(run);

    run.$inject = ['$log','$rootScope'];

    function run ($log, $rootScope) {
        $log.debug('fedramp module initializing');
        $rootScope.$on("$stateChangeError", $log.debug.bind($log));
    }
})();
