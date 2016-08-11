describe('The Tile component', function () {
    'use strict';

    var component;
    var controller;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            controller = _$componentController_;
            component = controller('tile', {}, {
                model: {
                    type: 'agency'
                },
                expand: true
            });
        });
    });

    it('model to be populated', function () {
        expect(component.model).toBeDefined();
    });

    it('tile template to be populated', function () {
        expect(component.tileTemplate).toBe('templates/components/tile-agency.html');
    });

    it('can create external link for a URL', function () {
        expect(component.externalLink('www.google.com').toString()).toBe('http://www.google.com');
        expect(component.externalLink('https://www.google.com').toString()).toBe('https://www.google.com');
    });

    it('can redirect to a view', inject(function ($injector, _$componentController_) {
            var $location = $injector.get('$location');
            var controller = _$componentController_;
        var $stateParams = { name: 'FDA'};
            var tile = controller('tile', {
                $location: $location,
                $stateParams: $stateParams
            }, {
                model: {
                    name: 'USDA',
                    type: 'agency'
                },
                expand: true
            });
        tile.view();
        expect($location.url()).toBe('/agency/FDA/versus/usda');

        $stateParams.name = '';
        tile.view();
        expect($location.url()).toBe('/agency/usda');

    }));
});
