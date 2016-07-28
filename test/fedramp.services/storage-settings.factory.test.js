describe('StorageSettings manager', function () {
    'use strict';

    var hash = 'settings';
    var StorageSettings;
    var Settings;

    beforeEach(function () {
        module('fedramp.services');
        inject(function ($injector) {
            StorageSettings = $injector.get('StorageSettings');
            Settings = $injector.get('Settings');
        });
    });

    it('initialize a new instance', function () {
        var storage = new StorageSettings();
        expect(storage).not.toBe(undefined);
    });

    it('initialize with the providers container', function () {
        var storage = new StorageSettings();
        expect(storage.storageContainer).toBe('fedramp');
    });

    it('can store item', function () {
        var settings  = new Settings();
        var storage = new StorageSettings();
        storage.clear();
        storage.update(hash, settings );

        var expected = storage.byId(hash);
        expect(expected).not.toBeNull();
    });

    it('can get item by ID', function () {
        var settings  = new Settings();

        var storage = new StorageSettings();
        storage.clear();
        storage.update(hash, settings);

        var expected = storage.byId(hash);
        expect(expected).not.toBeNull();
    });

    it('can update item', function () {
        var settings = new Settings();
        var date = settings.refresh();

        var storage = new StorageSettings();
        storage.clear();
        storage.update(hash, settings);

        var s = storage.byId(hash);
        expect(s.lastRefresh).toBe(date);

        date = s.refresh();
        storage.update(hash, s);

        s = storage.byId(hash);
        expect(s.lastRefresh).toBe(date);
    });

    it('can clear', function () {
        var settings = new Settings();

        var storage = new StorageSettings();
        storage.clear();
        storage.update(hash, settings);
        expect(storage.all().length).toBe(1);

        storage.clear();
        expect(storage.all().length).toBe(0);
    });
});
