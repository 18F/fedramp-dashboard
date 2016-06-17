describe('ATO letter can map', function () {
    var atoLetterMapping;
    
    beforeAll(function () {
        atoLetterMapping = {
            'Letter_Date': 'letterDate',
            'Letter_Expiration_Date': 'letterExpirationDate',
            'Authorizing_Letter_Last_Sign_Date': 'authorizingLetterSignedDate',
            'Authorizing_Agency': 'authorizingAgency',
            'Authorizing_Subagency': 'authorizingSubagency',
            'Active': 'active'
        };
    });

    it('the all known external values', function () {
        var expectedValue = 'test-value';

        for (var x in atoLetterMapping) {
            var options = {};
            options[x] = expectedValue;

            var a = new AtoLetter().init(options);
            expect(a[atoLetterMapping[x]]).toBe(expectedValue);
        }
    });

    it('the all known internal values', function () {
        var expectedValue = 'test-value';

        for (var x in atoLetterMapping) {
            var key = atoLetterMapping[x];
            var options = {};
            options[key] = expectedValue;

            var a = new AtoLetter().init(options);
            expect(a[key]).toBe(expectedValue);
        }
    });
});
