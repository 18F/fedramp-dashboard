describe('the grid search  component', function () {
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
    var dataFactory;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        dataFactory = new TestDataFactory(inject);
        grid = dataFactory.gridComponent({
            items: filteredItems,
            onUpdate: function(){},
            rawItems: [{
                name: 'Amazon',
                agencies: ['DoD', 'Dept of Stuffs'],
                products: [
                    {
                        name: 'Dog Bone'
                    },
                    {
                        name: 'Treats'
                    }
                ]
            }, {
                name: 'Google',
                agencies: ['DoD', 'DEA'],
                products: [
                    {
                        name: 'Cat stuff'
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

    it('Should search and find by product name', function () {
        var gridSearch = dataFactory.gridSearchComponent({
            gridController: grid,
            property: 'p.name in products'
        });
        gridSearch.$onInit();
        gridSearch.searchTerm = 'Dog';
        gridSearch.search();
        expect(grid.items.length).toBe(1);
    });

    it('Should search and find nothing', function () {
        var gridSearch = dataFactory.gridSearchComponent({
            gridController: grid,
            property: 'p.name in products'
        });
        gridSearch.$onInit();
        gridSearch.searchTerm = '';
        gridSearch.search();
        expect(grid.items.length).toBe(2);
    });

    it('should allow custom filterFunc to filter using multiple properties', function () {
        var gridSearch = dataFactory.gridSearchComponent({
            gridController: grid,
            filterFunc: function(obj, index, arr){
                if (obj.agencies.includes('Dept of Stuffs') || obj.agencies.includes('DEA')) {
                    return obj;
                }
                return null;
            }
        });
        gridSearch.$onInit();
        gridSearch.search();
        expect(gridSearch.filtered.length).toBe(2);
    });

    it('Should complain if id attribute is not specified', function () {
        var gridSearch = dataFactory.gridSearchComponent({
            gridController: grid,
            id: null,
            property: 'p.name in products'
        });
        expect(gridSearch.$onInit).toThrow();
    });

    it('Should complain if property orfilterFunc are not defined', function () {
        var gridSearch = dataFactory.gridSearchComponent({
            gridController: grid,
            property: null
        });
        expect(gridSearch.$onInit).toThrow();
    });

    it('Should clear the search filter', function () {
        var gridSearch = dataFactory.gridSearchComponent({
            gridController: grid,
            property: 'p.name in products'
        });

        gridSearch.$onInit();
        gridSearch.searchTerm = 'Hello';
        gridSearch.search();
        expect(gridSearch.searchTerm).toBeDefined();
        gridSearch.clear();
        expect(gridSearch.searchTerm).toBe('');
    });

    it('Should restore state for search', function () {
        var gridSearch = dataFactory.gridSearchComponent({
            gridController: grid,
            property: 'p.name in products'
        });

        gridSearch.$onInit();
        gridSearch.searchTerm = 'Hello';
        gridSearch.search();
        expect(gridSearch.searchTerm).toBeDefined();
        gridSearch.restoreState();
        expect(gridSearch.searchTerm).toBe('Hello');
    });
});

