(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('search', {
            templateUrl: 'templates/components/search.html',
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

        /**
         * The format to be used when rendering results in Bing.
         * For browsers where AngularJS does not work we would want
         * normal functionality.
         *
         * @member {string}
         * @memberof Components.Search
         */
        self.format = 'html';

        /**
         * The search query.
         *
         * @member {string}
         * @memberof Components.Search
         */
        self.query = '';

        /**
         * Redirect to the search view to handle rendering of results
         *
         * @public
         * @memberof Components.Search
         */
        self.search = function (e) {
            if (e) {
                e.preventDefault();
            }

            if (self.query) {
                $state.go(
                    'fedramp.app.search',
                    {
                        query: self.query,
                    },
                    {
                        reload: true
                    });
            }
        };
    }
})();
