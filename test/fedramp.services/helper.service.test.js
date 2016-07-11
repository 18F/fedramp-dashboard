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

    it('can convert date to mm/dd/YYYY', function () {
        expect(service.toDate('2013-08-23T04:00:00.000Z')).toBe('08/23/2013');
        expect(service.toDate('2013-08-23')).toBe('08/22/2013');
        expect(service.toDate('08/23/2013')).toBe('08/23/2013');
        expect(service.toDate(null)).toBe('');
    });

    it('can slugify text', function () {
        expect(service.slugify('Test With - Data')).toBe('test-with---data');
        expect(service.slugify('Test With')).toBe('test-with');
        expect(service.slugify('TestWith')).toBe('testwith');
    });
});
