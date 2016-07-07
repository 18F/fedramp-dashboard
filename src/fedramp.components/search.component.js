(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('search', {
            templateUrl: 'src/fedramp.components/search.html',
            controller: Search,
            controllerAs: 'controller'
        });

    Search.$inject = ['$log', '$state'];

    /**
     * @constructor
     * @memberof Components
     */
    function Search ($log, $state) {
        var self = this;

        self.format = 'json';
        self.query = '';

        self.search = function (e) {
            e.preventDefault();
            $state.go(
                'fedramp.app.search',
                {
                    query: self.query,
                },
                {
                    reload: true
                });
        };
    }
})();
