/**
 * Provides storage specific functionality that extends the StorageManager
 * @constructor
 * @extends StorageManager
 */
var StorageProvider = function (options) {
    'use strict';

    StorageManager.call(this);

    var self = this;
    self.storageContainer = 'providers';


    /**
     * Transforms the raw object to a specifec model
     * @public
     * @memberof StorageProvider
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
};

StorageProvider.prototype = Object.create(StorageManager.prototype);
StorageProvider.prototype.constructor = StorageProvider;
