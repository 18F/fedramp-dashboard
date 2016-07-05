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

    Tile.$inject = ['$log', '$state', '$stateParams', 'helperService'];

    function Tile ($log, $state, $stateParams, helperService) {
        var self = this;

        /**
         * Redirect to the appropriate view
         */
        self.view = function () {
            if ($stateParams.name) {
                $state.go(
                    'fedramp.' + self.model.type + '.comparison',
                    {
                        second: helperService.slugify(self.model.name)
                    });
            } else {
                $state.go(
                    'fedramp.' + self.model.type,
                    {
                        name: helperService.slugify(self.model.name)
                    });
            }
        };

        // self.$onInit = function () {};
        // self.$onChanges = function (changes) {};
        // self.$onDestroy = function () {};
        // self.$postLink = function () {};
    }
})();
