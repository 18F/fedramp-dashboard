(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .provider('fedrampData', FedrampDataProvider);

    /**
     * Singlegon used to store the contents of a storagedata object after it's been pulled.
     *
     * The idea is to store the initial data load into this service so that
     * any other angular service/factory/directive/component can inject without having to re-query. Currently,
     * ui-router resolves are only limited to controllers bound to a state. With this service, we do away with that
     * limitation.
     *
     * This provider allows for a cache property to be configured that enables/disables automatic caching.
     * Since this is defined as a provider (angular.module.provider), you append the word Provider to the name 
     * defined above. So fedrampData => fedrampDataProvider;
     *
     *
     * @example
     *  // To configure, you inject the provider into config().
     *
     *  angular
     *  .module('fedramp')
     *  .config(['fedrampDataProvider', function (fedrampDataProvider) {
     *       fedrampDataProvider.defaults.cache = false;
     *   }])
     *
     *
     * // Then to use it, you just inject it,
     * someService.$inject = ['fedrampData'];
     * @constructor
     * @memberof Services
     */
    function FedrampDataProvider () {
        var provider = this;
        provider.defaults = {
            cache: true
        };

        /**
         * $get is executed once when the application is bootstrapped and uses the defaults to construct
         * the object. These defaults must be configured inside a config function by injecting fedrampDataProvider.
         */
        provider.$get = ['$log', 'Cache', function ($log, Cache) {
            return new FedrampDataService();

            /**
             * Fedramp Data Service is a service used to store queried information to be used by any component, service or 
             * factory. The intent is to have an object that can be passed around containing a cache of previously obtained data.
             *
             * This should be cached up front.
             */
            function FedrampDataService () {
                var self = this;

                /**
                 * Stores cache storage data.
                 */
                self.load = load;

                self.all = function () {
                    return [];
                };

                /**
                 * Takes the contents of a storage factory object and adds its properties and methods
                 * to this current object.
                 */
                function load (storage) {
                    angular.extend(self, storage);

                    // If we enable caching globally when configuring fedrampDataProvider,
                    // we wrap all data returning functions with a cache wrapper.
                    if (provider.defaults.cache) {
                        self.products = Cache.wrap('products')(storage.products);
                        self.providers = Cache.wrap('providers')(storage.providers);
                        self.assessors = Cache.wrap('assessors')(storage.assessors);
                        self.agencies = Cache.wrap('agencies')(storage.agencies);
                    }
                }
            }
        }];
    }
})();
