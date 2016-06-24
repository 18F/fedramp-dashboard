(function () {
    'use strict';

    angular
        .module('fedramp')
        .config(routeConfig);

    // Add items to inject for safe minification
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    /**
     * Configures the routes and views for the FedRAMP application
     */
    function routeConfig ($stateProvider, $urlRouterProvider) {
        // Go to root if something goes wrong
        $urlRouterProvider.otherwise('/');

        // Routes
        $stateProvider
            .state('fedramp', {
                abstract: true,
                template: '<ui-view></ui-view>',
                resolve: {
                    providers: function (ProviderService) {
                        return ProviderService.pull().then(function (providers) {
                            return providers;
                        });
                    }
                }
            })
            .state('fedramp.home', {
                url: '/',
                templateUrl: 'src/fedramp/home/home.html',
                controller: 'HomeController as homeController'
            });
    }
})();
