describe('the grid filter component', function () {
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

    it('should add a new filter', function () {
        gridFilter = $componentController('gridFilter', 
            {
                $log: $log
            },
            {
                property: 'agencies',
                header: 'Agencies',
                option: null,
                initialValues: null,
                expanded: true,
                opened: true
            }
        );

        grid.addFilter(gridFilter);
        expect(grid.items).toBeDefined();
        expect(grid.items.length).toBe(1);
    });

    it('should clear filters', function () {
        gridFilter = $componentController('gridFilter', 
            {
            $log: $log,
            },
            {
                property: 'agencies',
                header: 'Agencies',
                option: null,
                initialValues: null,
                expanded: true,
                opened: true,
                gridController: grid
            }
        );
        gridFilter.$onInit();
        gridFilter.selectedOptionValues = [{value: 'DoD', selected: false}];
        grid.addFilter(gridFilter);
        grid.clearFilters();
        expect(gridFilter.selectedOptionValues.length).toBe(0);
    });

    it('should pull saved params from $location', function () {
        gridFilter = $componentController('gridFilter', 
            {
            $log: $log,
            },
            {
                property: 'agencies',
                header: 'Agencies',
                option: null,
                initialValues: null,
                expanded: true,
                opened: true,
                gridController: grid
            }
        );
        $location.search('agencies', 'DoD');
        gridFilter.$onInit();
        gridFilter.selectedOptionValues = [{value: 'DoD', selected: false}];
        grid.addFilter(gridFilter);
        grid.clearFilters();
        expect(gridFilter.selectedOptionValues.length).toBe(0);
    });
});
