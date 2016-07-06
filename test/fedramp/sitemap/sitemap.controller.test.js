describe('Sitemap controller', function () {
    'use strict';

    var StorageData;
    var Data;
    var controller;
    var storage;

    beforeEach(function () {
        module('fedramp', 'fedramp.services');
        inject(function ($controller, $injector) {
            StorageData = $injector.get('StorageData');
            Data = $injector.get('Data');

            var data = new Data(TestData.Letters[0]);
            storage = new StorageData();
            storage.clear();
            storage.update(data.hash(), data);
            
            controller = $controller('SitemapController', { 
                fedrampData: storage
            });
        });
    });

    it('has providers', function () {
        expect(controller.providers.length).not.toBe(0);
    });

    it('has products', function () {
        expect(controller.products.length).not.toBe(0);
    });

    it('has agencies', function () {
        expect(controller.agencies.length).not.toBe(0);
    });

    it('has assessors', function () {
        expect(controller.assessors.length).not.toBe(0);
    });

    it('can get the current date', function () {
        expect(controller.today).toBeDefined();
    });

    it('can slugify text', function () {
        expect(controller.slugify('Test With - Data')).toBe('test-with---data');
    });
});
