(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('gridSort', {
            transclude: true,
            template: '<ng-transclude ng-click="controller.sort()"></ng-transclude>',
            require: {
                gridController: '^grid'
            },
            controller: GridSort,
            controllerAs: 'controller',
            bindings: {
                property: '@',
                sortFunc: '<'
            }
        })
    ;

    function GridSort(){
        var self = this;
        var dir = -1;
        self.asc = true;
        self.$onInit = $onInit;
        self.sort = sort;


        function $onInit(){
            if(self.property){
                self.sortFunc = sortFunc;
                return;
            }
            if(!self.sortFunc){
                throw 'Must specify sort property or sort function';
            }
            console.log(self.gridController.items);
        }


        function sort(){
            self.gridController.items.sort(self.sortFunc);
            self.asc = !self.asc;
        }

        function sortFunc(_a, _b) {
            var a = value(_a);
            var b = value(_b);

            if(a < b){
                return self.asc ? -1 : 1;
            }
            if(a > b) {
                return self.asc ? 1 : -1;
            }
            return 0;
        }

        function value(obj){
            return obj[self.property];
        }
    }

})();
