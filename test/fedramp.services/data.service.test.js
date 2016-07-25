describe('The data service', function(){
	'use strict';

	var DataService;
	var $httpBackend;
    var githubUrl; 
    var dataJson  = TestData.DataJsonHttpResponse;

    beforeEach(function () {
        module('fedramp.services');
        inject(function ($injector) {
            DataService = $injector.get('DataService');
            $httpBackend = $injector.get('$httpBackend');
            githubUrl = $injector.get('dataUrl');
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
