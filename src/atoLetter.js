/**
 * Leveraged ATO letter.
 * @constructor
 */
var AtoLetter = function (options) {
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

    /**
     * Letter date
     * @member {date}
     * @memberof AtoLetter
     */
    self.letterDate = null;

    /**
     * Letter expiration date
     * @member {date}
     * @memberof AtoLetter
     */
    self.letterExpirationDate = null;

    /**
     * Authorizing letter signed date
     * @member {date}
     * @memberof AtoLetter
     */
    self.authorizingLetterSignedDate = null;

    /**
     * Authorizing agency
     * @member {string}
     * @memberof AtoLetter
     */
    self.authorizingAgency = '';

    /**
     * Authorizing subagency
     * @member {string}
     * @memberof AtoLetter
     */
    self.authorizingSubagency = '';

    /**
     * Active status
     * @member {string}
     * @memberof AtoLetter
     */
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
            return self;
        }

        for (var x in options) {
            if (!options.hasOwnProperty(x)) {
                continue;
            }
            
            var key = mapping[x];
            if (key) {
                self[key] = options[x];
            } else {
                if (self.hasOwnProperty(x)) {
                    self[x] = options[x];
                }
            }
        }

        return self;
    };

    return self.init(options);
};
