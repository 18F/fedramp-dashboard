(function(){
    "use strict";

    angular
        .module('fedramp')
        .controller('ProductsController', ProductController);

    ProductController.$inject = ['$log', 'products', '$stateParams', '$filter', '$location'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function ProductController($log, products, $stateParams, $filter, $location){
        var self = this;

        /**
         * The filtered data
         * @member {array}
         * @memberof Controllers.ProductsController
         */
        self.filteredData = [];

        /**
         * The products
         * @member {array}
         * @memberof Controllers.ProductsController
         */
        self.products = products;

        /**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.ProductsController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */
        self.onUpdate = function (items, state) {
            self.filteredData = items;
        };

        /**
         * Determine how many compliant items are in the filtered data
         * @public
         * @member {object}
         * @memberof Controllers.ProductsController
         *
         * @returns
         *  The number of compliant items
         */
        self.compliant = function () {
            let compliant = self.filteredData.filter(x => x.designation === 'Compliant' || x.designation === 'In PMO Review').length;
            return self.filteredData.length === 0 ? 0 : Math.round((compliant / self.filteredData.length) * 100);
        };

        /**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.ProductsController
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
         * @memberof Controllers.ProductsController
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
        
        /**
         * Custom search function used in filtering the grid.
         * @public
         * @member {object}
         * @memberof Controllers.ProductsController
         *
         * @param {object} product
         *  The product to be compared
         * @param {integer} i
         *  The current index within the array of items
         * @param {array} arr
         *  The array of items
         * @param {string} searchTerm
         *  The search context
         *
         * @returns
         *  An matched item or null
         */
        self.productNameSearchFilterFunc = function (product, i, arr, searchTerm) {
            // If no search term, we display result since this is the same as having nothing selected
            if (!searchTerm) {
                return product;
            }

            searchTerm = searchTerm.toLowerCase();
            var productName = product.name.toLowerCase();
            var providerName = product.provider.toLowerCase();

            if (productName.indexOf(searchTerm) !== -1 || providerName.indexOf(searchTerm) !== -1) {
                return product;
            }

            return null;
        };
    }
})();
