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

    it('should cache the result of a function call', function () {

        var func =  function(){
            return 1 + 1;
        };

        // Should call func since value is not in cache
        var toCall = jasmine.createSpy('cache', func).and.callThrough();
        var cachedFunc = service.cacheWrap('calc')(toCall);
        cachedFunc();
        expect(toCall).toHaveBeenCalled();

        // Should pull from cache and NOT call func()
        var toCall2 = jasmine.createSpy('cache', func).and.callThrough();
        cachedFunc = service.cacheWrap('calc')(toCall2);
        cachedFunc();
        expect(toCall2).not.toHaveBeenCalled();

    });
});
