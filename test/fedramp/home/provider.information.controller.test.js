describe('Provider information controller', function () {
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
            stateParams.name = 'akamai';

            var data = new Data(TestData.Letters[0]);
            storage = new StorageData();
            storage.clear();
            storage.update(data.hash(), data);
            
            controller = $controller('ProviderInformationController', { 
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
        expect(controller.item).toBeDefined();
    });

    it('can call close', function () {
        controller.close();
    });
});
