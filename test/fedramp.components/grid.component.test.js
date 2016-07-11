describe('the grid component', function () {
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
            $element = angular.element('<div></div>');
            $componentController = _$componentController_;
            $log = $injector.get('$log');
            $location = $injector.get('$location');
            $scope = $rootScope.$new();

            grid = $componentController('grid', {
                $log: $log,
                $location: $location,
                $element: $element
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


    it('should filter a basic string property in a list', function () {
        gridFilter = $componentController('gridFilter', 
            {
                $log: $log,
                $element: $element
            },
            {
                property: 'name',
                id: 'name',
                header: 'Name',
                option: null,
                expanded: true,
                opened: true,
                // simulate require
                gridController: grid
            }
        );
        gridFilter.$onInit();
        gridFilter.selectedOptionValues = [{value: 'Amazon', selected: false}];
        gridFilter.applyFilter();
        expect(gridFilter.filtered.length).toBe(1);
    });

    it('should select a value to filter on', function () {
        gridFilter = $componentController('gridFilter', 
            {
                $log: $log,
                $element: $element
            },
            {
                property: 'name',
                header: 'Name',
                id: 'name',
                option: null,
                expanded: true,
                opened: true,
                // simulate require
                gridController: grid
            }
        );
        var option = {value: 'Amazon', selected: false};

        gridFilter.$onInit();
        expect(gridFilter.selectedOptionValues.length).toBe(0);
        gridFilter.selectOption(option);
        gridFilter.applyFilter();
        expect(gridFilter.filtered.length).toBe(1);
        expect(gridFilter.selectedOptionValues.length).toBe(1);
        gridFilter.selectOption(option);
    });

    it('should load existing selected values', function () {
        gridFilter = $componentController('gridFilter', 
            {
            $log: $log,
            $element: $element
            },
            {
                property: 'name',
                id: 'name',
                header: 'Name',
                option: null,
                selectedOptionValues: [{value: 'Amazon'}],
                expanded: true,
                opened: true,
                // simulate require
                gridController: grid
            }
        );

        gridFilter.$onInit();
        expect(gridFilter.selectedOptionValues.length).toBe(1);
    });
});
