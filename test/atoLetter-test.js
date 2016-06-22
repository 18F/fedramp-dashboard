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

            var a = new AtoLetter(options);
            expect(a[atoLetterMapping[x]]).toBe(expectedValue);
        }
    });

    it('the all known internal values', function () {
        var expectedValue = 'test-value';

        for (var x in atoLetterMapping) {
            var key = atoLetterMapping[x];
            var options = {};
            options[key] = expectedValue;

            var a = new AtoLetter(options);
            expect(a[key]).toBe(expectedValue);
        }
    });

    it('check for invalid initiation', function () {
        var expectedValue = null;
        var options = null;

        var a = new AtoLetter(options);
        expect(a).toBeDefined();
    });

    it('skip property not found in options property', function () {
        var Options = function () {
            this.test = 1;
        };
        var OtherOption = function () {};

        OtherOption.prototype = Object.create(Options.prototype);
        OtherOption.prototype.constructor = OtherOption;

        var options = new OtherOption();

        var a = new AtoLetter(options);
        expect(a).toBeDefined();
    });
});
