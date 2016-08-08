(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('gridFilterPrint', {
            controller: GridFilterPrint,
            controllerAs: 'controller',
            templateUrl: 'src/templates/components/grid-filter-print.html',
            require: {
                gridController: '^grid'
            }
        });

    GridFilterPrint.$inject = [];

    /**
     * Displays a human-friendly textual representation of the currently applied filters. This
     * is used when rendering the grid in print mode.
     *
     * Requires to be nested within a [Grid]{@link Components.Grid} component.
     *
     * @constructor
     * @memberof Components
     */
    function GridFilterPrint () {
        var self = this;
    }
})();
