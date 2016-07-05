(function(){
    "use strict";

    angular
        .module('fedramp')
        .controller('ProductsController', ProductController);

    ProductController.$inject = ['$log', 'products', '$stateParams'];

    function ProductController($log, products, $stateParams){
        var self = this;
        self.filterOptionGroups = [];

        // Agencies
        self.agencies = [];

        // Product Names
        self.productNames = [];

        // Service Models
        self.serviceModels = [];

        // Selected product names
        self.selectedNames = [];

        // Selected agencies
        self.selectedAgencies = [];

        self.selectedServiceModels = [];

        // Assign products resolve to controller
        self.products = products;


        // Funcs
        self.filterName = filterName;
        self.filterServiceModel = filterServiceModel;
        self.filterAgency = filterAgency;
        self.filterSelected = filterSelected;
        self.removeProviderFilter = removeProviderFilter;
        self.removeAgencyFilter = removeAgencyFilter;
        self.removeServiceModelFilter = removeServiceModelFilter;

        var filterCache = {};

        function onInit(){
            // Populate Product names
            //self.products.forEach(x => self.productNames.push(x.name)); 
            var providerCache = {};

            self.products.forEach(function(value, index, arr){
                if(!providerCache[value.provider]){
                    value.type = 'Product Name';
                    self.filterOptionGroups.push({
                        name: value.provider,
                        type: 'Provider'
                    });
                    providerCache[value.provider] = true;
                }
            });

            // Populate Agency list
            var agencyMap = {};
            self.products.forEach(function(element, index, array){
                if(element && element.agencies){
                    element.agencies.forEach(function(agency){
                        if(agency && !agencyMap[agency]){
                            self.agencies.push(agency);

                            self.filterOptionGroups.push({
                                name: agency,
                                type: 'Agency'
                            });
                            agencyMap[agency] = true;
                        }
                    });
                }
            });

            // Populate service models
            self.serviceModels = ['IaaS', 'PaaS', 'SaaS'];
            self.serviceModels.forEach(function(value, index, arr){
                self.filterOptionGroups.push({
                    name: value,
                    type: 'Service Model'
                });
            });
        }


        /**
         * Filter applied to render by product name
         */
        function filterName (value, index, arr){
            if(self.selectedNames && self.selectedNames.length > 0){
                if(self.selectedNames.includes(value.provider)){
                    return value;
                } 
                return null;
            }
            return value;
        }

        /**
         * Filter applied to render by service model
         */
        function filterServiceModel (value, index, arr){
            if(self.selectedServiceModels && self.selectedServiceModels.length > 0){
                var found = false;
                self.selectedServiceModels.forEach(function(curValue){
                    if(value.serviceModels.includes(curValue)){
                        found = true;
                    }
                });

                if(!found){
                    return null;
                }

            }
            return value;
        }

        /**
         * Filter applied to render by agency
         */
        function filterAgency (value, index, arr){
            if(self.selectedAgencies && self.selectedAgencies.length > 0 && value.agencies){
                var found = false;
                for(var x = 0; x < self.selectedAgencies.length; x++){
                    var curValue = self.selectedAgencies[x];
                    if(value.agencies.includes(curValue)){
                        console.log(curValue);
                        found = true;
                    }
                }
                if(!found){
                    return null;
                }
            }
            return value;
        }

        function filterSelected(){
            if(!filterCache[self.selectedFilter.name]){
                switch(self.selectedFilter.type){
                    case 'Provider':
                        self.selectedNames.push(self.selectedFilter.name);
                        filterCache[self.selectedFilter.name] = true;
                        break;
                    case 'Agency':
                        console.log('Agency case: ', self.selectedFilter);
                        self.selectedAgencies.push(self.selectedFilter.name);
                        filterCache[self.selectedFilter.name] = true;
                        break;
                    case 'Service Model':
                        self.selectedServiceModels.push(self.selectedFilter.name);
                        filterCache[self.selectedFilter.name] = true;
                        break;
                }

            }
            console.log(self.selectedAgencies);
        }

        function removeProviderFilter(filter){
            console.log(filter);
            var pos = self.selectedNames.indexOf(filter);
            console.log(pos);
            self.selectedNames.splice(pos, 1);
            filterCache[filter] = false;
        }

        function removeAgencyFilter(filter){
            var pos = self.selectedAgencies.indexOf(filter);
            console.log(pos);
            self.selectedAgencies.splice(pos, 1);
            filterCache[filter] = false;
        }
        
        function removeServiceModelFilter(filter){
            var pos = self.selectedServiceModels.indexOf(filter);
            console.log(pos);
            self.selectedServiceModels.splice(pos, 1);
            filterCache[filter] = false;
        }
        // Initialize everything
        onInit();
    }

})();
