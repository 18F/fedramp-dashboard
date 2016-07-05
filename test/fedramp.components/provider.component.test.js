describe('The provider component', function () {
    'use strict';

    var component;
    var controller;
    var i;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            i = 0;
            controller = _$componentController_;
            component = controller('provider', null, {
                onClose: function () { i = 1; }
            });
        });
    });

    it('can close', function () {
        component.close();
        expect(i).toBe(1);
    });
});
