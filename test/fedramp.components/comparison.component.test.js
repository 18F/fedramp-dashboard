describe('The comparison component', function () {
    'use strict';

    var component;
    var controller;
    var i;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            i = 0;
            controller = _$componentController_;
            component = controller('comparison', null, {
                onCloseBoth: "fedramp.data.product"
            });
        });
    });

    it('it stores onCloseBoth', function () {
        expect(component.onCloseBoth).toBeDefined();
    });

});
