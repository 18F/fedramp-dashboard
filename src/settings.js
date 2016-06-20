var Settings  = function () {
    'use strict';

    // Scope `this` to self
    var self = this;


    // Properties
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
        if(options){
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
     */
    self.refresh = function(){
        self.lastRefresh = today();
        return self.lastRefresh;
    };

    /**
     * Clears last refresh
     */
    self.clearRefresh = function(){
        self.lastRefresh = null;
    };

    /**
     * Creates a formatted date string using format mm/dd/yyyy
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
};
