(function () {
    'use strict';

    angular
        .module('fedramp.components')
        /**
         * Simply renders the total number of items within a filtered dataset. 
         * Requires to be nested within a [Grid]{@link Components.Grid} component.
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
                /**
                 * Requires [Components.Grid]{@link Components.Grid}
                 */
                gridController: '^grid'
            }
        });
})();
