describe('CsvService', function(){
	'use strict';

    var CsvService;
    var providerData;
    var providerDataWithoutAtoLetters;

    // Do that good/bad data factory
    var dataJson = {
        'meta': {
            'Created_At': '2016-06-23T18:30:37.926Z',
            'Produced_By': 'General Services Administration'
        },
        'data': []
    };

    beforeEach(function(){
        module('fedramp.services');
        inject(function($injector){
            var Provider = $injector.get('Provider');
            CsvService = $injector.get('CsvService');

            providerData = new Provider({
                'Cloud_Service_Provider_Name': 'test',
                'Designation': 'Compliant',
                'Service_Model': [
                    'IaaS'
                ],
                'Deployment_Model': 'Community Cloud',
                'Impact_Level': 'Moderate',
                'Sponsoring_Agency': 'Department of Health and Human Services',
                'Leveraged_ATO_Letters': [
                    {
                        'Letter_Date': '2014-02-24T05:00:00.000Z',
                        'Letter_Expiration_Date': '2017-02-24T05:00:00.000Z',
                        'Authorizing_Date': '2017-02-24T05:00:00.000Z',
                        'Authorizing_Letter_Last_Sign_Date': '2017-02-24T05:00:00.000Z',
                        'Authorizing_Agency': 'Department of Health and Human Services',
                        'Authorizing_Subagency': 'Department of Health and Human Services',
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
                        'Active': 'Inactive',
                        'Include_In_Marketplace': 'No'
                    }
                ]
            });

            providerDataWithoutAtoLetters = new Provider({
                'Cloud_Service_Provider_Name': 'test',
                'Designation': 'Compliant',
                'Service_Model': [
                    'IaaS'
                ],
                'Deployment_Model': 'Community Cloud',
                'Impact_Level': 'Moderate',
                'Sponsoring_Agency': 'Department of Health and Human Services',
                'Leveraged_ATO_Letters': []
            });
        });
    });

	describe('flattenProviders() with providers', function(){
		it('Converts an array of Providers to a flatten csv friendly structure', function(){
            var flattenProviders = CsvService.flattenProviders([providerData, providerDataWithoutAtoLetters]);
            expect(flattenProviders).not.toBeNull();
            expect(flattenProviders.length).toEqual(3);
		});
	});

	describe('flattenProviders() without ato letters', function(){
		it('Converts an array of Providers to a flatten csv friendly structure', function(){
            var flattenProviders = CsvService.flattenProviders([providerDataWithoutAtoLetters]);
            expect(flattenProviders).not.toBeNull();
            expect(flattenProviders.length).toEqual(1);
		});
	});

	describe('toCsv() Converts an object csv string', function(){
		it('Converts an object of providers to a csv string', function(){
            var flattenProviders = CsvService.flattenProviders([providerData, providerDataWithoutAtoLetters]);

            expect(flattenProviders).not.toBeNull();
            expect(flattenProviders.length).toEqual(3);

            var csv = CsvService.toCsv(flattenProviders);
            expect(csv).not.toBeNull();
            expect(csv.length).toBeGreaterThan(0);
		});
	});
});
