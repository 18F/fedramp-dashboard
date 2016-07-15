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
                name: '@',
                property: '@',
                caseSensitive: '@',
                header: '@',
                default: '@'
            }
        });
    
    GridSort.$inject = ['$log', '$parse', '$element', '$location'];

    /**
     * @constructor
     * @memberof Components
     * @example <grid-sort property="provider" header="Provider"></grid-sort>
     */
    function GridSort($log, $parse, $element, $location){
        var self = this;
        self.activated = null;

        self.asc = true;

        self.$onInit = $onInit;
        self.sort = sort;
        self.highlight = highlight;
        self.toggleSort = toggleSort;
        self.clear = clear;

        function $onInit(){
            if(!self.name){
                throw 'Name must be specified for sort filter';
            }
            if(self.property){
                self.sortFunc = sortFunc;
            }
            self.propertyParser = $parse(self.property);

            restoreState();
            self.gridController.addSort(self);
        }

        function saveState(){
            // Merge any existing parameters
            var existingParams = 
                angular.extend(
                    self.gridController.state,{
                        'sort': (self.asc ? '' : '-') + self.name
                    });

            // Update url
            self.gridController.stateUpdate(existingParams);
        }

        function restoreState(){
            var sortParam = self.gridController.state.sort;
            if(!sortParam){
                loadDefaultSort();
                return;
            }

            var m = sortParam.match(/(-)?(.*)/);
            if(m[2] !== self.name){
                return;
            }

            self.asc = (m[1] === undefined);
            self.activated = true;
            self.sort(self.asc);
        }

        function loadDefaultSort(){
            if(self.default){
                // Parse if default should be in asc/desc
                self.asc = self.default.split('-').reduce(function(p, c){
                    return false;
                });
                self.sort(self.asc);
            }
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
            $element.addClass('sort-selected');
            // Update state of all sorts
            self.gridController.updateSort();
            saveState();

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

        /**
         * Clears the sorting.
         */ 
        function clear(){
            self.activated = false;
            $element.removeClass('sort-selected');
        }
    }

})();
