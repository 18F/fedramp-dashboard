(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('gridSort', {
            templateUrl: 'src/fedramp.components/grid-sort.html',
            require: {
                gridController: '^grid'
            },
            controller: GridSort,
            controllerAs: 'controller',
            bindings: {
                property: '@',
                caseSensitive: '@',
                header: '@',
                default: '@'
            }
        });
    
    GridSort.$inject = ['$log', '$parse'];

    /**
     * @constructor
     * @memberof Components
     * @example <grid-sort property="provider" header="Provider"></grid-sort>
     */
    function GridSort($log, $parse){
        var self = this;
        self.activated = null;

        self.asc = true;

        self.$onInit = $onInit;
        self.sort = sort;
        self.highlight = highlight;
        self.toggleSort = toggleSort;

        function $onInit(){
            if(self.property){
                self.sortFunc = sortFunc;
            }
            self.propertyParser = $parse(self.property);

            if(self.default){
                // Parse if default should be in asc/desc
                self.asc = self.default.split('-').reduce(function(p, c){
                    return false;
                });
                self.sort(self.asc);
            }

            self.gridController.addSort(self);

        }

        /**
         * Sorts a list of items in the grid controller by the property for this particular
         * grid sort.
         * @public
         * @memberof Components.GridSort
         */
        function sort(doAscending){
            self.activated = angular.isDefined(doAscending);
            self.asc = doAscending;
            self.gridController.defaultSort = self;
            self.gridController.items.sort(self.sortFunc);

            // Update state of all sorts
            self.gridController.updateSort();
        }

        /**
         * Toggles the sort. To maintain a consistent interaction, we always set the toggle to ascending
         * if the sort is not activated. This case would be hit when the user has clicked on the sort for the 
         * first time or after another sort.
         */
        function toggleSort(){
            if(!self.activated){
                self.sort(true);
                return;
            }
            self.sort(!self.asc);
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
            var value = self.propertyParser(obj);
            if(angular.isString(value)){
                return value.toLowerCase().trim();
            }
           
            return value;
        }

        function highlight(asc){
            if(!self.activated){
                return false;
            }
            if(self !== self.gridController.defaultSort){
                return false;
            }
            if(self.asc === asc){
                return true;
            }
            return false;
        }
    }

})();
