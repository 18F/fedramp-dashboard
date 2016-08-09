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
    var dataFactory;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        inject(function ($injector) {
            $location = $injector.get('$location');
        });

        dataFactory = new TestDataFactory(inject);
        grid = dataFactory.gridComponent({
            items: filteredItems,
            onUpdate: function(){},
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
            },
            {
                name: 'Google',
                agencies: ['Dept of Dogs'],
                products: [
                    {
                        name: 'Stuffed Cow'
                    },
                    {
                        name: 'Box'
                    }
                ]
            }],
            savedState: true
        });
        grid.$onInit();
    });

    it('should clear filters', function () {
        gridFilter = dataFactory.gridFilterComponent({
            property: 'agencies',
            id: 'agencies',
            header: 'Agencies',
            option: null,
            initialValues: null,
            expanded: true,
            opened: true,
            gridController: grid
        });

        gridFilter.$onInit();
        gridFilter.selectedOptionValues = [{value: 'DoD', selected: false}];
        grid.addFilter(gridFilter);
        grid.clearFilters();
        expect(gridFilter.selectedOptionValues.length).toBe(0);
    });

    it('should not die if no values are found', function () {
        gridFilter = dataFactory.gridFilterComponent({
            property: 'agencies',
            id: 'agencies',
            header: 'Agencies',
            option: null,
            initialValues: null,
            expanded: true,
            opened: true,
            gridController: grid
        });
        gridFilter.$onInit();
        gridFilter.filtered = [];
        expect(grid.doFilter).not.toThrow();
    });

    it('should pull saved params from $location', function () {
        gridFilter = dataFactory.gridFilterComponent({
            property: 'agencies',
            id: 'agencies',
            header: 'Agencies',
            option: null,
            initialValues: null,
            expanded: true,
            opened: true,
            gridController: grid
        });
        $location.search('agencies', 'DoD');
        gridFilter.$onInit();
        gridFilter.selectedOptionValues = [{value: 'DoD', selected: false}];
        grid.addFilter(gridFilter);
        grid.clearFilters();
        expect(gridFilter.selectedOptionValues.length).toBe(0);
    });

    it('should filter on property containing multiple primitive values', function () {
        gridFilter = dataFactory.gridFilterComponent({
            property: 'agency in agencies',
            id: 'agencies',
            header: 'Name',
            expanded: true,
            options: [{value: 'DoD', label: 'Dept of Defense'}, {value:'DEA', label: 'Stuff'}],
            opened: true,
            gridController: grid
        });

        var gridFilterClear = dataFactory.gridClearComponent({
            gridController: grid
        });

        gridFilter.$onInit();
        gridFilter.applyFilter();
        expect(grid.items).toBeDefined();
        expect(grid.items.length).toBe(2);
        expect(gridFilter.selectedOptionValues.length).toBe(0);
        gridFilter.selectOption({value: 'DoD'});
        expect(gridFilter.selectedOptionValues.length).toBe(1);
    });

    it('should filter on property containing multiple object values', function () {
        gridFilter = dataFactory.gridFilterComponent({
            property: 'p.name in products',
            id: 'agencies',
            header: 'Products',
            expanded: true,
            opened: true,
            gridController: grid
        });

        var gridFilterClear = dataFactory.gridClearComponent({
            gridController: grid
        });

        gridFilter.$onInit();
        grid.addFilter(gridFilter);
        gridFilter.applyFilter();
        expect(grid.items).toBeDefined();
        expect(grid.items.length).toBe(2);
        expect(gridFilter.selectedOptionValues.length).toBe(0);
        gridFilter.selectOption({value: 'Treats'});
        expect(gridFilter.selectedOptionValues.length).toBe(1);
    });

    it('should warn user if no filterFunc or optionFunc has been specified when property attribute is not populated', function () {
        gridFilter = dataFactory.gridFilterComponent({
            header: 'Products',
            id: 'agencies',
            property: null,
            filterFunc: null,
            expanded: true,
            opened: true,
            gridController: grid
        });
        expect(gridFilter.$onInit).toThrow();
    });

    it('should warn user if no unique id was provided', function () {
        gridFilter = dataFactory.gridFilterComponent({
            header: 'Products',
            id: null,
            expanded: true,
            opened: true,
            gridController: grid
        });
        expect(gridFilter.$onInit).toThrow();
    });

    it('should wrap custom filter', function () {
        var filterFunc = function(obj, i, arr, selectedOptionValues){
            if(obj.name == 'Amazon'){
                return obj;
            }
            return null;
        };
        gridFilter = dataFactory.gridFilterComponent({
            header: 'Products',
            id: null,
            expanded: true,
            opened: true,
            gridController: grid,
            filterFunc: filterFunc
        });

        gridFilter.applyFilter();
        expect(gridFilter.filtered.length).toBe(1);
    });

    it('should restore state for one filter', function () {

        gridFilter = dataFactory.gridFilterComponent({
            header: 'Products',
            id: 'agenciesFilter',
            expanded: true,
            property: 'a in agencies',
            gridController: grid
        });
        grid.$onInit();
        grid.state = {
            'agenciesFilter': 'DoD'
        };
        gridFilter.$onInit();
        grid.doFilter();
        expect(grid.items.length).toBe(1);
    });

    it('should restore state for filter and sort in ascendind and descending', function () {
        gridFilter = dataFactory.gridFilterComponent({
            header: 'Products',
            id: 'agenciesFilter',
            expanded: true,
            property: 'a in agencies',
            gridController: grid
        });
        var gridSort = dataFactory.gridSortComponent({
            property: 'name',
            header: 'Name',
            name: 'name',
            gridController: grid
        });
        grid.$onInit();
        grid.state = {
            'agenciesFilter': 'DoD',
            'sort': '-name'
        };
        gridFilter.$onInit();
        gridSort.$onInit();
        expect(grid.items[0].name).toBe('Amazon');

        grid.$onInit();
        grid.state = {
            'sort': '-name'
        };
        gridFilter.$onInit();
        gridSort.$onInit();
        expect(grid.items[0].name).toBe('Google');
        gridSort.clear();
    });

    it('should restore non-primitive value in json based query param', function () {
        var option = {
            label: 'Custom action',
            value: {min:0, max:10},
            selected: true
        };

        gridFilter = dataFactory.gridFilterComponent({
            header: 'Products',
            id: 'agenciesFilter',
            expanded: true,
            optionsFunc: function(){
                return [
                    option
                ];
            },
            filterFunc: function(obj){
                return obj;
            },
            gridController: grid
        });
        grid.$onInit();
        gridFilter.$onInit();
        gridFilter.selectOption(option);
        gridFilter.restoreState();
        expect(grid.state.agenciesFilter).toBeDefined();
        expect(grid.state.agenciesFilter).toEqual(':(' + angular.toJson(option.value) + ')');
        gridFilter.clear();
        gridFilter.applyFilter();
    });

    it('should toggle the expand', function () {
        var option = {
            label: 'Custom action',
            value: {min:0, max:10},
            selected: true
        };
        gridFilter = dataFactory.gridFilterComponent({
            header: 'Products',
            id: 'agenciesFilter',
            expanded: true,
            opened: false,
            optionsFunc: function(){
                return [
                    option
                ];
            },
            filterFunc: function(obj){
                return obj;
            },
            gridController: grid
        });
        expect(gridFilter.options.length).toBe(0);
        gridFilter.toggleExpand();
        expect(gridFilter.options.length).toBe(1);
    });
});
