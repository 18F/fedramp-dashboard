(function(){
    "use strict";

    angular
        .module('fedramp')
        .controller('ProductsController', ProductController);

    ProductController.$inject = ['$log', 'products', '$stateParams', '$filter', '$location'];

    function ProductController($log, products, $stateParams, $filter, $location){
        var self = this;
        self.onUpdate = onUpdate;
        self.products = products;



        function onUpdate(items){
            $log.debug('Incoming dataset');
            self.filteredData = items;
        }
    }
})();
