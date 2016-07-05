(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('product', {
            templateUrl: 'src/fedramp.components/product.html',
            controller: Product,
            controllerAs: 'controller',
            bindings: {
                model: '<',
                onClose: '<'
            }
        });

    Product.$inject = ['$log', '$state'];

    /**
     * @constructor
     * @memberof Components
     */
    function Product ($log, $state) {
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
