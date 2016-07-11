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
         * @memberof Components.Product
         */
        self.close = function () {
            if (self.onClose) {
                self.onClose();
                return;
            }
            
            $state.go('fedramp.app.home', {}, { reload: true });
        };

        /**
         * Is the products status considered 'Ready'
         * @public
         * @memberof Components.Product
         *
         * @returns
         *  A value indicating if the product ready
         */
        self.isReady = function () {
            return self.model.designation === 'Ready';
        };

        /**
         * Is the products status considered 'In Process'
         * @public
         * @memberof Components.Product
         *
         * @returns
         *  A value indicating if the product is in processing
         */
        self.isProcessing = function () {
            return self.model.designation === 'In-Process';
        };

        /**
         * Is the products status considered 'Compliant'
         * @public
         * @memberof Components.Product
         *
         * @returns
         *  A value indicating if the product is compliant
         */
        self.isCompliant = function () {
            let compliant = ['Compliant', 'In PMO Review'];
            return compliant.includes(self.model.designation);
        };

        /**
         * The percent complete for the product status
         * @public
         * @memberof Components.Product
         *
         * @returns
         *  A percentage as an integer
         */
        self.percentComplete = function () {
            let percent = 0;

            if (self.isReady()) {
                percent = 30;
            } else if (self.isProcessing()) {
                percent = 50;
            } else if (self.isCompliant()) {
                percent = 100;
            }

            return percent;
        };

        /**
         * The status message providing information concerning the
         * estimated or final compliancy date.
         * @public
         * @memberof Components.Product
         *
         * @returns
         *  Status message
         */
        self.statusMessage = function () {
            let message = '';
            
            if (self.isCompliant()) {
                message = 'Compliant Since ' + (self.model.authorizationDate || '');
            } else {
                if (self.model.expectedCompliance) {
                    message = 'Estimated Compliance Date ' + self.model.expectedCompliance;
                } else {
                    message = 'This provider has not given an Estimated Compliance Date';
                }
            }

            return message;
        };
    }
})();
