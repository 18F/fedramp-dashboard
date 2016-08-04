(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('AgencyInformationController', AgencyInformationController);

    AgencyInformationController.$inject = ['$log', '$state', '$stateParams', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function AgencyInformationController ($log, $state, $stateParams, fedrampData, helperService) {
        var self = this;
        var agencies = fedrampData.agencies();

        /**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.AgencyInformationController
         */
        self.items = agencies.filter(x => helperService.slugify(x.name) !== $stateParams.name);

        /**
         * The item
         * @member {object}
         * @memberof Controllers.AgencyInformationController
         */
        self.item = agencies.find(x => helperService.slugify(x.name) === $stateParams.name);

        /**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.AgencyInformationController
         */
        self.close = function () {
            helperService.navigateTo('/agencies' + helperService.queryString());
        };

        helperService.scrollTo('scrollToContent');
    }
})();
