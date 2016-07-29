(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('assessor', {
            templateUrl: 'src/templates/components/assessor.html',
            controller: Assessor,
            controllerAs: 'controller',
            bindings: {
                model: '<',
                onClose: '<'
            }
        });

    Assessor.$inject = ['$log', '$state', 'helperService'];

    /**
     * @constructor
     * @memberof Components
     */
    function Assessor ($log, $state, helperService) {
        var self = this;

        /**
         * Close the informational panel
         * @public
         * @memberof Components.Assessor
         */
        self.close = function () {
            if (self.onClose) {
                self.onClose();
                return;
            }
            
            $state.go('fedramp.app.home', {}, { reload: true });
        };

        /**
         * Build a link from the given item
         * @public
         * @memberof Components.Assessor
         *
         * @param {string} modelType
         *  The item model type
         * @param {string} name
         *  The item name to be slugified
         *
         * @returns
         *  The pach for a hyperlink
         */
        self.linkify = function (modelType, name) {
            return '#/' + modelType + '/' + helperService.slugify(name) + helperService.queryString();
        };

        /**
         * Parses possible markdown, or other encoded text, as HTML
         * @public
         * @memberof Components.Assessor
         *
         * @param {string} text
         *  The text to parse
         *
         * @returns
         *  The text in HTML format
         */
        self.markdown = function (text) {
            return $sce.trustAsHtml(new showdown.Converter().makeHtml(text));
        };
    }
})();
