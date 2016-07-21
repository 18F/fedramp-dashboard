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

    it('has a total cost savings of $500,000', function () {
        // We remove the comma b/c PhantomJS does not insert one during locale
        // conversion. However, in most common browsers it does.
        expect(homeController.totalCostSavings().replace(',', '')).toBe('500000');
    });

    it('has a total re-uses of 2', function () {
        expect(homeController.leveragedAtos()).toBe(2);
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

    it('total cost savings is zero', function () {
        expect(homeController.totalCostSavings()).toBe('0');
    });

    it('ATO re-uses is zero', function () {
        expect(homeController.leveragedAtos()).toBe(0);
    });

    it('Total ready should be zero', function () {
        expect(homeController.totalReady()).toBe(0);
    });

    it('Total in-process should be zero', function () {
        expect(homeController.totalInProcess()).toBe(0);
    });
});
