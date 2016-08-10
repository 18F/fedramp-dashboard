(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('navigation', {
            templateUrl: 'templates/components/navigation.html',
            controller: Navigation,
            controllerAs: 'controller'
        });

    Navigation.$inject = ['$state', '$location', 'helperService'];

    /**
     * @constructor
     * @memberof Components
     * @example <navigation />
     */
    function Navigation ($state, $location, helperService) {
        var self = this;

        /**
         * Toggle the mobile layout
         *
         * @member {boolean}
         * @memberof Components.Navigation
         */
        self.toggleMobile = false;

        /**
         * Returns whether a state or state expression glob is included in the current
         * state.
         * @public
         * @memberof Components.Navigation
         *
         * @param {string} route
         *  The glob route
         * @param {string} status
         *  The status filter (optional)
         */
        self.includes = function (route, status) {
            if (!status) {
                return $state.includes(route);
            }

            let search = $location.search() || {};
            return $state.includes(route) && search.status === status;
        };

        /**
         * Takes user to products grid and applies status filter.
         * @public
         * @memberof Components.Navigation
         *
         * @param {string} status
         *  The status filter to apply to the state
         */
        self.filterProducts = function (status) {
            $state.go('fedramp.app.home.products', {}, {
                reload: true,
                queryParams: {
                    status: status
                }
            });
        };
    }
})();
