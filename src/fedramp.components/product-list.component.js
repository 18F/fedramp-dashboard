(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('productList', {
            templateUrl: 'src/templates/components/product-list.html',
            controller: ProductList,
            controllerAs: 'controller',
            bindings: {
                products: '<'
            }
        });

    ProductList.$inject = ['fedrampData', 'helperService'];

    /**
     * Renders a list of products with corresponding provider names. A link is generated for both provider and product.
     *
     * @constructor
     * @memberof Components
     */
    function ProductList (fedrampData, helperService) {
        var self = this;
        self.productList = [];

        self.$onInit = $onInit;
        self.createList = createList;

        function $onInit(){
            createList();
        }


        function createList(){
            // Generate group provider/product object
            var products = groupProviders();

            // Create an array containing the sorted provider names
            var sortedProductKeys = Object.keys(products).sort(function(a,b){
                if(a.toLowerCase() < b.toLowerCase()){
                    return -1;
                }
                if(a.toLowerCase() > b.toLowerCase()){
                    return 1;
                }
                return 0;
            });

            // Since we can't sort objects (maps) by keys, we take original sorted
            // array of providers and map each value to replace the provder string with
            // an object.
            sortedProductKeys = sortedProductKeys.map(function(v){
                return {
                    name: v,
                    products: products[v]
                };
            });

            self.groupedProducts = sortedProductKeys;
            
        }

        /**
         * Creates an object containing providers to products.
         *
         * @example
         *
         * {
         *      'Amazon': ['AWS', 'SomeOtherProduct']
         * }
         *
         * @returns
         * Object containing provider as key and product array as value
         */
        function groupProviders(){
            var providers = fedrampData.providers();
            var products = {};
            self.products.reduce(function(arr, product){
                for(let x = 0; x < providers.length; x++){
                    let provider = providers[x];
                    for(let y = 0; y < provider.products.length; y++){
                        var curProduct = provider.products[y];
                        if(curProduct.name === product){
                            if(!products[provider.name]){
                                products[provider.name] = [];
                            }
                            products[provider.name].push({
                                name: product,
                                provider: provider.name,
                                slugified: helperService.slugify(product)
                            });
                            break;
                        }
                    }
                }
                return arr;
            }, products);
            return products;
        }
    }
})();
