describe('The menu component', function () {
    'use strict';

    var component;
    var controller;
    var $state;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_, $injector) {
            controller = _$componentController_;
            $state = $injector.get('$state');
            component = controller('menu', {
                $state: $state
            }, {});
        });
    });

    it('it initializes properly', function () {
        expect(component.includes).toBeDefined();
    });
});
