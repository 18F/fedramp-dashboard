describe('The data service', function () {
	'use strict';

	var DataService;
	var $httpBackend;
    var githubUrl; 
    var dictionaryUrl;
    var dataJson  = TestData.DataJsonHttpResponse;

    beforeEach(function () {
        module('fedramp.services');
        inject(function ($injector) {
            DataService = $injector.get('DataService');
            $httpBackend = $injector.get('$httpBackend');
            githubUrl = $injector.get('dataUrl');
            dictionaryUrl = $injector.get('dictionaryUrl');
        });
    });

	afterEach(function () { 
	});

	describe('for pull()', function () {
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

	describe('for pullDataDictionary()', function () {
		it('can retrieve the latest FedRAMP dictionary information', function () {
            // Mock http request
			$httpBackend.expectGET(dictionaryUrl).respond(201, TestData.DictionaryData);

            // Perform call
			DataService.pullDataDictionary().then(function (response) {
				expect(response).toBeDefined();
			});

			$httpBackend.flush();
		});
	});

    it('can retrieve from cache', inject(function ($injector) {
        var AssessorData = $injector.get('AssessorData');
        var StorageAssessorData = $injector.get('StorageAssessorData');
        var Settings = $injector.get('Settings');
        var StorageSettings = $injector.get('StorageSettings');
        var ds = $injector.get('DataService');

        var storageSettings = new StorageSettings();
        var settings  = new Settings();
        storageSettings.update(settings.hash(), settings);

        var cached = ds.getCachedStorage();
        expect(cached).toBe(null);

        var storageAssessor = new StorageAssessorData();
        var data = new AssessorData(TestData.AssesorData);
        var data2 = new AssessorData( {
            'name': 'Allred & Flores Inc',
            'Accreditation_Date': '2014-12-22T05:00:00.000Z'
        });

        settings.refresh();
        storageAssessor.update(data.hash(), data);
        cached = ds.getCachedStorage();
        expect(cached).toBe(null);

    }));

    it('can save providers and assessors', inject(function ($injector) {
        var AssessorData = $injector.get('AssessorData');
        var StorageAssessorData = $injector.get('StorageAssessorData');
        var Settings = $injector.get('Settings');
        var StorageSettings = $injector.get('StorageSettings');
        var ds = $injector.get('DataService');

        var storageSettings = new StorageSettings();
        var settings  = new Settings();
        storageSettings.update(settings.hash(), settings);

        var storageAssessor = new StorageAssessorData();
        var data = new AssessorData({
            "Name": "Sunera LLC",
            "Accreditation_Date": "2016-04-07T04:00:00.000Z",
            "Logo": "https://www.fedramp.gov/files/2016/08/Sunera-Logo.jpg",
            "Description": "As an accredited 3PAO, Sunera is authorized to perform the end-to-end assessment for FedRAMP compliance, including developing the security assessment plan, conducting the full assessment, performing all required security testing, performing mandatory annual re-testing and developing the Security Assessment Report and all other related documentation.",
            "POC_Name": "Andrew Cannata",
            "POC_Email": "3pao@sunera.com",
            "website": "www.sunera.com",
            "Remediation": "N",
            "Founded": 2005,
            "Primary_Office_Locations": "* 201 E Kennedy Blvd.,\nSuite 1750,\nTampa, FL 33602\n* 31 W 34th St.,\nSuite 7036,\nNew York, NY 10001\n* 4590 MacArthur Blvd.,\nSuite 500,\nNewport Beach, CA 92660",
            "FedRAMP_Assessed": "None",
            "Provide_Consulting_Services": "Y",
            "Description_of_Consulting_Services": "Sunera provides FedRAMP pre-assessments to ensure that CSPs are in the best possible position prior to beginning a FedRAMP final assessment.  Sunera also provides FedRAMP-focused gap analyses to benchmark the current state of a CSP's security practices, personnel, documentation, and policies against the requirements of FedRAMP.  The full range of Sunera's cyber security services - including infrastructure, governance, and security assessments - are also available to CSPs considering pursuing FedRAMP accreditation.",
            "Consulting_Services_To": "DocuSign Inc.",
            "Additional_Cyber_Frameworks": "* PCI QSA\n* PCI ASV\n* SOC"
        });

        var assessors = ds.saveAssessors(TestData.AssessorData);
        expect(assessors).toBeDefined();

        var providers = ds.saveProviders(TestData.Letters);
        expect(providers).toBeDefined();
    }));
});
