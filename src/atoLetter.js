var AtoLetter = function () {
    'use strict';

    // Scope `this` to self
    var self = this;

    var mapping = {
        'Letter_Date': 'letterDate',
        'Letter_Expiration_Date': 'letterExpirationDate',
        'Authorizing_Letter_Last_Sign_Date': 'authorizingLetterSignedDate',
        'Authorizing_Agency': 'authorizingAgency',
        'Authorizing_Subagency': 'authorizingSubagency',
        'Active': 'active',
    };

    // Properties
    self.letterDate = null;
    self.letterExpirationDate = null;
    self.authorizingLetterSignedDate = null;
    self.authorizingAgency = '';
    self.authorizingSubagency = '';
    self.active = '';

    /**
     * Initialize the ATO letter object.
     *
     * @param {object} options
     *  A dictionary of options to configure the ATO letter
     *
     * @returns
     *  The ATO letter
     */
    self.init = function (options) {
        if (!options) {
            return;
        }

        for (var x in options) {
            if (!options.hasOwnProperty(x)) {
                continue;
            }
            
            var key = mapping[x];
            if (key) {
                self[key] = options[x];
            }
        }

        return self;
    };
};
