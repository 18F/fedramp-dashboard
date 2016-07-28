(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('AssessorInformationController', AssessorInformationController);

    AssessorInformationController.$inject = ['$log', '$state', '$stateParams', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function AssessorInformationController ($log, $state, $stateParams, fedrampData, helperService) {
        var self = this;
        var assessors = fedrampData.assessors();

        /**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.AssessorInformationController
         */
        self.items = assessors.filter(x => helperService.slugify(x.name) !== $stateParams.name);

        /**
         * The item
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         */
        self.item = assessors.find(x => helperService.slugify(x.name) === $stateParams.name);

        /**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         */
        self.close = function () {
            helperService.navigateTo('/assessors' + helperService.queryString());
        };

        /**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */
        self.onUpdate = function(items){
            self.filteredData = items;
        };

        helperService.scrollTo('scrollToContent');
    }
})();
