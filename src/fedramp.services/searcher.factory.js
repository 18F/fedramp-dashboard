(function(){
    'use strict';

    angular
        .module('fedramp.services')
        .factory('Searcher', SearcherFactory);

    SearcherFactory.$inject = ['$log', '$parse'];

    function SearcherFactory ($log, $parse) {
        var ARRAY_FILTER_REGEX = /^(.*)\sin\s(.+)$/;

        return Searcher;

        /**
         * Searcher is a factory that allows a property expression to be used to search
         * through an objects properties. A property expression is a string that contains a 
         * path using dot notation that leads to a specific property in an object. Some examples include:
         *
         * <code>
         *  <div>'name'</div>
         *  <div>'agency.name'</div>
         *  <div>'a in agencies'</div>
         *  <div>'a.name in products'</div>
         * </code>
         *
         * It utilizes the angular
         * [$parse]{@link https://docs.angularjs.org/api/ng/service/$parse} service to facilitate some of this functionality.
         *
         * @example
         * // Given the following object being searched:
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
        function Searcher () {
            var self = this;

            /**
             * Executes search by defined property expression
             */
            self.prop = function (expression) {
                return new PropertyExpression(expression);
            };
        }

        /**
         * Handles searching for information within an object using a property expression.
         *
         * @constructor
         * @memberof Services
         * @param {string} expression
         * Property path to search in
         */
        function PropertyExpression (expression) {
            var self = this;

            /**
             * Allows a function to be passed in to perform a manual comparison.
             *
             * @public
             * @memberof Services.PropertyExpression
             * @param {object} data
             *  Object being searched. An object can be a single object or array
             * @param {function} func
             *  Function that will be executed after each result is iterated. If this function returns
             *  a value, it will be added to the results array.
             * @returns
             * Array of matched results
             */
            self.criteriaFunc = function (data, func) {
                var results = [];
                eachResult(data, function (currentObject, value) {
                    var add = func.call(self, currentObject, value);
                    if (add) {
                        results.push(add);
                    }
                });
                return results;
            };

            /**
             * Iterates through an objects properties using the specified property expression
             * and performs a contains comparison.
             *
             * @public
             * @memberof Services.PropertyExpression
             * @param {object} data
             * Object being searched. An object can be a single object or array
             * @param {string} searchTerm
             * The text value to find
             * @returns
             * Array of matched results
             */
            self.contains = function (data, searchTerm) {
                var results = [];

                eachResult(data, function (currentObject, value) {
                    if (value.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()) !== -1) {
                        results.push(currentObject);
                        return true;
                    }
                    return false;
                });

                return results;
            };

            /**
             * Iterates through an objects properties using the specifed property expression 
             * and performs an equals comparison.
             *
             * @public
             * @memberof Services.PropertyExpression
             * @param {object} data
             * Object being searched. An object can be a single object or array
             * @param {string} searchTerm
             * The text value to find
             * @returns
             * Array of matched results
             */
            self.equals = function (data, searchTerm) {
                var results = [];
                eachResult(data, function (currentObject, value) {
                    if (value.toString() === searchTerm.toString()) {
                        results.push(currentObject);
                        return true;
                    }
                    return false;
                });
                return results;
            };

            /**
             * Performs a date range comparison
             *
             * @public
             * @memberof Services.PropertyExpression
             * @param {object} data
             * Object being searched. An object can be a single object or array
             * @param {date} start
             * Start date
             * @param {date} end
             * End date
             * @returns
             * Array of matched results
             */
            self.withinDateRange = function (data, start, end) {
                var results = [];
                var startDate = new Date(start);
                var endDate = new Date(end);

                eachResult(data, function (currentObject, value) {
                    var valueDate = new Date(value);
                    if (valueDate >= startDate && valueDate <= endDate) {
                        results.push(currentObject);
                        return true;
                    }
                    return false;

                });
                return results;
            };

            /**
             * Helper function iterates through all objects making the property expression.
             *
             * @private
             * @memberof Services.PropertyExpression
             */
            function eachResult(data, func) {
                if (!angular.isArray(data)) {
                    data = [data];
                }
                data.forEach(function (currentObject) {
                    new Walker(currentObject, expression).walk(function (obj) {
                        return func.call(self, currentObject, obj);
                    });
                });
            }
        }

        /**
         * Traverses an object based on the property expression. Given a property expression, this will
         * recursively evaluate each property within the expression until all properties have been evaluated.
         *
         *
         * @constructor
         * @memberof Services
         * @param {object} data 
         * Object being traversed
         * @param {string} propExpression
         * A string containing a property expression to evaluate
         */
        function Walker (data, propExpression) {
            var self = this;
            /**
             * The current key in an expression to evaluate
             */
            var targetKey = null;

            /**
             * The keys in a property expression that must be processed
             */
            var targetProps = null;

            /**
             * Determines which object is a primitive type
             */
            var isPrimitive = true;

            /**
             * Flag to indicate whether to retrieve a value from an array using its number
             * based index or an objects key within an array
             */
            var useIndex = false;
            
            self.walk = function (func) {
                find(data, targetProps, func);
            };

            /**
             * Recursively walks an object to reach the property expression.
             *
             * Continuing from our example in the parseKeys() method below, assume we start with the following 
             * expression:
             *
             * <code> 
             * 'd.name in pets.dogs'</br>
             * targetKey => 'name'</br>
             * targetProps => ['pets', 'dogs']</br>
             * </br>
             *
             * This method will evaluate each property in the targetProps array against the current obj (on first iteration)
             * or against the preceding expression evaluation until all have been processed. 
             * 
             * Once at the end, 
             * we evalute the targetKey against the last targetProp. So in this case, we would end up evaluation the 
             * `name` property in an object within a dogs array.
             * </code>
             *
             * @public
             * @memberof Services.Walker
             * @param {object} obj
             * Object to traverse
             * @param {props} props
             * Array of split property expressions.              
             */

            function find (obj, props, q) {
                props = angular.copy(props);

                if (!props) {
                    return q.call(self, $parse(targetKey)(obj));
                }

                if (props.length === 0) {
                    if (isPrimitive || useIndex) {
                        //return match(obj, q);
                        return q.call(self, obj);
                    } 
                    return q.call(self, $parse(targetKey)(obj));
                }

                var curProp = props.shift();
                var value = $parse(curProp)(obj);
                if (angular.isArray(value)) {
                    for (var x = 0; x < value.length; x++) {
                        var found = find(value[x], props, q);
                        if (found) {
                            return;
                        }
                    }
                }
            }

            /**
             * Parses the property expression to determine the following:
             * @private
             * @memberof Services.Walker
             *
             * - if an array must be traversed
             * - if the expression is searching a primitive value
             * - if an array is being traversed, then should we pull from the array index (e.g. obj[0])
             *   or pull from an object within an array (e.g. obj.name)
             *
             * @example
             *
             * Given the following property expression
             *
             * 'd in dogs'
             *
             * This will be processed by the ARRAY_FILTER_REGEX. Since this contains `in`, an array is being traversed.
             * This will be split into a targetKey and targetProps. The targetKey in this case will be `d` and the targetProps
             * will contain an array split on the "." character to yield ['dogs']. Since only `d` was specified, we're only
             * targeting the index of the array.
             *
             * targetKey => 'd'
             * targetProps => ['dogs']
             *
             * However, given this expression
             *
             * 'd.name in pets.dogs'
             *
             * This would result in the following when constructed
             *
             * targetKey => 'name'
             * targetProps => ['pets', 'dogs']
             *
             */
            function parseKeys () {
                var m = propExpression.match(ARRAY_FILTER_REGEX);
                if (m) {
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
