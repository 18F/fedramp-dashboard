
/**
 * Provides storage specific functionality that extends the StorageManager
 */
var StorageSettings = function(){
    "use strict";

    StorageManager.call(this);

    var self = this;
    self.storageContainer = 'fedramp';


    /**
     * Transforms the raw object to a specifec model
     *
     * @param {Object} raw
     *  The JSON object
     *
     * @returns
     *  The item
     */
    self.transform = function (raw) {
        return new Settings().init(raw);
    };

};


StorageSettings.prototype = Object.create(StorageManager.prototype);
StorageSettings.prototype.constructor = StorageSettings;
