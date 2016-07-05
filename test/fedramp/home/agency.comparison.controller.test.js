describe('Agency comparison controller', function () {
    'use strict';

    var StorageData;
    var Data;
    var controller;
    var storage;
    var stateParams;
    var helperService;

    beforeEach(function () {
        module('fedramp', 'fedramp.services');
        inject(function ($controller, $injector) {
            StorageData = $injector.get('StorageData');
            Data = $injector.get('Data');
            helperService = $injector.get('helperService');

            stateParams = $injector.get('$stateParams');
            stateParams.first = 'department-of-the-treasury';
            stateParams.second = 'department-of-the-treasury';

            var data = new Data(TestData.Letters[0]);
            storage = new StorageData();
            storage.clear();
            storage.update(data.hash(), data);
            
            controller = $controller('AgencyComparisonController', { 
                fedrampData: storage,
                $stateParams: stateParams,
                helperService: helperService
            });
        });
    });

    it('has items', function () {
        expect(controller.items).toBeDefined();
    });

    it('has an item', function () {
        expect(controller.first).toBeDefined();
        expect(controller.second).toBeDefined();
    });

    it('can call close on the first item', function () {
        controller.closeFirst();
    });

    it('can call close on the second item', function () {
        controller.closeSecond();
    });
});
