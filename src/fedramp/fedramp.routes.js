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
            // .state('fedramp.home.providers', {
            //     url: '/providers',
            //     templateUrl: 'src/fedramp/home/providers.html',
            //     controller: 'ProviderController as controller'
            // })
            // .state('fedramp.home.provider', {
            //     url: '/provider/:name',
            //     templateUrl: 'src/fedramp/home/provider.html',
            //     controller: 'ProviderInformationController as controller'
            // })
            // .state('fedramp.home.provider.comparison', {
            //     url: '/:first/versus/:second',
            //     templateUrl: 'src/fedramp/home/provider-comparison.html',
            //     controller: 'ProviderComparisonController as controller'
            // })

            .state('fedramp.home.products', {
                url: '/products',
                templateUrl: 'src/fedramp/home/products.html',
                controller: 'ProductsController as controller'
            })
            .state('fedramp.product', {
                url: '/product',
                templateUrl: 'src/fedramp/home/product.html'
            })
            .state('fedramp.product.information', {
                url: '/:name',
                templateUrl: 'src/fedramp/home/product-information.html',
                controller: 'ProductInformationController as controller'
            })
            .state('fedramp.product.comparison', {
                url: '/:first/versus/:second',
                templateUrl: 'src/fedramp/home/product-comparison.html',
                controller: 'ProductComparisonController as controller'
            });

            // .state('fedramp.home.agency', {
            //     url: '/agency',
            //     templateUrl: 'src/fedramp/home/agency.html',
            //     controller: 'AgencyController as controller'
            // })
            // .state('fedramp.home.agency.information', {
            //     url: '/:name',
            //     templateUrl: 'src/fedramp/home/agency-information.html',
            //     controller: 'AgencyInformationController as controller'
            // })
            // .state('fedramp.home.agency.information.comparison', {
            //     url: '/:first/versus/:second',
            //     templateUrl: 'src/fedramp/home/agency-comparison.html',
            //     controller: 'AgencyComparisonController as controller'
            // })
            // .state('fedramp.home.assessor', {
            //     url: '/assessor',
            //     templateUrl: 'src/fedramp/home/assessor.html',
            //     controller: 'AssessorController as controller'
            // })
            // .state('fedramp.home.assessor.information', {
            //     url: '/:name',
            //     templateUrl: 'src/fedramp/home/assessor-information.html',
            //     controller: 'AssessorInformationController as controller'
            // })
            // .state('fedramp.home.assessor.information.comparison', {
            //     url: '/:first/versus/:second',
            //     templateUrl: 'src/fedramp/home/assessor-comparison.html',
            //     controller: 'AssessorComparisonController as controller'
            // });

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
