(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('provider', {
            templateUrl: 'src/fedramp.components/provider.html',
            controller: Provider,
            controllerAs: 'controller',
            bindings: {
                model: '<',
                onClose: '<'
            }
        });

    Provider.$inject = ['$log', '$state'];

    /**
     * @constructor
     * @memberof Components
     */
    function Provider ($log, $state) {
        var self = this;

        /**
         * Close the informational panel
         * @public
         * @member {object}
         * @memberof Components.Provider
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
