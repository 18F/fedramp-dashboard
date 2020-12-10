(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('productStatus', {
            templateUrl: 'templates/components/product-status.html',
            controller: ProductStatus,
            controllerAs: 'controller',
            bindings: {
                model: '<',
                status: '<'
            }
        });

    ProductStatus.$inject = [];

    /**
     * Renders the appropriate fedramp status icon and text based on the inputted status text
     * @constructor
     * @memberof Components
     */
    function ProductStatus () {
        var self = this;
    }
})();
