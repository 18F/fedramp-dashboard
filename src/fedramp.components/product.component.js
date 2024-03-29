(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('product', {
            templateUrl: 'templates/components/product.html',
            controller: Product,
            controllerAs: 'controller',
            bindings: {
                model: '<',
                products: '<',
                onClose: '<'
            }
        });

    Product.$inject = ['$log', '$sce', '$state', 'helperService'];

    /**
     * @constructor
     * @memberof Components
     */
    function Product ($log, $sce, $state, helperService) {
        var self = this;

        this.$onInit = function() {
            self.trustedWesbiteUrl = false;
            /**
             * Filter any additional products from the same provider
             * @public
             * @memberof Components.Product
             */
            self.additionalProducts = (self.products || []).filter(x => x.provider === self.model.provider);

            /**
             * Close the informational panel
             * @public
             * @memberof Components.Product
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
             * @memberof Components.Product
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
             * Is the products status considered 'Ready'
             * @public
             * @memberof Components.Product
             *
             * @returns
             *  A value indicating if the product ready
             */
            self.isReady = function () {
                return ['Ready', 'FedRAMP Ready'].includes(self.model.designation) || (!!self.model.fedrampReadyDate);
            };

            /**
             * Is the products status considered 'In Process'
             * @public
             * @memberof Components.Product
             *
             * @returns
             *  A value indicating if the product is in processing
             */
            self.isProcessing = function () {
                return self.model.designation === 'In Process';
            };

            /**
             * Is the products status considered 'Compliant'
             * @public
             * @memberof Components.Product
             *
             * @returns
             *  A value indicating if the product is compliant
             */
            self.isCompliant = function () {
                return self.model.designation === 'Compliant';
            };

            /**
             * The percent complete for the product status
             * @public
             * @memberof Components.Product
             *
             * @returns
             *  A percentage as an integer
             */
            self.percentComplete = function () {
                let percent = 0;

                if (self.isCompliant()) {
                    percent = 100;
                } else if (self.isProcessing()) {
                    percent = 50;
                } else if (self.isReady()) {
                    percent = 30;
                }

                return percent;
            };

            /**
             * The status message providing information concerning the
             * estimated or final compliancy date.
             * @public
             * @memberof Components.Product
             *
             * @returns
             *  Status message
             */
            self.statusMessage = function () {
                let message = '';

                if (self.isCompliant()) {
                    if (self.model.compliantDate) {
                        message = 'FedRAMP Authorized Since ' + (self.model.compliantDate || '');
                    } else {
                        message = 'FedRAMP Authorized';
                    }
                } else {
                    if (self.model.expectedCompliance) {
                        message = 'Estimated Authorization Date ' + self.model.expectedCompliance;
                    } else {
                        message = ' ';
                    }
                }

                return message;
            };

            /**
             * Parses possible markdown, or other encoded text, as HTML
             * @public
             * @memberof Components.Product
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

            /**
             * Trust a URL
             * @public
             * @memberof Components.Product
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

    }
})();
