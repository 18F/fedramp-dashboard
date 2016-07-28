describe('The product-list component', function () {
    'use strict';

    var component;
    var controller;
    var i;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_, $injector) {
            i = 0;
            controller = _$componentController_;
            var Data = $injector.get('Data');
            var StorageData = $injector.get('StorageData');
            var data = new Data({
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
                        'Authorizing_Letter_Last_Sign_Date': '2017-02-24T05:00:00.000Z',
                        'Authorizing_Agency': 'Department of Health and Human Services',
                        'Authorizing_Subagency': 'Department of Health and Human Services',
                        'Active': 'Active'
                    }
                ]
            });

            var storage = new StorageData();
            storage.clear();
            storage.update(data.hash(), data);
            component = controller('productList', {
                fedrampData: storage
            }, {
                products: ['Google']
            });
        });
    });

    it('it stores onCloseBoth', function () {
        expect(component.$onInit).not.toThrow();
        expect(component.products).toBeDefined();
    });
});
