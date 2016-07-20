describe('The grid total component', function () {
    'use strict';

    var component;
    var controller;
    var i;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            i = 0;
            controller = _$componentController_;
            component = controller('gridTotal', null, {
                gridController: {
                    items:[1,2,3,4,5]
                }
            });
        });
    });


    it('can display total items', function () {
        expect(component.gridController.items.length === 5);
    });
});
