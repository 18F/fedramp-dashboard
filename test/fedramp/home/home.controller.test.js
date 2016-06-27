// Test Home Controller methods
describe('Home controller with data', function () {
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

    it('shows the download link', function () {
        expect(homeController.hasData()).toBe(true);
    });

    it('download generates file name in YYYY-mm-dd format', function () {
        var d = new Date(2016, 5, 27, 0, 0, 0, 0);
        expect(homeController.filename(d)).toBe('fedramp-2016-06-27.csv');
    });

    it('download generates file name if no date given', function () {
        expect(homeController.filename()).toBeDefined();
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
