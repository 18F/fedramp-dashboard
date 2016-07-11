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
    var $element;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function (_$componentController_, $injector, $rootScope) {
            $componentController = _$componentController_;
            $log = $injector.get('$log');
            $location = $injector.get('$location');
            $scope = $rootScope.$new();
            $element = angular.element('<div></div>');
            grid = $componentController('grid', {
                $log: $log,
                $location: $location
            },{
                items: filteredItems,
                rawItems: [{
                    name: 'Amazon',
                    agencies: ['DoD', 'DEA'],
                    products: [
                        {
                            name: 'Dog Bone'
                        },
                        {
                            name: 'Treats'
                        }
                    ]
                }],
                savedState: true
            });
            grid.$onInit();
        });
    });

    it('should add a new filter and add expanded class', function () {
        gridFilter = $componentController('gridFilter', 
            {
                $log: $log,
                $element: $element
            },
            {
                property: 'agaency in agencies',
                id: 'agencies',
                header: 'Agencies',
                option: null,
                initialValues: null,
                expanded: true,
                opened: true
            }
        );
        gridFilter.$postLink();
        grid.addFilter(gridFilter);
        expect(grid.items).toBeDefined();
        expect(grid.items.length).toBe(1);
        expect($element.hasClass('grid-filter-expanded')).toBe(true);

    });

    it('should clear filters', function () {
        gridFilter = $componentController('gridFilter', 
            {
                $log: $log,
                $element: $element
            },
            {
                property: 'agencies',
                id: 'agencies',
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

    it('should not die if no values are found', function () {
        gridFilter = $componentController('gridFilter', 
            {
                $log: $log,
                $element: $element
            },
            {
                property: 'agencies',
                id: 'agencies',
                header: 'Agencies',
                option: null,
                initialValues: null,
                expanded: true,
                opened: true,
                gridController: grid
            }
        );
        gridFilter.$onInit();
        gridFilter.filtered = [];
        grid.doFilter();
    });
    it('should pull saved params from $location', function () {
        gridFilter = $componentController('gridFilter', 
            {
                $log: $log,
                $element: $element
            },
            {
                property: 'agency in agencies',
                id: 'agencies',
                header: 'Agencies',
                option: null,
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

    it('should filter on property containing multiple primitive values', function () {
        gridFilter = $componentController('gridFilter', 
            {
                $log: $log,
                $element: $element
            },
            {
                property: 'agency in agencies',
                id: 'agencies',
                header: 'Name',
                expanded: true,
                options: [{value: 'DoD', label: 'Dept of Defense'}, {value:'DEA', label: 'Stuff'}],
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
        expect(gridFilter.selectedOptionValues.length).toBe(0);
        gridFilter.selectOption({value: 'DoD'});
        expect(gridFilter.selectedOptionValues.length).toBe(1);
    });

    it('should filter on property containing multiple object values', function () {
        gridFilter = $componentController('gridFilter', 
            {
                $log: $log,
                $element: $element
            },
            {
                property: 'p.name in products',
                id: 'agencies',
                header: 'Products',
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
        grid.addFilter(gridFilter);
        gridFilter.applyFilter();
        expect(grid.items).toBeDefined();
        expect(grid.items.length).toBe(1);
        expect(gridFilter.selectedOptionValues.length).toBe(0);
        gridFilter.selectOption({value: 'Treats'});
        expect(gridFilter.selectedOptionValues.length).toBe(1);
    });

    it('should warn user if no filterFunc or optionFunc has been specified when property attribute is not populated', function () {
        gridFilter = $componentController('gridFilter', 
            {
                $log: $log,
                $element: $element
            },
            {
                header: 'Products',
                id: 'agencies',
                expanded: true,
                opened: true,
                gridController: grid
            }
        );
        expect(gridFilter.$onInit).toThrow();
    });

    it('should warn user if no unique id was provided', function () {
        gridFilter = $componentController('gridFilter', 
            {
                $log: $log,
                $element: $element
            },
            {
                header: 'Products',
                expanded: true,
                opened: true,
                gridController: grid
            }
        );
        expect(gridFilter.$onInit).toThrow();
    });
});
