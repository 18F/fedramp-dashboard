describe('The product component', function () {
    'use strict';

    var component;
    var controller;
    var i;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            i = 0;
            controller = _$componentController_;
            component = controller('product', null, {
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

        component.model = { designation: 'Ready' };
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

        component.model = { designation: 'Compliant', authorizationDate: null };
        expect(component.statusMessage()).toBe('Compliant Since ');

        component.model = { designation: 'Compliant', authorizationDate: '07/11/2016' };
        expect(component.statusMessage()).toBe('Compliant Since 07/11/2016');

        component.model = { designation: 'Ready', expectedCompliance: null };
        expect(component.statusMessage()).toBe('This provider has not given an Estimated Compliance Date');

        component.model = { designation: 'Ready', expectedCompliance: '01/01/2024' };
        expect(component.statusMessage()).toBe('Estimated Compliance Date 01/01/2024');
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
});
