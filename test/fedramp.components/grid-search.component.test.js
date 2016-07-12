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
    });

    it('Should search and find by product name', function () {
        var gridSearch = $componentController('gridSearch', 
            null, {
                gridController: grid,
                property: 'p.name in products'
            }
        );
        gridSearch.$onInit();
        gridSearch.searchTerm = 'Dog';
        gridSearch.search();
        expect(grid.items.length).toBe(1);
    });

    it('Should search and find nothing', function () {
        var gridSearch = $componentController('gridSearch', 
            null, {
                gridController: grid,
                property: 'p.name in products'
            }
        );
        gridSearch.$onInit();
        gridSearch.searchTerm = '';
        gridSearch.search();
        expect(grid.items.length).toBe(2);
    });

});

