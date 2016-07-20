describe('The product status component', function () {
    'use strict';

    var component;
    var controller;
    var i;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            i = 0;
            controller = _$componentController_;
            component = controller('productStatus', null, {
                status: 'Authorized'
            });
        });
    });

    it('can render an image', function () {
        expect(component).toBeDefined();
    });
});
