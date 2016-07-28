describe('Data can map', function () {
    'use strict';

    var dataMapping;
    var Data;
    
    beforeAll(function () {
        dataMapping = {
            'Cloud_Service_Provider_Name': 'name',
            'Cloud_Service_Provider_Package': 'pkg',
            'Path': 'path',
            'Designation': 'designation',
            'Package_ID': 'pkgId',
            'Service_Model': 'serviceModel',
            'Deployment_Model': 'deploymentModel',
            'Impact_Level': 'impactLevel',
            'Original_Authorization_Date': 'authorizationDate',
            'Original_Expiration_Date': 'expirationDate',
            'Sponsoring_Agency': 'sponsoringAgency',
            'Leveraged_ATO_Letters': 'atoLetters',
            'Underlying_CSP_Package_ID': 'underlyingCspPackages'
        };
    });

    beforeEach(function () {
        module('fedramp.models');
        inject(function ($injector) {
            Data = $injector.get('Data');
        });
    });

    it('all known external values', function () {
        var expectedValue = 'test-value';
        var expectedArray = [{
            'Letter_Date': '2014-02-24T05:00:00.000Z',
            'Letter_Expiration_Date': '2017-02-24T05:00:00.000Z',
            'Authorizing_Letter_Last_Sign_Date': '2017-02-24T05:00:00.000Z',
            'Authorizing_Agency': 'Department of Health and Human Services',
            'Authorizing_Subagency': 'Department of Health and Human Services',
            'Active': 'Active'
        }];

        for (var x in dataMapping) {
            var options = {};
            if (x === 'Leveraged_ATO_Letters') {
                options[x] = expectedArray;
            } else {
                options[x] = expectedValue;
            }

            var d = new Data(options);
            if (x === 'Leveraged_ATO_Letters') {
                expect(d[dataMapping[x]].length).toBe(1);
            } else {
                expect(d[dataMapping[x]]).toBe(expectedValue);
            }
        }
    });

    it('all known internal values', function () {
        var expectedValue = 'test-value';
        var expectedArray = [{
            'Letter_Date': '2014-02-24T05:00:00.000Z',
            'Letter_Expiration_Date': '2017-02-24T05:00:00.000Z',
            'Authorizing_Letter_Last_Sign_Date': '2017-02-24T05:00:00.000Z',
            'Authorizing_Agency': 'Department of Health and Human Services',
            'Authorizing_Subagency': 'Department of Health and Human Services',
            'Active': 'Active'
        }];

        for (var x in dataMapping) {
            var key = dataMapping[x];
            var options = {};
            if (key === 'atoLetters') {
                options[key] = expectedArray;
            } else {
                options[key] = expectedValue;
            }

            var d = new Data(options);
            if (key === 'atoLetters') {
                expect(d[key].length).toBe(1);
            } else {
                expect(d[key]).toBe(expectedValue);
            }
        }
    });
});

describe('Data hash', function () {
    'use strict';

    var Data;

    beforeEach(function(){
        module('fedramp.models');
        inject(function($injector){
            Data = $injector.get('Data');
        });
    });

    it('is described according to the properties', function () {
        var d = new Data({
            'Cloud_Service_Provider_Name': 'test',
            'Designation': 'Compliant',
            'Service_Model': [
                'IaaS'
            ],
            'Deployment_Model': 'Community Cloud',
            'Impact_Level': 'Moderate',
            'Sponsoring_Agency': 'Department of Health and Human Services',
            'Leveraged_ATO_Letters': [
                {
                    'Letter_Date': '2014-02-24T05:00:00.000Z',
                    'Letter_Expiration_Date': '2017-02-24T05:00:00.000Z',
                    'Authorizing_Letter_Last_Sign_Date': '2017-02-24T05:00:00.000Z',
                    'Authorizing_Agency': 'Department of Health and Human Services',
                    'Authorizing_Subagency': 'Department of Health and Human Services',
                    'Active': 'Active'
                }
            ]
        });

        var expected = '' + d.name + d.pkg + d.pkgId + d.sponsoringAgency;
        expect(d.hash()).toBe(expected);
    });
});
