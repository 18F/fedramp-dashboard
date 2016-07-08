describe('The search component', function () {
    'use strict';

    var component;
    var controller;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            controller = _$componentController_;
            component = controller('search', null, {});
        });
    });

    it('default format is html', function () {
        expect(component.format).toBe('html');
    });

    it('can search with query', function () {
        component.query = 'test';
        expect(component.search).not.toThrow();
    });

    it('cannot search with empty query', function () {
        component.query = '';
        expect(component.search).not.toThrow();
    });
});
