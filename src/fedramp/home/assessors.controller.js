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

        self.assessors = assessors;
    }
})();
