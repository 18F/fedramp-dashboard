(function(){
    "use strict";

    angular
        .module('fedramp')
        .controller('ProductsController', ProductController);

    ProductController.$inject = ['$log', 'products', '$stateParams', '$filter', '$location'];

    function ProductController($log, products, $stateParams, $filter, $location){
        var self = this;
        self.products = products;
        $log.debug(products);

        self.reuseRangeOptions = function(providers){
            return [
                {value: {min: 0, max:5}, label: '0 - 5', selected: false}, 
                {value: {min: 6, max:10}, label: '5 - 10', selected:false},
                {value: {min: 11, max:1000}, label: '> 10', selected:false}];
        };

        self.reuseRangeFilter = function(provider, index, arr, selectedOptions){
            var found = selectedOptions.find(function(option){
                if(provider.reuses >= option.value.min && provider.reuses <= option.value.max){
                    return option;
                }
            });
            return found;
        };
    }

})();
