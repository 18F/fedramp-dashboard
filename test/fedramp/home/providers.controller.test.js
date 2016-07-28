describe('ProvidersController controller with no data', function () {
    'use strict';

    var providerController;
    var filter;
    var product;
    var log;

    beforeEach(function () {
        module('fedramp', 'fedramp.services');
        inject(function (_$filter_, $controller, $injector) {
            filter = _$filter_;
            providerController = $controller('ProvidersController', { 
                $log: {},
                providers: []
            });
        });
    });

    it('Loads reuse range options ', function () {
        expect(providerController.reuseRangeOptions()).toBeDefined();
    });

    it('Finds item that matches custom reuse filter', function () {
        var found = providerController.reuseRangeFilter(
            {reuses: 1},
            0,
            [],
            [{value: {min: 0, max: 5}}]);

        expect(found).toBeDefined();
    });
});
