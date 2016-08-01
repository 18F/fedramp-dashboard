// Test menuService 
describe('DatasourceService', function () {
	'use strict';
	var DatasourceService;
    var $httpBackend;
    var dataUrl;
    var dictionaryUrl;

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
            DatasourceService = $injector.get('DatasourceService');
            dataUrl = $injector.get('dataUrl');
            dictionaryUrl = $injector.get('dictionaryUrl');

            // Use $injector to grab services/factories
            $httpBackend = $injector.get('$httpBackend');

        });
    });

	afterEach(function () { 
		$httpBackend.verifyNoOutstandingExpectation(); 
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('pull()', function () {
		it('Retrieves latest FedRAMP provider information', function () {
            // Mock http request
			$httpBackend.expectGET(dataUrl).respond(201, dataJson);

            // Perform call
			DatasourceService.pull(dataUrl).then(function(response){
				expect(response).toEqual(dataJson);
			});

			$httpBackend.flush();
		});
	});

	describe('pullDataDictionary()', function () {
		it('Retrieves latest FedRAMP dictionary data', function () {
            // Mock http request
			$httpBackend.expectGET(dictionaryUrl).respond(201, TestData.DictionaryData);

            // Perform call
			DatasourceService.pull(dictionaryUrl).then(function(response){
				expect(response).toEqual(TestData.DictionaryData);
			});

			$httpBackend.flush();
		});
	});
});
