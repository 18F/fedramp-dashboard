describe('The agency component', function () {
    'use strict';

    var component;
    var controller;
    var i;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            i = 0;
            controller = _$componentController_;
            component = controller('agency', null, {
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

    it('can create link for a model type', function () {
        expect(component.linkify('product', 'Acme Anvils'), '#/product/acme_anvils');
    });
});
