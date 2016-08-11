describe('The helper service', function () {
	'use strict';

    var service;

    beforeEach(function () {
        module('fedramp.services');
        inject(function ($injector) {
            service = $injector.get('helperService');
        });
    });

    it('can get the current date', function () {
        expect(service.today()).toBeDefined();
    });

    it('can convert date to mm/dd/YYYY', function () {
        expect(service.toDate('2013-08-03T04:00:00.000Z')).toBe('08/03/2013');
        expect(service.toDate('2013-08-03T00:00:00.000Z')).toBe('08/03/2013');
        expect(service.toDate('2013-08-03')).toBe('08/03/2013');
        expect(service.toDate('08/03/2013')).toBe('08/03/2013');
        expect(service.toDate('Check on')).toBe('');
        expect(service.toDate(null)).toBe('');
    });

    it('can slugify text', function () {
        expect(service.slugify('Test With - Data')).toBe('test-with---data');
        expect(service.slugify('Test With')).toBe('test-with');
        expect(service.slugify('TestWith')).toBe('testwith');
    });

    it('can generate a query string', inject(function ($injector) {
        var $location = $injector.get('$location');
        $location.search({name: 'GS_Cloud', count: 2});

        var q = service.queryString();
        expect(q).toBe('?name=GS_Cloud&count=2');
    }));

});
