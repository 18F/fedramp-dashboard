function TestDataFactory(inject){
    "use strict";
    var self = this;

    self.gridComponent = gridComponent;
    self.gridFilterComponent = gridFilterComponent;
    self.gridSearchComponent = gridSearchComponent;
    self.gridClearComponent = gridClearComponent;
    self.gridSortComponent = gridSortComponent;

    function gridComponent(properties){
        properties = properties || {};
        var gridComponent;

        var config = angular.extend({
            onUpdate: function(){},
            rawItems: [{
                name: 'Amazon',
                agencies: ['DoD', 'DEA']
            },
            {
                name: 'Goooooogle',
                agencies: ['Dept of Stuffs']
            }],
            savedState: true
        }, properties);

        inject(function (_$componentController_, $injector, $rootScope) {
            var $element = angular.element('<div></div>');
            var $componentController = _$componentController_;
            var $log = $injector.get('$log');
            var $location = $injector.get('$location');

            gridComponent = $componentController('grid', {
                $log: $log,
                $location: $location,
                $element: $element
            }, config);
        });

        return gridComponent;
    }

    function gridFilterComponent(properties, dependencies){
        var gridFilter;

        properties = properties || {};
            var config = angular.extend({
                property: 'name',
                id: 'name',
                header: 'Name',
                option: null,
                expanded: true,
                opened: true,
            }, properties);
            dependencies = dependencies || {};
        inject(function (_$componentController_, $injector, $rootScope) {
            var $element = angular.element('<div></div>');
            var $componentController = _$componentController_;
            var $log = $injector.get('$log');

            gridFilter = $componentController('gridFilter', 
                angular.extend({
                $log: $log,
                $element: $element
            }, dependencies),config);
        });

        return gridFilter;
    }

    function gridSearchComponent(properties){
        var filter;

        properties = properties || {};
            var config = angular.extend({
                id: 'name',
                placeholder: 'stuff',
                property: 'some prop'
            }, properties);

        inject(function (_$componentController_, $injector, $rootScope) {
            var $element = angular.element('<div></div>');
            var $componentController = _$componentController_;
            var $log = $injector.get('$log');
            filter = $componentController('gridSearch', 
                {
                $log: $log,
                $element: $element
            },config
            );
        });

        return filter;
    }

    function gridClearComponent(properties){
        var filter;

        inject(function (_$componentController_, $injector, $rootScope) {
            var $componentController = _$componentController_;
            var $log = $injector.get('$log');

            filter = $componentController('gridFilterClear', 
                {
                $log: $log,
            },properties
            );
        });

        return filter;
    }

    function gridSortComponent(properties){
        var filter;
        var config = angular.extend({
            name: 'someSort'
        }, properties);

        inject(function (_$componentController_, $injector, $rootScope) {
            var $componentController = _$componentController_;
            var $log = $injector.get('$log');
            var $element = angular.element('<div></div>');
            filter = $componentController('gridSort', 
                {
                $log: $log,
                $element: $element
            },config
            );
        });

        return filter;
    }
}
