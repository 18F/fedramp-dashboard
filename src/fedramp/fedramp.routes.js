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
                url: '',
                templateUrl: 'src/fedramp/home/home.html',
                controller: 'HomeController as homeController'
            })
            .state('fedramp.home.provider', {
                url: '/provider',
                templateUrl: 'src/fedramp/home/provider.html',
                controller: 'ProviderController as controller'
            })
            .state('fedramp.home.provider.information', {
                url: '/provider/:name',
                templateUrl: 'src/fedramp/home/provider-information.html',
                controller: 'ProviderInformationController as controller'
            })
            .state('fedramp.home.provider.information.comparison', {
                url: '/provider/:first/versus/:second',
                templateUrl: 'src/fedramp/home/provider-comparison.html',
                controller: 'ProviderComparisonController as controller'
            })
            .state('fedramp.home.products', {
                url: '/products',
                templateUrl: 'src/fedramp/home/product.html',
                controller: 'ProductController as controller',
                resolve: {
                    products: ProductsResolve
                }
            })
            .state('fedramp.product', {
                url: '/product/:name',
                template: 'Some product info',

                params: {
                    // Some filter object to recreate filtes passed in from originating list
                    filters: null
                },
                resolve: {
                    filteredStuff: function($stateParams){ 
                        // Maybe pass filters from originating page?
                        // These wouldn't be from url but passed via internal params
                        //
                        // $stateParams.filter.name
                        // $stateParams.filter.agencies
                        // 
                        return null;
                    }
                }
            })
            .state('fedramp.home.product', {
                url: '/products',
                templateUrl: 'src/fedramp/home/product.html',
                controller: 'ProductController as controller'
            })
            .state('fedramp.home.product.information', {
                url: '/product/:name',
                templateUrl: 'src/fedramp/home/product-information.html',
                controller: 'ProductInformationController as controller'
            })
            .state('fedramp.home.product.information.comparison', {
                url: '/product/:first/versus/:second',
                templateUrl: 'src/fedramp/home/product-comparison.html',
                controller: 'ProductComparisonController as controller'
            })
            .state('fedramp.home.agency', {
                url: '/agency',
                templateUrl: 'src/fedramp/home/agency.html',
                controller: 'AgencyController as controller'
            })
            .state('fedramp.home.agency.information', {
                url: '/agency/:name',
                templateUrl: 'src/fedramp/home/agency-information.html',
                controller: 'AgencyInformationController as controller'
            })
            .state('fedramp.home.agency.information.comparison', {
                url: '/agency/:first/versus/:second',
                templateUrl: 'src/fedramp/home/agency-comparison.html',
                controller: 'AgencyComparisonController as controller'
            })
            .state('fedramp.home.assessor', {
                url: '/assessor',
                templateUrl: 'src/fedramp/home/assessor.html',
                controller: 'AssessorController as controller'
            })
            .state('fedramp.home.assessor.information', {
                url: '/assessor/:name',
                templateUrl: 'src/fedramp/home/assessor-information.html',
                controller: 'AssessorInformationController as controller'
            })
            .state('fedramp.home.assessor.information.comparison', {
                url: '/assessor/:first/versus/:second',
                templateUrl: 'src/fedramp/home/assessor-comparison.html',
                controller: 'AssessorComparisonController as controller'
            });

        /**
         * Retrieves producsts for Product route
         */
        ProductsResolve.$inject = ['fedrampData'];
        function ProductsResolve(fedrampData){
            return fedrampData.products();
        }

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
