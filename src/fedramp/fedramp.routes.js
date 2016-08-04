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
                    /**
                     * JF - Note a few changes. 
                     *
                     * tl;dr
                     * fedrampData can now be injected anywhere. It's not only limited to state controllers now.
                     *
                     * Long version:
                     *
                     * The key 'fedrampData' within the resolve property
                     *
                     * resolve : {
                     *     fedrampData: [function{}]
                     * }
                     *
                     * is different than the injected provider 'fedrampData' being passed into the function below.
                     *
                     * ['..', 'fedrampData', function(..., fedrampData) {
                     *
                     * }
                     *
                     * UI-router resolves can only be injected into controllers bound to a particular state. So this 
                     * prevents you from injecting state based resolves into components, directives or service/factories. 
                     * For instance, previously, if you wanted to inject the result of fedrampData 
                     * into a component, you would get an error. 
                     *
                     * However, to mitigate this, we can take advantage of the fact that services in angular are singletons. 
                     * So we inject an actual service called fedrampData and call load() on it. This will then take the 
                     * properties/methods of storage and merge them into fedrampData (as well as wrap caching behavior. 
                     * See {@link Services.FedrampDataProvider} for details). 
                     *
                     * So now, we end up with a single fedrampData that contains all our storage information that can be injected anywhere.
                     *
                     * You'll notice that in the DataService.pull() promise, we load the fedrampData object and then return that 
                     * object. So here, we're telling ui-router that for STATE BASED controllers that inject the fedrampData 
                     * resolve (not the service), to simply point it to our service. 
                     *                    
                     *
                     */
                    fedrampData: ['DataService', 'fedrampData', function (DataService, fedrampData) {
                        return DataService.pull().then(function (storage) {

                            // Store it in service so that it is accessible by any one who injects fedrampData.
                            fedrampData.load(storage);
                            return fedrampData;
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

            // Product States
            .state('fedramp.app.home.products', {
                url: '/products',
                templateUrl: 'src/templates/home/products.html',
                controller: 'ProductsController as controller'
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
                controller: 'AgenciesController as controller'
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
                controller: 'AssessorsController as controller'
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
            })
            .state('fedramp.app.dictionary', {
                url: '/dictionary',
                template: '<dictionary></dictionary>'
            });
    }
})();
