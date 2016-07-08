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

});
