(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$log', 'fedrampData'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function ProductController ($log, fedrampData) {
        var self = this;
    }
})();
