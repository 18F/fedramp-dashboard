(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('navigation', {
            templateUrl: 'src/templates/components/navigation.html',
            controller: Navigation,
            controllerAs: 'controller'
        });

    Navigation.$inject = [];

    /**
     * @constructor
     * @memberof Components
     */
    function Navigation () {
        var self = this;

        /**
         *
         *
         * @member {boolean}
         * @memberof Components.Navigation
         */
        self.toggleMobile = false;
    }
})();
