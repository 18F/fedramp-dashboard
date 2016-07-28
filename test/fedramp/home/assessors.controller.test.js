describe('AssessorsController with no data', function () {
    'use strict';

    var assessorsController;
    var filter;
    var product;
    var log;

    beforeEach(function () {
        module('fedramp');
        inject(function (_$filter_, $controller, $injector) {
            filter = _$filter_;
            log = $injector.get('$log');
            assessorsController = $controller('AssessorsController', {
                $log: log,
                assessors: []
            });
        });
    });

    it('Assessors object defined', function () {
        expect(assessorsController.assessors).toBeDefined();
    });
});
