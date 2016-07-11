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
         * The tile template for the model type.
         */
        self.tileTemplate = 'src/fedramp.components/tile-' + self.model.type + '.html';

        /**
         * Redirect to the appropriate view
         * @public
         * @memberof Components.Tile
         */
        self.view = function () {
            if ($stateParams.name) {
                $state.go(
                    'fedramp.app.' + self.model.type + '.comparison',
                    {
                        first: helperService.slugify($stateParams.name),
                        second: helperService.slugify(self.model.name)
                    },
                    {
                        reload: true
                    });
            } else {
                $state.go(
                    'fedramp.app.' + self.model.type + '.information',
                    {
                        name: helperService.slugify(self.model.name)
                    },
                    {
                        reload: true
                    });
            }
        };
    }
})();
