describe('The product component', function () {
    'use strict';

    var component;
    var controller;
    var i;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_, $injector) {
            var Product = $injector.get('Product');
            var p = new Product();
            p.provider = 'ACME';

            i = 0;
            controller = _$componentController_;
            component = controller('product', null, {
                model: p,
                products: [p],
                onClose: function () { i = 1; }
            });
        });
    });

    it('can close', function () {
        component.close();
        expect(i).toBe(1);
    });

    it('can close by default', function () {
        component.onClose = null;
        expect(component.close).not.toThrow();
    });

    it('can determine if the model is ready', function () {
        component.model = { designation: 'Compliant' };
        expect(component.isReady()).toBe(false);

        component.model = { designation: 'FedRAMP Ready' };
        expect(component.isReady()).toBe(true);
    });

    it('can determine if the model is in process', function () {
        component.model = { designation: 'Ready' };
        expect(component.isProcessing()).toBe(false);

        component.model = { designation: 'In Process' };
        expect(component.isProcessing()).toBe(true);
    });

    it('can determine if the model is compliant', function () {
        component.model = { designation: 'In Process' };
        expect(component.isCompliant()).toBe(false);

        component.model = { designation: 'Compliant' };
        expect(component.isCompliant()).toBe(true);
    });

    it('can update the status message', function () {
        component.model = { designation: '', expectedCompliance: null };
        expect(component.statusMessage()).toBeDefined();

        component.model = { designation: 'Compliant', compliantDate: null };
        expect(component.statusMessage()).toBe('FedRAMP Authorized');

        component.model = { designation: 'Compliant', compliantDate: '07/11/2016' };
        expect(component.statusMessage()).toBe('FedRAMP Authorized Since 07/11/2016');

        component.model = { designation: 'Ready', expectedCompliance: null };
        expect(component.statusMessage()).toBe('This provider has not given an Estimated Authorization Date');

        component.model = { designation: 'Ready', expectedCompliance: '01/01/2024' };
        expect(component.statusMessage()).toBe('Estimated Authorization Date 01/01/2024');
    });

    it('can update the status percentage', function () {
        component.model = { designation: '' };
        expect(component.percentComplete()).toBe(0);

        component.model = { designation: 'Ready' };
        expect(component.percentComplete()).toBe(30);

        component.model = { designation: 'In Process' };
        expect(component.percentComplete()).toBe(50);

        component.model = { designation: 'Compliant' };
        expect(component.percentComplete()).toBe(100);
    });

    it('can create link for a model type', function () {
        expect(component.linkify('product', 'Acme Anvils')).toBe('#/product/acme-anvils');
    });

    it('can transform markdown', function () {
        expect('' + component.markdown('**Test** Cases - If the system is')).toBe('<p><strong>Test</strong> Cases - If the system is</p>');
    });

    it('can create external link for a URL', function () {
        expect(component.externalLink('www.google.com').toString()).toBe('http://www.google.com');
        expect(component.externalLink('https://www.google.com').toString()).toBe('https://www.google.com');
    });
});
