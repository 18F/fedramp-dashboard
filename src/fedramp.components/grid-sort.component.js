(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('gridSort', {
            transclude: {
                sort: '?sort'
            },
            templateUrl: 'src/fedramp.components/grid-sort.html',
            require: {
                gridController: '^grid'
            },
            controller: GridSort,
            controllerAs: 'controller',
            bindings: {
                property: '@',
                caseSensitive: '@',
                header: '@'
            }
        });
    
    GridSort.$inject = [];

    /**
     * @constructor
     * @memberof Components
     * @example <grid-sort property="provider" header="Provider"></grid-sort>
     */
    function GridSort(){
        var self = this;
        self.asc = true;

        self.$onInit = $onInit;
        self.sort = sort;


        function $onInit(){
            if(self.property){
                self.sortFunc = sortFunc;
            }
            if(!self.sortFunc){
                throw 'Must specify sort property or sort function';
            }
            
        }

        /**
         * Sorts a list of items in the grid controller by the property for this particular
         * grid sort.
         * @public
         * @memberof Components.GridSort
         */
        function sort(doAscending){
            self.asc = doAscending;
            self.gridController.items.sort(self.sortFunc);
        }

        /**
         * Performs a generic sort.
         */
        function sortFunc(_a, _b) {
            var a = value(_a);
            var b = value(_b);

            if(angular.isNumber(a)){
                return numberSortFunc(a, b);
            }

            if(a < b){
                return self.asc ? -1 : 1;
            }
            if(a > b) {
                return self.asc ? 1 : -1;
            }
            return 0;
        }

        /**
         * Handles generic numerica sort.
         */
        function numberSortFunc(a, b){
            if(self.asc){
                return a - b;
            }
            return b - a;
        }

        /**
         * Gets reference to property value when sorting
         */
        function value(obj){
            var value = obj[self.property];
            if(angular.isString(value)){
                return value.toLowerCase().trim();
            }
           
            return value;
        }
    }

})();
