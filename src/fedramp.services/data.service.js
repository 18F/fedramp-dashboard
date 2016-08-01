(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .service('DataService', DataService);

    DataService.$inject = ['$log', 'StorageData', 'StorageAssessorData', 'StorageSettings', 'Settings', 'Data', 'AssessorData', 'DatasourceService', 'dataUrl', 'dictionaryUrl'];

    /**
     * @constructor
     * @memberof Services
     */
    function DataService ($log, StorageData, StorageAssessorData, StorageSettings, Settings, Data, AssessorData, DatasourceService, dataUrl, dictionaryUrl) {
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
            return DatasourceService.pull(dataUrl).then(function (response) {
                let meta = response.meta;
                let data = response.data;

                // Add Assessors
                let assessorStorage = saveAssessors(data.Assessors);

                // Add Providers
                let storage = saveProviders(data.Providers, assessorStorage.all());

                // Add Settings
                saveSettings(meta);

                return storage;
            });
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
        function saveProviders (data, assessors) {
            var storage = new StorageData({Assessors: assessors});
            storage.clear();

            for (let i = 0; i < data.length; i++) {
                let d = new Data(data[i]);
                storage.update(d.hash(), d);
            }
            return storage;
        }

        /**
         * Stores assessor information into local storage
         */
        function saveAssessors (assessors) {
            let assessorStorage = new StorageAssessorData();
            assessorStorage.clear();

            for (let i = 0; i < assessors.length; i++) {
                let d = new AssessorData(assessors[i]);
                assessorStorage.update(d.hash(), d);
            }
            return assessorStorage;
        }

        /**
         * Stores setting information into local storage
         */
        function saveSettings (meta) {
            let settingStorage = new StorageSettings();
            var setting = new Settings(meta);
            setting.refresh();
            settingStorage.update(setting.hash(), setting);
        }
    }
})();
