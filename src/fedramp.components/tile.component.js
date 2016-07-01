(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .component('tile', {
            templateUrl: 'src/fedramp.components/tile.html',
            controller: Tile,
            controllerAs: 'controller',
            bindings: {
                expand: '<',
                model: '<'
            }
        });

    Tile.$inject = ['$log'];

    function Tile ($log) {
        // var self = this;

        // self.$onInit = function () {};
        // self.$onChanges = function (changes) {};
        // self.$onDestroy = function () {};
        // self.$postLink = function () {};
    }
})();
