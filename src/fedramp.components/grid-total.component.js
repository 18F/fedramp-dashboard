(function () {
    'use strict';

    angular
        .module('fedramp.components')
        /**
         * Simply renders the total number of items within a filtered dataset. 
         *
         * @example
         * <grid-total></grid-total>
         *
         * @constructor
         * @memberof Components
         */
        .component('gridTotal', {
            template: '<span class="count">{{controller.gridController.items.length}}</span> results',
            controllerAs: 'controller',
            require: {
                gridController: '^grid'
            }
        });
})();
