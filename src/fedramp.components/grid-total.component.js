(function () {
    'use strict';

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
    angular
        .module('fedramp.components')
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
