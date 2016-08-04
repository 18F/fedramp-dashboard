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

        helperService.scrollTo('scrollToContent');
    }
})();
