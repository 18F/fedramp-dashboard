// Test Home Controller methods
describe('HomeController', function () {
    'use strict';

    var Provider;
    var homeController;

    beforeEach(function () {
        module('fedramp', 'fedramp.services');
        inject(function ($controller, $injector) {
            Provider = $injector.get('Provider');
            homeController = $controller('HomeController', { 
                providers: [new Provider(TestData.Letters[0])]
            });
        });
    });

    // Test title property
    describe('title', function () {
        it('Displays a title', function () {
            expect(homeController.title).toEqual('FedRAMP');
        });
    });

    describe('displays total authorized CSPs', function () {
        it('returns 1', function () {
            expect(homeController.totalAuthorized()).toBe(1);
        });
    });

    describe('displays total cost savings', function () {
        it('returns $500,000', function () {
            expect(homeController.totalCostSavings()).toBe('500000');
        });
    });

    describe('ATO re-uses', function () {
        it('returns 2', function () {
            expect(homeController.leveragedAtos()).toBe(2);
        });
    });
});
