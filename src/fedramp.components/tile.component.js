(function () {
    'use strict';

    angular
        .module('fedramp.components')
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

    /**
     * @constructor
     * @memberof Components
     */
    function Tile ($log, $state, $stateParams, helperService) {
        var self = this;

        /**
         * Redirect to the appropriate view
         * @public
         * @member {object}
         * @memberof Components.Tile
         */
        self.view = function () {
            if ($stateParams.name) {
                $state.go(
                    'fedramp.' + self.model.type + '.comparison',
                    {
                        first: helperService.slugify($stateParams.name),
                        second: helperService.slugify(self.model.name)
                    },
                    {
                        reload: true
                    });
            } else {
                $state.go(
                    'fedramp.' + self.model.type + '.information',
                    {
                        name: helperService.slugify(self.model.name)
                    },
                    {
                        reload: true
                    });
            }
        };

        // self.$onInit = function () {};
        // self.$onChanges = function (changes) {};
        // self.$onDestroy = function () {};
        // self.$postLink = function () {};
    }
})();
