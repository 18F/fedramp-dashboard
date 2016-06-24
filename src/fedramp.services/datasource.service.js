(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .service('DatasourceService', DatasourceService);

    DatasourceService.$inject = ['$http'];

    /**
     * @constructor
     * @memberof Services
     */
    function DatasourceService ($http) {
        var self = this;

        /**
         * Issue a GET request for the given URL.
         * @public
         * @memberof Services.DatasourceService
         *
         * @param {string} url
         *  The URL
         *
         * @returns
         *  The response as a promise
         */
        self.pull = function (url) {
            return $http.get(url).then(function (response) {
                return response.data;
            });
        };
    }
})();
