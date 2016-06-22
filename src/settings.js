/**
 * Application settings for the FedRAMP dashboard.
 * @constructor
 */
var Settings  = function (options) {
    'use strict';

    // Scope `this` to self
    var self = this;


    /**
     * The last refresh date
     * @member {string}
     * @memberof Settings
     */
    self.lastRefresh = null;

    /**
     * Initialize the Settings object.
     *
     * @param {object} options
     *  A dictionary of options to configure the Settings object.
     *
     * @returns
     *  The Settings object
     */
    self.init = function (options) {
        if (options) {
            for (var x in options) {
                if (!options.hasOwnProperty(x)) {
                    continue;
                }

                if (self.hasOwnProperty(x)) {
                    self[x] = options[x];
                }
            }
        }
        return self;
    };

    /**
     * Refreshes the date to current date
     * @public
     * @memberof Settings
     *
     * @returns
     *  The last refresh date
     */
    self.refresh = function () {
        self.lastRefresh = today();
        return self.lastRefresh;
    };

    /**
     * Clears last refresh
     * @public
     * @memberof Settings
     */
    self.clearRefresh = function () {
        self.lastRefresh = null;
    };

    /**
     * Determine if the data requires a refresh.
     * @public
     * @memberof Settings
     *
     * @returns
     *  A boolean value
     */
    self.needsRefresh = function () {
        return self.lastRefresh !== today();
    };

    /**
     * Creates a formatted date string
     * @private
     * @memberof Settings
     *
     * @returns
     *  Today's date formatting as mm/dd/YYYY
     */
    function today () {
        var d = new Date();
        var dd = d.getDate();
        var mm = d.getMonth() + 1;
        var yyyy = d.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        } 

        if (mm < 10) {
            mm = '0' + mm;
        } 

        return mm + '/' + dd + '/' + yyyy;
    }

    return self.init(options);
};
