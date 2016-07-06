(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('assessor', {
            templateUrl: 'src/fedramp.components/assessor.html',
            controller: Assessor,
            controllerAs: 'controller',
            bindings: {
                model: '<',
                onClose: '<'
            }
        });

    Assessor.$inject = ['$log', '$state'];

    /**
     * @constructor
     * @memberof Components
     */
    function Assessor ($log, $state) {
        var self = this;

        /**
         * Close the informational panel
         * @public
         * @member {object}
         * @memberof Components.Assessor
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
