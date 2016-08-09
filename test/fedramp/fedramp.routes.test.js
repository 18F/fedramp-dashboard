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

    it ('can access the sitemap', function () {
        $location.path('/sitemap.xml');
        $rootScope.$digest();
        $httpBackend.flush();
        expect($state.current.name).toEqual('fedramp.sitemap');
    });

    it ('can access the dictionary', function () {
        $location.path('/dictionary');
        $rootScope.$digest();
        $httpBackend.flush();
        expect($state.current.name).toEqual('fedramp.app.dictionary');
    });

    it ('can access search', function () {
        $location.path('/search/aws');
        $rootScope.$digest();
        $httpBackend.flush();
        expect($state.current.name).toEqual('fedramp.app.search');
    });

    it ('can access the listing of products', function () {
        $location.path('/products');
        $rootScope.$digest();
        $httpBackend.flush();
        expect($state.current.name).toEqual('fedramp.app.home.products');
    });

    it ('can access the listing of agencies', function () {
        $location.path('/agencies');
        $rootScope.$digest();
        $httpBackend.flush();
        expect($state.current.name).toEqual('fedramp.app.home.agencies');
    });

    it ('can access the listing of assessors', function () {
        $location.path('/assessors');
        $rootScope.$digest();
        $httpBackend.flush();
        expect($state.current.name).toEqual('fedramp.app.home.assessors');
    });

    it ('can access product information', function () {
        $location.path('/product/acme_anvils');
        $rootScope.$digest();
        $httpBackend.flush();
        expect($state.current.name).toEqual('fedramp.app.product.information');
    });

    it ('can access product comparison', function () {
        $location.path('/product/acme_anvils/versus/acme_holes');
        $rootScope.$digest();
        $httpBackend.flush();
        expect($state.current.name).toEqual('fedramp.app.product.comparison');
    });

    it ('can access agency information', function () {
        $location.path('/agency/disney');
        $rootScope.$digest();
        $httpBackend.flush();
        expect($state.current.name).toEqual('fedramp.app.agency.information');
    });

    it ('can access agency comparison', function () {
        $location.path('/agency/disney/versus/universal');
        $rootScope.$digest();
        $httpBackend.flush();
        expect($state.current.name).toEqual('fedramp.app.agency.comparison');
    });

    it ('can access assessor information', function () {
        $location.path('/assessor/dick_tracy');
        $rootScope.$digest();
        $httpBackend.flush();
        expect($state.current.name).toEqual('fedramp.app.assessor.information');
    });

    it ('can access assessor comparison', function () {
        $location.path('/assessor/dick_tracy/versus/carmen_sandiego');
        $rootScope.$digest();
        $httpBackend.flush();
        expect($state.current.name).toEqual('fedramp.app.assessor.comparison');
    });
});
