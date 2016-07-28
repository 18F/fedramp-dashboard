describe('StorageAssessorData manager', function () {
    'use strict';

    var StorageAssessorData;
    var AssessorData;
    var Agency;
    var Assessor;
    var Product;
    var Provider;

    beforeEach(function () {
        module('fedramp.services');
        inject(function ($injector) {
            StorageAssessorData = $injector.get('StorageAssessorData');
            AssessorData = $injector.get('AssessorData');
            Agency = $injector.get('Agency');
            Assessor = $injector.get('Assessor');
            Product = $injector.get('Product');
            Provider = $injector.get('Provider');
            AssessorData = $injector.get('AssessorData');
        });
    });

    it('initialize a new instance', function () {
        var storage = new StorageAssessorData();
        expect(storage).not.toBe(undefined);
    });

    it('initialize with the data container', function () {
        var storage = new StorageAssessorData();
        expect(storage.storageContainer).toBe('assessorData');
    });

    it('can store item', function () {
        var data = new AssessorData( {
            'name': 'Allred & Flores Enterprises',
            'Accreditation_Date': ''
        });

        var storage = new StorageAssessorData();
        storage.clear();
        storage.update(data.hash(), data);

        var expected = storage.byId(data.hash());
        expect(expected.hash()).toBe(data.hash());
    });
});
