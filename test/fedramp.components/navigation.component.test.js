
describe('The Navigation component', function () {
    'use strict';

    var component;
    var controller;
    var githubUrl;
	var $httpBackend;
    var $rootScope;
    var $state;
    var $location;
    var helperService;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_, $injector, _$rootScope_) {
            // Inject
            $rootScope = _$rootScope_;
            $httpBackend = $injector.get('$httpBackend');
            $state = $injector.get('$state');
            $location = $injector.get('$location');
            helperService = $injector.get('helperService');
            githubUrl = $injector.get('dataUrl');

            // Set up
            $location.search({status: 'In Process'});
            
            // Instantiate
            controller = _$componentController_;
            component = controller(
                'navigation',
                {
                    $state: $state,
                    $location: $location,
                    helperService: helperService
                },
                {});
        });
    });

    it('should initialize navigation', function () {
        expect(component).toBeDefined();
        expect(component.toggleMobile).toBe(false);
    });

    it('should be able to determine the path', function () {
        expect(component).toBeDefined();

        $httpBackend.whenGET(githubUrl).respond(TestData.DataJsonHttpResponse);
        $location.path('/products');
        $rootScope.$digest();
        $httpBackend.flush();
        $httpBackend.verifyNoOutstandingExpectation(); 
        $httpBackend.verifyNoOutstandingRequest();

        expect($state.current.name).toEqual('fedramp.app.home.products');
        expect(component.includes('**.products')).toBe(true);
        expect(component.includes('**.agencies')).toBe(false);
    });

    it('should be able to determine the path with filter', function () {
        expect(component).toBeDefined();

        $httpBackend.whenGET(githubUrl).respond(TestData.DataJsonHttpResponse);
        $location.path('/products');
        $rootScope.$digest();
        $httpBackend.flush();
        $httpBackend.verifyNoOutstandingExpectation(); 
        $httpBackend.verifyNoOutstandingRequest();

        expect($state.current.name).toEqual('fedramp.app.home.products');
        expect(component.includes('**.products', 'In Process')).toBe(true);
        expect(component.includes('**.products', 'Compliant')).toBe(false);
    });

    it('should redirect with filters applied', function () {
        expect(component).toBeDefined();

        $httpBackend.whenGET(githubUrl).respond(TestData.DataJsonHttpResponse);
        component.filterProducts('In Process');
        $rootScope.$digest();
        $httpBackend.flush();
        $httpBackend.verifyNoOutstandingExpectation(); 
        $httpBackend.verifyNoOutstandingRequest();

        expect($state.current.name).toEqual('fedramp.app.home.products');
    });
});
