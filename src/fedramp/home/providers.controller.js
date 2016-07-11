(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('ProvidersController', ProvidersController);

    ProvidersController.$inject = ['$log', 'providers'];



    /**
     * @constructor
     * @memberof Controllers
     */
    function ProvidersController ($log, providers) {
        var self = this;

        self.productOptionsFunc = productOptionsFunc;
        self.providers = providers;
        self.productFilterFunc = productFilterFunc;

        function productFilterFunc(provider, index, arr, options){
            var found = options.find(function(option){
                var foundOption = provider.products.find(x=>x.name === option.value);
                return foundOption;
            });
            return found;
        }

        function productOptionsFunc(providerData){
            var products = providerData.reduce(function(prods, provider){
                prods = prods.concat(provider.products);
                return prods;
            }, [])
                .reduce(function(p,c){
                    p.add(c.name);
                    return p;
                }, new Set());
            return products;
        }
    }
})();
