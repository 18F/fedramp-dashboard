describe('Fedramp routing', function(){
	'use strict';

	var $httpBackend;
    var $state;
    var $rootScope;
    var $location;
    var githubUrl;

    beforeEach(function () {
        module('fedramp');
        inject(function ($injector, _$state_, _$rootScope_) {
            $state = _$state_;
            $rootScope = _$rootScope_;
            $httpBackend = $injector.get('$httpBackend');
            $location = $injector.get('$location');
            githubUrl = $injector.get('dataUrl');
        });

        $httpBackend.whenGET(githubUrl).respond(TestData.DataJsonHttpResponse);
    });

	afterEach(function () { 
        $httpBackend.verifyNoOutstandingExpectation(); 
        $httpBackend.verifyNoOutstandingRequest();
	});

	it('can access all routes', function () {
        var routes = [
            { url: '/sitemap.xml', state: 'fedramp.sitemap'},
            { url: '/search/aws', state: 'fedramp.app.search'},
            { url: '/products', state: 'fedramp.app.home.products'},
            { url: '/agencies', state: 'fedramp.app.home.agencies'},
            { url: '/assessors', state: 'fedramp.app.home.assessors'},
            { url: '/product/acme_anvils', state: 'fedramp.app.product.information'},
            { url: '/product/acme_avils/versus/acme_holes', state: 'fedramp.app.product.comparison'},
            { url: '/agency/disney', state: 'fedramp.app.agency.information'},
            { url: '/agency/disney/versus/universal', state: 'fedramp.app.agency.comparison'},
            { url: '/assessor/dick_tracy', state: 'fedramp.app.assessor.information'},
            { url: '/assessor/dick_tracy/versus/carmen_sandiego', state: 'fedramp.app.assessor.comparison'}
        ];

        for (var i = 0; i < routes.length; i++) {
            var route = routes[i];
            $location.path(route.url);
            $rootScope.$digest();

            try {
                $httpBackend.flush();
            } catch (e) {
                // We catch an exception and proceed on our merry way
                // because for some reason not routes need to be
                // flushed.
                //
                // https://youtu.be/YbYWhdLO43Q
            }

            expect($state.current.name).toEqual(route.state);
		}
	});
});
