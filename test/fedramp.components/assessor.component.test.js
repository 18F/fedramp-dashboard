describe('The assessor component', function () {
    'use strict';

    var component;
    var controller;
    var i;
    var model = {
        pocName: 'Chuck Norris'
    };

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            i = 0;
            controller = _$componentController_;
            component = controller('assessor', null, {
                model: model,
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

    it('can determine if contact information is present', function () {
        expect(component.hasContactInformation()).toBe(true);
    });

    it('can create link for a model type', function () {
        expect(component.linkify('product', 'Acme Anvils'), '#/product/acme_anvils');
    });

    it('can transform markdown', function () {
        expect('' + component.markdown('**Test** Cases - If the system is')).toBe('<p><strong>Test</strong> Cases - If the system is</p>');
    });

    it('can create external link for a URL', function () {
        expect(component.externalLink('www.google.com'), 'http://www.google.com');
        expect(component.externalLink('https://www.google.com'), 'https://www.google.com');
    });
});
