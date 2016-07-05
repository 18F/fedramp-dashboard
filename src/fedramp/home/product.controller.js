(function(){
    "use strict";

    angular
        .module('fedramp')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$log', 'products', '$stateParams'];

    function ProductController($log, products, $stateParams){
        var self = this;
        self.agencies = [];
        self.filterOptions = [];
        self.serviceModels = ['IaaS', 'PaaS', 'SaaS'];

        self.products = products;
        self.products.forEach(x => self.filterOptions.push(x.name)); 
        var agencyMap = {};

        self.products.forEach(function(element, index, array){
            if(element && element.agencies){
                element.agencies.forEach(function(agency){
                    if(agency && !agencyMap[agency]){
                        self.agencies.push(agency);
                        agencyMap[agency] = true;
                    }
                });
            }
        });

        /**
         * Filter applied to render by product name
         */
        self.filterName = function(value, index, arr){
            console.log('search: ', self.search);
            if(self.search && self.search.name){
                if(self.search && self.search.name === value.name){
                    return value;
                } 
                return null;
            }
            return value;
        };

        /**
         * Filter applied to render by service model
         */
        self.filterServiceModel = function(value, index, arr){
            if(self.search && self.search.serviceModel){
                if(value.serviceModels.includes(self.search.serviceModel)){
                    return value;
                }
                return null;
            }
            return value;
        };

        /**
         * Filter applied to render by agency
         */
        self.filterAgency = function(value, index, arr){
            if(self.search && self.search.agency &&  value.agencies){
                if(value.agencies.includes(self.search.agency)){
                    return value;
                }
                return null;
            }
            return value;
        };
    }

})();
