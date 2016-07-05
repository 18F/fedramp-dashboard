(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .component('product', {
            templateUrl: 'src/fedramp.components/product.html',
            controller: Product,
            controllerAs: 'controller',
            bindings: {
                model: '<',
                onClose: '<'
            }
        });

    Product.$inject = ['$log', '$state', '$stateParams', 'helperService'];

    /**
     * @constructor
     * @memberof Components
     */
    function Product ($log) {
        var self = this;

        /**
         * Close the informational panel
         * @public
         * @member {object}
         * @memberof Components.Product
         */
        self.close = function () {
            if (self.onClose) {
                self.onClose();
                return;
            }
            
            $state.go('fedramp.home', {}, { reload: true });
        };
    }
})();
