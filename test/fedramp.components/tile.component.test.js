describe('The Tile component', function () {
    'use strict';

    var component;
    var controller;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            controller = _$componentController_;
            component = controller('tile', null, {
                model: {
                    type: 'agency'
                },
                expand: true
            });
        });
    });

    it('model to be populated', function () {
        expect(component.model).toBeDefined();
    });

    it('tile template to be populated', function () {
        expect(component.tileTemplate).toBe('src/templates/components/tile-agency.html');
    });

    it('can create external link for a URL', function () {
        expect(component.externalLink('www.google.com'), 'http://www.google.com');
        expect(component.externalLink('https://www.google.com'), 'https://www.google.com');
    });
});
