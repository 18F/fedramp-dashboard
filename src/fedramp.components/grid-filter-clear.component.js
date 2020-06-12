(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('gridFilterClear', {
            transclude: true,
            template: '<ng-transclude class="no-select" ng-click="controller.clear()"></ng-transclude>',
            controller: GridFilterClear,
            controllerAs: 'controller',
            require: {
                gridController: '^grid'
            },
            bindings: {
            }
        });

    GridFilterClear.$inject = [];

    /**
     * Wraps a block of HTML with a handler to clear the filters for a grid.
     * Requires to be nested within a [Grid]{@link Components.Grid} component.
     *
     * @constructor
     * @memberof Components
     */
    function GridFilterClear () {
        var self = this;

        self.clear = clear;

        /**
         * Calls clear on grid component to clear out all filters
         * @public
         * @memberof Components
         */
        function clear () {
            self.gridController.clearFilters();
        }
    }
})();
