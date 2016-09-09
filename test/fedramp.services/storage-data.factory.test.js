describe('StorageData manager', function () {
    'use strict';

    var StorageData;
    var Data;
    var Agency;
    var Assessor;
    var Product;
    var Provider;
    var AssessorData;

    beforeEach(function () {
        module('fedramp.services');
        inject(function ($injector) {
            StorageData = $injector.get('StorageData');
            Data = $injector.get('Data');
            Agency = $injector.get('Agency');
            Assessor = $injector.get('Assessor');
            Product = $injector.get('Product');
            Provider = $injector.get('Provider');
            AssessorData = $injector.get('AssessorData');
        });
    });

    it('initialize a new instance', function () {
        var storage = new StorageData();
        expect(storage).not.toBe(undefined);
    });

    it('initialize with the data container', function () {
        var storage = new StorageData();
        expect(storage.storageContainer).toBe('data');
    });

    it('can store item', function () {
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

        var expected = storage.byId(data.hash());
        expect(expected.hash()).toBe(data.hash());
    });

    it('can get item by ID', function () {
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

        var expected = storage.byId(data.hash());
        expect(expected.hash()).toBe(data.hash());
    });

    it('can update item', function () {
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

        var x = storage.byId(data.hash());
        expect(x.atoLetters.length).toBe(1);

        x.atoLetters = [];
        storage.update(x.hash(), x);

        x = storage.byId(x.hash());
        expect(x.atoLetters.length).toBe(0);
    });

    it('can clear', function () {
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
        expect(storage.all().length).toBe(1);

        storage.clear();
        expect(storage.all().length).toBe(0);
    });

    it('can return providers', function () {
        var data = new Data(TestData.Letters[0]);
        var storage = new StorageData();
        storage.clear();
        storage.update(data.hash(), data);
        expect(storage.providers().length).toBe(1);
    });

    it('can return products', function () {
        var data = new Data(TestData.Letters[0]);
        var storage = new StorageData();
        storage.clear();
        storage.update(data.hash(), data);
        expect(storage.products().length).toBe(1);
    });

    it('can return products with dependents', function () {
        var data = TestData.Dependents.map(function(data) {
            return new Data(data);
        });
        var storage = new StorageData();
        storage.clear();
        data.forEach(function(item) {
            storage.update(item.hash(), item);
        });

        var pkgId = 'F1510137547'; // i.e., Datapipe
        var agency = 'National Science Foundation';

        var product = storage.products().find(function(item) {
            return item.pkgId === pkgId;
        });

        expect(product.agencies.indexOf(agency) !== -1).toBe(true);
    });

    it('can return agencies', function () {
        var data = new Data(TestData.Letters[0]);
        var storage = new StorageData();
        storage.clear();
        storage.update(data.hash(), data);
        expect(storage.agencies().length).toBe(2);
    });

    it('can return agencies with dependents', function () {
        var data = TestData.Dependents.map(function(data) {
            return new Data(data);
        });
        var storage = new StorageData();
        storage.clear();
        data.forEach(function(item) {
            storage.update(item.hash(), item);
        });

        var agency = storage.agencies().find(function(item) {
            return item.name === 'National Science Foundation';
        });

        expect(agency.products.length).toBe(2); // i.e., it should include Datapipe in addition to Accenture
    });

    it('can return assessors', function () {
        var data = new Data(TestData.Letters[0]);
        var storage = new StorageData({Assessors: TestData.AssessorData});
        storage.clear();
        storage.update(data.hash(), data);
        expect(storage.assessors().length).toBe(3);
    });
});
