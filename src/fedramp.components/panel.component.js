(function () {
    'use strict';
    angular
        .module('fedramp.components')
        .component('panel', {
            transclude: true,
            templateUrl: 'src/templates/components/panel.html',
            controller: Panel,
            controllerAs: 'controller',
            bindings: {
                header: '@',
                iconClass: '@',
                expand: '<'
            }
        });

    Panel.$inject = [];

    /**
     * @constructor
     * @memberof Components
     */
    function Panel () {
        var self = this;
        self.header = self.header || '';
        self.expand = angular.isDefined(self.expand) ? self.expand : true;
    }
})();
