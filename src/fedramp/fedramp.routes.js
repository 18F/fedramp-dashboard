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
        $urlRouterProvider.otherwise('/products');

        // Routes
        $stateProvider
            .state('fedramp', {
                abstract: true,
                templateUrl: 'src/templates/base.html',
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
                templateUrl: 'src/templates/sitemap/sitemap.html',
                controller: 'SitemapController as controller',
            })
            .state('fedramp.app', {
                abstract: true,
                templateUrl: 'src/templates/fedramp.html',
            })
            .state('fedramp.app.search', {
                url: '/search/:query',
                templateUrl: 'src/templates/search/search.html',
                controller: 'SearchController as controller'
            })
            .state('fedramp.app.home', {
                templateUrl: 'src/templates/home/home.html',
                controller: 'HomeController as homeController'
            })

            // Provider States
            .state('fedramp.app.home.providers', {
                url: '/providers',
                templateUrl: 'src/templates/home/providers.html',
                controller: 'ProvidersController as controller',
                resolve: {
                    providers: ['fedrampData', function (fedrampData) {
                        return fedrampData.providers();
                    }]
                }
            })
            .state('fedramp.app.provider', {
                url: '/provider',
                templateUrl: 'src/templates/home/provider.html'
            })
            .state('fedramp.app.provider.information', {
                url: '/:name',
                templateUrl: 'src/templates/home/provider-information.html',
                controller: 'ProviderInformationController as controller'
            })
            .state('fedramp.app.provider.comparison', {
                url: '/:first/versus/:second',
                templateUrl: 'src/templates/home/provider-comparison.html',
                controller: 'ProviderComparisonController as controller'
            })

            // Product States
            .state('fedramp.app.home.products', {
                url: '/products',
                templateUrl: 'src/templates/home/products.html',
                controller: 'ProductsController as controller',
                resolve: {
                    products: ['fedrampData', function (fedrampData) {
                        return fedrampData.products();
                    }]
                }
            })
            .state('fedramp.app.product', {
                url: '/product',
                templateUrl: 'src/templates/home/product.html'
            })
            .state('fedramp.app.product.information', {
                url: '/:name',
                templateUrl: 'src/templates/home/product-information.html',
                controller: 'ProductInformationController as controller'
            })
            .state('fedramp.app.product.comparison', {
                url: '/:first/versus/:second',
                templateUrl: 'src/templates/home/product-comparison.html',
                controller: 'ProductComparisonController as controller'
            })


            // Agency States
            .state('fedramp.app.home.agencies', {
                url: '/agencies',
                templateUrl: 'src/templates/home/agencies.html',
                controller: 'AgenciesController as controller',
                resolve: {
                    agencies: ['fedrampData', function (fedrampData) {
                        return fedrampData.agencies();
                    }]
                }
            })
            .state('fedramp.app.agency', {
                url: '/agency',
                templateUrl: 'src/templates/home/agency.html',
            })
            .state('fedramp.app.agency.information', {
                url: '/:name',
                templateUrl: 'src/templates/home/agency-information.html',
                controller: 'AgencyInformationController as controller'
            })
            .state('fedramp.app.agency.comparison', {
                url: '/:first/versus/:second',
                templateUrl: 'src/templates/home/agency-comparison.html',
                controller: 'AgencyComparisonController as controller'
            })

            // Assessor States
            .state('fedramp.app.home.assessors', {
                url: '/assessors',
                templateUrl: 'src/templates/home/assessors.html',
                controller: 'AssessorsController as controller',
                resolve: {
                    assessors: ['fedrampData', function (fedrampData) {
                        return fedrampData.assessors();
                    }]
                }
            })
            .state('fedramp.app.assessor', {
                url: '/assessor',
                templateUrl: 'src/templates/home/assessor.html'
            })
            .state('fedramp.app.assessor.information', {
                url: '/:name',
                templateUrl: 'src/templates/home/assessor-information.html',
                controller: 'AssessorInformationController as controller'
            })
            .state('fedramp.app.assessor.comparison', {
                url: '/:first/versus/:second',
                templateUrl: 'src/templates/home/assessor-comparison.html',
                controller: 'AssessorComparisonController as controller'
            });
    }
})();
