(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('assessor', {
            templateUrl: 'templates/components/assessor.html',
            controller: Assessor,
            controllerAs: 'controller',
            bindings: {
                model: '<',
                onClose: '<'
            }
        });

    Assessor.$inject = ['$log', '$sce', '$state', 'helperService'];

    /**
     * @constructor
     * @memberof Components
     */
    function Assessor ($log, $sce, $state, helperService) {
        var self = this;

        this.$onInit = function() {
            self.trustedWebsiteUrl = false;
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
             * Determine if there is contact information present
             * @public
             * @memberof Components.Assessor
             *
             * @returns
             *  A value indicating if there is contact information to display
             */
            self.hasContactInformation = function () {
                return (self.model.pocName || self.model.pocEmail || self.model.website);
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
        };

        /**
         * Trust a URL
         * @public
         * @memberof Components.Assessor
         *
         * @param {string} url
         *  The external URL
         *
         * @returns
         *  The trusted URL
         */
        self.externalLink = function (url) {
            if (url.indexOf('http') === -1) {
                url = 'http://' + url;
            }
            return self.trustedWebsiteUrl || (self.trustedWebsiteUrl = $sce.trustAsUrl(url))
        };
    }
})();
