describe('The CSV service', function(){
	'use strict';

    var CsvService;
    var product;
    var fedrampDataWithoutAtoLetters;
    var exportData;

    // Do that good/bad data factory
    var dataJson = {
        'meta': {
            'Created_At': '2016-06-23T18:30:37.926Z',
            'Produced_By': 'General Services Administration'
        },
        'data': []
    };

    beforeEach(function () {
        module('fedramp.services');
        inject(function ($injector) {
            CsvService = $injector.get('CsvService');
            var Data = $injector.get('Data');
            var Product = $injector.get('Product');

            exportData = new Data({
                'Cloud_Service_Provider_Package': 'TT',
                'Cloud_Service_Provider_Name': 'test',
                "Package_ID": "123",
                'Designation': 'Compliant',
                'Service_Model': [
                    'IaaS'
                ],
                'Deployment_Model': 'Community Cloud',
                'Impact_Level': 'Moderate',
                'Independent_Assessor': 'DoD',
                'Sponsoring_Agency': 'Department of Health and Human Services',
                'Leveraged_ATO_Letters': [
                    {
                        'Letter_Date': '2014-02-24T05:00:00.000Z',
                        'Letter_Expiration_Date': '2017-02-24T05:00:00.000Z',
                        'Announcement_Date': '2017-02-24T05:00:00.000Z',
                        'Authorizing_Letter_Last_Sign_Date': '2017-02-24T05:00:00.000Z',
                        'Authorizing_Agency': 'Department of Health and Human Services',
                        'Authorizing_Subagency': 'Department of Health and Human Services',
                        'Independent_Assessor': 'DoD',
                        'Active': 'Active',
                        'Include_In_Marketplace': 'Yes'
                    },
                    {
                        'Letter_Date': '2016-02-24T05:00:00.000Z',
                        'Authorizing_Date': '2017-02-24T05:00:00.000Z',
                        'Letter_Expiration_Date': '2018-02-24T05:00:00.000Z',
                        'Authorizing_Letter_Last_Sign_Date': '2016-02-24T05:00:00.000Z',
                        'Authorizing_Agency': 'TT & Co',
                        'Authorizing_Subagency': '',
                        'Independent_Assessor': 'DoD',
                        'Active': 'Inactive',
                        'Include_In_Marketplace': 'No'
                    }
                ]
            });

            CsvService.raw = [exportData];

            product = new Product();
            product.pkgId = '123';
        });
    });

    it('can convert an array of objects to a flattened CSV friendly structure', function () {
        var flatten = CsvService.flatten([product]);
        expect(flatten).not.toBeNull();
        expect(flatten.length).toEqual(3);
    });

	describe('toCsv() Converts an object csv string', function () {
		it('Converts an object of providers to a csv string', function () {
            var flatten = CsvService.flatten([product]);

            expect(flatten).not.toBeNull();
            expect(flatten.length).toEqual(3);

            var csv = CsvService.toCsv(flatten);
            expect(csv).not.toBeNull();
            expect(csv.length).toBeGreaterThan(0);
		});
	});
});
