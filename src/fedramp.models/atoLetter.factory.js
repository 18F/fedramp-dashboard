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
            'Active': 'active',
            'Include_In_Marketplace': 'includeInMarketplace',
            'Independent_Assessor': 'independentAssessor'
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
         * Active status
         * @deprecated
         * @member {string}
         * @memberof Models.AtoLetter
         */
        self.active = '';

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
