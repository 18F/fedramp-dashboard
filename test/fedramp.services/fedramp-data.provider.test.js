describe('The fedrampData provider', function () {
	'use strict';

    var service;
    var dataFactory;

    beforeEach(function(){
        module('fedramp.services');
        dataFactory = new TestDataFactory(inject);
        inject(function ($injector) {
            service = $injector.get('fedrampData');
        });
    });

    it('should take all of StorageData\'s properties and methods and them to itself', function () {
        var store = dataFactory.storageFactory();
        expect(service.products).not.toBeDefined();
        expect(service.providers).not.toBeDefined();
        expect(service.assessors).not.toBeDefined();
        expect(service.agencies).not.toBeDefined();

        service.load(store);

        expect(service.products).toBeDefined();
        expect(service.providers).toBeDefined();
        expect(service.assessors).toBeDefined();
        expect(service.agencies).toBeDefined();
    });
});
