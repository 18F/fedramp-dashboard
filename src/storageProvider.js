/**
 * Provides storage specific functionality that extends the StorageManager
 */
var StorageProvider = function(){
    "use strict";

    StorageManager.call(this);

    var self = this;
    self.storageContainer = 'providers';


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
        return new Provider().init(raw);
    };

};


StorageProvider.prototype = Object.create(StorageManager.prototype);
StorageProvider.prototype.constructor = StorageProvider;
