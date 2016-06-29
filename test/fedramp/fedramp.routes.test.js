describe('Fedramp Routes', function(){
	'use strict';

	var $httpBackend;
    var $state;
    var $rootScope;
    var githubUrl = 'https://raw.githubusercontent.com/18F/fedramp-micropurchase/master/data/data.json';

    beforeEach(function(){
        module('fedramp');
        inject(function($injector, _$state_, _$rootScope_){
            $state = _$state_;
            $rootScope = _$rootScope_;
            $httpBackend = $injector.get('$httpBackend');
        });
    });


	afterEach(function() { 
        $httpBackend.verifyNoOutstandingExpectation(); 
        $httpBackend.verifyNoOutstandingRequest();
	});

	describe('home.state', function(){
		it('Accesses the Home state and executes provider', function(){
            var expected = 'fedramp.home';

            // Account for template GET request
            $httpBackend.whenGET('src/fedramp/fedramp.html').respond('');
            $httpBackend.whenGET('src/fedramp/home/home.html').respond('');
            $httpBackend.whenGET(githubUrl).respond({
                meta: '',
                data: []
            });
            $state.go(expected);
            $rootScope.$digest();
            $httpBackend.flush();
            expect($state.current.name).toEqual(expected);
		});
	});
});
