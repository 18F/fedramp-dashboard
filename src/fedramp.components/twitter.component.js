(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('twitter', {
            template: '<ng-transclude />',
            transclude: true,
            controller: Twitter
        });

    Twitter.$inject = [];

    /**
     * @constructor
     * @memberof Components
     */
    function Twitter () {
        let script = document.createElement('script');
        script.async = 'async';
        script.src = 'https://platform.twitter.com/widgets.js';
        script.charset = 'utf-8';
        document.body.appendChild(script);
    }
})();
