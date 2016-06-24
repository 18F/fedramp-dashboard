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
            'Authorizing_Letter_Last_Sign_Date': 'authorizingLetterSignedDate',
            'Authorizing_Agency': 'authorizingAgency',
            'Authorizing_Subagency': 'authorizingSubagency',
            'Active': 'active',
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
         * @member {string}
         * @memberof Models.AtoLetter
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
    }
})();
