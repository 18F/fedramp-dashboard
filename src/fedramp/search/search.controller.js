(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$log', '$http', '$stateParams', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function SearchController ($log, $http, $stateParams, fedrampData, helperService) {
        var self = this;

        self.results = {};
        
        // FIXME: Currently not able to pull back results!!!
        $http
            .get('https://search.usa.gov/search', {
                params: {
                    utf8: '✓',
                    affiliate: 'fedramp',
                    format: 'json',
                    query: $stateParams.query,
                    commit: 'Search'
                }
            })
            .then(function (response) {
                if (response && response.data) {
                    self.results = response.data;
                }
            });
    }
})();
