describe('The product-grid component', function () {
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
            component = controller('productsGrid', {
                $attrs: {
                    hideFilters: false
                }
            },
            {
                rawItems: [
                    {
                        'name': 'App Engine'
                    },

                    {
                        'name': 'Microsoft'
                    }
                ]
            });
        });
    });

    it('it initializes products', function () {
        expect(component.products).toBeDefined();
        expect(component.products.length).toBe(2);
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

        var grid = testDataFactory.productsGridComponent({
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

    it('it can filter be reuse range', inject(function (Product) {
        var selectedOptions = [
            {value: {min: 0, max:5}, label: '0 - 5', selected: false},
        ];
        var product = new Product();
        product.reuses = 1;
        var filtered = component.reuseRangeFilter(product, 0, [product], selectedOptions);
        expect(filtered).toBeDefined();
    }));

    it('it can filter by product name', inject(function (Product) {
        var product = new Product();
        product.name = 'App Engine';
        product.provider = 'Google';

        var filtered = component.productNameSearchFilterFunc(product, 0, [product], 'Google');
        expect(filtered).toBeDefined();

        filtered = component.productNameSearchFilterFunc(product, 0, [product], '');
        expect(filtered).toBe(product);
    }));

    it('it can filter by product description', inject(function (Product) {
        var product = new Product();
        product.name = 'App Engine';
        product.provider = 'Google';
        product.csoDescription = 'Foo';

        var filtered = component.productNameSearchFilterFunc(product, 0, [product], 'Foo');
        expect(filtered).toBeDefined();
        expect(filtered.csoDescription).toBe('Foo');
    }));

    it('it can filter by status', inject(function (Product) {
        var product = new Product();
        product.name = 'App Engine';
        product.provider = 'Google';
        product.designation = 'Compliant';

        var selectedOptions = component.statusFilterOptions(null);
        expect(selectedOptions).toBeDefined();
        var filtered = component.statusFilter(product, 0, [product], selectedOptions);
        expect(filtered).toBeDefined();
        expect(filtered.name).toBe(product.name);

    }));

});
