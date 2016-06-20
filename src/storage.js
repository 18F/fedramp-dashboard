/**
 * Storage manager handles the storage and retrieval of items.
 */
var StorageManager = function () {
    'use strict';

    // Scope `this` to self.
    var self = this;

    // Properties
    self.storageContainer = 'default';

    /**
     * Initialize the storage manager.
     *
     * @param {object} options
     *  A dictionary of options to configure the storage manager
     *
     * @returns
     *  The storage manager
     */
    self.init = function (options) {
        var e = prechecks();
        if (e && e.length !== 0) {
            throw e;
        }

        if (options && options.storageContainer) {
            self.storageContainer = options.storageContainer;
        }

        return self;
    };

    /**
     * Update the status of an item.
     *
     * @param {string} id
     *  The identifier of the item
     * @param {object} properties
     *  The item properties
     */
    self.update = function (id, properties) {
        store(id, properties);
    };

    /**
     * Queries for an item by identifier.
     *
     * @param {string} id
     *  The identifier of the item
     *
     * @returns
     *  The item
     */
    self.byId = function (id) {
        return fetch(id);
    };

    /**
     * Clear the item queue.
     */
    self.clear = function () {
        purge();
    };

    /**
     * Queries all items in the storage container.
     *
     * @returns
     *  An array of items
     */
    self.all = function () {
        return all();
    };

    /**
     * Transforms the raw object to a specifec model. Subclasses should override
     * this method.
     *
     * @param {Object} raw
     *  The JSON object
     *
     * @returns
     *  The item
     */
    self.transform = function (raw) {
        return raw;
    };

    /**
     * Perform all prechecks necessary to ensure dependencies are met
     *
     * @returns
     *  An error message if a dependency is not met
     */
    function prechecks() {
        if (typeof(Storage) === 'undefined') {
            return 'Local storage is not supported';
        }

        // if (typeof(jQuery) === 'undefined') {
        //     return 'jQuery is not loaded';
        // }

        return null;
    }

    /**
     * Retrieve all items in local storage.
     *
     * @returns
     *  An array of items
     */
    function all() {
        var items = [];

        var storage = JSON.parse(localStorage.getItem(self.storageContainer));
        if (storage) {
            for (var key in storage) {
                items.push(self.transform(storage[key]));
            }
        }

        return items;
    }

    /**
     * Fetchs an item from local storage.
     *
     * @param {string} id
     *  The identifier of the item
     *
     * @returns
     *  The item
     */
    function fetch(id) {
        var storage = JSON.parse(localStorage.getItem(self.storageContainer));
        if (!storage) {
            return null;
        }

        if (storage[id]) {
            return self.transform(storage[id]);
        }

        return null;
    }

    /**
     * Stores an item to local storage.
     *
     * @param {string} id
     *  The identifier of the item
     * @param {object} properties
     *  The item properties
     */
    function store(id, properties) {
        var storage = JSON.parse(localStorage.getItem(self.storageContainer));
        if (!storage) {
            storage = {};
        }

        if (id) {
            storage[id] = properties;
            localStorage.setItem(self.storageContainer, JSON.stringify(storage));
        }
    }

    /**
     * Removes an item from local storage.
     *
     * @param {string} id
     *  The identifier of the item
     */
    function remove(id) {
        var storage = JSON.parse(localStorage.getItem(self.storageContainer));
        if (!storage || !storage[id]) {
            return;
        }

        delete storage[id];
        localStorage.setItem(self.storageContainer, JSON.stringify(storage));
    }

    /**
     * Purges all items from local storage.
     */
    function purge() {
        if (localStorage.getItem(self.storageContainer)) {
            localStorage.removeItem(self.storageContainer);
        }
    }

    /**
     * Dispatches an event to subscribers.
     *
     * @param {string} name
     *  String identification for the event
     * @param {object} details
     *  Additional details to pass along with the event object
     */
    function fireEvent(name, details) {
        var message = {};
        message.bubbles = true;
        message.cancelable = true;
        message.detail = details;

        var event = new CustomEvent(name, message);
        document.dispatchEvent(event);
    }
};
