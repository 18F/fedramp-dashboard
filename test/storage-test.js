describe('Storage manager', function () {
    it('initialize a new instance', function () {
        var storage = new StorageManager().init();
        expect(storage).not.toBe(undefined);
    });

    it('initialize with the providers container', function () {
        var storage = new StorageManager().init();
        expect(storage.storageContainer).toBe('providers');
    });

    it('initialize with different container', function () {
        var storage = new StorageManager().init({
            storageContainer: 'pirates-chest'
        });
        expect(storage).not.toBe(undefined);
        expect(storage.storageContainer).toBe('pirates-chest');
    });

    it('can store item', function() {
        var provider = new Provider().init({
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

        var storage = new StorageManager().init();
        storage.clear();
        storage.update(provider.hash(), provider);

        var expected = storage.byId(provider.hash());
        expect(expected.hash()).toBe(provider.hash());
    });

    it('can get item by ID', function() {
        var provider = new Provider().init({
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

        var storage = new StorageManager().init();
        storage.clear();
        storage.update(provider.hash(), provider);

        var expected = storage.byId(provider.hash());
        expect(expected.hash()).toBe(provider.hash());
    });

    it('can update item', function() {
        var provider = new Provider().init({
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

        var storage = new StorageManager().init();
        storage.clear();
        storage.update(provider.hash(), provider);

        var x = storage.byId(provider.hash());
        expect(x.atoLetters.length).toBe(1);

        x.atoLetters = [];
        storage.update(x.hash(), x);

        x = storage.byId(x.hash());
        expect(x.atoLetters.length).toBe(0);
    });

    it('can clear', function() {
        var provider = new Provider().init({
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

        var storage = new StorageManager().init();
        storage.clear();
        storage.update(provider.hash(), provider);
        expect(storage.all().length).toBe(1);

        storage.clear();
        expect(storage.all().length).toBe(0);
    });
});
