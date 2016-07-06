describe('The helper service', function () {
	'use strict';

    var service;

    beforeEach(function(){
        module('fedramp.services');
        inject(function ($injector) {
            service = $injector.get('helperService');
        });
    });

    it('can get the current date', function () {
        expect(service.today()).toBeDefined();
    });

    it('can slugify text', function () {
        expect(service.slugify('Test With - Data')).toBe('test-with---data');
        expect(service.slugify('Test With')).toBe('test-with');
        expect(service.slugify('TestWith')).toBe('testwith');
    });
});
