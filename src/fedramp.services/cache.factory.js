(function () {
    'use strict';

    angular
        .module('fedramp.services')
        .factory('Cache', CacheFactory);

    CacheFactory.$inject = ['$cacheFactory'];

    /**
     * @constructor
     * @memberof Services
     */
    function CacheFactory ($cacheFactory) {
        var cache = $cacheFactory('fedramp');
        cache.wrap = wrap;

        return cache;

        /*
         * Wraps a function with additional behavior that does the following:
         * 
         * 1. Checks if the result of the function call is in cache
         * 2. If result is in cache, returns.
         * 3. If not in cache, execute apply on function with arguments and then store
         * result in cache using the passed in key.
         */
        function wrap(key) {
            return function(func){                        
                return function(){
                    var data = cache.get(key);
                    if (angular.isDefined(data)){
                        return data;
                    }
                    var result = func.apply(this, arguments);
                    cache.put(key, result);
                    return result;
                };
            };
        }
    }
})();
