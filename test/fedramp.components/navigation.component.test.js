describe('The Navigation component', function () {
    'use strict';

    var component;
    var controller;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            controller = _$componentController_;
            component = controller('navigation', null, {});
        });
    });

    it('should initialize navigation', function () {
        expect(component).toBeDefined();
        expect(component.toggleMobile).toBe(false);
    });
});
