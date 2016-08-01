describe('The dictionary component', function () {
    'use strict';

    var component;
    var controller;
    var i;
    var $httpBackend;
    var dictionaryUrl;

    beforeEach(function () {
        module('fedramp.services', 'fedramp.components');
        inject(function ($injector, _$componentController_) {
            i = 0;
            controller = _$componentController_;
            $httpBackend = $injector.get('$httpBackend');
            dictionaryUrl = $injector.get('dictionaryUrl');
            component = controller('dictionary', null, {
                onUpdate: function (items) {}
            });
        });
    });

	afterEach(function () { 
		$httpBackend.verifyNoOutstandingRequest();
	});

    it('can update items', function () {
        $httpBackend.expectGET(dictionaryUrl).respond(201, TestData.DictionaryData);

        component.$onInit();
        component.onUpdate(TestData.DictionaryData);
        expect(component.filteredDictionary).toBe(TestData.DictionaryData);
        $httpBackend.flush();
    });
});
