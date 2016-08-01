(function () {
    'use strict';

    angular
        .module('fedramp.models')
        .factory('AtoLetter', AtoLetterFactory);

    function AtoLetterFactory () {
        return AtoLetter;
    }

    /**
     * Leveraged ATO letter.
     * @constructor
     * @memberof Models
     */
    function AtoLetter (options) {
        // Scope `this` to self
        var self = this;

        var mapping = {
            'Letter_Date': 'letterDate',
            'Letter_Expiration_Date': 'letterExpirationDate',
            'Authorization_Date': 'authorizationDate',
            'Authorizing_Letter_Last_Sign_Date': 'authorizingLetterSignedDate',
            'Authorizing_Agency': 'authorizingAgency',
            'Authorizing_Subagency': 'authorizingSubagency',
            'Agency_POC': 'pocName',
            'Agency_POC_email': 'pocEmail',
            'Agency_Logo': 'logo',
            'Include_In_Marketplace': 'includeInMarketplace',
            'Independent_Assessor': 'independentAssessor',
            'Announcement_Date': 'compliantDate'
        };

        /**
         * Letter date
         * @member {date}
         * @memberof Models.AtoLetter
         */
        self.letterDate = null;

        /**
         * Letter expiration date
         * @member {date}
         * @memberof Models.AtoLetter
         */
        self.letterExpirationDate = null;

        /**
         * The authorization date
         * @member {date}
         * @memberof Models.AtoLetter
         */
        self.authorizationDate = null;

        /**
         * Authorizing letter signed date
         * @member {date}
         * @memberof Models.AtoLetter
         */
        self.authorizingLetterSignedDate = null;

        /**
         * Authorizing agency
         * @member {string}
         * @memberof Models.AtoLetter
         */
        self.authorizingAgency = '';

        /**
         * Authorizing subagency
         * @member {string}
         * @memberof Models.AtoLetter
         */
        self.authorizingSubagency = '';

        /**
         * The agency point of contact name
         * @member {string}
         * @memberof Models.AtoLetter
         */
        self.pocName = '';

        /**
         * The agency point of contact email
         * @member {string}
         * @memberof Models.AtoLetter
         */
        self.pocEmail = '';

        /**
         * The agency logo
         * @member {string}
         * @memberof Models.AtoLetter
         */
        self.logo = '';

        /**
         * A value indicating if it should be included in the market place
         * @member {date}
         * @memberof Models.AtoLetter
         */
        self.includeInMarketplace = '';

        /**
         * The independent assessor
         * @member {string}
         * @memberof Models.Provider
         */
        self.independentAssessor = '';

        /**
         * Date of announcement when compliant
         * @member {date}
         * @memberof Models.Data
         */
        self.compliantDate = null;

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
    }
})();
