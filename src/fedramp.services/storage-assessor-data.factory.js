(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .factory('StorageAssessorData', StorageAssessorDataFactory);

    StorageAssessorDataFactory.$inject = ['StorageManager', 'AssessorData', 'helperService'];

    function StorageAssessorDataFactory (StorageManager, AssessorData, helperService) {


        /**
         * Provides storage specific functionality that extends the StorageManager
         * @constructor
         * @memberof Services
         * @extends StorageManager
         */
        function StorageAssessorData (options) {
            StorageManager.call(this);
            var self = this;
            self.storageContainer = 'assessorData';

            /**
             * Transforms the raw object to a specifec model
             * @public
             * @memberof Services.StorageAssessorData
             *
             * @param {Object} raw
             *  The JSON object
             *
             * @returns
             *  The item
             */
            self.transform = function (raw) {
                return new AssessorData(raw);
            };

            return self.init(options);
        }

        StorageAssessorData.prototype = Object.create(StorageManager.prototype);
        StorageAssessorData.prototype.constructor = StorageAssessorData;
        return StorageAssessorData;
    }
})();
