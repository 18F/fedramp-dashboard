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
         * var searcher = new Searcher();
         * search.prop(<expression>).<action>
         *
         * search.prop('i.name in products').contains(dataToSearch, searchTerm);
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
        function Searcher(){
            var self = this;

            self.prop = prop;

            /**
             * Executes search by defined property expression
             */
            function prop(expression){
                return new PropertyExpression(expression);
            }
        }


        /**
         * Handles searching for information within an object using a property expression.
         */
        function PropertyExpression(expression){

            var self = this;

            self.contains = contains;
            self.equals = equals;
            self.withinDateRange = withinDateRange;
            self.criteriaFunc = criteriaFunc;

            /**
             * Allows a function to be passed in to perform a manual comparison.
             */
            function criteriaFunc(data, func){
                var results = [];
                eachResult(data, function(currentObject, value){
                    var add = func.call(self, currentObject, value);
                    if(add){
                        results.push(add);
                    }
                });
                return results;
            }

            /**
             * Iterates through an objects properties using the specified property expression
             * and performs a contains comparison.
             */
            function contains(data, searchTerm){
                var results = [];

                eachResult(data, function(currentObject, value){
                    if(value.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()) !== -1){
                        results.push(currentObject);
                        return true;
                    }
                    return false;
                });

                return results;
            }

            /**
             * Iterates through an objects properties using the specifed property expression 
             * and performs an equals comparison.
             */
            function equals(data, searchTerm){
                var results = [];
                eachResult(data, function(currentObject, value){
                    if(value.toString() === searchTerm.toString()){
                        results.push(currentObject);
                        return true;
                    }
                    return false;
                });
                return results;
            }

            /**
             * Performs a date range comparison
             */
            function withinDateRange(data, start, end){
                var results = [];
                var startDate = new Date(start);
                var endDate = new Date(end);

                eachResult(data, function(currentObject, value){
                    var valueDate = new Date(value);
                    if(valueDate >= startDate && valueDate <= endDate){
                        results.push(currentObject);
                        return true;
                    }
                    return false;

                });
                return results;
            }

            /**
             * Helper function iterates through all objects making the property expression.
             */
            function eachResult(data, func){
                if(!angular.isArray(data)){
                    data = [data];
                }
                data.forEach(function(currentObject){
                    new Walker(currentObject, expression).walk(function(obj){
                        return func.call(self, currentObject, obj);
                    });
                });
            }
        }

        /**
         * Traverses an object based on the property expression
         */
        function Walker(data, propExpression){
            var self = this;
            var targetKey = null;
            var targetProps = null;
            var isPrimitive = true;
            var useIndex = false;
            
            self.walk = walk;

            function walk(func){
                find(data, targetProps, func);
            }

            /**
             * Recursively walks an object to reach the property expression
             */
            function find(obj, props, q){
                props = angular.copy(props);

                if(!props){
                    return q.call(self, $parse(targetKey)(obj));
                }

                if(props.length === 0){
                    if(isPrimitive || useIndex){
                        //return match(obj, q);
                        return q.call(self, obj);
                    } 
                    return q.call(self, $parse(targetKey)(obj));
                }

                var curProp = props.shift();
                var value = $parse(curProp)(obj);
                if(angular.isArray(value)){
                    for(var x = 0; x < value.length; x++){
                        var found = find(value[x], props, q);
                        if(found){
                            return;
                        }
                    }
                }
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

            parseKeys();
        }
    }


})();
