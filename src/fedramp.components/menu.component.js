(function () {
    'use strict';

    angular
        .module('fedramp.components')
        /**
         * @example
         *
         * @constructor
         * @memberof Components 
         */
        .component('menu', {
            templateUrl: 'src/templates/components/menu.html',
            controller: MenuController,
            controllerAs: 'controller'
        });

    MenuController.$inject = ['$state'];
    /**
     * Renders the main filter menu and highlights the current state or parent state.
     * @constructor
     * @memberof Components
     */
    function MenuController ($state) {
        var self = this;

        /**
         * Returns whether a state or state expression glob is included in the current
         * state.
         */
        self.includes = $state.includes;

    }

})();
