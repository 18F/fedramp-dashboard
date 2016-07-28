describe('The Cache factory', function () {
	'use strict';

    var service;
    var dataFactory;

    beforeEach(function () {
        module('fedramp.services');
        dataFactory = new TestDataFactory(inject);
        inject(function ($injector) {
            service = $injector.get('Cache');
        });
    });

    it('should cache the result of a function call', function () {
        var func =  function(){
            return 1 + 1;
        };

        // Should call func since value is not in cache
        var toCall = jasmine.createSpy('cache', func).and.callThrough();
        var cachedFunc = service.wrap('calc')(toCall);
        cachedFunc();
        expect(toCall).toHaveBeenCalled();

        // Should pull from cache and NOT call func()
        var toCall2 = jasmine.createSpy('cache', func).and.callThrough();
        cachedFunc = service.wrap('calc')(toCall2);
        cachedFunc();
        expect(toCall2).not.toHaveBeenCalled();
    });
});
