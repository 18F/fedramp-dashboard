(function () {
    'use strict';

    angular
        .module('fedramp')
        .run(runRoute);

    runRoute.$inject = ['$rootScope', '$location', 'helperService'];

    /**
     * Gets executed once when the application is first bootstrapped. Sets up event listeners
     * for ui-router state changes.
     */
    function runRoute($rootScope, $location, helperService){
        var params = {};

        // Used to exclude all states in home
        var STATE_REGEX = /^fedramp.app.(?!home)/g;

        /**
         * On the start of every state change, store location params locally
         */
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            params = $location.search();
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            // We check if the state we're coming from is NOT a child of the fedramp.app.home. Items that
            // match would be all information and comparison pages. When we do match, we automatically load
            // the query params that were saved in the $stateChangeStart event.
            var match = fromState.name.match(STATE_REGEX);
            if(match) {
                $location.search(params);
            }
        });
    }

})();
