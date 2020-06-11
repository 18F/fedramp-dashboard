(function () {
    'use strict';
    /**
     * Used to render a friendly text representation of the filters applied when printing
     * Uses default controller supplied by angular components.
     */
    angular
        .module('fedramp.components')
        .component('gridFilterPrint', {
            controllerAs: 'controller',
            templateUrl: 'templates/components/grid-filter-print.html',
            require: {
                gridController: '^grid'
            }
        });
})();
