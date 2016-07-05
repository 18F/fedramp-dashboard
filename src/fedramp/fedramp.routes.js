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
                templateUrl: 'src/fedramp/fedramp.html',
                resolve: {
                    fedrampData: FedRampData
                }
            })
            .state('fedramp.home', {
                url: '/',
                templateUrl: 'src/fedramp/home/home.html',
                controller: 'HomeController as homeController'
            })
            .state('fedramp.home.provider', {
                url: '/provider',
                templateUrl: 'src/fedramp/home/provider.html',
                controller: 'ProviderController as controller'
            })
            .state('fedramp.home.product', {
                url: '/product',
                templateUrl: 'src/fedramp/home/product.html',
                controller: 'ProductController as controller'
            })
            .state('fedramp.home.agency', {
                url: '/agency',
                templateUrl: 'src/fedramp/home/agency.html',
                controller: 'AgencyController as controller'
            })
            .state('fedramp.home.assessor', {
                url: '/assessor',
                templateUrl: 'src/fedramp/home/assessor.html',
                controller: 'AssessorController as controller'
            });

        /**
         * Retrieves the providers for a particular day
         */
        FedRampData.$inject = ['DataService'];
        function FedRampData (DataService) {
            return DataService.pull().then(function (storage) {
                return storage;
            });
        }
    }
})();
