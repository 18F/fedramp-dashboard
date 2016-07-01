describe('The CSV service', function(){
	'use strict';

    var CsvService;
    var fedrampData;
    var fedrampDataWithoutAtoLetters;

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

            fedrampData = new Provider({
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

            fedrampDataWithoutAtoLetters = new Provider({
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

    it('can convert an array of objects to a flattened CSV friendly structure', function(){
        var flatten = CsvService.flatten([fedrampData, fedrampDataWithoutAtoLetters]);
        expect(flatten).not.toBeNull();
        expect(flatten.length).toEqual(2);
    });

	describe('flatten() without ato letters', function(){
		it('Converts an array of Providers to a flatten csv friendly structure', function(){
            var flatten = CsvService.flatten([fedrampDataWithoutAtoLetters]);
            expect(flatten).not.toBeNull();
            expect(flatten.length).toEqual(1);
		});
	});

	describe('toCsv() Converts an object csv string', function(){
		it('Converts an object of providers to a csv string', function(){
            var flatten = CsvService.flatten([fedrampData, fedrampDataWithoutAtoLetters]);

            expect(flatten).not.toBeNull();
            expect(flatten.length).toEqual(2);

            var csv = CsvService.toCsv(flatten);
            expect(csv).not.toBeNull();
            expect(csv.length).toBeGreaterThan(0);
		});
	});
});
