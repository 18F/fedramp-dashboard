(function () {
    'use strict';

    angular
        .module('fedramp.components')
        .component('productsGrid', {
            templateUrl: 'templates/components/products-grid.html',
            controller: ProductsGrid,
            controllerAs: 'controller',
            bindings: {
                rawItems: '<?',
                onUpdate: '&?'
            }
        });

    ProductsGrid.$inject = ['$log', 'fedrampData', '$attrs'];

    /**
     * @constructor
     * @memberof Components
     */
    function ProductsGrid ($log, fedrampData, $attrs) {
        var self = this;

        this.$onInit = function() {
            /**
             * The products
             * @member {array}
             * @memberof Components.ProductsGrid
             */
            self.products = self.rawItems || fedrampData.products();

            /**
             * Event reciever for when the grid is updated.
             * @public
             * @member {object}
             * @memberof Components.ProductsGrid
             *
             * @param {array} items
             *  Array of items with filtering and sorting applied.
             */
            self.onUpdate = function (func) {
                return function (items, state) {
                    self.filteredData = items;
                    if (func) {
                        func({items: items});
                    }
                };
            }(self.onUpdate);
        }

        /**
         * The filtered data
         * @member {array}
         * @memberof Components.ProductsGrid
         */
        self.filteredData = [];


        /**
         * Flag to hide filters
         */
        self.hideFilters = angular.isDefined($attrs.hideFilters) ? $attrs.hideFilters : false;

        /**
         * Flag to toggle filters on mobile
         */
        self.toggleFilters = false;

        /**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Components.ProductsGrid
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
         * @memberof Components.ProductsGrid
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
                if (product.authorizations >= option.value.min && product.authorizations <= option.value.max) {
                    return product;
                }
            });
        };

        /**
         * Custom search function used in filtering the grid.
         * @public
         * @member {object}
         * @memberof Components.ProductsGrid
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
            console.log('product', product);
            searchTerm = searchTerm.toLowerCase();
            var productName = product.name.toLowerCase();
            var providerName = product.provider.toLowerCase();
            var providerDescription = product.serviceDescription.toLowerCase();

            if (productName.indexOf(searchTerm) !== -1 ||
                providerName.indexOf(searchTerm) !== -1 ||
                providerDescription.indexOf(searchTerm) !== -1) {
                return product;
            }

            return null;
        };

        /**
         * Custom status filter that checks a products designation value as well as the
         * existence of a fedramp ready date.
         *
         * @member {object}
         * @memberof Components.ProductsGrid
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
        self.statusFilter = function (product, index, arr, selectedOptions) {
            var found = null;
            selectedOptions.forEach(function (option) {
                if (option.value === product.designation) {
                    found = product;
                    return found;
                }
            });
            return found;
        };

        /**
         * List of filters
         *
         * @member {object}
         * @memberof Components.ProductsGrid
         *
         * @param {array} products
         *  Array of items available
         *
         * @returns
         *  An matched item or null
         */
        self.statusFilterOptions = function (products) {
            return [
                {value: 'FedRAMP Ready', label: 'Ready', selected: false},
                {value: 'In Process', label: 'In Process', selected: false},
                {value: 'Compliant', label: 'Authorized', selected: false},
            ];
        };
    }
})();
