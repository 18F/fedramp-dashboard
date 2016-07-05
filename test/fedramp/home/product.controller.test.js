describe('ProductController controller with no data', function () {
    'use strict';

    var productController;
    var filter;
    var product;
    var log;

    beforeEach(function () {
        module('fedramp', 'fedramp.services');
        inject(function (_$filter_, $controller, $injector) {
            filter = _$filter_;
            var Product = $injector.get('Product');
            product = new Product();
            log = $injector.get('$log');

            product.name = 'App Engine';
            product.reuses = 0;
            product.provider = 'Google';
            product.agencies = ['Department of Energy'];
            product.serviceModels = ['PaaS'];


        });
    });

    it('filters with result hits', function () {
        inject(function (_$filter_, $controller, $injector) {
            var productController = $controller('ProductController', { 
                products: [product],
                $stateParams: {},
                $log: log,
                search: {
                    name: 'Google',
                    agency: 'Department of Energy',
                    serviceModel: 'PaaS'
                }
            });
            var result = filter('filter')(productController.products, productController.filterName); 
            expect(result.length).toBe(1);

            result = filter('filter')(productController.products, productController.filterAgency); 
            expect(result.length).toBe(1);

            result = filter('filter')(productController.products, productController.filterServiceModel); 
            expect(result.length).toBe(1);
        });
    });

    it('filters with no hits', function () {
        inject(function (_$filter_, _$rootScope_, $controller, $injector) {
            var $scope = {search: ''};
            var productController = $controller('ProductController', 
                {
                    $scope: $scope,
                    products: [],
                    $stateParams: {},
                    $log: log
                }
            );

            $scope.search =  {
                name: 'John'
            };

            _$rootScope_.$apply();

            var result = productController.filterName(product, 0, [product]);
            console.log(result);

        });
    });
});
