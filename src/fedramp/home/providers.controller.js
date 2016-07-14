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

        self.providers = providers;
        self.reuseRangeOptions = reuseRangeOptions;
        self.reuseRangeFilter = reuseRangeFilter;
        self.onUpdate = onUpdate;

        function onUpdate(items){
            self.filteredData = items;
        }

        function reuseRangeOptions(providers){
            return [
                {value: {min: 0, max:5}, label: '0 - 5', selected: false}, 
                {value: {min: 6, max:10}, label: '5 - 10', selected:false},
                {value: {min: 11, max:1000}, label: '> 10', selected:false}];
        }

        function reuseRangeFilter (provider, index, arr, selectedOptions){
            var found = selectedOptions.find(function(option){
                if(provider.reuses >= option.value.min && provider.reuses <= option.value.max){
                    return option;
                }
            });
            return found;
        }

    }
})();
