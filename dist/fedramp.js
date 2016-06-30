'use strict';

/**
 * @namespace Controllers
 */
(function () {
    'use strict';

    angular.module('fedramp', ['ui.router', 'fedramp.models', 'fedramp.services']).config(['$compileProvider', function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob|data):/);
    }]).run(run);

    run.$inject = ['$log', '$rootScope'];

    function run($log, $rootScope) {
        $log.debug('FedRAMP Module Initializing');
        $rootScope.$on("$stateChangeError", $log.debug.bind($log));
    }
})();

/**
 * @namespace Models
 */
(function () {
    'use strict';

    angular.module('fedramp.models', []).run(run);

    run.$inject = ['$log'];

    function run($log) {
        $log.debug('fedramp.model module initializing');
    }
})();

/**
 * @namespace Services
 */
(function () {
    'use strict';

    angular.module('fedramp.services', ['fedramp.models']).run(run);

    run.$inject = ['$log'];

    function run($log) {
        $log.debug('fedramp.services module initializing');
    }
})();

angular.module('fedramp').run(['$templateCache', function ($templateCache) {
    $templateCache.put('src/fedramp/fedramp.html', '<header>\n    <div class="usa-grid">\n        <div class="usa-width-one-whole">\n            <!--<img class="header" src="img/fedramp.png"/>-->\n            <h1>FedRAMP</h1>\n        </div>\n    </div>\n\n</header>\n<ui-view></ui-view>\n');
    $templateCache.put('src/fedramp/home/home.html', '<div class="usa-content">\n    <div class="usa-grid">\n        <div class="usa-width-one-third">\n            <div class="circle">\n                <h4>${{homeController.totalCostSavings()}}</h4>\n                <div>Cost Savings:</div>\n            </div>\n        </div>\n        <div class="usa-width-one-third">\n            <div class="circle">\n                <div>\n                    <h4>{{homeController.totalAuthorized()}}</h4>\n                    Total Authorized:\n                </div>\n            </div>\n        </div>\n        <div class="usa-width-one-third">\n            <div class="circle">\n                <h4>{{homeController.leveragedAtos()}}</h4>\n                <div>Leveraged ATOs:</div>\n            </div>\n        </div>\n    </div>\n    <div style="text-align:center;margin-top:20px;margin-bottom:20px;"> Search by </div>\n    <div ng-show="homeController.hasData()">\n        <div class="filters usa-grid">\n            <div class="usa-width-one-fourth">\n                <button id="filterByCSP"\n                        ng-click="homeController.toggleFilter(\'csp\')">CSP\n                </button>\n            </div>\n            <div class="usa-width-one-fourth">\n                <button id="filterByCSO"\n                        type="radio"\n                        ng-click="homeController.toggleFilter(\'cso\')">CSO\n                </button>\n            </div>\n            <div class="usa-width-one-fourth">\n                <button id="filterByAgency"\n                        ng-click="homeController.toggleFilter(\'agency\')">Agency\n                </button>\n            </div>\n            <div class="usa-width-one-fourth">\n                <button id="filterBy3PAO"\n                        ng-click="homeController.toggleFilter(\'3pao\')">3PAO\n                </button>\n            </div>\n        </div>\n        <div class="usa-grid" ng-show="!!homeController.filterType">\n            <div style="text-align:center;" class="usa-width-one-whole">\n                <div style="margin:0 auto;display:table;">\n                    <label for="filter">Filter using:</label>\n                    <select id="filter"\n                            ng-model="homeController.filter"\n                            ng-options="option for option in homeController.filterOptions"\n                            ng-change="homeController.applyFilter()">\n                        <option value=""></option>\n                    </select>\n                </div>\n                <a href="{{homeController.downloadUrl}}"\n                   download="{{homeController.filename()}}"\n                   ng-click="homeController.download()">\n                    Download\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n');
}]);
(function () {
    'use strict';

    angular.module('fedramp').config(routeConfig);

    // Add items to inject for safe minification
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    /**
     * Configures the routes and views for the FedRAMP application
     */
    function routeConfig($stateProvider, $urlRouterProvider) {
        // Go to root if something goes wrong
        $urlRouterProvider.otherwise('/');

        // Routes
        $stateProvider.state('fedramp', {
            abstract: true,
            templateUrl: 'src/fedramp/fedramp.html',
            resolve: {
                providers: FedRampProviders

            }
        }).state('fedramp.home', {
            url: '/',
            templateUrl: 'src/fedramp/home/home.html',
            controller: 'HomeController as homeController'
        });

        /**
         * Retrieves the providers for a particular day
         */
        FedRampProviders.$inject = ['ProviderService'];
        function FedRampProviders(ProviderService) {
            return ProviderService.pull().then(function (providers) {
                return providers;
            });
        }
    }
})();

(function () {
    'use strict';

    angular.module('fedramp.models').factory('AtoLetter', AtoLetterFactory);

    function AtoLetterFactory() {
        return AtoLetter;
    }

    /**
     * Leveraged ATO letter.
     * @constructor
     * @memberof Models
     */
    function AtoLetter(options) {
        // Scope `this` to self
        var self = this;

        var mapping = {
            'Letter_Date': 'letterDate',
            'Letter_Expiration_Date': 'letterExpirationDate',
            'Authorization_Date': 'authorizationDate',
            'Authorizing_Letter_Last_Sign_Date': 'authorizingLetterSignedDate',
            'Authorizing_Agency': 'authorizingAgency',
            'Authorizing_Subagency': 'authorizingSubagency',
            'Active': 'active',
            'Include_In_Marketplace': 'includeInMarketplace'
        };

        /**
         * Letter date
         * @member {date}
         * @memberof Models.AtoLetter
         */
        self.letterDate = null;

        /**
         * Letter expiration date
         * @member {date}
         * @memberof Models.AtoLetter
         */
        self.letterExpirationDate = null;

        /**
         * The authorization date
         * @member {date}
         * @memberof Models.AtoLetter
         */
        self.authorizationDate = null;

        /**
         * Authorizing letter signed date
         * @member {date}
         * @memberof Models.AtoLetter
         */
        self.authorizingLetterSignedDate = null;

        /**
         * Authorizing agency
         * @member {string}
         * @memberof Models.AtoLetter
         */
        self.authorizingAgency = '';

        /**
         * Authorizing subagency
         * @member {string}
         * @memberof Models.AtoLetter
         */
        self.authorizingSubagency = '';

        /**
         * Active status
         * @deprecated
         * @member {string}
         * @memberof Models.AtoLetter
         */
        self.active = '';

        /**
         * A value indicating if it should be included in the market place
         * @member {date}
         * @memberof Models.AtoLetter
         */
        self.includeInMarketplace = '';

        /**
         * Initialize the ATO letter object.
         *
         * @param {object} options
         *  A dictionary of options to configure the ATO letter
         *
         * @returns
         *  The ATO letter
         */
        self.init = function (options) {
            if (!options) {
                return self;
            }

            for (var x in options) {
                if (!options.hasOwnProperty(x)) {
                    continue;
                }

                var key = mapping[x];
                if (key) {
                    self[key] = options[x];
                } else {
                    if (self.hasOwnProperty(x)) {
                        self[x] = options[x];
                    }
                }
            }

            return self;
        };

        return self.init(options);
    }
})();

(function () {
    'use strict';

    angular.module('fedramp.models').factory('Provider', ProviderFactory);

    ProviderFactory.$inject = ['AtoLetter'];

    function ProviderFactory(AtoLetter) {
        /**
         * The cloud service provider.
         * @constructor
         * @memberof Models
         */
        function Provider(options) {
            // Scope `this` to self
            var self = this;

            var mapping = {
                'Cloud_Service_Provider_Name': 'name',
                'Cloud_Service_Provider_Package': 'pkg',
                'Path': 'path',
                'Designation': 'designation',
                'Package_ID': 'pkgId',
                'Service_Model': 'serviceModel',
                'Deployment_Model': 'deploymentModel',
                'Impact_Level': 'impactLevel',
                'Original_Authorization_Date': 'authorizationDate',
                'Original_Expiration_Date': 'expirationDate',
                'Sponsoring_Agency': 'sponsoringAgency',
                'Sponsoring_Subagency': 'sponsoringSubagency',
                'Active': 'active',
                'CSP_URL': 'cspUrl',
                'Underlying_CSP_Package_ID': 'underlyingCspPackages',
                'Stage': 'stage',
                'Leveraged_ATO_Letters': 'atoLetters'
            };

            /**
             * Cloud service provider name
             * @member {string}
             * @memberof Models.Provider
             */
            self.name = '';

            /**
             * Package name
             * @member {string}
             * @memberof Models.Provider
             */
            self.pkg = '';

            /**
             * Package identifier
             * @member {string}
             * @memberof Models.Provider
             */
            self.pkgId = '';

            /**
             * Path
             * @member {string}
             * @memberof Models.Provider
             */
            self.path = '';

            /**
             * Designation
             * @member {string}
             * @memberof Models.Provider
             */
            self.designation = '';

            /**
             * Service model
             * @member {array}
             * @memberof Models.Provider
             */
            self.serviceModel = [];

            /**
             * Deployment model
             * @member {string}
             * @memberof Models.Provider
             */
            self.deploymentModel = '';

            /**
             * Impact level
             * @member {string}
             * @memberof Models.Provider
             */
            self.impactLevel = '';

            /**
             * Authorization date
             * @member {date}
             * @memberof Models.Provider
             */
            self.authorizationDate = null;

            /**
             * Expiration date
             * @member {date}
             * @memberof Models.Provider
             */
            self.expirationDate = null;

            /**
             * Sponsoring agency
             * @member {string}
             * @memberof Models.Provider
             */
            self.sponsoringAgency = '';

            /**
             * Sponsoring subagency
             * @member {string}
             * @memberof Models.Provider
             */
            self.sponsoringSubagency = '';

            /**
             * Active status
             * @deprecated
             * @member {string}
             * @memberof Models.Provider
             */
            self.active = '';

            /**
             * The CSP URL
             * @member {string}
             * @memberof Models.Provider
             */
            self.cspUrl = '';

            /**
             * Underlying CSP packages
             * @member {array}
             * @memberof Models.Provider
             */
            self.underlyingCspPackages = [];

            /**
             * Stage in validation process
             * @member {string}
             * @memberof Models.Provider
             */
            self.stage = '';

            /**
             * Leveraged ATO letters
             * @member {array}
             * @memberof Models.Provider
             */
            self.atoLetters = [];

            /**
             * Initialize the provider object.
             *
             * @param {object} options
             *  A dictionary of options to configure the provider
             *
             * @returns
             *  The provider
             */
            self.init = function (options) {
                if (!options) {
                    return;
                }

                for (var x in options) {
                    if (!options.hasOwnProperty(x)) {
                        continue;
                    }

                    var key = mapping[x];
                    var letter = null;
                    if (key) {
                        if (key === 'atoLetters') {
                            for (letter in options[x]) {
                                self[key].push(new AtoLetter(options[x][letter]));
                            }
                        } else {
                            self[key] = options[x];
                        }
                    } else {
                        if (self.hasOwnProperty(x)) {
                            if (x === 'atoLetters') {
                                for (letter in options[x]) {
                                    self[x].push(new AtoLetter(options[x][letter]));
                                }
                            } else {
                                self[x] = options[x];
                            }
                        }
                    }
                }

                return self;
            };

            /**
             * Get a unique hash or identifier for the provider.
             * @public
             * @memberof Models.Provider
             *
             * @returns
             *  The hash
             */
            self.hash = function () {
                var id = '' + self.name + self.pkg + self.pkgId + self.sponsoringAgency;
                if (id.length === 0) {
                    return null;
                }
                return id;
            };

            return self.init(options);
        }

        return Provider;
    }
})();

(function () {
    'use strict';

    angular.module('fedramp.services').factory('Settings', SettingsFactory);

    function SettingsFactory() {
        return Settings;
    }

    /**
     * Application settings for the FedRAMP dashboard.
     * @constructor
     * @memberof Models
     */
    function Settings(options) {
        // Scope `this` to self
        var self = this;

        /**
         * The last refresh date
         * @member {string}
         * @memberof Models.Settings
         */
        self.lastRefresh = null;

        /**
         * Initialize the Settings object.
         *
         * @param {object} options
         *  A dictionary of options to configure the Settings object.
         *
         * @returns
         *  The Settings object
         */
        self.init = function (options) {
            if (options) {
                for (var x in options) {
                    if (!options.hasOwnProperty(x)) {
                        continue;
                    }

                    if (self.hasOwnProperty(x)) {
                        self[x] = options[x];
                    }
                }
            }
            return self;
        };

        /**
         * Refreshes the date to current date
         * @public
         * @memberof Models.Settings
         *
         * @returns
         *  The last refresh date
         */
        self.refresh = function () {
            self.lastRefresh = today();
            return self.lastRefresh;
        };

        /**
         * Clears last refresh
         * @public
         * @memberof Models.Settings
         */
        self.clearRefresh = function () {
            self.lastRefresh = null;
        };

        /**
         * Determine if the data requires a refresh.
         * @public
         * @memberof Models.Settings
         *
         * @returns
         *  A boolean value
         */
        self.needsRefresh = function () {
            return self.lastRefresh !== today();
        };

        /**
         * Creates a formatted date string
         * @private
         * @memberof Models.Settings
         *
         * @returns
         *  Today's date formatting as mm/dd/YYYY
         */
        function today() {
            var d = new Date();
            var dd = d.getDate();
            var mm = d.getMonth() + 1;
            var yyyy = d.getFullYear();

            if (dd < 10) {
                dd = '0' + dd;
            }

            if (mm < 10) {
                mm = '0' + mm;
            }

            return mm + '/' + dd + '/' + yyyy;
        }

        return self.init(options);
    }
})();

(function () {
    "use strict";

    angular.module('fedramp.services').service('CsvService', CsvService);

    CsvService.$inject = ['$log'];

    /**
     * @constructor
     * @memberof Services
     */
    function CsvService($log) {

        var self = this;

        self.flattenProviders = flattenProviders;
        self.toCsv = toCsv;

        /**
         * Takes an object and converts to a csv string
         *
         * @public
         * @memberof Service.CsvService
         *
         * @returns
         * A csv string representation of an object.
         */
        function toCsv(data, config) {
            return Papa.unparse(data, config);
        }

        /**
         * Iterates through all the providers and creates a flatten array containing Provider 
         * and AtoLetter values.
         *
         * @public
         * @memberof Services.CsvService
         *
         * @returns
         * A flatten array of array values containing Provider and AtoLetter information
         */
        function flattenProviders(providers) {
            var rows = [];

            for (var x = 0; x < providers.length; x++) {
                var provider = providers[x];
                var row = fromProvider(provider);
                var atoLetters = providers[x].atoLetters;

                // If no Ato Letters exist, add to row
                if (!atoLetters || atoLetters.length === 0) {
                    rows.push(row);
                    continue;
                }

                for (var l = 0; l < providers[x].atoLetters.length; l++) {
                    // Copy row array since we'll be using the same row data multiple times
                    var rowCopy = angular.copy(row);
                    var letter = providers[x].atoLetters[l];
                    var letterRow = fromAtoLetter(letter);

                    // Combine provider object with ato letter
                    // resulting array = [a,b,c,x,y,z]
                    rowCopy = angular.extend(rowCopy, letterRow);
                    rows.push(rowCopy);
                }
            }
            return rows;
        }

        /**
         * Creates an object containing the values for a Provider
         */
        function fromProvider(provider) {
            return {
                "Cloud Service Provider Name": provider.name,
                "Designation": provider.designation,
                "Service Model": provider.serviceModel.join(','),
                "Deployment Model": provider.deploymentModel,
                "Impact Level": provider.impactLevel,
                "Sponsoring_Agency": provider.sponsoringAgency,
                "Sponsoring_Subagency": provider.sponsoringSubagency
            };
        }

        /**
         * Creates an object containing the values for an AtoLetter
         */
        function fromAtoLetter(letter) {
            return {
                "Letter Date": letter.letterDate,
                "Letter Expiration Date": letter.letterExpirationDate,
                "Authorization Date": letter.authorizationDate,
                "Authorizing Letter Signed Date": letter.authorizingLetterSignedDate,
                "Authorizing Agency": letter.authorizingAgency,
                "Authorizing Subagency": letter.authorizingSubagency,
                "Letter Active": letter.active,
                "Include In Marketplace": letter.includeInMarketplace
            };
        }
    }
})();

(function () {
    'use strict';

    angular.module('fedramp.services').service('DatasourceService', DatasourceService);

    DatasourceService.$inject = ['$http'];

    /**
     * @constructor
     * @memberof Services
     */
    function DatasourceService($http) {
        var self = this;

        /**
         * Issue a GET request for the given URL.
         * @public
         * @memberof Services.DatasourceService
         *
         * @param {string} url
         *  The URL
         *
         * @returns
         *  The response as a promise
         */
        self.pull = function (url) {
            return $http.get(url).then(function (response) {
                return response.data;
            });
        };
    }
})();

(function () {
    'use strict';

    angular.module('fedramp.services').service('ProviderService', ProviderService);

    ProviderService.$inject = ['$log', 'StorageManager', 'StorageProvider', 'Provider', 'DatasourceService'];

    /**
     * @constructor
     * @memberof Services
     */
    function ProviderService($log, StorageManager, StorageProvider, Provider, DatasourceService) {
        var self = this;
        var dataUrl = 'https://raw.githubusercontent.com/18F/fedramp-micropurchase/master/data/data.json';

        /**
         * Issue a GET request for the given URL.
         * @public
         * @memberof Services.ProviderService
         *
         * @returns
         *  The response as a promise
         */
        self.pull = function () {
            return DatasourceService.pull(dataUrl).then(function (providerData) {
                var meta = providerData.meta;
                var data = providerData.data;
                var sp = new StorageProvider();

                for (var i = 0; i < data.length; i++) {
                    var p = new Provider(data[i]);
                    sp.update(p.hash(), p);
                }

                return sp.all();
            });
        };
    }
})();

(function () {
    'use strict';

    angular.module('fedramp.services').factory('StorageManager', StorageManagerFactory);

    function StorageManagerFactory() {
        return StorageManager;
    }

    /**
     * Storage manager handles the storage and retrieval of items.
     * @constructor
     * @memberof Services
     */
    function StorageManager(options) {
        // Scope `this` to self.
        var self = this;

        // Properties
        self.storageContainer = 'default';

        /**
         * Initialize the storage manager.
         * @public
         * @memberof Services.StorageManager
         *
         * @param {object} options
         *  A dictionary of options to configure the storage manager
         *
         * @returns
         *  The storage manager
         */
        self.init = function (options) {
            var e = prechecks();
            if (e && e.length !== 0) {
                throw e;
            }

            if (options && options.storageContainer) {
                self.storageContainer = options.storageContainer;
            }

            return self;
        };

        /**
         * Update the status of an item.
         * @public
         * @memberof Services.StorageManager
         *
         * @param {string} id
         *  The identifier of the item
         * @param {object} properties
         *  The item properties
         */
        self.update = function (id, properties) {
            store(id, properties);
        };

        /**
         * Queries for an item by identifier.
         * @public
         * @memberof Services.StorageManager
         *
         * @param {string} id
         *  The identifier of the item
         *
         * @returns
         *  The item
         */
        self.byId = function (id) {
            return fetch(id);
        };

        /**
         * Clear the item queue.
         * @public
         * @memberof Services.StorageManager
         */
        self.clear = function () {
            purge();
        };

        /**
         * Queries all items in the storage container.
         * @public
         * @memberof Services.StorageManager
         *
         * @returns
         *  An array of items
         */
        self.all = function () {
            return all();
        };

        /**
         * Transforms the raw object to a specifec model. Subclasses should override
         * this method.
         * @public
         * @memberof Services.StorageManager
         *
         * @param {Object} raw
         *  The JSON object
         *
         * @returns
         *  The item
         */
        self.transform = function (raw) {
            return raw;
        };

        /**
         * Perform all prechecks necessary to ensure dependencies are met
         * @private
         *
         * @returns
         *  An error message if a dependency is not met
         */
        function prechecks() {
            if (typeof Storage === 'undefined') {
                return 'Local storage is not supported';
            }

            return null;
        }

        /**
         * Retrieve all items in local storage.
         * @private
         *
         * @returns
         *  An array of items
         */
        function all() {
            var items = [];

            var storage = JSON.parse(localStorage.getItem(self.storageContainer));
            if (storage) {
                for (var key in storage) {
                    items.push(self.transform(storage[key]));
                }
            }

            return items;
        }

        /**
         * Fetchs an item from local storage.
         * @private
         *
         * @param {string} id
         *  The identifier of the item
         *
         * @returns
         *  The item
         */
        function fetch(id) {
            var storage = JSON.parse(localStorage.getItem(self.storageContainer));
            if (!storage) {
                return null;
            }

            if (storage[id]) {
                return self.transform(storage[id]);
            }

            return null;
        }

        /**
         * Stores an item to local storage.
         * @private
         *
         * @param {string} id
         *  The identifier of the item
         * @param {object} properties
         *  The item properties
         */
        function store(id, properties) {
            var storage = JSON.parse(localStorage.getItem(self.storageContainer));
            if (!storage) {
                storage = {};
            }

            if (id) {
                storage[id] = properties;
                self.transform(storage[id]);
                localStorage.setItem(self.storageContainer, JSON.stringify(storage));
            }
        }

        /**
         * Removes an item from local storage.
         * @private
         *
         * @param {string} id
         *  The identifier of the item
         */
        function remove(id) {
            var storage = JSON.parse(localStorage.getItem(self.storageContainer));
            if (!storage || !storage[id]) {
                return;
            }

            self.transform(storage[id]);
            delete storage[id];
            localStorage.setItem(self.storageContainer, JSON.stringify(storage));
        }

        /**
         * Purges all items from local storage.
         * @private
         */
        function purge() {
            if (localStorage.getItem(self.storageContainer)) {
                localStorage.removeItem(self.storageContainer);
            }
        }

        return self.init(options);
    }
})();

(function () {
    'use strict';

    angular.module('fedramp.services').factory('StorageProvider', StorageProviderFactory);

    StorageProviderFactory.$inject = ['StorageManager', 'Provider'];

    function StorageProviderFactory(StorageManager, Provider) {
        /**
         * Provides storage specific functionality that extends the StorageManager
         * @constructor
         * @memberof Services
         * @extends StorageManager
         */
        function StorageProvider(options) {
            StorageManager.call(this);

            var self = this;
            self.storageContainer = 'providers';

            /**
             * Transforms the raw object to a specifec model
             * @public
             * @memberof Services.StorageProvider
             *
             * @param {Object} raw
             *  The JSON object
             *
             * @returns
             *  The item
             */
            self.transform = function (raw) {
                return new Provider(raw);
            };

            return self.init(options);
        }

        StorageProvider.prototype = Object.create(StorageManager.prototype);
        StorageProvider.prototype.constructor = StorageProvider;

        return StorageProvider;
    }
})();

(function () {
    'use strict';

    angular.module('fedramp.services').factory('StorageSettings', StorageSettingsFactory);

    StorageSettingsFactory.$inject = ['StorageManager', 'Settings'];

    function StorageSettingsFactory(StorageManager, Settings) {
        /**
         * Provides storage specific functionality that extends the StorageManager
         * @constructor
         * @memberof Services
         * @extends StorageManager
         */
        function StorageSettings(options) {
            StorageManager.call(this);

            var self = this;
            self.storageContainer = 'fedramp';

            /**
             * Transforms the raw object to a specifec model
             * @public
             * @memberof Services.StorageSettings
             *
             * @param {Object} raw
             *  The JSON object
             *
             * @returns
             *  The item
             */
            self.transform = function (raw) {
                return new Settings(raw);
            };

            return self.init(options);
        }
        StorageSettings.prototype = Object.create(StorageManager.prototype);
        StorageSettings.prototype.constructor = StorageSettings;

        return StorageSettings;
    }
})();

(function () {
    'use strict';

    angular.module('fedramp').controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'providers', 'CsvService'];

    /**
     * @constructor
     * @memberof Controllers
     */
    function HomeController($log, providers, CsvService) {
        var self = this;
        var lastFilterType = '';
        var downloadBlob = null;

        /**
         * The title displayed on the home page
         * @member {string}
         * @memberof Controllers.HomeController
         */
        self.title = 'FedRAMP';

        /**
         * The download URL
         * @member {string}
         * @memberof Controllers.HomeController
         */
        self.downloadUrl = '#';

        /**
         * The data after filters have been applied
         * @member {array}
         * @memberof Controllers.HomeController
         */
        self.filteredData = [];

        /**
         * The type of filter applied to the data
         * @member {string}
         * @memberof Controllers.HomeController
         */
        self.filterType = '';

        /**
         * The filter specific options
         * @member {array}
         * @memberof Controllers.HomeController
         */
        self.filterOptions = [];

        /**
         * The filter applied to the data
         * @member {string}
         * @memberof Controllers.HomeController
         */
        self.filter = '';

        /**
         * Determines if data is present
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  A value indicating if any data is stored
         */
        self.hasData = function () {
            return providers && providers.length > 0;
        };

        /**
         * Applies the filter(s) to the raw data set
         * @public
         * @memberof Controllers.HomeController
         *
         * @param {string} type
         *  (optional) The filter type
         * @param {string} filter
         *  (optional) The filter value
         */
        self.applyFilter = function (type, filter) {
            type = type ? type : self.filterType;
            filter = filter ? filter : self.filter;

            // If there is no filter applied then we show everything
            if (!type || !filter) {
                self.filteredData = providers;
                return;
            }

            // Place any items matching the filter in an array so we
            // can replace the filtered data in bulk and reduce UI
            // flickering.
            var prefiltered = [];
            var i, p, j, l;

            switch (type) {
                case 'csp':
                    for (i = 0; i < providers.length; i++) {
                        p = providers[i];
                        if (p.name.indexOf(filter) !== -1) {
                            prefiltered.push(p);
                        }
                    }
                    break;

                case 'cso':
                    for (i = 0; i < providers.length; i++) {
                        p = providers[i];
                        if (p.pkg.indexOf(filter) !== -1) {
                            prefiltered.push(p);
                        }
                    }
                    break;

                case 'agency':
                    for (i = 0; i < providers.length; i++) {
                        p = providers[i];
                        if ((p.sponsoringAgency + p.sponsoringSubagency).indexOf(filter) !== -1) {
                            prefiltered.push(p);
                        } else {
                            // NOTE: Determine if it is necessary to check the leveraged ATO letters
                            for (j = 0; j < p.atoLetters.length; j++) {
                                l = p.atoLetters[j];
                                if ((l.authorizingAgency + l.authorizingSubagency).indexOf(filter) !== -1) {
                                    prefiltered.push(p);
                                    break;
                                }
                            }
                        }
                    }
                    break;

                case '3pao':
                    // TODO: I believe the 3pao references apply to the
                    // "Independent Assessor" column in the originating source.
                    // If that is the case this is currently not mapped in the
                    // JSON data source.
                    break;
            }

            self.filteredData = prefiltered;
            self.downloadUrl = '#';
            downloadBlob = null;

            // Parse the data here
            var csv = CsvService.toCsv(CsvService.flattenProviders(prefiltered));
            if (csv) {
                downloadBlob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                self.downloadUrl = window.URL.createObjectURL(downloadBlob);
            }
        };

        /**
         * Toggles the checked state for the major filters
         * @public
         * @memberof Controllers.HomeController
         *
         * @param {string} type
         *  (optional) The filter type
         */
        self.toggleFilter = function (type) {

            self.filterType = type;

            if (lastFilterType === type) {
                self.filterType = '';
                return;
            }

            lastFilterType = type;
            var options = [];
            var i, p, j, l;

            switch (type) {
                case 'csp':
                    for (i = 0; i < providers.length; i++) {
                        p = providers[i];
                        if (p.name && !contains(options, p.name)) {
                            options.push(p.name);
                        }
                    }
                    break;

                case 'cso':
                    for (i = 0; i < providers.length; i++) {
                        p = providers[i];
                        if (p.pkg && !contains(options, p.pkg)) {
                            options.push(p.pkg);
                        }
                    }
                    break;

                case 'agency':
                    for (i = 0; i < providers.length; i++) {
                        p = providers[i];
                        if (p.sponsoringAgency && !contains(options, p.sponsoringAgency)) {
                            options.push(p.sponsoringAgency);
                        }

                        if (p.sponsoringSubagency && !contains(options, p.sponsoringSubagency)) {
                            options.push(p.sponsoringSubagency);
                        }

                        // NOTE: Determine if it is necessary to check the leveraged ATO letters
                        for (j = 0; j < p.atoLetters.length; j++) {
                            l = p.atoLetters[j];
                            if (l.authorizingAgency && !contains(options, l.authorizingAgency)) {
                                options.push(l.authorizingAgency);
                            }

                            if (l.authorizingSubagency && !contains(options, l.authorizingSubagency)) {
                                options.push(l.authorizingSubagency);
                            }
                        }
                    }
                    break;

                case '3pao':
                    // TODO: I believe the 3pao references apply to the
                    // "Independent Assessor" column in the originating source.
                    // If that is the case this is currently not mapped in the
                    // JSON data source.
                    break;
            }

            self.filterOptions = options;
        };

        /**
         * Filters and transforms data for download
         * @public
         * @memberof Controllers.HomeController
         */
        self.download = function () {
            $log.info('Download clicked');

            if (navigator.msSaveBlob && downloadBlob) {
                // IE 11 and Edge
                navigator.msSaveBlob(downloadBlob, self.filename());
            }
        };

        /**
         * Generates the file name to be used when downloading the data
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  A file name in the format "fedramp-YYYY-mm-dd.csv"
         */
        self.filename = function (date) {
            if (!date) {
                date = new Date();
            }

            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();

            if (dd < 10) {
                dd = '0' + dd;
            }

            if (mm < 10) {
                mm = '0' + mm;
            }

            return 'fedramp-' + yyyy + '-' + mm + '-' + dd + '.csv';
        };

        /**
         * Total authorized cloud service providers
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total authorized cloud service providers
         */
        self.totalAuthorized = function () {
            var totalAuthorized = 0;

            var counted = [];
            for (var i = 0; i < providers.length; i++) {
                var p = providers[i];
                if (p.name && !contains(counted, p.name)) {
                    counted.push(p.name);
                    totalAuthorized++;
                }
            }

            return totalAuthorized;
        };

        /**
         * The cost savings at a fixed rate per re-use
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total cost savings
         */
        self.totalCostSavings = function () {
            return Number(250000 * self.leveragedAtos()).toLocaleString('en');
        };

        /**
         * The total leveraged ATO letters from authorized cloud service providers
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total leveraged ATO letters
         */
        self.leveragedAtos = function () {
            var reused = 0;

            // This variable stores the current package identifier to be
            // used in our filter query
            var pkgId = '';
            function filterUnderlying(csp) {
                // Try using ES6 [Array.prototype.includes](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/includes)
                // Right now this is will fail using PhantomJS
                if (Array.prototype.includes) {
                    return csp && csp.underlyingCspPackages && csp.underlyingCspPackages.includes(pkgId);
                }
                return csp && csp.underlyingCspPackages && contains(csp.underlyingCspPackages, pkgId);
            }

            // Loop through each provider
            for (var i = 0; i < providers.length; i++) {
                var p = providers[i];
                pkgId = p.pkgId;
                reused += p.atoLetters.length;

                var underlyingAtos = providers.filter(filterUnderlying);
                if (underlyingAtos.length > 0) {
                    reused += underlyingAtos.map(function (csp) {
                        return csp.atoLetters.length;
                    }).reduce(function (prev, curr) {
                        return prev + curr;
                    });
                }
            }

            return reused;
        };

        /**
         * Iterate through an array checking if the value already exists
         * @private
         * @memberof Controllers.HomeController
         *
         * @param {array} array
         *  The array to iterate through
         * @param {object} value
         *  The value to search
         *
         * @returns
         *  A value indicating if the value is contained in the array
         */
        function contains(array, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === value) {
                    return true;
                }
            }
            return false;
        }
    }
})();