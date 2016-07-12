(function(){
    "use strict";

    angular
        .module('fedramp.services')
        .factory('Searcher', SearcherFactory);

    SearcherFactory.$inject = ['$log', '$parse'];

    function SearcherFactory($log, $parse){
        var ARRAY_FILTER_REGEX = /^(.*)\sin\s(.+)$/;

        return Searcher;

        /**
         * Searcher is a factory that allows objects to be traversed and searched
         * for. The idea is that you can specify a property expression to look through
         * when you execute a search. 
         *
         * @example
         * Given the following object being searched:
         *
         * {
         *      name: 'John Doe',
         *      nickname: 'JD',
         *      counts: [1,2,3,4],
         *      products: [{
         *          name: 'Prod',
         *          related: [{
         *              relatedItemName: 'Some related item'   
         *          }]
         *      }]
         *
         * }
         *
         * new Searcher(objectToSearch, propertyExpression);
         *
         * Property expression examples:
         *
         * 'i.relatedItemName in products.related' => would search everything in relatedItemName
         * 'i.name in products' => would search everything in the name key in products
         * 'i in counts' => would searching everything in the counts array
         * 'nickname' => would search in nickname
         * 
         *
         * @constructor
         * @memberof Services
         */
        function Searcher(data, propExpression){
            var self = this;
            var targetKey = null;
            var targetProps = null;
            var isPrimitive = true;
            var useIndex = false;
            // public funcs
            self.search = search;

            function init(){
                parseKeys();
            }

            function parseKeys(){
                var m = propExpression.match(ARRAY_FILTER_REGEX);
                if(m){
                    targetKey = m[1].split('.').splice(1).join('.');
                    targetProps = m[2].split('.');
                    isPrimitive = false;
                    useIndex = (targetKey === '');
                } else {
                    targetKey = propExpression;
                }
            }

            /**
             * Executes a search using the property expression and data defined in the constructor.
             * @public
             * @memberof Services.Searcher
             * @param {string} q parameter to search in object(s)
             * @returns
             *  If a single object is found, returns the object if found or null otherwise. If an array of objects
             *  is passed in, an array of found objects is returned.
             */
            function search(q){
                if(angular.isArray(data)){
                    return data.filter(function(obj){
                        var found = find(obj, targetProps, q);
                        if(found){
                            return obj;
                        }
                        return null;
                    });
                }

                var found = find(data, targetProps, q);
                if(found){
                    return data;
                }
                return null;
            }

            /**
             * Recursively walks the properties of an object defined in the property expression and compares
             * if their values are a match against the search term.
             *
             * @public
             * @memberof Services.Searcher
             * @param {object} obj the current object being checked
             * @param {array} props the properties that are left to be evaluated
             * @param {string} q the search term
             *
             * @returns
             * if object has been found
             */
            function find(obj, props, q){

                if(!props){
                    return match($parse(targetKey)(obj), q);
                }

                props = angular.copy(props);
                if(props.length === 0){
                    if(isPrimitive || useIndex){
                        return match(obj, q);
                    } 
                    return match($parse(targetKey)(obj), q);
                }
                var curProp = props.shift();

                var value = $parse(curProp)(obj);
                if(angular.isArray(value)){
                    for(var x = 0; x < value.length; x++){
                        var found = (find(value[x], props, q));
                        if(found){
                            return found;
                        }
                    }
                }
                return false;
            }

            /**
             * The default comparator when determining if a search is a match
             */
            function match(value, searchTerm){
                var pos = value.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase());
                return pos !== -1;
            }

            init();
        }
    }


})();
