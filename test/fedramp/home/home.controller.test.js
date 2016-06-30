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

    describe('while applying data filters', function () {
        it('returns everything with no filter type', function () {
            homeController.applyFilter('', 'Akamai');
            expect(homeController.filteredData.length).toBe(1);
        });

        it('returns everything with no filter', function () {
            homeController.applyFilter('csp', '');
            expect(homeController.filteredData.length).toBe(1);
        });

        it('for CSP', function () {
            homeController.applyFilter('csp', 'Akamai');
            expect(homeController.filteredData.length).toBe(1);
            homeController.applyFilter('csp', 'Dingo');
            expect(homeController.filteredData.length).toBe(0);
        });

        it('for CSO', function () {
            homeController.applyFilter('cso', 'Content Delivery Services');
            expect(homeController.filteredData.length).toBe(1);
            homeController.applyFilter('cso', 'Dingo');
            expect(homeController.filteredData.length).toBe(0);
        });

        it('for an Agency', function () {
            // This checks the agencies referenced for the provider
            homeController.applyFilter('agency', 'JAB Authorization');
            expect(homeController.filteredData.length).toBe(1);

            // This checks the agencies applied to the leveraged ATOs
            homeController.applyFilter('agency', 'Department');
            expect(homeController.filteredData.length).toBe(1);

            homeController.applyFilter('agency', 'Dingo');
            expect(homeController.filteredData.length).toBe(0);
        });

        it('for a 3PAO', function () {
            homeController.applyFilter('3pao', 'Knowledge Consulting Group');
            expect(homeController.filteredData.length).toBe(0);
        });
    });

    describe('while populating filter options', function () {
        it('returns nothing if empty filter type', function () {
            homeController.toggleFilter('');
            expect(homeController.filterOptions.length).toBe(0);
        });

        it('for CSP', function () {
            homeController.toggleFilter('csp');
            expect(homeController.filterOptions.length).toBe(1);
        });

        it('for CSO', function () {
            homeController.toggleFilter('cso');
            expect(homeController.filterOptions.length).toBe(1);
        });

        it('for an Agency', function () {
            homeController.toggleFilter('agency');
            expect(homeController.filterOptions.length).toBe(3);
        });

        it('for a 3PAO', function () {
            homeController.toggleFilter('3pao');
            expect(homeController.filterOptions.length).toBe(0);
        });
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
