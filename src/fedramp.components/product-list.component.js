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
        self.slugify = slugify;

        function $onInit(){
            createList();
        }

        function createList(){
            var providers = fedrampData.providers();

            self.products.reduce(function(arr, product){
                for(let x = 0; x < providers.length; x++){
                    let provider = providers[x];
                    for(let y = 0; y < provider.products.length; y++){
                        var curProduct = provider.products[y];
                        if(curProduct.name === product){
                            arr.push({
                                name: product,
                                provider: provider.name,
                            });
                            break;
                        }
                    }
                }
                return arr;
            }, self.productList);

        }

        function slugify(slugme){
            return helperService.slugify(slugme);
        }
    }
})();
