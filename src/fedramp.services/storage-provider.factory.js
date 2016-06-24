(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .factory('StorageProvider', StorageProviderFactory);

    StorageProviderFactory.$inject = ['StorageManager', 'Provider'];

    function StorageProviderFactory (StorageManager, Provider) {
        /**
         * Provides storage specific functionality that extends the StorageManager
         * @constructor
         * @memberof Services
         * @extends StorageManager
         */
        function StorageProvider (options) {
            StorageManager.call(this);

            var self = this;
            self.storageContainer = 'providers';

            /**
             * Transforms the raw object to a specifec model
             * @public
             * @memberof Services.StorageProvider
             *
             * @param {Object} raw
             *  The JSON object
             *
             * @returns
             *  The item
             */
            self.transform = function (raw) {
                return new Provider(raw);
            };

            return self.init(options);
        }

        StorageProvider.prototype = Object.create(StorageManager.prototype);
        StorageProvider.prototype.constructor = StorageProvider;

        return StorageProvider;
    }
})();
