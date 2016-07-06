describe('The download csv component', function () {
    'use strict';

    var component;
    var controller;
    var i;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_) {
            i = 0;
            controller = _$componentController_;
            component = controller('downloadCsv', null, {
                content: [{name:' Google', type: 'Provider'}]
            });
        });
    });

    it('can create filename', function () {
        var filename = component.filename(new Date());
        expect(filename).toBeDefined();

        filename = component.filename(null);
        expect(filename).toBeDefined();
    });

    it('can prepare download', function () {
        component.$onChanges();
        component.download();
        expect(component.downloadUrl).toBeDefined();
    });
});
