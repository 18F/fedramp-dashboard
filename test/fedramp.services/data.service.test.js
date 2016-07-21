describe('The data service', function(){
	'use strict';

	var DataService;
	var $httpBackend;
    var githubUrl = 'https://raw.githubusercontent.com/18F/fedramp-data/master/data/data.json';

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
            DataService = $injector.get('DataService');
            $httpBackend = $injector.get('$httpBackend');
        });
    });

	afterEach(function () { 
		$httpBackend.verifyNoOutstandingExpectation(); 
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('for pull()', function() {
		it('can retrieve the latest FedRAMP information', function () {
            // Mock http request
			$httpBackend.expectGET(githubUrl).respond(201, dataJson);

            // Perform call
			DataService.pull().then(function (response) {
				expect(response).toBeDefined();
			});

			$httpBackend.flush();
		});
	});
});
