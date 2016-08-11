describe('The download csv component', function () {
    'use strict';

    var component;
    var controller;
    var i;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_, $injector) {
            var Product = $injector.get('Product');
            var Data = $injector.get('Data');
            var csvService = $injector.get('CsvService');
            var exportData = new Data({
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
            csvService.raw =[exportData];

            var product = new Product();
            product.pkgId = '123';

            i = 0;
            controller = _$componentController_;
            component = controller('downloadCsv', {
                CsvService: csvService
            }, {
                content: [product]
            });
        });
    });

    it('can create filename', function () {
        var filename = component.filename(new Date());
        expect(filename).toBeDefined();

        filename = component.filename(null);
        expect(filename).toBeDefined();

        var d = new Date(2016, 5, 7, 0, 0, 0, 0);
        expect(component.filename(d)).toBe('fedramp-2016-06-07.csv');
    });

    it('can prepare download', function () {
        component.$onChanges();
        component.download();
        expect(component.downloadUrl).toBeDefined();
    });
});
