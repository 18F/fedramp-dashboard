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

    function GridFilterPrint () {
        var self = this;
    }
})();
