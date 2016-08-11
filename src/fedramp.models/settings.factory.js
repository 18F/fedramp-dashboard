(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .factory('Settings', SettingsFactory);

    SettingsFactory.$inject = ['helperService'];

    function SettingsFactory (helperService) {
        return Settings;

        /**
         * Application settings for the FedRAMP dashboard.
         * @constructor
         * @memberof Models
         */
        function Settings (options) {
            // Scope `this` to self
            var self = this;

            var mapping = {
                'Created_At': 'lastRefresh',
                'Produced_By' : 'producedBy'
            };

            /**
             * The last refresh date
             * @member {string}
             * @memberof Models.Settings
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
                        var key = mapping[x];
                        if(key){
                            self[key] = options[x];
                        }
                    }
                }
                return self;
            };

            /**
             * Refreshes the date to current date
             * @public
             * @memberof Models.Settings
             *
             * @returns
             *  The last refresh date
             */
            self.refresh = function () {
                self.lastRefresh = helperService.toDate(new Date().toString());
                return self.lastRefresh;
            };

            /**
             * Clears last refresh
             * @public
             * @memberof Models.Settings
             */
            self.clearRefresh = function () {
                self.lastRefresh = null;
            };

            /**
             * Determine if the data requires a refresh.
             * @public
             * @memberof Models.Settings
             *
             * @returns
             *  A boolean value
             */
            self.needsRefresh = function () {
                return self.lastRefresh !== helperService.toDate(new Date().toString());
            };

            /**
             * Hard-coded hash used since only a single instance will be stored
             * @public
             * @memberof Models.Settings
             *
             * @returns
             *  hash for settings
             */
            self.hash = function(){
                return "fedramp";
            };

            /**
             * Creates a formatted date string
             * @private
             * @memberof Models.Settings
             *
             * @returns
             *  Today's date formatting as mm/dd/YYYY
             */
            function today (date) {
                var d = date;
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
        }
    }
})();
