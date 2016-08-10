(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .service('DataService', DataService);

    DataService.$inject = ['$log', 'StorageData', 'StorageAssessorData', 'StorageSettings', 'Settings', 'Data', 'AssessorData', 'DatasourceService', 'dataUrl', 'dictionaryUrl', '$q'];

    /**
     * @constructor
     * @memberof Services
     */
    function DataService ($log, StorageData, StorageAssessorData, StorageSettings, Settings, Data, AssessorData, DatasourceService, dataUrl, dictionaryUrl, $q) {
        var self = this;

        /**
         * Issue a GET request for the given URL.
         * @public
         * @memberof Services.DataService
         *
         * @returns
         *  The response as a promise
         */
        self.pull = function () {
            // If data is not fresh, pull from cache
            var cached = self.getCachedStorage();
            if (cached) {
                // Return resolved promise since callers are expecting a promise result
                return $q.resolve(cached);
            }

            // Data is not fresh or not in cache so grab latest
            return DatasourceService.pull(dataUrl).then(function (response) {
                let meta = response.meta;
                let data = response.data;

                // Add Assessors
                let assessorStorage = self.saveAssessors(data.Assessors);

                // Add Providers
                let storage = self.saveProviders(data.Providers, assessorStorage.all());

                // Add Settings
                self.saveSettings(meta);

                return storage;
            });
        };

        /**
         * Retrieves data from local storage if the following conditions are met
         *
         * 1. System setting is stored in local storage AND
         * 2. System date exists and is equal to todays date AND
         * 3. Assessor data exists in local storage AND FINALLY
         * 4. Provider data exists in local storage 
         *
         * @public
         * @memberof Services.DataService
         *
         * @returns 
         * Null if nothing exists in cache or a {@link Services.StorageData} object containing cached results
         *
         */
        self.getCachedStorage = function () {
            // Check if previous settings exist or data is stale
            var settings = new StorageSettings().first();
            if (settings === null || settings.needsRefresh()) {
                return null;
            }

            // Ensure that assessor storage has data
            let assessors = new StorageAssessorData().all();
            if (!assessors || assessors.length === 0) {
                return null;
            }
            // Ensure that provider storage has data
            let providerStorage = new StorageData({Assessors: assessors});
            let providers = providerStorage.all();
            if (!providers || providers.length === 0) {
                return null;
            }

            // If assessors and provider storage have data, return!
            return providerStorage;
        };

        /**
         * Issue a GET request to retrieve the data dictionary.
         */
        self.pullDataDictionary = function (){
            return DatasourceService.pull(dictionaryUrl).then(function (dataDictionary) {
                for (let x = dataDictionary.length - 1; x >= 0; x--) {
                    var d = dataDictionary[x];
                    // Remove empty keys
                    if (Object.keys(d).length === 0){
                        dataDictionary.splice(x, 1);
                    }
                }
                return dataDictionary;
            });
        };

        /**
         * Stores provider information into local storage
         */
        self.saveProviders = function (data, assessors) {
            var storage = new StorageData({Assessors: assessors});
            storage.clear();

            for (let i = 0; i < data.length; i++) {
                let d = new Data(data[i]);
                storage.update(d.hash(), d);
            }
            return storage;
        };

        /**
         * Stores assessor information into local storage
         */
        self.saveAssessors = function (assessors) {
            let assessorStorage = new StorageAssessorData();
            assessorStorage.clear();

            for (let i = 0; i < assessors.length; i++) {
                let d = new AssessorData(assessors[i]);
                assessorStorage.update(d.hash(), d);
            }
            return assessorStorage;
        };

        /**
         * Stores setting information into local storage
         */
        self.saveSettings = function (meta) {
            let settingStorage = new StorageSettings();
            var setting = new Settings(meta);
            settingStorage.clear();
            setting.refresh();
            settingStorage.update(setting.hash(), setting);
        };
    }
})();
