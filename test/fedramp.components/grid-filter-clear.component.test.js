describe('the grid filter clear component', function () {
    'use strict';

    var component;
    var $componentController;
    var gridFilter;
    var grid;
    var $log;
    var $location;
    var filteredItems;
    var $scope;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_, $injector, $rootScope) {
            $componentController = _$componentController_;
            $log = $injector.get('$log');
            $location = $injector.get('$location');
            $scope = $rootScope.$new();

            grid = $componentController('grid', {
                $log: $log,
                $location: $location
            },{
                items: filteredItems,
                rawItems: [{
                    name: 'Amazon',
                    agencies: ['DoD', 'DEA']
                }],
                savedState: true
            });
            grid.$onInit();
        });
    });

    it('should clear all filters', function () {
        gridFilter = $componentController('gridFilter', 
            {
                $log: $log
            },
            {
                property: 'name',
                header: 'Name',
                initialValues: ['Amazon'] ,
                expanded: true,
                opened: true,
                gridController: grid
            }
        );

        var gridFilterClear = $componentController('gridFilterClear', 
            null, {
                gridController: grid
            }
        );
        gridFilter.$onInit();
        gridFilter.applyFilter();
        grid.addFilter(gridFilter);
        expect(grid.items).toBeDefined();
        expect(grid.items.length).toBe(1);
        expect(gridFilter.selectedOptionValues.length).toBe(1);
        gridFilterClear.clear();
        expect(gridFilter.selectedOptionValues.length).toBe(0);
    });

});
