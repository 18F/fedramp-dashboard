describe('Provider can map', function () {
    var providerMapping;
    
    beforeAll(function () {
        providerMapping = {
            'Clould_Service_Provider_Name': 'name',
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
            'Sponsoring_Subagency': 'sponsoringSubagency',
            'Leveraged_ATO_Letters': 'atoLetters',
        };
    });

    it('the all known external values', function () {
        var expectedValue = 'test-value';
        var expectedArray = [{
            "Letter_Date": "2014-02-24T05:00:00.000Z",
            "Letter_Expiration_Date": "2017-02-24T05:00:00.000Z",
            "Authorizing_Letter_Last_Sign_Date": "2017-02-24T05:00:00.000Z",
            "Authorizing_Agency": "Department of Health and Human Services",
            "Authorizing_Subagency": "Department of Health and Human Services",
            "Active": "Active"
        }];

        for (var x in providerMapping) {
            var options = {};
            if (x === 'Leveraged_ATO_Letters') {
                options[x] = expectedArray;
            } else {
                options[x] = expectedValue;
            }

            var p = new Provider().init(options);
            if (x === 'Leveraged_ATO_Letters') {
                expect(p[providerMapping[x]].length).toBe(1);
            } else {
                expect(p[providerMapping[x]]).toBe(expectedValue);
            }
        }
    });

    it('the all known internal values', function () {
        var expectedValue = 'test-value';
        var expectedArray = [{
            "Letter_Date": "2014-02-24T05:00:00.000Z",
            "Letter_Expiration_Date": "2017-02-24T05:00:00.000Z",
            "Authorizing_Letter_Last_Sign_Date": "2017-02-24T05:00:00.000Z",
            "Authorizing_Agency": "Department of Health and Human Services",
            "Authorizing_Subagency": "Department of Health and Human Services",
            "Active": "Active"
        }];

        for (var x in providerMapping) {
            var key = providerMapping[x];
            var options = {};
            if (key === 'atoLetters') {
                options[key] = expectedArray;
            } else {
                options[key] = expectedValue;
            }

            var p = new Provider().init(options);
            if (key === 'atoLetters') {
                expect(p[key].length).toBe(1);
            } else {
                expect(p[key]).toBe(expectedValue);
            }
        }
    });
});

describe('Provider hash', function () {
    it('is described according to the properties', function () {
        var p = new Provider().init({
            "Clould_Service_Provider_Name": "test",
            "Designation": "Compliant",
            "Service_Model": [
                "IaaS"
            ],
            "Deployment_Model": "Community Cloud",
            "Impact_Level": "Moderate",
            "Sponsoring_Agency": "Department of Health and Human Services",
            "Leveraged_ATO_Letters": [
                {
                    "Letter_Date": "2014-02-24T05:00:00.000Z",
                    "Letter_Expiration_Date": "2017-02-24T05:00:00.000Z",
                    "Authorizing_Letter_Last_Sign_Date": "2017-02-24T05:00:00.000Z",
                    "Authorizing_Agency": "Department of Health and Human Services",
                    "Authorizing_Subagency": "Department of Health and Human Services",
                    "Active": "Active"
                }
            ]
        });
        var expected = '' + p.name + p.pkg + p.pkgId + p.sponsoringAgency;
        expect(p.hash()).toBe(expected);
    });
});
