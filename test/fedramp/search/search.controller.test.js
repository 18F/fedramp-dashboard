describe('Search controller', function () {
    'use strict';

    var StorageData;
    var Data;
    var controller;
    var storage;
    var stateParams;
    var helperService;

    beforeEach(function () {
        module('fedramp', 'fedramp.services');
        inject(function ($controller, $injector) {
            StorageData = $injector.get('StorageData');
            helperService = $injector.get('helperService');
            Data = $injector.get('Data');

            var data = new Data(TestData.Letters[0]);
            storage = new StorageData();
            storage.clear();
            storage.update(data.hash(), data);

            stateParams = $injector.get('$stateParams');
            stateParams.query = 'test';
            
            controller = $controller('SearchController', { 
                fedrampData: storage,
                $stateParams: stateParams,
                helperService: helperService
            });
        });
    });

    it('has search query', function () {
        expect(controller.query).toBe('test');
    });

    it('has external link', function () {
        expect(controller.query.indexOf('test')).not.toBe(-1);
    });

    it('can create internal links', function () {
        expect(controller.internalLink('provider', 'acme')).toBe('http://localhost:9876/context.html#/provider/acme');
    });

    it('can extrapolate the file extension', function () {
        expect(controller.extension('www.google.com/file.doc')).toBe('[DOC]');
        expect(controller.extension('www.google.com/file.docx')).toBe('[DOCX]');
        expect(controller.extension('www.google.com/file.xls')).toBe('[XLS]');
        expect(controller.extension('www.google.com/file.xlsx')).toBe('[XLSX]');
        expect(controller.extension('www.google.com/file.pdf')).toBe('[PDF]');
        expect(controller.extension('www.google.com')).toBe('');
    });

    it('can transform markdown', function () {
        expect('' + controller.markdown('\ue000Test\ue001 Cases \u2013 If the system is')).toBe('<p><strong>Test</strong> Cases - If the system is</p>');
    });
});
