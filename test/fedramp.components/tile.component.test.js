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
                    type: 'Agency'
                },
                expand: true
            });
        });
    });

    it('model to be populated', function () {
        expect(component.model).toBeDefined();
    });

    it('tile template to be populated', function () {
        expect(component.tileTemplate).toBe('src/templates/components/tile-Agency.html');
    });

});
