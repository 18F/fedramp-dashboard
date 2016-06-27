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
            // We remove the comma b/c PhantomJS does not insert one during locale
            // conversion. However, in most common browsers it does.
            expect(homeController.totalCostSavings().replace(',', '')).toBe('500000');
        });
    });

    describe('ATO re-uses', function () {
        it('returns 2', function () {
            expect(homeController.leveragedAtos()).toBe(2);
        });
    });

    it('shows the download link', function () {
        expect(homeController.hasData()).toBe(true);
    });
});

describe('Home controller with no data', function () {
    'use strict';

    var Provider;
    var homeController;

    beforeEach(function () {
        module('fedramp', 'fedramp.services');
        inject(function ($controller, $injector) {
            Provider = $injector.get('Provider');
            homeController = $controller('HomeController', { 
                providers: []
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

    it('hides the download link', function () {
        expect(homeController.hasData()).toBe(false);
    });
});
