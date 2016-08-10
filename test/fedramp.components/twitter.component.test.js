describe('The Twitter component', function () {
    'use strict';

    var component;
    var controller;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            controller = _$componentController_;
            component = controller('twitter', null, {});
        });
    });

    it('should add twitter platform script tag to page', function () {
        expect(component).toBeDefined();
        var found = false;
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var s = scripts[i];
            if (s.src === 'https://platform.twitter.com/widgets.js') {
                found = true;
                break;
            }
        }
        expect(found).toBe(true);
    });
});
