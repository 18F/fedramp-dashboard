(function(){
    "use strict";

    angular
        .module('fedramp')
        .controller('ProductsController', ProductController);

    ProductController.$inject = ['$log', 'products', '$stateParams', '$filter', '$location'];

    function ProductController($log, products, $stateParams, $filter, $location){
        var self = this;

        self.filteredData = [];
        self.onUpdate = onUpdate;
        self.products = products;
        self.reuseRangeOptions = reuseRangeOptions;
        self.reuseRangeFilter = reuseRangeFilter;
        self.productNameSearchFilterFunc = productNameSearchFilterFunc;

        function onUpdate(items, state){
            self.filteredData = items;
        }

        self.compliant = function () {
            let compliant = self.filteredData.filter(x => x.designation === 'Compliant' || x.designation === 'In PMO Review').length;
            return self.filteredData.length === 0 ? 0 : Math.round((compliant / self.filteredData.length) * 100);
        };

        function reuseRangeOptions (product) {
            return [
                {value: {min: 0, max:5}, label: '0 - 5', selected: false}, 
                {value: {min: 6, max:10}, label: '5 - 10', selected:false},
                {value: {min: 11, max:1000}, label: '> 10', selected:false}];
        }

        function reuseRangeFilter (product, index, arr, selectedOptions) {
            return selectedOptions.find(function (option) {
                if (product.reuses >= option.value.min && product.reuses <= option.value.max) {
                    return option;
                }
            });
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
