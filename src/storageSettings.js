/**
 * Provides storage specific functionality that extends the StorageManager
 * @constructor
 * @extends StorageManager
 */
var StorageSettings = function (options) {
    'use strict';

    StorageManager.call(this);

    var self = this;
    self.storageContainer = 'fedramp';


    /**
     * Transforms the raw object to a specifec model
     * @public
     * @memberof StorageSettings
     *
     * @param {Object} raw
     *  The JSON object
     *
     * @returns
     *  The item
     */
    self.transform = function (raw) {
        return new Settings(raw);
    };

    return self.init(options);
};

StorageSettings.prototype = Object.create(StorageManager.prototype);
StorageSettings.prototype.constructor = StorageSettings;
