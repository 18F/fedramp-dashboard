(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$log', '$sce', '$http', '$stateParams', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function SearchController ($log, $sce, $http, $stateParams, fedrampData, helperService) {
        var self = this;


        /**
         * Flag if there was an error receiving a response
         *
         * @member {boolean}
         * @memberof Controllers.SearchController
         */
        self.error = false;
        
        /**
         * The search query
         *
         * @member {string}
         * @memberof Controllers.SearchController
         */
        self.query = $stateParams.query;
        
        /**
         * The search results.
         *
         * @member {array}
         * @memberof Controllers.SearchController
         */
        self.results = [];

        /**
         * The external search link.
         *
         * @member {string}
         * @memberof Controllers.SearchController
         */
        self.externalLink ='https://search.usa.gov/search?utf8=✓&affiliate=fedramp&format=html&output=embed&commit=Search&query=' + self.query;

        /**
         * Get the absolute URL of an internal link
         *
         * @public
         * @memberof Controllers.SearchController
         *
         * @param {string} path
         * @param {string} name
         *
         * @returns
         *  The absolute URL
         */
        self.internalLink = function (path, name) {
            let loc = window.location;
            return loc.protocol + '//' + loc.host + loc.pathname + '#/' + path + '/' + helperService.slugify(name);
        };

        /**
         * Determines what extension (if any) the URI is referencing
         *
         * @public
         * @memberof Controllers.SearchController
         *
         * @param {string} url
         *  The URL
         *
         * @returns
         *  The extesion abbreviation
         */
        self.extension = function (url) {
            if (url) {
                let m = url.match(/(.*)[\/\\]([^\/\\]+)\.(\w+)$/);
                if (m && m.length >= 3) {
                    return '[' + m[3].toUpperCase() + ']';
                }
            }
            return '';
        };

        /**
         * Parses possible markdown, or other encoded text, as HTML
         *
         * @public
         * @memberof Controllers.SearchController
         *
         * @param {string} text
         *  The text to parse
         *
         * @returns
         *  The text in HTML format
         */
        self.markdown = function (text) {
            text = text.replace('\ue000', '**').replace('\ue001', '**');
            text = text.replace('\u2013', '-');
            return $sce.trustAsHtml(new showdown.Converter().makeHtml(text));
        };

        /**
         * Filters arrays of objects by their name
         *
         * @private
         * @memberof Controllers.SearchController
         *
         * @param {array} items
         *  The array of items to iterate
         * @param {string} query
         *  The filter query
         *
         * @returns
         *  An array of matching items
         */
        function filterByName(items, query) {
            return items.filter(x => x.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
        }
        
        (function () {
            filterByName(fedrampData.providers(), self.query).forEach(x => {
                self.results.push({
                    title: x.name,
                    content: '',
                    unescapedUrl: self.internalLink('provider', x.name),
                    publishedAt: null,
                    siteLinks: []
                });
            });

            filterByName(fedrampData.products(), self.query).forEach(x => {
                self.results.push({
                    title: x.name,
                    content: '',
                    unescapedUrl: self.internalLink('product', x.name),
                    publishedAt: null,
                    siteLinks: []
                });
            });

            filterByName(fedrampData.agencies(), self.query).forEach(x => {
                self.results.push({
                    title: x.name,
                    content: '',
                    unescapedUrl: self.internalLink('agency', x.name),
                    publishedAt: null,
                    siteLinks: []
                });
            });

            filterByName(fedrampData.assessors(), self.query).forEach(x => {
                self.results.push({
                    title: x.name,
                    content: '',
                    unescapedUrl: self.internalLink('assessor', x.name),
                    publishedAt: null,
                    siteLinks: []
                });
            });

            // Attempt to query using the form parameters but returning as JSON.
            // This will have issues in development due to CORS.
            $http
                .get('https://search.usa.gov/search', {
                    params: {
                        utf8: '✓',
                        affiliate: 'fedramp',
                        format: 'json',
                        commit: 'Search',
                        query: self.query
                    }
                })
                .then(function (response) {
                    // Sample response:
                    //
                    // {
                    //     "total": 35,
                    //     "startrecord": 1,
                    //     "endrecord": 20,
                    //     "results": [
                    //         {
                    //             "title": "www.\ue000fedramp.gov\ue001",
                    //             "content": "\ue000Test\ue001 Cases \u2013 If the system is a PaaS or SaaS that is leveraging another system, the Control Summary Worksheet should indicate which controls will be tested and ...",
                    //             "unescapedUrl": "https://www.fedramp.gov/files/2015/08/FedRAMP-SAP-Detailed-Review-Checklist-Template-v2-0.xlsx",
                    //             "publishedAt": null,
                    //             "sitelinks": []
                    //         }
                    //     ],
                    //     "related": []
                    // }

                    if (response && response.data) {
                        if (response.data.results) {
                            self.results = response.data.results;
                        }
                    }
                },
                function (response) {
                    self.error = true;
                });
        })();
    }
})();
