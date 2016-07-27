describe('The panel component', function () {
    'use strict';

    var component;
    var controller;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            controller = _$componentController_;
            component = controller('panel', null, {
                header: 'Agencies'
            });
        });
    });

    it('header to be populated', function () {
        expect(component.header).toBe('Agencies');
    });

    it('expand to default to true ', function () {
        expect(component.expand).toBe(true);
    });
});
