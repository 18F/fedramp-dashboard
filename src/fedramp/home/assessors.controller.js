(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('AssessorsController', AssessorsController);

    AssessorsController.$inject = ['$log', 'assessors'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function AssessorsController ($log, assessors) {
        var self = this;

        self.filteredData = [];
        self.assessors = assessors;
        self.onUpdate = onUpdate;

        function onUpdate(items){
            self.filteredData = items;
        }
    }
})();
