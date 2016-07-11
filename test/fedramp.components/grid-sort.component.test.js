describe('the grid sort component', function () {
    'use strict';

    var component;
    var $componentController;
    var gridSort;
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
                    name: 'Microsoft',
                    count: 1
                },
                {
                    name: 'Amazon',
                    count: 2
                }
                ],
                savedState: true
            });
            grid.$onInit();
        });
    });

    it('should sort string value in ascending/descending', function () {
        gridSort = $componentController('gridSort', 
            {
            },
            {
                property: 'name',
                header: 'Name',
                gridController: grid
            }
        );
        gridSort.$onInit();

        expect(grid.items[0].name).toBe('Microsoft');
        gridSort.sort(true);
        expect(grid.items[0].name).toBe('Amazon');
        gridSort.sort(false);
        expect(grid.items[0].name).toBe('Microsoft');
    });

    it('should sort numbers in descending order and ascending order', function () {
        gridSort = $componentController('gridSort', 
            {
            },
            {
                property: 'count',
                header: 'Count of stuff',
                gridController: grid
            }
        );
        gridSort.$onInit();

        expect(grid.items[0].count).toBe(1);
        gridSort.sort(false);
        expect(grid.items[0].count).toBe(2);
        gridSort.sort(true);
        expect(grid.items[0].count).toBe(1);
    });

    it('should use default sort on initialization', function () {
        gridSort = $componentController('gridSort', 
            {
            },
            {
                property: 'count',
                header: 'Count of stuff',
                gridController: grid,
                default: '-true'
            }
        );
        gridSort.$onInit();
        expect(grid.items[0].count).toBe(2);
        gridSort.toggleSort();
        expect(grid.items[0].count).toBe(1);
        gridSort.activated = false;
        gridSort.toggleSort();
        expect(grid.items[0].count).toBe(1);
    });

    it('should highlight asc/desc', function () {
        gridSort = $componentController('gridSort', 
            {
            },
            {
                property: 'count',
                header: 'Count of stuff',
                gridController: grid,
                default: 'true'
            }
        );
        gridSort.$onInit();

        var nameGridSort = $componentController('gridSort', 
            {
            },
            {
                property: 'name',
                header: 'Name of stuff',
                gridController: grid
            }
        );
        nameGridSort.$onInit();

        expect(gridSort.highlight(true)).toBe(false);
        expect(gridSort.highlight(true)).toBe(false);

        grid.doFilter();
    });
});
