(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('AgenciesController', AgenciesController);

    AgenciesController.$inject = ['$log', 'agencies'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function AgenciesController ($log, agencies) {
        var self = this;
        self.filteredData = [];
        self.agencies = agencies;
        self.onUpdate = onUpdate;
        console.log(agencies);
        function onUpdate(items){
            self.filteredData = items;
        }
    }
})();
