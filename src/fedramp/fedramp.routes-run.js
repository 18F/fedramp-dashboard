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
        // Params for a route
        var params = {};

        // Options for a particular route
        var routeOptions = {};

        // Used to exclude all states in home
        var STATE_REGEX = /^fedramp.app.(?!home)/g;

        /**
         * On the start of every state change, store location params and options locally. Currently, ui-router 
         * does not have a mechanism to forward query parameters.
         */
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
            params = $location.search();
            routeOptions = options;
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {
            // We check if the state we're coming from is NOT a child of the fedramp.app.home. Items that
            // match would be all information and comparison pages. When we do match, we automatically load
            // the query params that were saved in the $stateChangeStart event.
            var match = fromState.name.match(STATE_REGEX);
            if(match) {
                // We check if the removeParams: <boolean> was defined for a particular route change.
                if(!routeOptions.removeParams){
                    $location.search(params);
                } else {
                    $location.search({});
                }
            }
        });
    }

})();
