(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('dictionary', {
            transclude: true,
            templateUrl: 'templates/components/dictionary.html',
            controller: DictionaryController,
            controllerAs: 'controller'
        });

    DictionaryController.$inject = ['DataService'];

    /**
     * @constructor
     * @memberof Components
     */
    function DictionaryController (DataService) {
        var self = this;

        // Original list of dictionary items
        self.dataDictionary = [];

        // Filtered dictionary items
        self.filteredDictionary = [];

        // Public functions
        self.$onInit = $onInit;
        self.onUpdate = onUpdate;

        /**
         * Initializes component and queries for data dictionary.
         */
        function $onInit () {
            DataService
                .pullDataDictionary()
                .then(function (dataDictionary) {
                    self.dataDictionary = dataDictionary;
                });
        }

        /**
         * When grid is filtered, updates array to render updated items
         */
        function onUpdate (items) {
            self.filteredDictionary = items;
        }
    }
})();
