'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/**
 * @namespace Controllers
 */(function(){'use strict';angular.module('fedramp',['ui.router','fedramp.models','fedramp.services']).config(['$compileProvider',function($compileProvider){$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob|data):/);}]).run(run);run.$inject=['$log','$rootScope'];function run($log,$rootScope){$log.debug('fedramp module initializing');$rootScope.$on("$stateChangeError",$log.debug.bind($log));$rootScope.$on("$stateChangeError",console.log.bind(console));}})();/**
 * @namespace Models
 */(function(){'use strict';angular.module('fedramp.models',[]).run(run);run.$inject=['$log'];function run($log){$log.debug('fedramp.model module initializing');}})();/**
 * @namespace Components
 */(function(){'use strict';angular.module('fedramp.components',['fedramp.models','fedramp.services']).run(run);run.$inject=['$log'];function run($log){$log.debug('fedramp.components module initializing');}})();/**
 * @namespace Services
 */(function(){'use strict';angular.module('fedramp.services',['fedramp.models']).run(run);run.$inject=['$log'];function run($log){$log.debug('fedramp.services module initializing');}})();angular.module('fedramp').run(['$templateCache',function($templateCache){$templateCache.put('src/fedramp/fedramp.html','<header>\n    <div class="usa-grid">\n        <div class="usa-width-one-whole">\n            <!--<img class="header" src="img/fedramp.png"/>-->\n            <h1>FedRAMP</h1>\n        </div>\n    </div>\n</header>\n<ui-view></ui-view>\n');$templateCache.put('src/fedramp.components/tile.html','<a ng-click="controller.view()">\n    <div ng-if="controller.expand" class="usa-width-one-whole">\n        <div class="usa-grid">\n            <div class="usa-width-one-third">\n                <strong>{{ controller.model.name }} - {{ controller.model.pkg }}</strong>\n            </div>\n            <div class="usa-width-one-sixth">\n                <div ng-repeat="service in controller.model.serviceModel">{{ service }}</div>\n            </div>\n            <div class="usa-width-one-sixth">\n                <span>{{ controller.model.deploymentModel }}</span>\n            </div>\n            <div class="usa-width-one-sixth">\n                <span>{{ controller.model.impactLevel }}</span>\n            </div>\n            <div class="usa-width-one-twelfth">\n                <!-- Status -->\n                Status\n            </div>\n            <div class="usa-width-one-twelfth">\n                <!-- Reuses -->\n                0\n            </div>\n        </div>\n    </div>\n    <div ng-if="!controller.expand" class="usa-width-one-half">\n        <div class="usa-grid">\n            <div class="usa-width-two-thirds">\n                <!-- Logo -->\n                Logo\n            </div>\n            <div class="usa-width-one-sixth">\n                <!-- Status -->\n                Status\n            </div>\n            <div class="usa-width-one-sixth">\n                <!-- Reuses -->\n                0\n            </div>\n        </div>\n        <div class="usa-grid">\n            <div class="usa-width-one-whole">\n                <div>\n                    <strong>Service Model:</strong>\n                    {{ controller.model.serviceModel.join(\', \') }}\n                </div>\n                <div>\n                    <strong>Deployment Model:</strong>\n                    {{ controller.model.deploymentModel }}\n                </div>\n                <div>\n                    <strong>Impact Level:</strong>\n                    {{ controller.model.impactLevel }}\n                </div>\n            </div>\n        </div>\n    </div>\n</a>\n');$templateCache.put('src/fedramp/home/agency-comparison.html','');$templateCache.put('src/fedramp/home/agency-information.html','');$templateCache.put('src/fedramp/home/agency.html','');$templateCache.put('src/fedramp/home/assessor-comparison.html','');$templateCache.put('src/fedramp/home/assessor-information.html','');$templateCache.put('src/fedramp/home/assessor.html','');$templateCache.put('src/fedramp/home/home.html','<div class="usa-content">\n    <div class="usa-grid">\n        <div class="usa-width-one-third">\n            <div class="circle">\n                <p>\n                    <strong style="font-size: larger;">${{homeController.totalCostSavings()}}</strong>\n                    <div>Cost Savings</div>\n                </p>\n            </div>\n        </div>\n        <div class="usa-width-one-third">\n            <div class="circle">\n                <p>\n                    <strong style="font-size: larger;">{{homeController.totalAuthorized()}}</strong>\n                    <div>Total Authorized</div>\n                </p>\n            </div>\n        </div>\n        <div class="usa-width-one-third">\n            <div class="circle">\n                <p>\n                    <strong style="font-size: larger;">{{homeController.leveragedAtos()}}</strong>\n                    <div>Leveraged ATOs</div>\n                </p>\n            </div>\n        </div>\n    </div>\n    <div style="text-align:center;margin-top:20px;margin-bottom:20px;"> Search by </div>\n    <div ng-show="homeController.hasData()">\n        <div class="filters usa-grid">\n            <div class="usa-width-one-fourth">\n                <button id="filterByCSP"\n                        ng-click="homeController.toggleFilter(\'csp\')">CSP\n                </button>\n            </div>\n            <div class="usa-width-one-fourth">\n                <button id="filterByCSO"\n                        type="radio"\n                        ng-click="homeController.toggleFilter(\'cso\')">CSO\n                </button>\n            </div>\n            <div class="usa-width-one-fourth">\n                <button id="filterByAgency"\n                        ng-click="homeController.toggleFilter(\'agency\')">Agency\n                </button>\n            </div>\n            <div class="usa-width-one-fourth">\n                <button id="filterBy3PAO"\n                        ng-click="homeController.toggleFilter(\'3pao\')">3PAO\n                </button>\n            </div>\n        </div>\n        <div class="usa-grid" ng-show="!!homeController.filterType">\n            <div style="text-align:center;" class="usa-width-one-whole">\n                <div style="margin:0 auto;display:table;">\n                    <label for="filter">Filter using:</label>\n                    <select id="filter"\n                            ng-model="homeController.filter"\n                            ng-options="option for option in homeController.filterOptions"\n                            ng-change="homeController.applyFilter()">\n                        <option value=""></option>\n                    </select>\n                </div>\n                <a href="{{homeController.downloadUrl}}"\n                   download="{{homeController.filename()}}"\n                   ng-click="homeController.download()">\n                    Download\n                </a>\n            </div>\n        </div>\n        <div class="usa-grid">\n            <div class="usa-width-one-third">&nbsp;</div>\n            <div class="usa-width-one-twelfth">&nbsp;</div>\n            <div class="usa-width-one-third">\n                <label>\n                    <input type="checkbox" ng-model="homeController.expandTiles" />\n                    <p ng-if="homeController.expandTiles">View as tiles</p>\n                    <p ng-if="!homeController.expandTiles">View as list</p>\n                </label>\n            </div>\n        </div>\n        <div class="usa-grid">\n            <tile ng-repeat="item in homeController.filteredData" expand="homeController.expandTiles" model="item" />\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/product-comparison.html','');$templateCache.put('src/fedramp/home/product-information.html','<div class="usa-content">\n    <div class="usa-grid">\n        <div class="usa-width-one-half">\n            <div class="usa-grid">\n                <div class="usa-width-two-thirds">\n                    <!-- Logo -->\n                    Logo\n                </div>\n                <div class="usa-width-one-sixth">\n                    <!-- Status -->\n                    Status\n                </div>\n                <div class="usa-width-one-sixth">\n                    {{controller.item.reuse}}\n                </div>\n            </div>\n            <div class="usa-grid">\n                <div class="usa-width-one-whole">\n                    <strong>System Profile</strong>\n                </div>\n                <div>\n                    Service Model<span ng-show="controller.item.serviceModels.length > 1">s</span>:\n                    {{controller.item.serviceModels.join(\', \')}}\n                </div>\n                <div>\n                    Deployment Model:\n                    {{controller.item.deploymentModel}}\n                </div>\n                <div>\n                    Impact Level:\n                    {{controller.item.impactLevel}}\n                </div>\n            </div>\n            <div class="usa-grid">\n                <div class="usa-width-one-whole">\n                    <strong>Contact Information</strong>\n                </div>\n                <div>POC:</div>\n                <div>E-mail:</div>\n                <div>Website:</div>\n            </div>\n            <div class="usa-grid">\n                <div class="usa-width-one-whole">\n                    <strong>Package ID</strong>\n                    <p>{{controller.item.pkgId}}</p>\n                </div>\n            </div>\n            <div class="usa-grid">\n                <div class="usa-width-one-whole">\n                    <strong>Service Description</strong>\n                </div>\n            </div>\n            <div class="usa-grid">\n                <div class="usa-width-one-whole">\n                    <strong>FedRAMP Compliant Detail</strong>\n                </div>\n            </div>\n            <div class="usa-grid">\n                <div class="usa-width-one-whole">\n                    <strong>Associated Risks</strong>\n                </div>\n            </div>\n            <div class="usa-grid">\n                <div class="usa-width-one-whole">\n                    <strong>Agencies using this service</strong>\n                </div>\n                <div class="usa-width-one-whole">\n                    <ul>\n                        <li ng-repeat="agency in controller.item.agencies track by $index">{{agency}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class="usa-width-one-half">\n            <div ng-show="controller.items.length > 0">\n                <div class="usa-grid">\n                    <tile ng-repeat="model in controller.items track by $index" expand="true" model="model" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/product.html','');$templateCache.put('src/fedramp/home/provider-comparison.html','');$templateCache.put('src/fedramp/home/provider-information.html','');$templateCache.put('src/fedramp/home/provider.html','');}]);(function(){'use strict';angular.module('fedramp').config(routeConfig);// Add items to inject for safe minification
routeConfig.$inject=['$stateProvider','$urlRouterProvider'];/**
     * Configures the routes and views for the FedRAMP application
     */function routeConfig($stateProvider,$urlRouterProvider){// Go to root if something goes wrong
$urlRouterProvider.otherwise('/');// Routes
$stateProvider.state('fedramp',{abstract:true,templateUrl:'src/fedramp/fedramp.html',resolve:{fedrampData:FedRampData}}).state('fedramp.home',{url:'/',templateUrl:'src/fedramp/home/home.html',controller:'HomeController as homeController'})// .state('fedramp.home.providers', {
//     url: '/providers',
//     templateUrl: 'src/fedramp/home/providers.html',
//     controller: 'ProviderController as controller'
// })
// .state('fedramp.home.provider', {
//     url: '/provider/:name',
//     templateUrl: 'src/fedramp/home/provider.html',
//     controller: 'ProviderInformationController as controller'
// })
// .state('fedramp.home.provider.comparison', {
//     url: '/:first/versus/:second',
//     templateUrl: 'src/fedramp/home/provider-comparison.html',
//     controller: 'ProviderComparisonController as controller'
// })
.state('fedramp.home.products',{url:'/products',templateUrl:'src/fedramp/home/products.html',controller:'ProductsController as controller'}).state('fedramp.product',{url:'/product/:name',templateUrl:'src/fedramp/home/product-information.html',controller:'ProductInformationController as controller'}).state('fedramp.product.comparison',{url:'/versus/:second',templateUrl:'src/fedramp/home/product-comparison.html',controller:'ProductComparisonController as controller'});// .state('fedramp.home.agency', {
//     url: '/agency',
//     templateUrl: 'src/fedramp/home/agency.html',
//     controller: 'AgencyController as controller'
// })
// .state('fedramp.home.agency.information', {
//     url: '/:name',
//     templateUrl: 'src/fedramp/home/agency-information.html',
//     controller: 'AgencyInformationController as controller'
// })
// .state('fedramp.home.agency.information.comparison', {
//     url: '/:first/versus/:second',
//     templateUrl: 'src/fedramp/home/agency-comparison.html',
//     controller: 'AgencyComparisonController as controller'
// })
// .state('fedramp.home.assessor', {
//     url: '/assessor',
//     templateUrl: 'src/fedramp/home/assessor.html',
//     controller: 'AssessorController as controller'
// })
// .state('fedramp.home.assessor.information', {
//     url: '/:name',
//     templateUrl: 'src/fedramp/home/assessor-information.html',
//     controller: 'AssessorInformationController as controller'
// })
// .state('fedramp.home.assessor.information.comparison', {
//     url: '/:first/versus/:second',
//     templateUrl: 'src/fedramp/home/assessor-comparison.html',
//     controller: 'AssessorComparisonController as controller'
// });
/**
         * Retrieves the providers for a particular day
         */FedRampData.$inject=['DataService'];function FedRampData(DataService){return DataService.pull().then(function(storage){return storage;});}}})();(function(){'use strict';angular.module('fedramp.models').factory('Agency',AgencyFactory);AgencyFactory.$inject=[];function AgencyFactory(){/**
         * The agency
         * @constructor
         * @memberof Models
         */function Agency(options){// Scope `this` to self
var self=this;self.type='agency';self.name='';self.reuses=0;self.sponsored=0;self.authorized=0;self.providers=[];self.products=[];self.assessors=[];}return Agency;}})();(function(){'use strict';angular.module('fedramp.models').factory('Assessor',AssessorFactory);AssessorFactory.$inject=[];function AssessorFactory(){/**
         * The independent assessor
         * @constructor
         * @memberof Models
         */function Assessor(options){// Scope `this` to self
var self=this;self.type='assessor';self.name='';self.reuses=0;self.providers=[];self.products=[];self.agencies=[];self.pointOfContact='';self.email='';self.url='';}return Assessor;}})();(function(){'use strict';angular.module('fedramp.models').factory('AtoLetter',AtoLetterFactory);function AtoLetterFactory(){return AtoLetter;}/**
     * Leveraged ATO letter.
     * @constructor
     * @memberof Models
     */function AtoLetter(options){// Scope `this` to self
var self=this;var mapping={'Letter_Date':'letterDate','Letter_Expiration_Date':'letterExpirationDate','Authorization_Date':'authorizationDate','Authorizing_Letter_Last_Sign_Date':'authorizingLetterSignedDate','Authorizing_Agency':'authorizingAgency','Authorizing_Subagency':'authorizingSubagency','Active':'active','Include_In_Marketplace':'includeInMarketplace','Independent_Assessor':'independentAssessor'};/**
         * Letter date
         * @member {date}
         * @memberof Models.AtoLetter
         */self.letterDate=null;/**
         * Letter expiration date
         * @member {date}
         * @memberof Models.AtoLetter
         */self.letterExpirationDate=null;/**
         * The authorization date
         * @member {date}
         * @memberof Models.AtoLetter
         */self.authorizationDate=null;/**
         * Authorizing letter signed date
         * @member {date}
         * @memberof Models.AtoLetter
         */self.authorizingLetterSignedDate=null;/**
         * Authorizing agency
         * @member {string}
         * @memberof Models.AtoLetter
         */self.authorizingAgency='';/**
         * Authorizing subagency
         * @member {string}
         * @memberof Models.AtoLetter
         */self.authorizingSubagency='';/**
         * Active status
         * @deprecated
         * @member {string}
         * @memberof Models.AtoLetter
         */self.active='';/**
         * A value indicating if it should be included in the market place
         * @member {date}
         * @memberof Models.AtoLetter
         */self.includeInMarketplace='';/**
         * The independent assessor
         * @member {string}
         * @memberof Models.Provider
         */self.independentAssessor='';/**
         * Initialize the ATO letter object.
         *
         * @param {object} options
         *  A dictionary of options to configure the ATO letter
         *
         * @returns
         *  The ATO letter
         */self.init=function(options){if(!options){return self;}for(var x in options){if(!options.hasOwnProperty(x)){continue;}var key=mapping[x];if(key){self[key]=options[x];}else{if(self.hasOwnProperty(x)){self[x]=options[x];}}}return self;};return self.init(options);}})();(function(){'use strict';angular.module('fedramp.models').factory('Data',DataFactory);DataFactory.$inject=['AtoLetter'];function DataFactory(AtoLetter){/**
         * The raw data model with opinionated transformations
         * @constructor
         * @memberof Models
         */function Data(options){// Scope `this` to self
var self=this;var mapping={'Cloud_Service_Provider_Name':'name','Cloud_Service_Provider_Package':'pkg','Path':'path','Designation':'designation','Package_ID':'pkgId','Service_Model':'serviceModel','Deployment_Model':'deploymentModel','Impact_Level':'impactLevel','Original_Authorization_Date':'authorizationDate','Original_Expiration_Date':'expirationDate','Sponsoring_Agency':'sponsoringAgency','Sponsoring_Subagency':'sponsoringSubagency','Active':'active','CSP_URL':'cspUrl','Underlying_CSP_Package_ID':'underlyingCspPackages','Stage':'stage','Independent_Assessor':'independentAssessor','Leveraged_ATO_Letters':'atoLetters'};/**
             * Cloud service provider name
             * @member {string}
             * @memberof Models.Data
             */self.name='';/**
             * Package name
             * @member {string}
             * @memberof Models.Data
             */self.pkg='';/**
             * Package identifier
             * @member {string}
             * @memberof Models.Data
             */self.pkgId='';/**
             * Path
             * @member {string}
             * @memberof Models.Data
             */self.path='';/**
             * Designation
             * @member {string}
             * @memberof Models.Data
             */self.designation='';/**
             * Service model
             * @member {array}
             * @memberof Models.Data
             */self.serviceModel=[];/**
             * Deployment model
             * @member {string}
             * @memberof Models.Data
             */self.deploymentModel='';/**
             * Impact level
             * @member {string}
             * @memberof Models.Data
             */self.impactLevel='';/**
             * Authorization date
             * @member {date}
             * @memberof Models.Data
             */self.authorizationDate=null;/**
             * Expiration date
             * @member {date}
             * @memberof Models.Data
             */self.expirationDate=null;/**
             * Sponsoring agency
             * @member {string}
             * @memberof Models.Data
             */self.sponsoringAgency='';/**
             * Sponsoring subagency
             * @member {string}
             * @memberof Models.Data
             */self.sponsoringSubagency='';/**
             * Active status
             * @deprecated
             * @member {string}
             * @memberof Models.Data
             */self.active='';/**
             * The CSP URL
             * @member {string}
             * @memberof Models.Data
             */self.cspUrl='';/**
             * Underlying CSP packages
             * @member {array}
             * @memberof Models.Data
             */self.underlyingCspPackages=[];/**
             * Stage in validation process
             * @member {string}
             * @memberof Models.Data
             */self.stage='';/**
             * The independent assessor
             * @member {string}
             * @memberof Models.Data
             */self.independentAssessor='';/**
             * Leveraged ATO letters
             * @member {array}
             * @memberof Models.Data
             */self.atoLetters=[];/**
             * Initialize the provider object.
             *
             * @param {object} options
             *  A dictionary of options to configure the provider
             *
             * @returns
             *  The provider
             */self.init=function(options){if(!options){return;}for(var x in options){if(!options.hasOwnProperty(x)){continue;}var key=mapping[x];var letter=null;if(key){if(key==='atoLetters'){for(var i=0;i<options[x].length;i++){self[key].push(new AtoLetter(options[x][i]));}}else{self[key]=options[x];}}else{if(self.hasOwnProperty(x)){if(x==='atoLetters'){for(var _i=0;_i<options[x].length;_i++){self[x].push(new AtoLetter(options[x][_i]));}}else{self[x]=options[x];}}}}return self;};/**
             * Get a unique hash or identifier for the provider.
             * @public
             * @memberof Models.Data
             *
             * @returns
             *  The hash
             */self.hash=function(){var id=''+self.name+self.pkg+self.pkgId+self.sponsoringAgency;if(id.length===0){return null;}return id;};return self.init(options);}return Data;}})();(function(){'use strict';angular.module('fedramp.models').factory('Product',ProductFactory);ProductFactory.$inject=[];function ProductFactory(){/**
         * The product (CSO)
         * @constructor
         * @memberof Models
         */function Product(){// Scope `this` to self
var self=this;self.type='product';self.name='';self.pkgId='';self.reuses=0;self.provider='';self.agencies=[];self.deploymentModel='';self.designation='';self.serviceModels=[];self.impactLevel='';}return Product;}})();(function(){'use strict';angular.module('fedramp.models').factory('Provider',ProviderFactory);ProviderFactory.$inject=[];function ProviderFactory(){/**
         * The cloud service provider.
         * @constructor
         * @memberof Models
         */function Provider(options){// Scope `this` to self
var self=this;self.type='provider';self.name='';self.reuses=0;self.products=[];self.deploymentModels=[];self.serviceModels=[];self.designations=[];}return Provider;}})();(function(){'use strict';angular.module('fedramp.services').factory('Settings',SettingsFactory);function SettingsFactory(){return Settings;}/**
     * Application settings for the FedRAMP dashboard.
     * @constructor
     * @memberof Models
     */function Settings(options){// Scope `this` to self
var self=this;/**
         * The last refresh date
         * @member {string}
         * @memberof Models.Settings
         */self.lastRefresh=null;/**
         * Initialize the Settings object.
         *
         * @param {object} options
         *  A dictionary of options to configure the Settings object.
         *
         * @returns
         *  The Settings object
         */self.init=function(options){if(options){for(var x in options){if(!options.hasOwnProperty(x)){continue;}if(self.hasOwnProperty(x)){self[x]=options[x];}}}return self;};/**
         * Refreshes the date to current date
         * @public
         * @memberof Models.Settings
         *
         * @returns
         *  The last refresh date
         */self.refresh=function(){self.lastRefresh=today();return self.lastRefresh;};/**
         * Clears last refresh
         * @public
         * @memberof Models.Settings
         */self.clearRefresh=function(){self.lastRefresh=null;};/**
         * Determine if the data requires a refresh.
         * @public
         * @memberof Models.Settings
         *
         * @returns
         *  A boolean value
         */self.needsRefresh=function(){return self.lastRefresh!==today();};/**
         * Creates a formatted date string
         * @private
         * @memberof Models.Settings
         *
         * @returns
         *  Today's date formatting as mm/dd/YYYY
         */function today(){var d=new Date();var dd=d.getDate();var mm=d.getMonth()+1;var yyyy=d.getFullYear();if(dd<10){dd='0'+dd;}if(mm<10){mm='0'+mm;}return mm+'/'+dd+'/'+yyyy;}return self.init(options);}})();(function(){'use strict';angular.module('fedramp.services').component('tile',{templateUrl:'src/fedramp.components/tile.html',controller:Tile,controllerAs:'controller',bindings:{expand:'<',model:'<'}});Tile.$inject=['$log','$state','$stateParams','helperService'];function Tile($log,$state,$stateParams,helperService){var self=this;/**
         * Redirect to the appropriate view
         */self.view=function(){if($stateParams.name){$state.go('fedramp.'+self.model.type+'.comparison',{second:helperService.slugify(self.model.name)});}else{$state.go('fedramp.'+self.model.type,{name:helperService.slugify(self.model.name)});}};// self.$onInit = function () {};
// self.$onChanges = function (changes) {};
// self.$onDestroy = function () {};
// self.$postLink = function () {};
}})();(function(){'use strict';angular.module('fedramp.services').service('CsvService',CsvService);CsvService.$inject=['$log'];/**
     * @constructor
     * @memberof Services
     */function CsvService($log){var self=this;self.flatten=flatten;self.toCsv=toCsv;/**
         * Takes an object and converts to a csv string
         *
         * @public
         * @memberof Service.CsvService
         *
         * @returns
         * A csv string representation of an object.
         */function toCsv(data,config){return Papa.unparse(data,config);}/**
         * Iterates through an array creating an array of flattened objects
         *
         * @public
         * @memberof Services.CsvService
         *
         * @param {array} data
         *  An array of complex objects
         *
         * @returns
         *  A flatten array of array values
         */function flatten(data){var rows=[];for(var i=0;i<data.length;i++){rows.push(flattenObject(data[i]));}return rows;}/**
         * Iterates through the properties of an object creating a flat structure
         *
         * @public
         * @memberof Services.CsvService
         *
         * @param {object} obj
         *
         * @returns
         *  A flattened object
         */function flattenObject(obj){var flat={};for(var prop in obj){if(typeof obj[prop]==='function'){continue;}else if(Array.isArray(obj[prop])){if(obj[prop].length===0){flat[unicornString(prop)]='';continue;}if(typeof obj[prop][0]==='string'){flat[unicornString(prop)]=obj[prop].join(', ');}else if(_typeof(obj[prop][0])==='object'){var a=flatten(obj[prop]);for(var i=0;i<a.length;i++){var o=a[i];for(var p in o){flat[unicornString(prop)+' - '+unicornString(p)]=o[p];}}}}else if(_typeof(obj[prop])==='object'){var _o=flattenObject(obj[prop]);for(var _p in _o){flat[unicornString(prop)+' - '+unicornString(_p)]=_o[_p];}}else{flat[unicornString(prop)]=obj[prop];}}return flat;}/**
         * Creates a magical and readable string from camelcase
         *
         * @public
         * @memberof Services.CsvService
         *
         * @param {string} camelCase
         *
         * @returns
         *  A human readable string
         */function unicornString(camelCase){return camelCase.replace(/([A-Z])/g,' $1').replace(/^./,function(s){return s.toUpperCase();});}}})();(function(){'use strict';angular.module('fedramp.services').service('DataService',DataService);DataService.$inject=['$log','StorageManager','StorageData','Data','DatasourceService'];/**
     * @constructor
     * @memberof Services
     */function DataService($log,StorageManager,StorageData,Data,DatasourceService){var self=this;var dataUrl='https://raw.githubusercontent.com/18F/fedramp-micropurchase/master/data/data.json';/**
         * Issue a GET request for the given URL.
         * @public
         * @memberof Services.DataService
         *
         * @returns
         *  The response as a promise
         */self.pull=function(){return DatasourceService.pull(dataUrl).then(function(response){var meta=response.meta;var data=response.data;var storage=new StorageData();storage.clear();for(var i=0;i<data.length;i++){var d=new Data(data[i]);storage.update(d.hash(),d);}return storage;});};}})();(function(){'use strict';angular.module('fedramp.services').service('DatasourceService',DatasourceService);DatasourceService.$inject=['$http'];/**
     * @constructor
     * @memberof Services
     */function DatasourceService($http){var self=this;/**
         * Issue a GET request for the given URL.
         * @public
         * @memberof Services.DatasourceService
         *
         * @param {string} url
         *  The URL
         *
         * @returns
         *  The response as a promise
         */self.pull=function(url){return $http.get(url).then(function(response){return response.data;});};}})();(function(){'use strict';angular.module('fedramp.services').service('helperService',HelperService);HelperService.$inject=['$log'];function HelperService($log){var self=this;self.slugify=function(s){return s.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');};}})();(function(){'use strict';angular.module('fedramp.services').factory('StorageData',StorageDataFactory);StorageDataFactory.$inject=['StorageManager','Data','Agency','Assessor','Product','Provider'];function StorageDataFactory(StorageManager,Data,Agency,Assessor,Product,Provider){/**
         * Provides storage specific functionality that extends the StorageManager
         * @constructor
         * @memberof Services
         * @extends StorageManager
         */function StorageData(options){StorageManager.call(this);var self=this;self.storageContainer='data';/**
             * Transforms the raw object to a specifec model
             * @public
             * @memberof Services.StorageData
             *
             * @param {Object} raw
             *  The JSON object
             *
             * @returns
             *  The item
             */self.transform=function(raw){return new Data(raw);};/**
             * Extracts unique providers
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of providers
             */self.providers=function(){var names=[];var items=[];var data=self.all();for(var i=0;i<data.length;i++){var d=data[i];if(!d.name||names.includes(d.name)){continue;}names.push(d.name);var item=new Provider();item.name=d.name;items.push(item);}items.forEach(function(item){item.products=self.products().filter(function(x){return x.name===item.name;});item.products.forEach(function(prod){item.reuses+=prod.reuses;item.products.forEach(function(prod){prod.serviceModels.forEach(function(model){if(!item.serviceModels.includes(model)){item.serviceModels.push(model);}});});item.products.forEach(function(prod){prod.deplomentModels.forEach(function(model){if(!item.deploymentModels.includes(model)){item.deploymentModels.push(model);}});});item.products.forEach(function(prod){if(!item.designations.includes(prod.deploymentModel)){item.designations.push(prod.deploymentModel);}});});});return items;};/**
             * Extracts unique products
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of products
             */self.products=function(){var names=[];var items=[];var data=self.all();for(var i=0;i<data.length;i++){var d=data[i];if(!d.pkg||names.includes(d.pkg)){continue;}names.push(d.pkg);var item=new Product();item.name=d.pkg;item.provider=d.name;item.pkgId=d.pkgId;item.serviceModels=d.serviceModel;item.deploymentModel=d.deploymentModel;item.designation=d.designation;item.impactLevel=d.impactLevel;items.push(item);}items.forEach(function(item){data.forEach(function(d){if(d.pkg===item.name){if(d.sponsoringAgency&&!item.agencies.includes(d.sponsoringAgency)){item.agencies.push(d.sponsoringAgency);}if(d.sponsoringSubagency&&!item.agencies.includes(d.sponsoringSubagency)){item.agencies.push(d.sponsoringSubagency);}d.atoLetters.forEach(function(a){if(d.authorizationAgency&&!item.agencies.includes(a.authorizingAgency)){item.agencies.push(d.authorizingAgency);}if(d.authorizingSubagency&&!item.agencies.includes(a.authorizingSubagency)){item.agencies.push(d.authorizingSubagency);}});}});});return items;};/**
             * Extracts unique agencies
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of agencies
             */self.agencies=function(){var names=[];var items=[];var data=self.all();// Top level
for(var i=0;i<data.length;i++){var d=data[i];if(d.sponsoringAgency&&!names.includes(d.sponsoringAgency)){names.push(d.sponsoringAgency);var item=new Agency();item.name=name;items.push(item);}if(d.sponsoringSubagency&&!names.includes(d.sponsoringSubagency)){names.push(d.sponsoringSubagency);var _item=new Agency();_item.name=name;items.push(_item);}}// Nested
for(var _i2=0;_i2<data.length;_i2++){var _d=data[_i2];for(var j=0;j<_d.atoLetters.length;j++){var l=_d.atoLetters[j];if(l.authorizingAgency&&!names.includes(l.authorizingAgency)){names.push(l.authorizingAgency);var _item2=new Agency();_item2.name=l.authorizingAgency;items.push(_item2);}if(l.authorizingSubagency&&!names.includes(l.authorizingSubagency)){names.push(l.authorizingSubagency);var _item3=new Agency();_item3.name=l.authorizingSubagency;items.push(_item3);}}}items.forEach(function(item){data.forEach(function(d){if(d.sponsoringAgency===item.name||d.sponsoringSubagency===item.name||d.atoLetters.filter(function(x){return x.authorizingAgency===item.name||x.authorizingSubagency===item.name;})){if(!item.products.includes(d.pkg)){item.products.push(d.pkg);}if(!item.providers.includes(d.name)){item.providers.push(d.name);}if(!item.assessors.includes(d.independentAssessor)){item.assessors.push(d.independentAssessor);}}if(d.sponsoringAgency===item.name||d.sponsoringSubagency===item.name){item.sponsored++;}if(d.authorizingAgency===item.name||d.authorizingSubagency===item.name){item.authorized++;}});});return items;};/**
             * Extracts unique independent assessors
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of independent assessors
             */self.assessors=function(){var names=[];var items=[];var data=self.all();// Top level
for(var i=0;i<data.length;i++){var d=data[i];if(!d.independentAssessor||names.includes(d.independentAssessor)){continue;}names.push(d.independentAssessor);var item=new Assessor();item.name=d.independentAssessor;items.push(item);}// Nested
for(var _i3=0;_i3<data.length;_i3++){var _d2=data[_i3];for(var j=0;j<_d2.atoLetters.length;j++){var l=_d2.atoLetters[j];var _name='';if(!l.independentAssessor||names.includes(l.independentAssessor)){continue;}names.push(l.independentAssessor);var _item4=new Assessor();_item4.name=l.independentAssessor;items.push(_item4);}}items.forEach(function(item){data.forEach(function(d){if(d.independentAssessor===item.name){if(!item.products.includes(d.pkg)){item.products.push(d.pkg);}if(!item.providers.includes(d.name)){item.providers.push(d.name);}if(!item.agencies.includes(d.sponsoringAgency)){item.agencies.push(d.sponsoringAgency);}if(!item.agencies.includes(d.sponsoringSubagency)){item.agencies.push(d.sponsoringSubagency);}}d.atoLetters.forEach(function(a){if(a.independentAssessor===item.name){if(!item.agencies.includes(a.authorizingAgency)){item.agencies.push(a.authorizingAgency);}if(!item.agencies.includes(a.authorizingSubagency)){item.agencies.push(a.authorizingSubagency);}}});});});return items;};return self.init(options);}StorageData.prototype=Object.create(StorageManager.prototype);StorageData.prototype.constructor=StorageData;return StorageData;}})();(function(){'use strict';angular.module('fedramp.services').factory('StorageManager',StorageManagerFactory);function StorageManagerFactory(){return StorageManager;}/**
     * Storage manager handles the storage and retrieval of items.
     * @constructor
     * @memberof Services
     */function StorageManager(options){// Scope `this` to self.
var self=this;// Properties
self.storageContainer='default';/**
         * Initialize the storage manager.
         * @public
         * @memberof Services.StorageManager
         *
         * @param {object} options
         *  A dictionary of options to configure the storage manager
         *
         * @returns
         *  The storage manager
         */self.init=function(options){var e=prechecks();if(e&&e.length!==0){throw e;}if(options&&options.storageContainer){self.storageContainer=options.storageContainer;}return self;};/**
         * Update the status of an item.
         * @public
         * @memberof Services.StorageManager
         *
         * @param {string} id
         *  The identifier of the item
         * @param {object} properties
         *  The item properties
         */self.update=function(id,properties){store(id,properties);};/**
         * Queries for an item by identifier.
         * @public
         * @memberof Services.StorageManager
         *
         * @param {string} id
         *  The identifier of the item
         *
         * @returns
         *  The item
         */self.byId=function(id){return fetch(id);};/**
         * Clear the item queue.
         * @public
         * @memberof Services.StorageManager
         */self.clear=function(){purge();};/**
         * Queries all items in the storage container.
         * @public
         * @memberof Services.StorageManager
         *
         * @returns
         *  An array of items
         */self.all=function(){return all();};/**
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
         */self.transform=function(raw){return raw;};/**
         * Perform all prechecks necessary to ensure dependencies are met
         * @private
         *
         * @returns
         *  An error message if a dependency is not met
         */function prechecks(){if(typeof Storage==='undefined'){return'Local storage is not supported';}return null;}/**
         * Retrieve all items in local storage.
         * @private
         *
         * @returns
         *  An array of items
         */function all(){var items=[];var storage=JSON.parse(localStorage.getItem(self.storageContainer));if(storage){for(var key in storage){items.push(self.transform(storage[key]));}}return items;}/**
         * Fetchs an item from local storage.
         * @private
         *
         * @param {string} id
         *  The identifier of the item
         *
         * @returns
         *  The item
         */function fetch(id){var storage=JSON.parse(localStorage.getItem(self.storageContainer));if(!storage){return null;}if(storage[id]){return self.transform(storage[id]);}return null;}/**
         * Stores an item to local storage.
         * @private
         *
         * @param {string} id
         *  The identifier of the item
         * @param {object} properties
         *  The item properties
         */function store(id,properties){var storage=JSON.parse(localStorage.getItem(self.storageContainer));if(!storage){storage={};}if(id){storage[id]=properties;self.transform(storage[id]);localStorage.setItem(self.storageContainer,JSON.stringify(storage));}}/**
         * Removes an item from local storage.
         * @private
         *
         * @param {string} id
         *  The identifier of the item
         */function remove(id){var storage=JSON.parse(localStorage.getItem(self.storageContainer));if(!storage||!storage[id]){return;}self.transform(storage[id]);delete storage[id];localStorage.setItem(self.storageContainer,JSON.stringify(storage));}/**
         * Purges all items from local storage.
         * @private
         */function purge(){if(localStorage.getItem(self.storageContainer)){localStorage.removeItem(self.storageContainer);}}return self.init(options);}})();(function(){'use strict';angular.module('fedramp.services').factory('StorageSettings',StorageSettingsFactory);StorageSettingsFactory.$inject=['StorageManager','Settings'];function StorageSettingsFactory(StorageManager,Settings){/**
         * Provides storage specific functionality that extends the StorageManager
         * @constructor
         * @memberof Services
         * @extends StorageManager
         */function StorageSettings(options){StorageManager.call(this);var self=this;self.storageContainer='fedramp';/**
             * Transforms the raw object to a specifec model
             * @public
             * @memberof Services.StorageSettings
             *
             * @param {Object} raw
             *  The JSON object
             *
             * @returns
             *  The item
             */self.transform=function(raw){return new Settings(raw);};return self.init(options);}StorageSettings.prototype=Object.create(StorageManager.prototype);StorageSettings.prototype.constructor=StorageSettings;return StorageSettings;}})();(function(){})();(function(){})();(function(){'use strict';angular.module('fedramp').controller('HomeController',HomeController);HomeController.$inject=['$log','fedrampData','CsvService'];/**
     * @constructor
     * @memberof Controllers
     */function HomeController($log,fedrampData,CsvService){var self=this;var lastFilterType='';var downloadBlob=null;var rawData=fedrampData.all();/**
         * The title displayed on the home page
         * @member {string}
         * @memberof Controllers.HomeController
         */self.title='FedRAMP';/**
         * Display the tiles in an expanded format
         * @member {boolean}
         * @memberof Controllers.HomeController
         **/self.expandTiles=true;/**
         * The download URL
         * @member {string}
         * @memberof Controllers.HomeController
         */self.downloadUrl='#';/**
         * Sort by property.
         * @member {string}
         * @memberof Controllers.HomeController
         **/self.sortBy='name';/**
         * Sort direction is ascending
         * @member {boolean}
         * @memberof Controllers.HomeController
         **/self.sortAscending=true;/**
         * The data after filters have been applied
         * @member {array}
         * @memberof Controllers.HomeController
         */self.filteredData=rawData;/**
         * The type of filter applied to the data
         * @member {string}
         * @memberof Controllers.HomeController
         */self.filterType='';/**
         * The filter specific options
         * @member {array}
         * @memberof Controllers.HomeController
         */self.filterOptions=[];/**
         * The filter applied to the data
         * @member {string}
         * @memberof Controllers.HomeController
         */self.filter='';/**
         * Determines if data is present
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  A value indicating if any data is stored
         */self.hasData=function(){return rawData&&rawData.length>0;};/**
         * Applies the filter(s) to the raw data set
         * @public
         * @memberof Controllers.HomeController
         *
         * @param {string} type
         *  (optional) The filter type
         * @param {string} filter
         *  (optional) The filter value
         */self.applyFilter=function(type,filter){type=type?type:self.filterType;filter=filter?filter:self.filter;// If there is no filter applied then we show everything
if(!type||!filter){self.filteredData=rawData;sortData();return;}// Place any items matching the filter in an array so we
// can replace the filtered data in bulk and reduce UI
// flickering.
var prefiltered=[];switch(type){case'csp':for(var i=0;i<rawData.length;i++){var p=rawData[i];if(p.name.indexOf(filter)!==-1){prefiltered.push(p);}}break;case'cso':for(var _i4=0;_i4<rawData.length;_i4++){var _p2=rawData[_i4];if(_p2.pkg.indexOf(filter)!==-1){prefiltered.push(_p2);}}break;case'agency':for(var _i5=0;_i5<rawData.length;_i5++){var _p3=rawData[_i5];if((_p3.sponsoringAgency+_p3.sponsoringSubagency).indexOf(filter)!==-1){prefiltered.push(_p3);}else{// NOTE: Determine if it is necessary to check the leveraged ATO letters
for(var j=0;j<_p3.atoLetters.length;j++){var l=_p3.atoLetters[j];if((l.authorizingAgency+l.authorizingSubagency).indexOf(filter)!==-1){prefiltered.push(_p3);break;}}}}break;case'3pao':for(var _i6=0;_i6<rawData.length;_i6++){var _p4=rawData[_i6];if(_p4.independentAssessor.indexOf(filter)!==-1){prefiltered.push(_p4);}for(var _j=0;_j<_p4.atoLetters.length;_j++){var _l=_p4.atoLetters[_j];if(_l.independentAssessor.indexOf(filter)!==-1){prefiltered.push(_p4);break;}}}break;}self.filteredData=prefiltered;sortData();self.downloadUrl='#';downloadBlob=null;// Parse the data here
var csv=CsvService.toCsv(CsvService.flatten(prefiltered));if(csv){downloadBlob=new Blob([csv],{type:'text/csv;charset=utf-8;'});self.downloadUrl=window.URL.createObjectURL(downloadBlob);}};/**
         * Toggles the checked state for the major filters
         * @public
         * @memberof Controllers.HomeController
         *
         * @param {string} type
         *  (optional) The filter type
         */self.toggleFilter=function(type){self.filterType=type;if(lastFilterType===type){self.filterType='';return;}lastFilterType=type;var options=[];switch(type){case'csp':fedrampData.providers().forEach(function(x){return options.push(x.name);});break;case'cso':fedrampData.products().forEach(function(x){return options.push(x.name);});break;case'agency':fedrampData.agencies().forEach(function(x){return options.push(x.name);});break;case'3pao':fedrampData.assessors().forEach(function(x){return options.push(x.name);});break;}self.filterOptions=options;};/**
         * Filters and transforms data for download
         * @public
         * @memberof Controllers.HomeController
         */self.download=function(){$log.info('Download clicked');if(navigator.msSaveBlob&&downloadBlob){// IE 11 and Edge
navigator.msSaveBlob(downloadBlob,self.filename());}};/**
         * Generates the file name to be used when downloading the data
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  A file name in the format "fedramp-YYYY-mm-dd.csv"
         */self.filename=function(date){if(!date){date=new Date();}var dd=date.getDate();var mm=date.getMonth()+1;var yyyy=date.getFullYear();if(dd<10){dd='0'+dd;}if(mm<10){mm='0'+mm;}return'fedramp-'+yyyy+'-'+mm+'-'+dd+'.csv';};/**
         * Total authorized cloud service providers
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total authorized cloud service providers
         */self.totalAuthorized=function(){return fedrampData.products().length;};/**
         * The cost savings at a fixed rate per re-use
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total cost savings
         */self.totalCostSavings=function(){return Number(250000*self.leveragedAtos()).toLocaleString('en');};/**
         * The total leveraged ATO letters from authorized cloud service providers
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total leveraged ATO letters
         */self.leveragedAtos=function(){var totalReuses=0;var providers=fedrampData.all();providers.forEach(function(csp){totalReuses+=self.calcCSPReuse(csp,providers,false);});return totalReuses;};// /**
//  * The total leveraged ATO letters from authorized cloud service providers
//  * @public
//  * @memberof Controllers.HomeController
//  *
//  * @returns
//  *  Appends a list of the number of times leveraged by dependent package id to the provided array of CSPs
//  *
//  * @param {array} data
//  * The an array of all of the CSP data
//  */
// self.displayReuse = function (data) {
//     data.forEach(csp =>{
//         csp['Dependent_CSP'] = self.calcCSPRuse(csp, data, true);
//     });
//     return data;
// };
/**
         * The total leveraged ATO letters from authorized cloud service providers
         * @public
         * @memberof Controllers.HomeController
         *
         * @param {object} csp
         *  The information for an individual CSP
         * @param {array} fullData
         *  The information for all of the CSPs
         * @param {boolean} asObject
         *  True/False to determine where to return an array of object reuses or the total sum of reuses
         *
         * @returns
         *  An object of the number of times a CSP was reused by package id if asObject = true. If asObject = false, it will return the sum of the reuses for an individual CSP if
         */self.calcCSPReuse=function(csp,fullData,asObject){var directlyLeveraged=csp.atoLetters.length;var leveragedATOs=fullData.filter(function(otherCSP){if(otherCSP.underlyingCspPackages){return otherCSP.underlyingCspPackages.includes(csp.pkgId);}});// // Allows this function to be used to return an object of
// if (asObject) {
//     return leveragedATOs.map(otherCSP => {
//         var rObj = {};
//         rObj[otherCSP.pkgId] = otherCSP.atoLetters.length + 1; //Add the plus one for the unleveraged CSP
//         return rObj;
//     });
// }
// Add the unleveraged ATOs that use this CSP (if not and underlying CSP will be 0)
var summedReuses=leveragedATOs.length;if(leveragedATOs.length>0){// Add leveraged ATO of CSP dependencies
summedReuses+=leveragedATOs.map(function(otherCSP){return otherCSP.atoLetters.length;}).reduce(function(prev,curr){return prev+curr;});}return directlyLeveraged+summedReuses;};/**
         * Sorts the filtered data
         */function sortData(){if(!self.sortBy||self.sortBy.length===0){return;}self.filteredData=self.filteredData.sort(function(a,b){if(a[self.sortBy]===b[self.sortBy]){return 0;}if(self.sortAscending){return a[self.sortBy]<b[self.sortBy]?-1:1;}return a[self.sortBy]>b[self.sortBy]?-1:1;});}}})();(function(){'use strict';angular.module('fedramp').controller('ProductController',ProductController);ProductController.$inject=['$log','fedrampData'];/**
     * @constructor
     * @memberof Controllers
     */function ProductController($log,fedrampData){var self=this;}})();(function(){'use strict';angular.module('fedramp').controller('ProductInformationController',ProductInformationController);ProductInformationController.$inject=['$log','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function ProductInformationController($log,$stateParams,fedrampData,helperService){var self=this;/**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProductInformationController
         */self.items=fedrampData.products();/**
         * The item
         * @member {object}
         * @memberof Controllers.ProductInformationController
         */self.item=self.items.find(function(x){return helperService.slugify(x.name)===$stateParams.name;});$log.info(self.item);}})();(function(){})();