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
