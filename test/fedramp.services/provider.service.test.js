describe('The provider service', function(){
	'use strict';
	var ProviderService;
	var $httpBackend;
    var githubUrl = 'https://raw.githubusercontent.com/18F/fedramp-micropurchase/master/data/data.json';

    // Do that good/bad data factory
    var dataJson = {
        'meta': {
            'Created_At': '2016-06-23T18:30:37.926Z',
            'Produced_By': 'General Services Administration'
        },
        'data': []
    };

    beforeEach(function () {
        module('fedramp.services');
        inject(function ($injector) {
            ProviderService = $injector.get('ProviderService');

            // Use $injector to grab services/factories
            $httpBackend = $injector.get('$httpBackend');
        });
    });

	afterEach(function () { 
		$httpBackend.verifyNoOutstandingExpectation(); 
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('pull()', function() {
		it('Retrieves latest FedRAMP provider information', function () {

            // Mock http request
			$httpBackend.expectGET(githubUrl).respond(201, dataJson);

            // Perform call
			ProviderService.pull().then(function (response) {
				expect(response.length).toBe(0);
			});

			$httpBackend.flush();
		});
	});
});
