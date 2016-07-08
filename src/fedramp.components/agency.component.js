(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('agency', {
            templateUrl: 'src/fedramp.components/agency.html',
            controller: Agency,
            controllerAs: 'controller',
            bindings: {
                model: '<',
                onClose: '<'
            }
        });

    Agency.$inject = ['$log', '$state'];

    /**
     * @constructor
     * @memberof Components
     */
    function Agency ($log, $state) {
        var self = this;

        /**
         * Close the informational panel
         * @public
         * @memberof Components.Agency
         */
        self.close = function () {
            if (self.onClose) {
                self.onClose();
                return;
            }
            
            $state.go('fedramp.app.home', {}, { reload: true });
        };
    }
})();
