describe('Storage manager', function () {
    "use strict";

    it('initialize a new instance', function () {
        var storage = new StorageManager().init();
        expect(storage).not.toBe(undefined);
    });

    it('initialize with the providers container', function () {
        var storage = new StorageManager().init();
        expect(storage.storageContainer).toBe('default');
    });

    it('initialize with different container', function () {
        var storage = new StorageManager().init({
            storageContainer: 'pirates-chest'
        });
        expect(storage).not.toBe(undefined);
        expect(storage.storageContainer).toBe('pirates-chest');
    });

    it('transform returns raw  ', function () {
        var storage = new StorageManager().init({});
        var expected = 'transform';

        var transform = storage.transform(expected);
        expect(transform).toBe(expected);
    });

});
