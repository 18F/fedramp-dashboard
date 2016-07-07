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
                templateUrl: 'src/fedramp/base.html',
                resolve: {
                    fedrampData: ['DataService', function (DataService) {
                        return DataService.pull().then(function (storage) {
                            return storage;
                        });
                    }]
                }
            })
            .state('fedramp.sitemap', {
                url: '/sitemap.xml',
                templateUrl: 'src/fedramp/sitemap/sitemap.html',
                controller: 'SitemapController as controller',
            })
            .state('fedramp.app', {
                abstract: true,
                templateUrl: 'src/fedramp/fedramp.html',
            })
            .state('fedramp.app.search', {
                url: '/search/:query',
                templateUrl: 'src/fedramp/search/search.html',
                controller: 'SearchController as controller'
            })
            .state('fedramp.app.home', {
                url: '',
                templateUrl: 'src/fedramp/home/home.html',
                controller: 'HomeController as homeController'
            })
            .state('fedramp.app.home.providers', {
                url: '/providers',
                templateUrl: 'src/fedramp/home/providers.html',
                controller: 'ProvidersController as controller',
                resolve: {
                    providers: ['fedrampData', function (fedrampData) {
                        return fedrampData.providers();
                    }]
                }
            })
            .state('fedramp.app.provider', {
                url: '/provider',
                templateUrl: 'src/fedramp/home/provider.html'
            })
            .state('fedramp.app.provider.information', {
                url: '/:name',
                templateUrl: 'src/fedramp/home/provider-information.html',
                controller: 'ProviderInformationController as controller'
            })
            .state('fedramp.app.home.provider.comparison', {
                url: '/:first/versus/:second',
                templateUrl: 'src/fedramp/home/provider-comparison.html',
                controller: 'ProviderComparisonController as controller'
            })
            .state('fedramp.app.home.products', {
                url: '/products',
                templateUrl: 'src/fedramp/home/products.html',
                controller: 'ProductsController as controller',
                resolve: {
                    products: ['fedrampData', function (fedrampData) {
                        return fedrampData.products();
                    }]
                }                
            })
            .state('fedramp.app.product', {
                url: '/product',
                templateUrl: 'src/fedramp/home/product.html'
            })
            .state('fedramp.app.product.information', {
                url: '/:name',
                templateUrl: 'src/fedramp/home/product-information.html',
                controller: 'ProductInformationController as controller'
            })
            .state('fedramp.app.product.comparison', {
                url: '/:first/versus/:second',
                templateUrl: 'src/fedramp/home/product-comparison.html',
                controller: 'ProductComparisonController as controller'
            })
            .state('fedramp.app.home.agencies', {
                url: '/agencies',
                templateUrl: 'src/fedramp/home/agencies.html',
                controller: 'AgenciesController as controller',
                resolve: {
                    agencies: ['fedrampData', function (fedrampData) {
                        return fedrampData.agencies();
                    }]
                }
            })
            .state('fedramp.app.agency', {
                url: '/agency',
                templateUrl: 'src/fedramp/home/agency.html',
            })
            .state('fedramp.app.agency.information', {
                url: '/:name',
                templateUrl: 'src/fedramp/home/agency-information.html',
                controller: 'AgencyInformationController as controller'
            })
            .state('fedramp.app.agency.information.comparison', {
                url: '/:first/versus/:second',
                templateUrl: 'src/fedramp/home/agency-comparison.html',
                controller: 'AgencyComparisonController as controller,'
            })
            .state('fedramp.app.home.assessors', {
                url: '/assessors',
                templateUrl: 'src/fedramp/home/assessors.html',
                controller: 'AssessorsController as controller',
                resolve: {
                    assessors: ['fedrampData', function (fedrampData) {
                        return fedrampData.assessors();
                    }]
                }
            })
            .state('fedramp.app.assessor', {
                url: '/assessor',
                templateUrl: 'src/fedramp/home/assessor.html'
            })
            .state('fedramp.app.assessor.information', {
                url: '/:name',
                templateUrl: 'src/fedramp/home/assessor-information.html',
                controller: 'AssessorInformationController as controller'
            })
            .state('fedramp.app.assessor.information.comparison', {
                url: '/:first/versus/:second',
                templateUrl: 'src/fedramp/home/assessor-comparison.html',
                controller: 'AssessorComparisonController as controller'
            });
    }
})();
