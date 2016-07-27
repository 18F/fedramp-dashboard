(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .factory('StorageSettings', StorageSettingsFactory);

    StorageSettingsFactory.$inject = ['StorageManager', 'Settings'];

    function StorageSettingsFactory (StorageManager, Settings) {
        /**
         * Provides storage specific functionality that extends the StorageManager
         * @constructor
         * @memberof Services
         * @extends StorageManager
         */
        function StorageSettings (options) {
            StorageManager.call(this);

            var self = this;
            self.storageContainer = 'fedramp';

            /**
             * Transforms the raw object to a specifec model
             * @public
             * @memberof Services.StorageSettings
             *
             * @param {Object} raw
             *  The JSON object
             *
             * @returns
             *  The item
             */
            self.transform = function (raw) {
                var s = new Settings();
                s.lastRefresh = raw.lastRefresh;
                s.producedBy = raw.producedBy;
                return s;
            };

            self.first = function(){
                var settings = self.all();
                if(settings.length === 0){
                    return null;
                }
                return settings[0];
            };

            return self.init(options);
        }

        StorageSettings.prototype = Object.create(StorageManager.prototype);
        StorageSettings.prototype.constructor = StorageSettings;

        return StorageSettings;
    }
})();
