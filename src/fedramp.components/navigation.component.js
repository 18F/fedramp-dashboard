(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('navigation', {
            templateUrl: 'templates/components/navigation.html',
            controller: Navigation,
            controllerAs: 'controller'
        });

    Navigation.$inject = [];

    /**
     * @constructor
     * @memberof Components
     * @example <navigation />
     */
    function Navigation () {
        var self = this;

        /**
         * Toggle the mobile layout
         *
         * @member {boolean}
         * @memberof Components.Navigation
         */
        self.toggleMobile = false;
    }
})();
