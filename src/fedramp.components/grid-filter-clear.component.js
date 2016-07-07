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

        // Calls parents controller to clear all filters.
        function clear(){
            self.gridController.clearFilters();
        }
    }
})();
