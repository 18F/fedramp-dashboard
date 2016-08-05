describe('The assessors-grid component', function () {
    'use strict';

    var component;
    var controller;
    var i;
    var testDataFactory;

    beforeEach(function () {
        module('fedramp', 'fedramp.components');
        testDataFactory = new TestDataFactory(inject);

        inject(function (_$componentController_, $injector) {
            i = 0;
            controller = _$componentController_;
            component = controller('assessorsGrid', {
                $attrs: {
                    hideFilters: false
                }
            }, 
            {
                rawItems: [
                    {
                        'name': 'App Engine',
                        'accreditationDate': '01/01/1973'
                    },
                    
                    {
                        'name': 'Microsoft'
                    }
                ]
            });
        });
    });

    it('it initializes assessors', function () {
        expect(component.assessors).toBeDefined();
        expect(component.assessors.length).toBe(1);
    });

    it('it initializes hideFilters', function () {
        expect(component.hideFilters).toBe(false);
    });

    it('it executes callback function', function () {
        var onUpdate = function(){
        };
        var items = [            
            {
                'name': 'App Engine'
            },

            {
                'name': 'Microsoft'
            }
        ];

        var grid = testDataFactory.assessorsGridComponent({
            onUpdate: onUpdate,
            rawItems: items 
        },{
            $attrs: {
                hideFilters: false
            }
        });
        expect(grid.onUpdate).toBeDefined();
        expect(grid.rawItems.length).toBe(2);
        items = items.splice(0,1);
        grid.onUpdate(items, {});
        expect(grid.filteredData.length).toBe(1);
    });

    it('it usesvalid reuse range options', function () {
        expect(component.reuseRangeOptions()).toBeDefined();
        expect(component.reuseRangeOptions().length).toBe(3);
    });

    it('it can filter be reuse range', inject(function (Assessor) {
        var selectedOptions = [
            {value: {min: 0, max:5}, label: '0 - 5', selected: false}, 
        ];
        var assessor = new Assessor();
        assessor.reuses = 1;
        var filtered = component.reuseRangeFilter(assessor, 0, [assessor], selectedOptions);
        expect(filtered).toBeDefined();
    }));

});
