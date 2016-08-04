describe('Home controller with data', function () {
    'use strict';

    var StorageData;
    var Data;
    var homeController;
    var storage;

    beforeEach(function () {
        module('fedramp', 'fedramp.services');
        inject(function ($controller, $injector) {
            StorageData = $injector.get('StorageData');
            Data = $injector.get('Data');

            var data = new Data(TestData.Letters[0]);
            storage = new StorageData();
            storage.clear();
            storage.update(data.hash(), data);
            
            homeController = $controller('HomeController', { 
                fedrampData: storage
            });
        });
    });

    it('displays the title', function () {
        expect(homeController.title).toEqual('FedRAMP');
    });

    it('has a total authorized CSPs of 1', function () {
        expect(homeController.totalAuthorized()).toBe(1);
    });
});

describe('Home controller with no data', function () {
    'use strict';

    var StorageData;
    var Data;
    var homeController;
    var storage;

    beforeEach(function () {
        module('fedramp', 'fedramp.services');
        inject(function ($controller, $injector) {
            StorageData = $injector.get('StorageData');
            Data = $injector.get('Data');
            storage = new StorageData();
            storage.clear();

            homeController = $controller('HomeController', { 
                fedrampData: storage
            });
        });
    });

    it('total authorized cloud service providers is zero', function () {
        expect(homeController.totalAuthorized()).toBe(0);
    });

    it('Total ready should be zero', function () {
        expect(homeController.totalReady()).toBe(0);
    });

    it('Total in-process should be zero', function () {
        expect(homeController.totalInProcess()).toBe(0);
    });
});
