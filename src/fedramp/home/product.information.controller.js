(function () {
    'use strict';

    angular
        .module('fedramp')
        .controller('ProductInformationController', ProductInformationController);

    ProductInformationController.$inject = ['$log', '$state', '$stateParams', 'fedrampData', 'helperService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function ProductInformationController ($log, $state, $stateParams, fedrampData, helperService) {
        var self = this;
        var products = fedrampData.products();

        /**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProductInformationController
         */
        self.items = products.filter(x => helperService.slugify(x.name) !== $stateParams.name);

        /**
         * The item
         * @member {object}
         * @memberof Controllers.ProductInformationController
         */
        self.item = products.find(x => helperService.slugify(x.name) === $stateParams.name);

        /**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.ProductInformationController
         */
        self.close = function () {
            helperService.navigateTo('/products' + helperService.queryString());
        };

        /**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.ProductInformationController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */
        self.onUpdate = function(items){
            self.filteredData = items;
        };

        /**
         * Custom search function used in filtering the grid.
         * @public
         * @member {object}
         * @memberof Controllers.ProductInformationController
         *
         * @param {object} product
         *  The product to be compared
         * @param {integer} i
         *  The current index within the array of items
         * @param {array} arr
         *  The array of items
         * @param {string} context
         *  The search context
         *
         * @returns
         *  An matched item or null
         */
        self.search = function (product, i, arr, context) {
            // If no search term, we display result since this is the same as having nothing selected
            if (!context) {
                return product;
            }

            context = context.toLowerCase();
            var productName = product.name.toLowerCase();
            var providerName = product.provider.toLowerCase();

            if (productName.indexOf(context) !== -1 || providerName.indexOf(context) !== -1) {
                return product;
            }

            return null;
        };

        /**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.ProductInformationController
         *
         * @param {array} products
         *  Array of items available
         *
         * @returns
         *  An array of option values for filtering
         */
        self.reuseRangeOptions = function (products) {
            return [
                {value: {min: 0, max:5}, label: '0 - 5', selected: false}, 
                {value: {min: 6, max:10}, label: '5 - 10', selected:false},
                {value: {min: 11, max:1000}, label: '> 10', selected:false}];
        };

        /**
         * Filter the data set by the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.ProductInformationController
         *
         * @param {object} product
         *  The product to compare
         * @param {integer} index
         *  The current index within the array of items
         * @param {array} arr
         *  Array of items
         * @param {array} selectedOptions
         *  Array of selected options
         *
         * @returns
         *  The matched item or null
         */
        self.reuseRangeFilter = function (product, index, arr, selectedOptions) {
            return selectedOptions.find(function (option) {
                if (product.reuses >= option.value.min && product.reuses <= option.value.max) {
                    return product;
                }
            });
        };

        helperService.scrollTo('scrollToContent');
    }
})();
