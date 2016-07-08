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
                sortFunc: '<',
                caseSensitive: '@',
                header: '@'
            }
        })
    ;
    GridSort.$inject = ['$transclude'];
    
    function GridSort($transclude){
        var self = this;
        var dir = -1;
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
        self.filled = function(){
            return $transclude.isSlotFilled('sort');
        };

        function sort(doAscending){
            self.asc = doAscending;
            self.gridController.items.sort(self.sortFunc);
        }

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

        function numberSortFunc(a, b){
            if(self.asc){
                return a - b;
            }
            return b - a;
        }

        function value(obj){
            var value = obj[self.property];
            if(angular.isString(value)){
                return value.toLowerCase().trim();
            }
           
            return value;
        }
    }

})();
