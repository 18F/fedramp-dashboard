(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('comparison', {
            transclude: {
                'first': 'first',
                'second': 'second'
            },
            templateUrl: 'src/templates/components/comparison.html',
            controller: Comparison,
            controllerAs: 'controller',
            bindings: {
                onCloseBoth: '@'
            }
        });

    Comparison.$inject = [];

    /**
     * @constructor
     * @memberof Components
     */
    function Comparison () {
        var self = this;
    }
})();
