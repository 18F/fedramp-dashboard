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
        self.productNameSearchFilterFunc = productNameSearchFilterFunc;



        function onUpdate(items){
            $log.debug('Incoming dataset');
            self.filteredData = items;
        }

        
        function productNameSearchFilterFunc(product, i, arr, searchTerm){
            // If no search term, we display result since this is the same as having nothing selected
            if(!searchTerm){
                return product;
            }

            searchTerm = searchTerm.toLowerCase();
            var productName = product.name.toLowerCase();
            var providerName = product.provider.toLowerCase();

            if(productName.indexOf(searchTerm) !== -1 || providerName.indexOf(searchTerm) !== -1){
                return product;
            }
            return null;
        }
    }
})();
