(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('gridFilterClear', {
            transclude: true,
            template: '<ng-transclude ng-click="controller.clear()"></ng-transclude>',
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
        function clear(){
            self.gridController.clearFilters();
        }
    }
})();
