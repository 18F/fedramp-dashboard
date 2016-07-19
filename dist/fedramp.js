'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/**
 * @namespace Controllers
 */(function(){'use strict';angular.module('fedramp',['ui.router','fedramp.models','fedramp.services','fedramp.components']).config(['$compileProvider',function($compileProvider){$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob|data):/);$compileProvider.debugInfoEnabled(false);}]).run(run);run.$inject=['$log','$rootScope'];function run($log,$rootScope){$log.debug('fedramp module initializing');$rootScope.$on("$stateChangeError",$log.debug.bind($log));}})();/**
 * @namespace Components
 */(function(){'use strict';angular.module('fedramp.components',['fedramp.models','fedramp.services']).run(run);run.$inject=['$log'];function run($log){$log.debug('fedramp.components module initializing');}})();/**
 * @namespace Models
 */(function(){'use strict';angular.module('fedramp.models',[]).run(run);run.$inject=['$log'];function run($log){$log.debug('fedramp.model module initializing');}})();/**
 * @namespace Services
 */(function(){'use strict';angular.module('fedramp.services',['fedramp.models']).run(run);run.$inject=['$log'];function run($log){$log.debug('fedramp.services module initializing');}})();angular.module('fedramp').run(['$templateCache',function($templateCache){$templateCache.put('src/fedramp/base.html','<ui-view />\n');$templateCache.put('src/fedramp/fedramp.html','<div id="topnav">\n    <div class="limit clearfix">\n        <!-- SEARCH FORM -->\n        <search />\n\n        <!-- PRIMARY NAVIGATION -->\n        <ul class="nav sf-js-enabled">\n            <li id="menu-item-11972" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11972 first-child last-child">\n                <a href="https://www.fedramp.gov/contact-us/">Contact Us</a>\n            </li>\n        </ul>\n        <select title="Top navigation menu" class="select-menu">\n            <option value="#" selected>Navigate to ...</option>\n            <option value="https://www.fedramp.gov/contact-us/">&nbsp;Contact Us</option>\n        </select>\n\n        <!-- SOCIAL MEDIA ICONS -->\n        <div class="sub-icons">\n            <ul class="clearfix">\n                <li class="first-child">\n                    <a class="subicon rss" title="Subscribe via RSS Feed" href="https://www.fedramp.gov/feed/">RSS Feed</a>\n                </li>\n                <li class="last-child">\n                    <a class="subicon twitter" rel="external" title="Follow @FedRAMP on Twitter" href="http://www.twitter.com/FedRAMP" target="_blank">Twitter</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n<div id="header" class="clearfix">\n    <div id="head-content" class="clearfix">\n\n        <!-- SITE-TITLE/LOGO -->\n        <div id="sitetitle">\n            <a href="https://www.fedramp.gov" title="FedRAMP"><img src="https://fedramp.sites.usa.gov/files/2015/02/logo3.png" alt="FedRAMP"></a>\n        </div>\n        \n        <!-- SECONDARY NAVIGATION -->\n        <div id="catnav">\n            <ul class="catnav clearfix sf-js-enabled">\n                <li id="menu-item-6842" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6842 first-child"><a href="https://www.fedramp.gov/">Home</a></li>\n                <li id="menu-item-8242" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8242"><a href="#" class="sf-with-ul">About Us</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-4102" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4102 first-child"><a href="https://www.fedramp.gov/about-us/about/">Program Overview</a></li>\n                        <li id="menu-item-7972" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7972"><a href="https://www.fedramp.gov/about-us/team-bios/">Team Bios</a></li>\n                        <li id="menu-item-8222" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8222"><a href="https://www.fedramp.gov/about-us/governance/">Governance</a></li>\n                        <li id="menu-item-44351" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-44351 last-child"><a href="javascript:void(0);" class="sf-with-ul">FedRAMP Forward</a>\n                            <ul class="sub-menu" style="display: none;">\n                                <li id="menu-item-51961" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51961 first-child"><a href="https://www.fedramp.gov/about-us/fedramp-first-four-years-last-nine-months/">FedRAMP: First Four Years &amp; Last Nine Months</a></li>\n                                <li id="menu-item-34752" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-34752"><a href="https://www.fedramp.gov/about-us/fedramp-forward-a-look-back-at-the-last-six-months/">FedRAMP Forward (Part 1)</a></li>\n                                <li id="menu-item-44381" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-44381 last-child"><a href="https://www.fedramp.gov/about-us/fedramp-forward-part-2/">FedRAMP Forward (Part 2)</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n                <li id="menu-item-8252" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8252"><a href="#" class="sf-with-ul">Participate</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-53191" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-53191 first-child"><a title="FedRAMP Accelerated" href="https://www.fedramp.gov/participate/fedramp-accelerated-process/">FedRAMP Accelerated Process</a></li>\n                        <li id="menu-item-4192" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4192"><a href="https://www.fedramp.gov/participate/agencies/">Federal Agencies</a></li>\n                        <li id="menu-item-4172" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4172"><a href="https://www.fedramp.gov/participate/csps/">Cloud Service Providers</a></li>\n                        <li id="menu-item-4182" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4182"><a href="https://www.fedramp.gov/participate/3paos/" class="sf-with-ul">Independent Assessors</a>\n                            <ul class="sub-menu" style="display: none;">\n                                <li id="menu-item-45731" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-45731 first-child last-child"><a href="https://www.fedramp.gov/participate/3paos/a2la-accreditation/">A2LA Accreditation</a></li>\n                            </ul>\n                        </li>\n                        <li id="menu-item-8022" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8022 last-child"><a href="https://www.fedramp.gov/provide-public-comment/">Provide Public Comment</a></li>\n                    </ul>\n                </li>\n                <li id="menu-item-8272" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-8272"><a href="#" class="sf-with-ul">Marketplace</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-10722" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-782 current_page_item menu-item-10722 first-child"><a href="https://www.fedramp.gov/marketplace/compliant-systems/">FedRAMP Compliant Systems</a></li>\n                        <li id="menu-item-10712" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10712"><a href="https://www.fedramp.gov/marketplace/in-process-systems/">FedRAMP In-Process Systems</a></li>\n                        <li id="menu-item-10702" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10702"><a href="https://www.fedramp.gov/marketplace/fedramp-ready-systems/">FedRAMP Ready Systems</a></li>\n                        <li id="menu-item-4082" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4082 last-child"><a href="https://www.fedramp.gov/marketplace/accredited-3paos/">Accredited 3PAOs</a></li>\n                    </ul>\n                </li>\n                <li id="menu-item-8292" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8292"><a href="#" class="sf-with-ul">Resources</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-53181" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-53181 first-child"><a title="Documents" href="https://www.fedramp.gov/resources/documents-2016/">Documents</a></li>\n                        <li id="menu-item-54551" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-54551"><a href="https://www.fedramp.gov/resources/templates-2016/">Templates</a></li>\n                        <li id="menu-item-29852" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-29852"><a href="https://www.fedramp.gov/resources/nist-publications/">NIST Publications</a></li>\n                        <li id="menu-item-4092" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4092 last-child"><a href="https://www.fedramp.gov/resources/faqs/">FAQs</a></li>\n                    </ul>\n                </li>\n                <li id="menu-item-32742" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-32742"><a href="#" class="sf-with-ul">Training</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-32382" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32382 first-child"><a href="https://www.fedramp.gov/resources/training/">FedRAMP Training</a></li>\n                        <li id="menu-item-32412" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32412 last-child"><a href="https://www.fedramp.gov/resources/fedramp-webcasts/">FedRAMP Webcasts</a></li>\n                    </ul>\n                </li>\n                <li id="menu-item-33192" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-33192 last-child"><a href="#" class="sf-with-ul">Newsroom</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-27632" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-27632 first-child"><a href="https://www.fedramp.gov/category/newsroom/">Newsroom</a></li>\n                        <li id="menu-item-23732" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23732 last-child"><a href="https://www.fedramp.gov/events/">Events</a></li>\n                    </ul>\n                </li>\n            </ul>\n            <select title="Navigation menu for FedRAMP" class="select-menu-catnav">\n                <option value="#" selected>Navigate to ...</option>\n                <option value="https://www.fedramp.gov/">&nbsp;Home</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;About Us</option>\n                <option value="https://www.fedramp.gov/about-us/about/">–&nbsp;&nbsp;Program Overview</option>\n                <option value="https://www.fedramp.gov/about-us/team-bios/">–&nbsp;&nbsp;Team Bios</option>\n                <option value="https://www.fedramp.gov/about-us/governance/">–&nbsp;&nbsp;Governance</option>\n                <option value="">–&nbsp;&nbsp;FedRAMP Forward</option>\n                <option value="https://www.fedramp.gov/about-us/fedramp-first-four-years-last-nine-months/">–&nbsp;–&nbsp;&nbsp;FedRAMP: First Four Years &amp; Last Nine Months</option>\n                <option value="https://www.fedramp.gov/about-us/fedramp-forward-a-look-back-at-the-last-six-months/">–&nbsp;–&nbsp;&nbsp;FedRAMP Forward (Part 1)</option>\n                <option value="https://www.fedramp.gov/about-us/fedramp-forward-part-2/">–&nbsp;–&nbsp;&nbsp;FedRAMP Forward (Part 2)</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Participate</option>\n                <option value="https://www.fedramp.gov/participate/fedramp-accelerated-process/">–&nbsp;&nbsp;FedRAMP Accelerated Process</option>\n                <option value="https://www.fedramp.gov/participate/agencies/">–&nbsp;&nbsp;Federal Agencies</option>\n                <option value="https://www.fedramp.gov/participate/csps/">–&nbsp;&nbsp;Cloud Service Providers</option>\n                <option value="https://www.fedramp.gov/participate/3paos/">–&nbsp;&nbsp;Independent Assessors</option>\n                <option value="https://www.fedramp.gov/participate/3paos/a2la-accreditation/">–&nbsp;–&nbsp;&nbsp;A2LA Accreditation</option>\n                <option value="https://www.fedramp.gov/provide-public-comment/">–&nbsp;&nbsp;Provide Public Comment</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Marketplace</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/">–&nbsp;&nbsp;FedRAMP Compliant Systems</option>\n                <option value="https://www.fedramp.gov/marketplace/in-process-systems/">–&nbsp;&nbsp;FedRAMP In-Process Systems</option>\n                <option value="https://www.fedramp.gov/marketplace/fedramp-ready-systems/">–&nbsp;&nbsp;FedRAMP Ready Systems</option>\n                <option value="https://www.fedramp.gov/marketplace/accredited-3paos/">–&nbsp;&nbsp;Accredited 3PAOs</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Resources</option>\n                <option value="https://www.fedramp.gov/resources/documents-2016/">–&nbsp;&nbsp;Documents</option>\n                <option value="https://www.fedramp.gov/resources/templates-2016/">–&nbsp;&nbsp;Templates</option>\n                <option value="https://www.fedramp.gov/resources/nist-publications/">–&nbsp;&nbsp;NIST Publications</option>\n                <option value="https://www.fedramp.gov/resources/faqs/">–&nbsp;&nbsp;FAQs</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Training</option>\n                <option value="https://www.fedramp.gov/resources/training/">–&nbsp;&nbsp;FedRAMP Training</option>\n                <option value="https://www.fedramp.gov/resources/fedramp-webcasts/">–&nbsp;&nbsp;FedRAMP Webcasts</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Newsroom</option>\n                <option value="https://www.fedramp.gov/category/newsroom/">–&nbsp;&nbsp;Newsroom</option>\n                <option value="https://www.fedramp.gov/events/">–&nbsp;&nbsp;Events</option>\n            </select>\n        </div>\n    </div>\n</div>\n\n<a id="scrollToContent"></a>\n<ui-view></ui-view>\n\n<footer class="usa-footer usa-footer-big usa-sans" role="contentinfo">\n</footer>\n');$templateCache.put('src/fedramp.components/agency.html','<div class="information agency">\n    <div class="row close">\n        <a ng-click="controller.close()">\n            <div class="col">\n                <i class="fa fa-times"></i>\n                <br />\n                Close\n            </div>\n        </a>\n    </div>\n    <div class="row header">\n        <div class="col">\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n        </div>\n        <div class="col reuse">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">Reuses</div>\n        </div>\n    </div>\n    <div class="row system-profile">\n        <div class="col contact-information">\n            <h5>Contact Information</h5>\n            <div><strong>POC:</strong></div>\n            <div><strong>E-mail:</strong></div>\n            <div><strong>Website:</strong></div>\n        </div>\n        <div class="col">\n            <h4>FedRAMP Compliant Detail</h4>\n\n            <h5>Authorization Type</h5>\n            <p></p>\n\n            <h5>Agency Lead</h5>\n            <p></p>\n        </div>\n    </div>\n    <div class="row providers">\n        <div class="col">\n            <h4>Providers</h4>\n            <ul ng-if="controller.model.providers.length > 0">\n                <li ng-repeat="provider in controller.model.providers | orderBy:\'+\' track by $index">{{provider}}</li>\n            </ul>\n            <p ng-if="controller.model.providers.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n    <div class="row products">\n        <div class="col">\n            <h4>Products</h4>\n            <ul ng-if="controller.model.products.length > 0">\n                <li ng-repeat="product in controller.model.products | orderBy:\'+\' track by $index">{{product}}</li>\n            </ul>\n            <p ng-if="controller.model.products.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n    <div class="row assessors">\n        <div class="col">\n            <h4>Independent Assessors</h4>\n            <ul ng-if="controller.model.assessors.length > 0">\n                <li ng-repeat="assessor in controller.model.assessors | orderBy:\'+\' track by $index">{{assessor}}</li>\n            </ul>\n            <p ng-if="controller.model.assessors.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp.components/assessor.html','<div class="information assessor">\n    <div class="row close">\n        <a ng-click="controller.close()">\n            <div class="col">\n                <i class="fa fa-times"></i>\n                <br />\n                Close\n            </div>\n        </a>\n    </div>\n    <div class="row header">\n        <div class="col">\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n        </div>\n        <div class="col reuse">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">Reuses</div>\n        </div>\n    </div>\n    <div class="row system-profile">\n        <div class="col">\n            <h4>Contact Information</h4>\n\n            <h5>POC</h5>\n            <p>{{controller.model.pointOfContact}}</p>\n\n            <h5>E-mail</h5>\n            <p>{{controller.model.email}}</p>\n\n            <h5>Website</h5>\n            <p>{{controller.model.url}}</p>\n        </div>\n    </div>\n    <div class="row providers">\n        <div class="col">\n            <h4>Providers</h4>\n            <ul ng-if="controller.model.providers.length > 0">\n                <li ng-repeat="provider in controller.model.providers | orderBy:\'+\' track by $index">{{provider}}</li>\n            </ul>\n            <p ng-if="controller.model.providers.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n    <div class="row products">\n        <div class="col">\n            <h4>Products</h4>\n            <ul ng-if="controller.model.products.length > 0">\n                <li ng-repeat="product in controller.model.products | orderBy:\'+\' track by $index">{{product}}</li>\n            </ul>\n            <p ng-if="controller.model.products.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n    <div class="row agencies">\n        <div class="col">\n            <h4>Agencies</h4>\n            <ul ng-if="controller.model.agencies.length > 0">\n                <li ng-repeat="agency in controller.model.agencies | orderBy:\'+\' track by $index">{{agency}}</li>\n            </ul>\n            <p ng-if="controller.model.agencies.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp.components/grid-filter-options.html','<div ng-repeat="option in controller.options" ng-click="controller.selectOption(option)">\n    <span class="option" ng-class="{\'selected\': option.selected}">{{option.label}} <i class="fa fa-check-circle" aria-hidden="true" ng-show="option.selected"></i> </span>\n</div>\n');$templateCache.put('src/fedramp.components/grid-filter.html','<div ng-if="!controller.expanded" class="filter-dropdown" ng-mouseleave="controller.expand = false">\n    <div ng-click="controller.expand = !controller.expand">\n        <span class="filter-header">{{controller.header}}</span>\n        <i class="fa fa-chevron-down" aria-hidden="true"></i>\n    </div>\n    <div ng-show="controller.expand" class="filter-dropdown-panel">\n        <ng-include src="controller.gridFilterOptionsTemplatePath"></ng-include>\n    </div>\n</div>\n\n<div ng-if="controller.expanded">\n    <div ng-click="controller.opened = !controller.opened">\n        <span class="filter-header">{{controller.header}}</span>\n        <span ng-if="controller.selectedOptionValues.length > 0" class="filter-total">\n            {{controller.selectedOptionValues.length}}\n            filter<span ng-if="controller.selectedOptionValues.length > 1">s</span>\n        </span>\n        <span class="icons">\n            <i class="fa fa-plus" aria-hidden="true" ng-if="!controller.opened"></i>\n            <i class="fa fa-minus" aria-hidden="true" ng-if="controller.opened"></i>\n        </span>\n    </div>\n    <div class="options" ng-show="controller.opened">\n        <ng-include src="controller.gridFilterOptionsTemplatePath"></ng-include>\n    </div>\n</div>\n\n');$templateCache.put('src/fedramp.components/grid-search.html','<input type="text" placeholder="{{controller.placeholder}}" ng-model="controller.searchTerm" ng-change="controller.search()"/>\n');$templateCache.put('src/fedramp.components/grid-sort.html','<span ng-click="controller.toggleSort()" ng-if="controller.header" class="grid-sort-header">{{controller.header}}</span>\n<div ng-click="controller.toggleSort()" class="grid-sort-arrows">\n    <i class="fa fa-sort" ng-if="!controller.activated" aria-hidden="true"></i>\n    <i class="fa fa-caret-up"  ng-if="controller.activated && controller.asc" ng-class="{\'grid-sort-selected\': controller.highlight(true)}" aria-hidden="true"></i>\n    <i class="fa fa-caret-down"  ng-if="controller.activated && !controller.asc" ng-class="{\'grid-sort-selected\': controller.highlight(false)}" aria-hidden="true"></i>\n    <!--<i class="fa fa-caret-down" ng-class="{\'grid-sort-selected\': controller.highlight(false)}" aria-hidden="true"></i>-->\n</div>\n');$templateCache.put('src/fedramp.components/product.html','<div class="information product">\n    <div class="row close">\n        <a ng-click="controller.close()">\n            <div class="col">\n                <i class="fa fa-times"></i>\n                <br />\n                Close\n            </div>\n        </a>\n    </div>\n    <div class="row header">\n        <div class="col">\n            <div class="logo">\n                <img ng-if="controller.model.logo" ng-src="{{controller.model.logo}}" alt="Logo for {{controller.model.logo}}" />\n            </div>\n            <div class="title">\n                <strong>{{ controller.model.provider }} - {{ controller.model.name }}</strong>\n            </div>\n        </div>\n        <div class="col reuse">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">Reuses</div>\n        </div>\n    </div>\n    <div class="row status">\n        <div class="col ready">\n            <img ng-if="controller.isReady()" ng-src="img/fedramp-process-ready-blue.png" alt="Ready" />\n            <img ng-if="!controller.isReady()" ng-src="img/fedramp-process-ready-grey.png" alt="Not Ready" />\n            <div class="text">FedRAMP Ready</div>\n        </div>                                 \n        <div class="col in-process">\n            <img ng-if="controller.isProcessing()" ng-src="img/fedramp-process-in-process-blue.png" alt="In-Process" />\n            <img ng-if="!controller.isProcessing()" ng-src="img/fedramp-process-in-process-grey.png" alt="Not In-Process" />\n            <div class="text">FedRAMP In Process</div>\n        </div>                                 \n        <div class="col compliant">\n            <img ng-if="controller.isCompliant()" ng-src="img/fedramp-process-compliant-blue.png" alt="Compliant" />\n            <img ng-if="!controller.isCompliant()" ng-src="img/fedramp-process-compliant-grey.png" alt="Not Compliant" />\n            <div class="text">FedRAMP Compliant</div>\n        </div>\n        <div class="col progress">\n            <div class="percent percent-{{controller.percentComplete()}}"></div>\n        </div>\n        <div class="col message">\n            {{ controller.statusMessage() }}\n        </div>\n    </div>\n    <div class="row system-profile">\n        <div class="col contact-information">\n            <h5>Contact Information</h5>\n            <div><strong>POC:</strong></div>\n            <div><strong>E-mail:</strong></div>\n            <div><strong>Website:</strong></div>\n        </div>\n        <div class="col">\n            <h4>System Profile</h4>\n\n            <h5>Service Model<span ng-show="controller.model.serviceModels.length > 1">s</span></h5>\n            <p>{{controller.model.serviceModels.join(\', \')}}</p>\n\n            <h5>Deployment Model</h5>\n            <p>{{controller.model.deploymentModel}}</p>\n\n            <h5>Impact Level</h5>\n            <p>{{controller.model.impactLevel}}</p>\n        </div>\n    </div>\n    <div class="row fedramp">\n        <div class="col">\n            <h4>Package ID</h4>\n            <p>\n                {{controller.model.pkgId}}\n                <br />\n                <a href="#">Package Access Request Form</a>\n            </p>\n\n            <h4>FedRAMP Compliant Detail</h4>\n            <dl>\n                <dt>Authorization Type:</dt>\n                <dd>{{ controller.model.authorizationType }}</dd>\n                <dt>Agency Lead:</dt>\n                <dd>{{ controller.model.sponsoringAgency }}</dd>\n                <dt>Independent Assessor:</dt>\n                <dd>{{ controller.model.independentAssessor }}</dd>\n                <dt>Authorization Date:</dt>\n                <dd>{{ controller.model.authorizationDate }}</dd>\n                <dt>Expiration Date:</dt>\n                <dd>{{ controller.model.expirationDate }}</dd>\n            </dl>\n        </div>\n    </div>\n    <div class="row service-description">\n        <div class="col">\n            <h4>Service Description</h4>\n            <i class="fa fa-plus"></i>\n        </div>\n    </div>\n    <div class="row agencies">\n        <div class="col">\n            <h4>Agencies using this service</h4>\n            <ul ng-if="controller.model.agencies.length > 0">\n                <li ng-repeat="agency in controller.model.agencies | orderBy:\'+\' track by $index">{{agency}}</li>\n            </ul>\n            <p ng-if="controller.model.agencies.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp.components/provider.html','<div class="information provider">\n    <div class="row close">\n        <a ng-click="controller.close()">\n            <div class="col">\n                <i class="fa fa-times"></i>\n                <br />\n                Close\n            </div>\n        </a>\n    </div>\n    <div class="row header">\n        <div class="col">\n            <div class="logo">\n                <img ng-if="controller.model.logo" ng-src="{{controller.model.logo}}" alt="Logo for {{controller.model.logo}}" />\n            </div>\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n        </div>\n        <div class="col reuse">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">Reuses</div>\n        </div>\n    </div>\n    <div class="row system-profile">\n        <div class="col contact-information">\n            <h5>Contact Information</h5>\n            <div><strong>POC:</strong></div>\n            <div><strong>E-mail:</strong></div>\n            <div><strong>Website:</strong></div>\n        </div>\n        <div class="col">\n            <h4>System Profile</h4>\n\n            <h5>Service Model<span ng-show="controller.model.serviceModels.length > 1">s</span></h5>\n            <p>{{controller.model.serviceModels.join(\', \')}}</p>\n\n            <h5>Deployment Model<span ng-show="controller.model.deploymentModels.length > 1">s</span></h5>\n            <p>{{controller.model.deploymentModels.join(\', \')}}</p>\n        </div>\n    </div>\n    <div class="row products">\n        <div class="col">\n            <h4>Products provided</h4>\n            <ul ng-if="controller.model.products.length > 0">\n                <li ng-repeat="product in controller.model.products | orderBy:\'+name\' track by $index">{{product.name}}</li>\n            </ul>\n            <p ng-if="controller.model.products.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n    <div class="row agencies">\n        <div class="col">\n            <h4>Agencies</h4>\n            <ul ng-if="controller.model.agencies.length > 0">\n                <li ng-repeat="agency in controller.model.agencies | orderBy:\'+\' track by $index">{{agency}}</li>\n            </ul>\n            <p ng-if="controller.model.agencies.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp.components/search.html','<form id="search_form" method="get" ng-submit="controller.search($event)" accept-charset="UTF-8" action="http://search.usa.gov/search">\n    <input type="hidden" name="utf8" value="✓" />\n    <input type="hidden" name="affiliate" id="affiliate" value="fedramp" />\n    <input type="hidden" name="format" id="format" value="{{controller.format}}" />\n    <input type="text" name="query" id="query" title="Search query" ng-model="controller.query" class="usagov-search-autocomplete ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" />\n    <input type="submit" name="commit" value="Search" />\n</form>\n');$templateCache.put('src/fedramp.components/tile-agency.html','<!-- TODO: Determine if the US Grid layout should be used -->\n<div ng-if="controller.expand" class="agency expanded fr-grid-layout">\n    <div class="row fr-grid-layout-row">\n        <div class="col name fr-grid-cell-name">\n            <a ng-click="controller.view()">\n                <div class="title">\n                    <strong>{{ controller.model.name }}</strong>\n                </div>\n            </a>\n        </div>\n        <div class="col status fr-grid-cell-icon">\n            <img ng-if="controller.model.designation === \'Compliant\'" ng-src="img/fedramp-process-compliant-blue.png" alt="Compliant" />\n            <img ng-if="controller.model.designation === \'In-Process\'" ng-src="img/fedramp-process-in-process-blue.png" alt="In-Process" />\n            <img ng-if="controller.model.designation === \'In PMO Review\'" ng-src="img/fedramp-process-compliant-blue.png" alt="In PMO Review" />\n            <img ng-if="controller.model.designation === \'Ready\'" ng-src="img/fedramp-process-ready-blue.png" alt="Ready" />\n        </div>\n        <div class="col reuses fr-grid-cell-metric">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">Reuses</div>\n        </div>\n    </div>\n\n</div>\n\n<div ng-if="!controller.expand" class="agency card">\n    <div class="row header">\n        <div class="col reuses">\n            <a ng-click="controller.view()">\n                <div class="number">{{controller.model.reuses}}</div>\n                <div class="text">Reuses</div>\n            </a>\n        </div>\n    </div>\n    <div class="row content">\n        <div class="col">\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp.components/tile-assessor.html','<!-- TODO: Determine if the US Grid layout should be used -->\n<div ng-if="controller.expand" class="assessor expanded fr-grid-layout">\n    <div class="row fr-grid-layout-row">\n        <div class="col name fr-grid-cell-name">\n            <a ng-click="controller.view()">\n                <div class="title">\n                    <strong>{{ controller.model.name }}</strong>\n                </div>\n            </a>\n        </div>\n        <div class="col reuses fr-grid-cell-metric">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">Reuses</div>\n        </div>\n    </div>\n</div>\n\n<div ng-if="!controller.expand" class="assessor card">\n    <div class="row header">\n        <div class="col reuses">\n            <a ng-click="controller.view()">\n                <div class="number">{{controller.model.reuses}}</div>\n                <div class="text">Reuses</div>\n            </a>\n        </div>\n    </div>\n    <div class="row content">\n        <div class="col">\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp.components/tile-product.html','<!-- TODO: Determine if the US Grid layout should be used -->\n<div ng-if="controller.expand" class="product expanded fr-grid-layout">\n    <div class="row fr-grid-layout-row">\n        <div class="col name fr-grid-cell-name">\n            <a ng-click="controller.view()">\n                <div class="logo" style="background-image:url({{controller.model.logo}});"></div>\n                <div class="title">\n                    <strong>{{ controller.model.name }}</strong>\n                </div>\n            </a>\n        </div>\n        <div class="col service-model fr-grid-cell-service">\n            <div ng-repeat="service in controller.model.serviceModels">{{ service }}</div>\n        </div>\n        <!-- <div class="col deployment-model fr-grid-cell-deployment">\n             <span>{{ controller.model.deploymentModel }}</span>\n             </div> -->\n        <div class="col impact-level fr-grid-cell-impact">\n            <span>{{ controller.model.impactLevel }}</span>\n        </div>\n        <div class="col status fr-grid-cell-icon">\n            <img ng-if="controller.model.designation === \'Compliant\'" ng-src="img/fedramp-process-compliant-blue.png" alt="Compliant" />\n            <img ng-if="controller.model.designation === \'In-Process\'" ng-src="img/fedramp-process-in-process-blue.png" alt="In-Process" />\n            <img ng-if="controller.model.designation === \'In PMO Review\'" ng-src="img/fedramp-process-compliant-blue.png" alt="In PMO Review" />\n            <img ng-if="controller.model.designation === \'Ready\'" ng-src="img/fedramp-process-ready-blue.png" alt="Ready" />\n            <span ng-if="controller.model.designation === \'Compliant\'">FedRAMP Compliant</span>\n            <span ng-if="controller.model.designation === \'In-Process\'"> FedRAMP In Process</span>\n            <span ng-if="controller.model.designation === \'In PMO Review\'">FedRAMP Compliant</span>\n            <span ng-if="controller.model.designation === \'Ready\'">FedRAMP Ready</span>\n        </div>\n        <div class="col reuses fr-grid-cell-metric">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">Reuses</div>\n        </div>\n    </div>\n</div>\n\n<div ng-if="!controller.expand" class="product card">\n    <div class="row header">\n        <div class="col name">\n            <a ng-click="controller.view()">\n                <div class="logo">\n                    <img ng-if="controller.model.logo" ng-src="{{controller.model.logo}}" alt="Logo for {{controller.model.logo}}" />\n                </div>\n            </a>\n        </div>\n        <div class="col reuses">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">Reuses</div>\n        </div>\n        <div class="col status">\n            <img ng-if="controller.model.designation === \'Compliant\'" ng-src="img/fedramp-process-compliant-blue.png" alt="Compliant" />\n            <img ng-if="controller.model.designation === \'In-Process\'" ng-src="img/fedramp-process-in-process-blue.png" alt="In-Process" />\n            <img ng-if="controller.model.designation === \'In PMO Review\'" ng-src="img/fedramp-process-compliant-blue.png" alt="In PMO Review" />\n            <img ng-if="controller.model.designation === \'Ready\'" ng-src="img/fedramp-process-ready-blue.png" alt="Ready" />\n            <span ng-if="controller.model.designation === \'Compliant\'">FedRAMP Compliant</span>\n            <span ng-if="controller.model.designation === \'In-Process\'"> FedRAMP In Process</span>\n            <span ng-if="controller.model.designation === \'In PMO Review\'">FedRAMP Compliant</span>\n            <span ng-if="controller.model.designation === \'Ready\'">FedRAMP Ready</span>\n        </div>\n    </div>\n    <div class="row content">\n        <div class="col">\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n            <dl>\n                <dt>Service Model:</dt>\n                <dd>{{ controller.model.serviceModels.join(\', \') }}</dd>\n                <!-- <dt>Deployment Model:</dt>\n                     <dd>{{ controller.model.deploymentModel }}</dd> -->\n                <dt>Impact Level:</dt>\n                <dd>{{ controller.model.impactLevel }}</dd>\n            </dl>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp.components/tile-provider.html','<!-- TODO: Determine if the US Grid layout should be used -->\n<div ng-if="controller.expand" class="provider expanded fr-grid-layout">\n    <div class="row fr-grid-layout-row">\n        <div class="col name fr-grid-cell-name">\n            <a ng-click="controller.view()">\n                <div class="logo" style="background-image:url({{controller.model.logo}});"></div>\n                <div class="title">\n                    <strong>{{ controller.model.name }}</strong>\n                </div>\n            </a>\n        </div>\n        <div class="col service-model fr-grid-cell-service">\n            <div ng-repeat="model in controller.model.serviceModels">{{ model }}</div>\n        </div>\n        <!-- <div class="col deployment-model fr-grid-cell-deployment">\n             <div ng-repeat="model in controller.model.deploymentModels">{{ model }}</div>\n             </div> -->\n        <div class="col reuses fr-grid-cell-metric">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">Reuses</div>\n        </div>\n    </div>\n</div>\n\n<div ng-if="!controller.expand" class="provider card">\n    <div class="row header">\n        <div class="col name">\n            <a ng-click="controller.view()">\n                <div class="logo">\n                    <img ng-if="controller.model.logo" ng-src="{{controller.model.logo}}" alt="Logo for {{controller.model.logo}}" />\n                </div>\n            </a>\n        </div>\n        <div class="col reuses">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">Reuses</div>\n        </div>\n    </div>\n    <div class="row content">\n        <div class="col">\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n            <dl>\n                <dt>Service Model:</dt>\n                <dd>{{ controller.model.serviceModels.join(\', \') }}</dd>\n                <!-- <dt>Deployment Model:</dt>\n                     <dd>{{ controller.model.deploymentModels.join(\', \') }}</dd> -->\n            </dl>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp.components/tile.html','<div class="tile" ng-include src="controller.tileTemplate"></div> \n');$templateCache.put('src/fedramp/search/search.html','<div id="search">\n    <div class="article usa-grid-full" ng-repeat="article in controller.results track by $index">\n        <h4 class="article-title">\n            <span class="article-ext-type">{{controller.extension(article.unescapedUrl)}}</span>\n            <a ng-href="{{article.unescapedUrl}}" title="{{article.title}}">{{article.title}}</a>\n        </h4>\n        <div class="article-url">{{article.unescapedUrl}}</div>\n        <span class="article-description" ng-bind-html="controller.markdown(article.content)"></span>\n        <ul class="article-site-links">\n            <li ng-repeat="link in article.siteLinks"></li>\n        </ul>\n    </div>\n    <div id="internal-only" class="text-center" ng-if="controller.results.length > 0">\n        <p>\n            For more results please go to <a ng-href="{{controller.externalLink}}" title="Search on USA.gov">search.usa.gov</a>\n        </p>\n    </div>\n    <div id="no-results" class="text-center" ng-if="controller.results.length === 0">\n        <p>\n            There was a problem retrieving your search results. Please try the\n            search at <a ng-href="{{controller.externalLink}}" title="Search on USA.gov">search.usa.gov</a>\n        </p>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/agencies.html','<div class="fr-post-filter-metrics usa-grid-full">\n    <div class="usa-width-one-whole">\n        <div class="col">\n            <p class="fr-large-number">\n                <span class="fr-metric-icon icon-cloud"></span>\n                <strong>{{controller.filteredData.length}}</strong>\n                <span class="fr-metric-label">Total</span>\n            </p>\n        </div>\n        <div class="col">\n            <p class="fr-large-number">\n                <span class="fr-metric-icon icon-cloud"></span>\n                <strong>{{controller.heavyUsers()}}%</strong>\n                <span class="fr-metric-label">&gt;= 5 Reuses</span>\n            </p>\n        </div>\n    </div>\n    <div class="controls">\n        <label>\n            <input type="checkbox" ng-model="homeController.expandTiles" />\n            <div class="list-view">\n                <span><i class="fa fa-th-list fa-1" aria-hidden="true"></i></span>\n            </div>\n            <div class="grid-view">\n                <span><i class="fa fa-th fa-1" aria-hidden="true"></i></span>\n            </div>\n        </label>\n    </div>\n</div>\n\n<grid class="grid" raw-items="controller.agencies" on-update="controller.onUpdate(items, state)">\n    <div class="sidebar">\n        <grid-filter-clear class="clear-filters"><i class="fa fa-times" aria-hidden="true"></i> Clear All</grid-filter-clear>\n        <grid-search id="searchName" property="name" placeholder="Search by Agency Name"></grid-search>\n        <grid-filter id="reuseRange" header="Reuse Range" expanded="true" opened="false" options-func="controller.reuseRangeOptions" filter-func="controller.reuseRangeFilter" class="grid-filter"></grid-filter>\n        <grid-filter id="assessors" property="a in assessors" header="Assessors" opened="false" expanded="true" class="grid-filter"></grid-filter>\n        <grid-filter id="products" property="p in products" header="Products" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="providers" property="p in providers" header="Providers" expanded="true" opened="false" class="grid-filter"></grid-filter>\n    </div>\n    <div class="grid grid-with-sidebar">\n        <div class="fr-grid-layout fr-grid-header">\n            <div class="fr-grid-layout-row">\n                <div class="fr-grid-cell-name">\n                    <grid-sort name="name" property="name" header="Name" class="grid-sort" default="true"></grid-sort>          \n                </div>\n                <div class="fr-grid-cell-metric">\n                    <grid-sort name="reuses" property="reuses" class="grid-sort"></grid-sort>    \n                </div>\n            </div>\n        </div>\n        <tile ng-repeat="item in controller.filteredData track by $index" expand="homeController.expandTiles" model="item"/>\n    </div>\n</grid>\n\n<div style="clear: both;">\n    <download-csv content="controller.filteredData" ng-if="controller.filteredData" style="float: right;">\n        <button>\n            <span>Export to CSV</span>\n            <i class="fa fa-download" aria-hidden="true" style="margin-left: 1rem;"></i>\n        </button>\n    </download-csv>\n</div>\n');$templateCache.put('src/fedramp/home/agency-comparison.html','<div class="usa-content">\n    <div class="comparison">\n        <div class="first">\n            <agency model="controller.first" on-close="controller.closeFirst" />\n        </div>\n        <div class="second">\n            <agency model="controller.second" on-close="controller.closeSecond" />\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/agency-information.html','<div class="usa-content">\n    <div class="comparison">\n        <div class="first">\n            <agency model="controller.item" on-close="controller.close" />\n        </div>\n        <div class="second comparison-list">\n            <div ng-show="controller.items.length > 0">\n                <div class="text-center fr-filter-label">\n                    <span class="fr-filter-label-rule"></span>\n                    <span class="fr-filter-label-text">Select another to compare</span>\n                </div>\n                <grid class="grid" raw-items="controller.items" on-update="controller.onUpdate(items, state)">\n                    <div class="hidden">\n                        <grid-search id="searchName" property="name" placeholder="Search by Agency Name"></grid-search>\n                        <grid-filter id="reuseRange" header="Reuse Range" expanded="true" opened="false" options-func="controller.reuseRangeOptions" filter-func="controller.reuseRangeFilter" class="grid-filter"></grid-filter>\n                        <grid-filter id="assessors" property="a in assessors" header="Assessors" opened="false" expanded="true" class="grid-filter"></grid-filter>\n                        <grid-filter id="products" property="p in products" header="Products" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-filter id="providers" property="p in providers" header="Providers" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-sort name="name" property="name" header="Name" class="grid-sort" default="true"></grid-sort>          \n                        <grid-sort name="reuses" property="reuses" class="grid-sort"></grid-sort>    \n                    </div>\n                    <tile ng-repeat="item in controller.filteredData track by $index" expand="true" model="item"></tile>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/agency.html','<ui-view />\n');$templateCache.put('src/fedramp/home/assessor-comparison.html','<div class="usa-content">\n    <div class="comparison">\n        <div class="first">\n            <assessor model="controller.first" on-close="controller.closeFirst" />\n        </div>\n        <div class="second">\n            <assessor model="controller.second" on-close="controller.closeSecond" />\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/assessor-information.html','<div class="usa-content">\n    <div class="comparison">\n        <div class="first">\n            <assessor model="controller.item" on-close="controller.close" />\n        </div>\n        <div class="second comparison-list">\n            <div ng-show="controller.items.length > 0">\n                <div class="text-center fr-filter-label">\n                    <span class="fr-filter-label-rule"></span>\n                    <span class="fr-filter-label-text">Select another to compare</span>\n                </div>\n                <grid class="grid" raw-items="controller.items" on-update="controller.onUpdate(items, state)">\n                    <div class="hidden">\n                        <grid-search id="searchName" property="name" placeholder="Search by name"></grid-search>\n                        <grid-filter id="reuseRange" header="Reuse Range" expanded="true" opened="false" options-func="controller.reuseRangeOptions" filter-func="controller.reuseRangeFilter" class="grid-filter"></grid-filter>\n                        <grid-filter id="agencies" property="a in agencies" header="Agencies" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-filter id="products" property="p in products" header="Products" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-filter id="providers" property="p in providers" header="Providers" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-sort name="assessorName" property="name" class="grid-sort" header="Name" default="true"></grid-sort>    \n                        <grid-sort name="reuses" property="reuses" class="grid-sort"></grid-sort>    \n                    </div>\n                    <tile ng-repeat="item in controller.filteredData track by $index" expand="true" model="item"></tile>\n                </grid>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/assessor.html','<ui-view />\n');$templateCache.put('src/fedramp/home/assessors.html','<div class="fr-post-filter-metrics usa-grid-full">\n    <div class="usa-width-one-whole">\n        <div class="col">\n            <p class="fr-large-number">\n                <span class="fr-metric-icon icon-cloud"></span>\n                <strong>{{controller.filteredData.length}}</strong>\n                <span class="fr-metric-label">Total</span>\n            </p>\n        </div>\n        <div class="col">\n            <p class="fr-large-number">\n                <span class="fr-metric-icon icon-cloud"></span>\n                <strong>{{controller.heavyUsers()}}%</strong>\n                <span class="fr-metric-label">&gt;= 5 Reuses</span>\n            </p>\n        </div>\n    </div>\n    <div class="controls">\n        <label>\n            <input type="checkbox" ng-model="homeController.expandTiles" />\n            <div class="list-view">\n                <span><i class="fa fa-th-list fa-1" aria-hidden="true"></i></span>\n            </div>\n            <div class="grid-view">\n                <span><i class="fa fa-th fa-1" aria-hidden="true"></i></span>\n            </div>\n        </label>\n    </div>\n</div>\n\n<grid class="grid" raw-items="controller.assessors" on-update="controller.onUpdate(items, state)">\n    <div class="sidebar">\n        <grid-filter-clear class="clear-filters"><i class="fa fa-times" aria-hidden="true"></i> Clear All</grid-filter-clear>\n        <grid-search id="searchName" property="name" placeholder="Search by name"></grid-search>\n        <grid-filter id="reuseRange" header="Reuse Range" expanded="true" opened="false" options-func="controller.reuseRangeOptions" filter-func="controller.reuseRangeFilter" class="grid-filter"></grid-filter>\n        <grid-filter id="agencies" property="a in agencies" header="Agencies" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="products" property="p in products" header="Products" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="providers" property="p in providers" header="Providers" expanded="true" opened="false" class="grid-filter"></grid-filter>\n    </div>\n    <div class="grid grid-with-sidebar">\n        <div class="fr-grid-layout fr-grid-header">\n            <div class="fr-grid-layout-row">\n                <div class="fr-grid-cell-name">\n                    <grid-sort name="assessorName" property="name" class="grid-sort" header="Name" default="true"></grid-sort>    \n                </div>\n                <div class="fr-grid-cell-metric">\n                    <grid-sort name="reuses" property="reuses" class="grid-sort"></grid-sort>    \n                </div>\n            </div>\n        </div>\n        <tile class="row" ng-repeat="item in controller.filteredData track by $index" expand="homeController.expandTiles" model="item"/>\n    </div>\n</grid>\n\n<div style="clear: both;">\n    <download-csv content="controller.filteredData" ng-if="controller.filteredData" style="float: right;">\n        <button>\n            <span>Export to CSV</span>\n            <i class="fa fa-download" aria-hidden="true" style="margin-left: 1rem;"></i>\n        </button>\n    </download-csv>\n</div>\n');$templateCache.put('src/fedramp/home/home.html','<div class="usa-content">\n    <div class="fr-dash-header usa-color-primary-darkest">\n        <div class="usa-grid-full text-center fr-large-metrics">\n            <div class="usa-width-one-half">\n                <p class="fr-large-number">\n                    <span class="fr-metric-icon icon-reuse"></span>\n                    <strong>{{homeController.leveragedAtos()}}</strong>\n                    <span class="fr-metric-label">Total reuses</span>\n                </p>\n            </div>\n            <div class="usa-width-one-half">\n                <p class="fr-large-number">\n                    <span class="fr-metric-icon icon-compliant"></span>\n                    <strong>{{homeController.totalAuthorized()}}</strong>\n                    <span class="fr-metric-label">Total Authorized</span>\n                </p>\n            </div>\n        </div>\n        <div class="usa-grid-full text-center fr-small-metrics">\n            <div class="usa-width-one-third">\n                <p class="fr-large-number">\n                    <span class="fr-metric-icon icon-cloud"></span>\n                    <strong>67<span class="fr-light-font">%</span></strong>\n                    <span class="fr-metric-label">TBD</span>\n                </p>\n            </div>\n            <div class="usa-width-one-third">\n                <p class="fr-large-number">\n                    <span class="fr-metric-icon icon-compliant"></span>\n                    <strong><span class="fr-light-font">$</span>{{homeController.totalCostSavings()}}</strong>\n                    <span class="fr-metric-label">Cost Savings</span>\n                </p>\n            </div>\n            <div class="usa-width-one-third">\n                <p class="fr-large-number">\n                    <span class="fr-metric-icon icon-reuse"></span>\n                    <strong>3,297</strong>\n                    <span class="fr-metric-label">TBD</span>\n                </p>\n            </div>\n        </div>\n    </div>\n    <div class="text-center fr-filter-label">\n        <span class="fr-filter-label-rule"></span>\n        <span class="fr-filter-label-text">Filter results by</span>\n    </div>\n    <div class="fr-filters usa-grid-full">\n        <div class="fr-filters-row">\n            <div class="usa-width-one-fourth">\n                <button id="filterByCSO"\n                        type="radio"\n                        ui-sref-active="selected"\n                        ui-sref="fedramp.app.home.products">\n                    <span>Cloud Service Offerings</span>\n                </button>\n            </div>\n            <div class="usa-width-one-fourth">\n                <button id="filterByCSP"\n                        ui-sref-active="selected"\n                        ui-sref="fedramp.app.home.providers">\n                    <span>Cloud Service Providers</span>\n                </button>\n            </div>\n            <div class="usa-width-one-fourth">\n                <button id="filterByAgency"\n                        ui-sref-active="selected"\n                        ui-sref="fedramp.app.home.agencies">\n                    <span>Agencies</span>\n                </button>\n            </div>\n            <div class="usa-width-one-fourth">\n                <button id="filterBy3PAO"\n                        ui-sref-active="selected"\n                        ui-sref="fedramp.app.home.assessors">\n                    <span>3PAO</span>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<ui-view/>\n');$templateCache.put('src/fedramp/home/product-comparison.html','<div class="usa-content">\n    <div class="comparison">\n        <div class="first">\n            <product model="controller.first" on-close="controller.closeFirst" />\n        </div>\n        <div class="second">\n            <product model="controller.second" on-close="controller.closeSecond" />\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/product-information.html','<div class="usa-content">\n    <div class="comparison">\n        <div class="first">\n            <product model="controller.item" on-close="controller.close" />\n        </div>\n        <div class="second comparison-list">\n            <div ng-show="controller.items.length > 0">\n                <div class="text-center fr-filter-label">\n                    <span class="fr-filter-label-rule"></span>\n                    <span class="fr-filter-label-text">Select another to compare</span>\n                </div>\n                <grid class="grid" raw-items="controller.items" on-update="controller.onUpdate(items, state)">\n                    <div class="hidden">\n                        <grid-search id="productNameSearch" placeholder="Search by Provider or Product" filter-func="controller.search"></grid-search>\n                        <grid-filter id="designation" property="designation" header="Status" expanded="true" opened="true" class="grid-filter"></grid-filter>\n                        <grid-filter id="reuseRange" header="Reuse Range" expanded="true" opened="false" options-func="controller.reuseRangeOptions" filter-func="controller.reuseRangeFilter" class="grid-filter"></grid-filter>\n                        <grid-filter id="serviceModels" property="s in serviceModels" header="Service Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-filter id="deploymentModels" property="deploymentModel" header="Deployment Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-filter id="impactLevel" property="impactLevel" header="Impact Level" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-filter id="providers" property="provider" header="Providers" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-sort name="productName" property="name" class="grid-sort"></grid-sort>\n                        <grid-sort name="serviceModels" property="serviceModels" class="grid-sort"></grid-sort>\n                        <grid-sort name="deploymentModel" property="deploymentModel" class="grid-sort"></grid-sort>\n                        <grid-sort name="impactLevel" property="impactLevel" class="grid-sort"></grid-sort>\n                        <grid-sort name="designation" property="designation" class="grid-sort"></grid-sort>\n                        <grid-sort name="reuses" property="reuses" default="-true" class="grid-sort"></grid-sort>\n                    </div>\n                    <tile ng-repeat="item in controller.filteredData track by $index" expand="true" model="item"></tile>\n                </grid>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/product.html','<ui-view />\n');$templateCache.put('src/fedramp/home/products.html','<div class="fr-post-filter-metrics usa-grid-full">\n    <div class="usa-width-one-whole">\n        <div class="col">\n            <p class="fr-large-number">\n                <span class="fr-metric-icon icon-cloud"></span>\n                <strong>{{controller.filteredData.length}}</strong>\n                <span class="fr-metric-label">Total</span>\n            </p>\n        </div>\n        <div class="col">\n            <p class="fr-large-number">\n                <span class="fr-metric-icon icon-cloud"></span>\n                <strong>{{controller.compliant()}}%</strong>\n                <span class="fr-metric-label">Compliant</span>\n            </p>\n        </div>\n    </div>\n    <div class="controls">\n        <label>\n            <input type="checkbox" ng-model="homeController.expandTiles" />\n            <div class="list-view">\n                <span><i class="fa fa-th-list fa-1" aria-hidden="true"></i></span>\n            </div>\n            <div class="grid-view">\n                <span><i class="fa fa-th fa-1" aria-hidden="true"></i></span>\n            </div>\n        </label>\n    </div>\n</div>\n\n<grid class="grid" raw-items="controller.products" on-update="controller.onUpdate(items, state)" state="controller.savedState">\n    <div class="sidebar">\n        <grid-filter-clear class="clear-filters"><i class="fa fa-times" aria-hidden="true"></i> Clear All</grid-filter-clear>\n        <grid-search id="productNameSearch" placeholder="Search by Provider or Product" filter-func="controller.productNameSearchFilterFunc"></grid-search>\n        <grid-filter id="designation" property="designation" header="Status" expanded="true" opened="true" class="grid-filter"></grid-filter>\n        <grid-filter id="reuseRange" header="Reuse Range" expanded="true" opened="false" options-func="controller.reuseRangeOptions" filter-func="controller.reuseRangeFilter" class="grid-filter"></grid-filter>\n        <grid-filter id="serviceModels" property="s in serviceModels" header="Service Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="deploymentModels" property="deploymentModel" header="Deployment Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="impactLevel" property="impactLevel" header="Impact Level" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="providers" property="provider" header="Providers" expanded="true" opened="false" class="grid-filter"></grid-filter>\n    </div>\n    <div class="grid grid-with-sidebar">\n        <div class="fr-grid-layout fr-grid-header">\n            <div class="fr-grid-layout-row">\n                <div class="fr-grid-cell-name">\n                    <grid-sort name="productName" property="name" header="Name" class="grid-sort" default="true"></grid-sort>\n                </div>\n                <div class="fr-grid-cell-service">\n                    <grid-sort name="serviceModels" property="serviceModels" header="Service Models" class="grid-sort"></grid-sort>\n                </div>\n                <div class="fr-grid-cell-impact">\n                    <grid-sort name="impactLevel" property="impactLevel" header="Impact Level" class="grid-sort"></grid-sort>\n                </div>\n                <div class="fr-grid-cell-icon">\n                    <grid-sort name="designation" property="designation" header="Status" class="grid-sort"></grid-sort>\n                </div>\n                <div class="fr-grid-cell-metric">\n                    <grid-sort name="reuses" property="reuses" default="-true" class="grid-sort"></grid-sort>\n                </div>\n            </div>\n        </div>\n        <tile ng-repeat="item in controller.filteredData track by $index" expand="homeController.expandTiles" model="item"></tile>\n    </div>\n</grid>\n\n<div style="clear: both;">\n    <download-csv content="controller.filteredData" ng-if="controller.filteredData" style="float: right;">\n        <button>\n            <span>Export to CSV</span>\n            <i class="fa fa-download" aria-hidden="true" style="margin-left: 1rem;"></i>\n        </button>\n    </download-csv>\n</div>\n');$templateCache.put('src/fedramp/home/provider-comparison.html','<div class="usa-content">\n    <div class="comparison">\n        <div class="first">\n            <provider model="controller.first" on-close="controller.closeFirst" />\n        </div>\n        <div class="second">\n            <provider model="controller.second" on-close="controller.closeSecond" />\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/provider-information.html','<div class="usa-content">\n    <div class="comparison">\n        <div class="first">\n            <provider model="controller.item" on-close="controller.close" />\n        </div>\n        <div class="second comparison-list">\n            <div ng-show="controller.items.length > 0">\n                <div class="text-center fr-filter-label">\n                    <span class="fr-filter-label-rule"></span>\n                    <span class="fr-filter-label-text">Select another to compare</span>\n                </div>\n                <grid class="grid" raw-items="controller.items" on-update="controller.onUpdate(items, state)">\n                    <div class="hidden">\n                        <grid-search id="searchName" property="name" placeholder="Search by Provider Name"></grid-search>\n                        <grid-filter id="designations" property="d in designations" header="Status" expanded="true" opened="true" class="grid-filter"></grid-filter>\n                        <grid-filter id="reuseRange" header="Reuse Range" expanded="true" opened="false" options-func="controller.reuseRangeOptions" filter-func="controller.reuseRangeFilter" class="grid-filter"></grid-filter>\n                        <grid-filter id="serviceModels" property="s in serviceModels" header="Service Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-filter id="deploymentModels" property="d in deploymentModels" header="Deployment Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-filter id="products" property="p.name in products" header="Products" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-sort name="provider" property="name" header="Name" class="grid-sort" default="true"></grid-sort>          \n                        <grid-sort name="serviceModels" property="serviceModels" header="Service Models" class="grid-sort"></grid-sort>    \n                        <grid-sort name="reuses" property="reuses" class="grid-sort"></grid-sort>    \n                    </div>\n                    <tile ng-repeat="item in controller.filteredData track by $index" expand="true" model="item"></tile>\n                </grid>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/provider.html','<ui-view />\n');$templateCache.put('src/fedramp/home/providers.html','<div class="fr-post-filter-metrics usa-grid-full">\n    <div class="usa-width-one-whole">\n        <div class="col">\n            <p class="fr-large-number">\n                <span class="fr-metric-icon icon-cloud"></span>\n                <strong>{{controller.filteredData.length}}</strong>\n                <span class="fr-metric-label">Total</span>\n            </p>\n        </div>\n        <div class="col">\n            <p class="fr-large-number">\n                <span class="fr-metric-icon icon-cloud"></span>\n                <strong>{{controller.compliant()}}%</strong>\n                <span class="fr-metric-label">Compliant</span>\n            </p>\n        </div>\n    </div>\n    <div class="controls">\n        <label>\n            <input type="checkbox" ng-model="homeController.expandTiles" />\n            <div class="list-view">\n                <span><i class="fa fa-th-list fa-1" aria-hidden="true"></i></span>\n            </div>\n            <div class="grid-view">\n                <span><i class="fa fa-th fa-1" aria-hidden="true"></i></span>\n            </div>\n        </label>\n    </div>\n</div>\n\n<grid class="grid" raw-items="controller.providers" on-update="controller.onUpdate(items, state)">\n    <div class="sidebar">\n        <grid-filter-clear class="clear-filters"><i class="fa fa-times" aria-hidden="true"></i> Clear All</grid-filter-clear>\n        <grid-search id="searchName" property="name" placeholder="Search by Provider Name"></grid-search>\n        <grid-filter id="designations" property="d in designations" header="Status" expanded="true" opened="true" class="grid-filter"></grid-filter>\n        <grid-filter id="reuseRange" header="Reuse Range" expanded="true" opened="false" options-func="controller.reuseRangeOptions" filter-func="controller.reuseRangeFilter" class="grid-filter"></grid-filter>\n        <grid-filter id="serviceModels" property="s in serviceModels" header="Service Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="deploymentModels" property="d in deploymentModels" header="Deployment Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="products" property="p.name in products" header="Products" expanded="true" opened="false" class="grid-filter"></grid-filter>\n    </div>\n    <div class="grid grid-with-sidebar">\n        <div class="fr-grid-layout fr-grid-header">\n            <div class="row fr-grid-layout-row">\n                <div class="fr-grid-cell-name">\n                    <grid-sort name="provider" property="name" header="Name" class="grid-sort" default="true"></grid-sort>          \n                </div>\n                <div class="fr-grid-cell-service">\n                    <grid-sort name="serviceModels" property="serviceModels" header="Service Models" class="grid-sort"></grid-sort>    \n                </div>\n                <div class="fr-grid-cell-metric">\n                    <grid-sort name="reuses" property="reuses" class="grid-sort"></grid-sort>    \n                </div>\n            </div>\n        </div>\n        <tile ng-repeat="item in controller.filteredData track by $index" expand="homeController.expandTiles" model="item"/>\n    </div>\n</grid>\n\n<div style="clear: both;">\n    <download-csv content="controller.filteredData" ng-if="controller.filteredData" style="float: right;">\n        <button>\n            <span>Export to CSV</span>\n            <i class="fa fa-download" aria-hidden="true" style="margin-left: 1rem;"></i>\n        </button>\n    </download-csv>\n</div>\n');$templateCache.put('src/fedramp/sitemap/sitemap.html','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n   <url ng-repeat="item in controller.providers track by $index">\n      <loc>https://truetandem.github.io/fedramp-dashboard/provider/{{controller.slugify(item.name)}}</loc>\n      <lastmod>{{controller.today}}</lastmod>\n      <changefreq>daily</changefreq>\n      <priority>0.8</priority>\n   </url>\n   <url ng-repeat="item in controller.products track by $index">\n      <loc>https://truetandem.github.io/fedramp-dashboard/product/{{controller.slugify(item.name)}}</loc>\n      <lastmod>{{controller.today}}</lastmod>\n      <changefreq>daily</changefreq>\n      <priority>0.8</priority>\n   </url>\n   <url ng-repeat="item in controller.agencies track by $index">\n      <loc>https://truetandem.github.io/fedramp-dashboard/agency/{{controller.slugify(item.name)}}</loc>\n      <lastmod>{{controller.today}}</lastmod>\n      <changefreq>daily</changefreq>\n      <priority>0.8</priority>\n   </url>\n   <url ng-repeat="item in controller.assessors track by $index">\n      <loc>https://truetandem.github.io/fedramp-dashboard/assessor/{{controller.slugify(item.name)}}</loc>\n      <lastmod>{{controller.today}}</lastmod>\n      <changefreq>daily</changefreq>\n      <priority>0.8</priority>\n   </url>\n</urlset> \n');}]);(function(){'use strict';angular.module('fedramp').config(routeConfig);// Add items to inject for safe minification
routeConfig.$inject=['$stateProvider','$urlRouterProvider'];/**
     * Configures the routes and views for the FedRAMP application
     */function routeConfig($stateProvider,$urlRouterProvider){// Go to root if something goes wrong
$urlRouterProvider.otherwise('/products');// Routes
$stateProvider.state('fedramp',{abstract:true,templateUrl:'src/fedramp/base.html',resolve:{fedrampData:['DataService',function(DataService){return DataService.pull().then(function(storage){return storage;});}]}}).state('fedramp.sitemap',{url:'/sitemap.xml',templateUrl:'src/fedramp/sitemap/sitemap.html',controller:'SitemapController as controller'}).state('fedramp.app',{abstract:true,templateUrl:'src/fedramp/fedramp.html'}).state('fedramp.app.search',{url:'/search/:query',templateUrl:'src/fedramp/search/search.html',controller:'SearchController as controller'}).state('fedramp.app.home',{templateUrl:'src/fedramp/home/home.html',controller:'HomeController as homeController'}).state('fedramp.app.home.providers',{url:'/providers',templateUrl:'src/fedramp/home/providers.html',controller:'ProvidersController as controller',resolve:{providers:['fedrampData',function(fedrampData){return fedrampData.providers();}]}}).state('fedramp.app.provider',{url:'/provider',templateUrl:'src/fedramp/home/provider.html'}).state('fedramp.app.provider.information',{url:'/:name',templateUrl:'src/fedramp/home/provider-information.html',controller:'ProviderInformationController as controller'}).state('fedramp.app.provider.comparison',{url:'/:first/versus/:second',templateUrl:'src/fedramp/home/provider-comparison.html',controller:'ProviderComparisonController as controller'}).state('fedramp.app.home.products',{url:'/products',templateUrl:'src/fedramp/home/products.html',controller:'ProductsController as controller',resolve:{products:['fedrampData',function(fedrampData){return fedrampData.products();}]}}).state('fedramp.app.product',{url:'/product',templateUrl:'src/fedramp/home/product.html'}).state('fedramp.app.product.information',{url:'/:name',templateUrl:'src/fedramp/home/product-information.html',controller:'ProductInformationController as controller'}).state('fedramp.app.product.comparison',{url:'/:first/versus/:second',templateUrl:'src/fedramp/home/product-comparison.html',controller:'ProductComparisonController as controller'}).state('fedramp.app.home.agencies',{url:'/agencies',templateUrl:'src/fedramp/home/agencies.html',controller:'AgenciesController as controller',resolve:{agencies:['fedrampData',function(fedrampData){return fedrampData.agencies();}]}}).state('fedramp.app.agency',{url:'/agency',templateUrl:'src/fedramp/home/agency.html'}).state('fedramp.app.agency.information',{url:'/:name',templateUrl:'src/fedramp/home/agency-information.html',controller:'AgencyInformationController as controller'}).state('fedramp.app.agency.comparison',{url:'/:first/versus/:second',templateUrl:'src/fedramp/home/agency-comparison.html',controller:'AgencyComparisonController as controller'}).state('fedramp.app.home.assessors',{url:'/assessors',templateUrl:'src/fedramp/home/assessors.html',controller:'AssessorsController as controller',resolve:{assessors:['fedrampData',function(fedrampData){return fedrampData.assessors();}]}}).state('fedramp.app.assessor',{url:'/assessor',templateUrl:'src/fedramp/home/assessor.html'}).state('fedramp.app.assessor.information',{url:'/:name',templateUrl:'src/fedramp/home/assessor-information.html',controller:'AssessorInformationController as controller'}).state('fedramp.app.assessor.comparison',{url:'/:first/versus/:second',templateUrl:'src/fedramp/home/assessor-comparison.html',controller:'AssessorComparisonController as controller'});}})();(function(){'use strict';angular.module('fedramp.components').component('agency',{templateUrl:'src/fedramp.components/agency.html',controller:Agency,controllerAs:'controller',bindings:{model:'<',onClose:'<'}});Agency.$inject=['$log','$state'];/**
     * @constructor
     * @memberof Components
     */function Agency($log,$state){var self=this;/**
         * Close the informational panel
         * @public
         * @memberof Components.Agency
         */self.close=function(){if(self.onClose){self.onClose();return;}$state.go('fedramp.app.home',{},{reload:true});};}})();(function(){'use strict';angular.module('fedramp.components').component('assessor',{templateUrl:'src/fedramp.components/assessor.html',controller:Assessor,controllerAs:'controller',bindings:{model:'<',onClose:'<'}});Assessor.$inject=['$log','$state'];/**
     * @constructor
     * @memberof Components
     */function Assessor($log,$state){var self=this;/**
         * Close the informational panel
         * @public
         * @memberof Components.Assessor
         */self.close=function(){if(self.onClose){self.onClose();return;}$state.go('fedramp.app.home',{},{reload:true});};}})();(function(){'use strict';angular.module('fedramp.components').component('downloadCsv',{transclude:true,template:'<a href="{{controller.downloadUrl}}" download="{{controller.filename()}}" ng-click="controller.download()"><ng-transclude/></a>',controller:DownloadCsv,controllerAs:'controller',bindings:{// Contains array of information to be transformed into csv
content:'<'}});DownloadCsv.$inject=['$log','CsvService'];/**
     * @constructor
     * @memberof Components
     */function DownloadCsv($log,CsvService){var self=this;self.$onChanges=$onChanges;self.download=download;self.filename=filename;/**
         * Listens when updates are made to content. Prepares the download
         * url when updates come in.
         */function $onChanges(changes){prepareDownload();}/**
         * Generates the appropriate csv content and blob and sets it on the downloadUrl
         */function prepareDownload(){var csv=CsvService.toCsv(CsvService.flatten(self.content));if(csv){var downloadBlob=new Blob([csv],{type:'text/csv;charset=utf-8;'});self.downloadUrl=window.URL.createObjectURL(downloadBlob);}}/**
         * Filters and transforms data for download
         * @public
         * @memberof Components.DownloadCsv
         */function download(){// IE 11 and Edge
if(navigator.msSaveBlob&&downloadBlob){navigator.msSaveBlob(downloadBlob,self.filename());}}/**
         * Generates the file name to be used when downloading the data
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  A file name in the format "fedramp-YYYY-mm-dd.csv"
         */function filename(date){if(!date){date=new Date();}var dd=date.getDate();var mm=date.getMonth()+1;var yyyy=date.getFullYear();if(dd<10){dd='0'+dd;}if(mm<10){mm='0'+mm;}return'fedramp-'+yyyy+'-'+mm+'-'+dd+'.csv';}}})();(function(){'use strict';angular.module('fedramp.components').component('gridFilterClear',{transclude:true,template:'<ng-transclude ng-click="controller.clear()"></ng-transclude>',controller:GridFilterClear,controllerAs:'controller',require:{gridController:'^grid'},bindings:{}});GridFilterClear.$inject=[];/**
     * @constructor
     * @memberof Components
     */function GridFilterClear(){var self=this;self.clear=clear;// Calls parents controller to clear all filters.
function clear(){self.gridController.clearFilters();}}})();(function(){"use strict";angular.module('fedramp.components').component('gridFilter',{controller:GridFilter,controllerAs:'controller',templateUrl:'src/fedramp.components/grid-filter.html',require:{// We require that this component live inside of <grid></grid> so it can
// communicate and share information
gridController:'^grid'},bindings:{// The property on a list to manage
property:'@',// User friendly text to describe filter
header:'@',// Any options that can be selected by this filter. If none are passed in, a distinct list
// of all possible values for the current property are populated.
options:'<',// Load any initial selected values. For instance, to restore filter state. In the form
// {value: <value>, label: <label>, selected: <boolean>}
selectedOptionValues:'<',// Whether to render expanded template vs the dropdown
expanded:'<',// Whether to initially render expanded mode with panels opened
opened:'<',// Custom function that returns available filter options. Defaults to default func if not provided
optionsFunc:'<',// Custom function that performs a comparison when filtering. Defaults to default func if not provides
filterFunc:'<',// Identifier for filter
id:'@'}});GridFilter.$inject=['$location','$parse','$element','$httpParamSerializer'];/**
     * @constructor
     * @memberof Components
     * @example 
     * <grid-filter property="name" header="Name" options="" expanded="true" opened="true"></grid-filter>
     */function GridFilter($location,$parse,$element,$httpParamSerializer){var self=this;var selectedCss='grid-filter-selected';// Regex to parse out array based filter keys
var ARRAY_FILTER_REGEX=/^(.*)\sin\s(.+)$/;var OBJECT_PARAM_REGEX=/\:\((.+?)\),{0,}/;// Default template used to render option values
self.gridFilterOptionsTemplatePath="src/fedramp.components/grid-filter-options.html";// Options available to filter based on property
self.options=[];// Options that have been selected
self.selectedOptionValues=self.selectedOptionValues||[];// List of filtered data based on this particular filter
self.filtered=[];// Whether to initially render expanded mode with panels opened
self.opened=angular.isDefined(self.opened)?self.opened:true;// Exposed public functions
self.$onInit=$onInit;self.applyFilter=applyFilter;self.selectOption=selectOption;self.clear=clear;//self.doFilter = doFilter;
self.loadOptions=loadOptions;self.$postLink=$postLink;//Array parsing expressions
self.parser=null;function $onInit(){if(!self.id){throw'Please add an id attribute';}if(!self.property&&(!self.optionsFunc||!self.filterFunc)){throw'If property is not specified, optionsFunc and filterFunc must be passed in';}// We check if we're filtering on a property that contains multiple values
self.isArray=self.property?self.property.match(ARRAY_FILTER_REGEX)!==null:false;// Allow custom optionsFunc and filterFuncs to be passed for custom filtering
self.optionsFunc=self.optionsFunc||optionsFunc;// Wrap custom func
self.filterFunc=self.filterFunc?wrapFilterFunc(self.filterFunc):filterFunc;if(self.isArray){configureArrayParsers();}// We give the parent controller a reference to this filter
self.gridController.addFilter(self);// If no options have been loaded, we load default ones
if(self.options.length===0){self.loadOptions(self.gridController.rawItems);}if(self.gridController.state){restoreState();}}function $postLink(){if(self.expanded){$element.addClass('grid-filter-expanded');}}/**
         * Checks if any relevant query params exist containing filter values to load and then
         * adds them. Non-primitive objects are stored in the query param as follows:
         *
         * paramName=:(<json_representation>),:(<json_representation>)
         */function restoreState(){var params=self.gridController.state;if(!(self.id in params)){return null;}var values=params[self.id];var selected=[];// Check if loading non-primitive object
var m=values.match(OBJECT_PARAM_REGEX);if(m){values=values.split(OBJECT_PARAM_REGEX)// Remove empty results
.filter(Boolean)// Convert to js object
.map(function(x){return angular.fromJson(x);}).forEach(function(val){selected.push({value:val,selected:true});self.options.forEach(function(option){if(angular.equals(option.value,val)){option.selected=true;}});});}else{// Handle basic primitive options
values.split(',').forEach(function(val){selected.push({value:val,selected:true});self.options.forEach(function(option){if(option.value===val){option.selected=true;}});});}self.selectedOptionValues=selected;if(self.selectedOptionValues){applyFilter();}}/**
         * Toggles the selection of an option and then executes filter.
         * @public
         * @memberof Components.GridFilter
         */function selectOption(option){option.selected=!option.selected;var pos=self.selectedOptionValues.findIndex(function(x){return angular.equals(x.value,option.value);});if(pos==-1){self.selectedOptionValues.push(option);}else{self.selectedOptionValues.splice(pos,1);}if(self.gridController.state){saveState();}applyFilter();}/**
         * If save state is activated, stores the selected results in the query string.
         *
         */function saveState(){if(self.selectedOptionValues&&self.selectedOptionValues.length>0){var options=self.selectedOptionValues.map(function(option){// When non-primitive object, store as json
if(angular.isObject(option.value)){return':('+angular.toJson(option.value)+')';}// Handle basic primitive value
return option.value;}).join(',');self.gridController.state[self.id]=options;}else{delete self.gridController.state[self.id];}}/**
         * Filter using current property or filterFunc to populate a list containing items relevant to current filter.
         * Then, we call the doFilter() on the parent gridController which will consolidate and merge all filtered
         * data from other filters.
         * @public
         * @memberof Components.GridFilter
         */function applyFilter(){toggleCss();self.filtered=self.gridController.rawItems.filter(self.filterFunc);self.gridController.doFilter();}/**
         * Executes a filter on the current data set.
         *
         * If custom behavior is required, this method may be overriden by passing in
         * a function for this component.
         *
         * @param {object} obj Current object in dataset being filtered
         * @param {int} index Index of current object
         * @param {array} arr Array containing entire dataset being filtered
         * @param {array} selectedOptionValues Array of options that have been selected by the user
         *
         * @return
         *  whether an object was found within the selected options.
         */function filterFunc(obj,index,arr,selectedOptionValues){// When no option is selected, return everything
if(self.selectedOptionValues.length===0){return obj;}// Handle when property being searched is an array
if(self.isArray){return arrayFilterFunc(obj,index,arr);}// Handle when basic object
return objectFilterFunc(obj,index,arr);}/**
         * Generic filter that finds where a property value is found within
         * the list of selection options.
         *
         * @param {object} obj Current object in dataset being filtered
         * @param {int} index Index of current object
         * @param {array} arr Array containing entire dataset being filtered
         */function objectFilterFunc(obj,index,arr){var value=$parse(self.property)(obj);var foundObject=self.selectedOptionValues.find(function(option){return comparator(obj,option);});return foundObject;}/**
         * Generic filter that finds where a selected option is found within an array property
         *
         * @param {object} obj Current object in dataset being filtered
         * @param {int} index Index of current object
         * @param {array} arr Array containing entire dataset being filtered
         */function arrayFilterFunc(obj,index,arr){var values=arrayFilterValues(obj);return values.find(function(val){return self.selectedOptionValues.find(function(option){return val===option.value;});});}/**
         * Creates an array containing all values for a particular key that is an array. 
         *
         * @example
         * //For instance
         * //if property had the following
         * 
         *  <grid-filter property="i in serviceModels"></grid-filter>
         *
         * // and the data set looked like
         * {
         *     name: 'blah',
         *     serviceModels:['IaaS', 'PaaS']
         * },
         * {
         *     name: 'blah2',
         *     serviceModels:['SaaS']
         * }
         * // This would return ['IaaS', 'PaaS', 'SaaS']
         * 
         * //Or if using an object key 
         *
         *  <grid-filter property="i.name in products" ></grid-filter->
         *
         * //and the data set looked like
         * {
         *     name: 'blah',
         *     products:[{name:'Product1']
         * },
         * {
         *     name: 'blah2',
         *     products:[{name:'Product2']
         * }
         *
         * This would return ['Product1', 'Product2']
         */function arrayFilterValues(obj){return self.parser.valuesFunc(obj).reduce(function(p,c){if(self.parser.valueIsObject){p.push(self.parser.valueFunc(c));}else{p.push(c);}return p;},[]);}/**
         * Default comparator when filtering items. 
         */function comparator(obj,option){return obj[self.property]===option.value;}/**
         * Loads a distinct list of values found in the specified property attribute.
         * If the property value is a basic string, an array of strings will be set for the options.
         *
         * If the property is an array, each instance of the array will be iterated to extract the contents to
         * generate an array containing unique values. This is done by using a set.
         */function loadOptions(source){self.options=self.optionsFunc(source);}/**
         * Creates a set of options for a particular property to be filtered on. If the property
         * being filtered on contains an array of possible values, then we delegate to array options func.
         *
         * Override this method to add custom options.
         *
         * @example
         * //Sample dataset to return if overriding
         * {
         *      value: value,
         *      label: label,
         *      selected: boolean
         * }
         *
         * @param source The dataset to generate options from.
         *
         * @returns {array}  
         * An array of options that can be selected to filter. These must be in the form 
         */function optionsFunc(source){var options=[];if(self.isArray){options=arrayOptionsFunc(source);}else{var cache={};source.forEach(function(obj){var val=$parse(self.property)(obj);if(!cache[val]){options.push({label:val,value:val,selected:false});cache[val]=true;}});}options.sort(function(o1,o2){if(o1.value===o2.value){return 0;}if(o1.label<o2.label){return-1;}return 1;});return options;}/**
         * Generates a list of option values for an array key
         */function arrayOptionsFunc(source){var cache={};var options=[];source.forEach(function(obj){var values=arrayFilterValues(obj);values.forEach(function(val){if(!cache[val]){options.push({label:val,value:val,selected:false});cache[val]=true;}});});return options;}/**
         * When filtering on a property that may contain multiple values, configures necessary
         * parsers to allow the data to be iterated and compared against. 
         *
         * @example
         * //$parse is a service that allows an expression to be evaluated against an object. For instance
         * //given:
         *
         * var person = {
         *  name: 'John',
         *  dogs: ['Dog1']
         * };
         *
         * // $parse('name')(person) => 'John'
         * // $parse('dogs')(person) => ['Dog1']
         *
         *
         */function configureArrayParsers(){var match=self.property.match(/^(.*)\sin\s(.+)$/);var keyExpression=match[1].split('.').splice(1).join('.');var valuesExpression=match[2];self.parser={};self.parser.valuesFunc=$parse(valuesExpression);self.parser.valueFunc=$parse(keyExpression);self.parser.valueIsObject=!!keyExpression;}/**
         * Clears filter and resets dataset
         * @public
         * @memberof Components.GridFilter
         */function clear(){self.selectedOptionValues=[];self.options.forEach(function(x){return x.selected=false;});applyFilter();}/**
         * Wraps a custom filter func with some additonal pre-processing logic to ensure
         * that a filter without any selected options is returned. We also ensure to pass an additonal
         * parameter selectedOptionValues to the callers.
         */function wrapFilterFunc(func){return function(obj,index,arr){if(self.selectedOptionValues.length===0){return obj;}return func(obj,index,arr,self.selectedOptionValues);};}function toggleCss(){if(self.selectedOptionValues.length>0){$element.addClass(selectedCss);}else{$element.removeClass(selectedCss);}}}})();(function(){'use strict';angular.module('fedramp.components').component('gridSearch',{templateUrl:'src/fedramp.components/grid-search.html',controller:GridSearch,controllerAs:'controller',require:{gridController:'^grid'},bindings:{// Property expression. Tells search which property to search on. 
property:'@',placeholder:'@',id:'@',filterFunc:'<'}});GridSearch.$inject=['Searcher'];/**
     * Allows a dataset to be searched using free text searches. This component utilizes a property 
     * expression to determine which field to search on. See {@link Services.Searcher Searcher} example for 
     * property expression samples. 
     *
     * If no property is specified, a custom filterFunc can be passed in to include custom
     * filtering logic.
     *
     * @example
     * <grid-search property="product.name in products" placeholder="Search by Product Name"></grid-search>
     *
     * <grid-search filter-func="myCustomFilterFunc" placeholder="Search by Product Name or Provider Name"></grid-search>
     * @constructor
     * @memberof Components
     */function GridSearch(Searcher){var self=this;var searcher=new Searcher();self.filtered=[];self.$onInit=$onInit;self.search=search;self.clear=clear;function $onInit(){if(!self.id){throw'Id is required for grid search filter';}if(!self.property&&!self.filterFunc){throw'If property is not specified, filterFunc must be provided';}self.filterFunc=self.filterFunc?wrapFilterFunc(self.filterFunc):filterFunc;self.gridController.addFilter(self);restoreState();}/**
         * Filter applied to dataset when user searches
         */function filterFunc(obj,index,arr){if(self.searchTerm){var found=searcher.prop(self.property).contains(obj,self.searchTerm);if(found.length>0){return obj;}else{return null;}}else{return obj;}}/**
         * Every time a user searches, we filter based on the entire dataset and then internally 
         * store the results and call doFilter() on the parent dataset to appropriately merge results from
         * all relevant fitlers.
         */function search(){saveState();var filtered=self.gridController.rawItems.filter(self.filterFunc);self.filtered=filtered;self.gridController.doFilter();}function saveState(){if(self.searchTerm){self.gridController.state[self.id]=self.searchTerm;}else{delete self.gridController.state[self.id];}}function restoreState(){var params=self.gridController.state;if(!(self.id in params)){return null;}self.searchTerm=params[self.id];self.gridController.doFilter();}/**
         * When a custom filterFunc is provided, we wrap it with this function in order to properly
         * pass the searchTerm to the passed in function.
         */function wrapFilterFunc(func){return function(obj,index,arr){return func(obj,index,arr,self.searchTerm);};}function clear(){self.searchTerm='';search();}}})();(function(){'use strict';angular.module('fedramp.components').component('gridSort',{templateUrl:'src/fedramp.components/grid-sort.html',require:{gridController:'^grid'},controller:GridSort,controllerAs:'controller',bindings:{name:'@',property:'@',caseSensitive:'@',header:'@',default:'@'}});GridSort.$inject=['$log','$parse','$element','$location'];/**
     * @constructor
     * @memberof Components
     * @example <grid-sort property="provider" header="Provider"></grid-sort>
     */function GridSort($log,$parse,$element,$location){var self=this;self.activated=null;self.asc=true;self.$onInit=$onInit;self.sort=sort;self.highlight=highlight;self.toggleSort=toggleSort;self.clear=clear;function $onInit(){if(!self.name){throw'Name must be specified for sort filter';}if(self.property){self.sortFunc=sortFunc;}self.propertyParser=$parse(self.property);restoreState();self.gridController.addSort(self);}function saveState(){// Merge any existing parameters
var existingParams=angular.extend(self.gridController.state,{'sort':(self.asc?'':'-')+self.name});// Update url
self.gridController.stateUpdate(existingParams);}function restoreState(){var sortParam=self.gridController.state.sort;if(!sortParam){loadDefaultSort();return;}var m=sortParam.match(/(-)?(.*)/);if(m[2]!==self.name){return;}self.asc=m[1]===undefined;self.activated=true;self.sort(self.asc);}function loadDefaultSort(){if(self.default){// Parse if default should be in asc/desc
self.asc=self.default.split('-').reduce(function(p,c){return false;});self.sort(self.asc);}}/**
         * Sorts a list of items in the grid controller by the property for this particular
         * grid sort.
         * @public
         * @memberof Components.GridSort
         */function sort(doAscending){self.activated=angular.isDefined(doAscending);self.asc=doAscending;self.gridController.defaultSort=self;self.gridController.items.sort(self.sortFunc);$element.addClass('sort-selected');// Update state of all sorts
self.gridController.updateSort();saveState();}/**
         * Toggles the sort. To maintain a consistent interaction, we always set the toggle to ascending
         * if the sort is not activated. This case would be hit when the user has clicked on the sort for the 
         * first time or after another sort.
         */function toggleSort(){if(!self.activated){self.sort(true);return;}self.sort(!self.asc);}/**
         * Performs a generic sort.
         */function sortFunc(_a,_b){var a=value(_a);var b=value(_b);if(angular.isNumber(a)){return numberSortFunc(a,b);}if(a<b){return self.asc?-1:1;}if(a>b){return self.asc?1:-1;}return 0;}/**
         * Handles generic numerica sort.
         */function numberSortFunc(a,b){if(self.asc){return a-b;}return b-a;}/**
         * Gets reference to property value when sorting
         */function value(obj){var value=self.propertyParser(obj);if(angular.isString(value)){return value.toLowerCase().trim();}return value;}function highlight(asc){if(!self.activated){return false;}if(self!==self.gridController.defaultSort){return false;}if(self.asc===asc){return true;}return false;}/**
         * Clears the sorting.
         */function clear(){self.activated=false;$element.removeClass('sort-selected');}}})();(function(){'use strict';angular.module('fedramp.components').component('grid',{controller:Grid,controllerAs:'gridController',bindings:{// Contains original unfiltered dataset
rawItems:'<',// Callback function called when grid update occurs
onUpdate:'&',// Determines whether grid will maintain state via query params
state:'<'}});Grid.$inject=['$log','$stateParams','$location'];/**
     * @constructor
     * @memberof Components
     * @example <grid items="items" raw-items="agencies" saved-state="true"></grid>
     */function Grid($log,$stateParams,$location){var self=this;// Maintains a list of filters
var filters=[];var sorts=[];self.$onInit=$onInit;self.addFilter=addFilter;self.addSort=addSort;self.doFilter=doFilter;self.clearFilters=clearFilters;self.updateSort=updateSort;self.stateUpdate=stateUpdate;self.state=$location.search()||{};// Default sort to utilize for results
self.defaultSort=null;self.items=[];function $onInit(){if(!self.onUpdate){throw'Specify an onUpdate function! Otherwise, you don\' get updates.';}self.items=self.rawItems;//self.onUpdate({items: self.rawItems});
}/**
         * Iterates through all the results obtained from all child grid filters and
         * executes all filter funcs to reduce the data to a single dataset
         *
         * To describe somewhat visually, imagine if we have two filters
         *
         * <grid-filter property="agency"></grid-filter>
         * <grid-filter property="deploymentModel"></grid-filter>
         *
         * Agency may result with a data set containing {1, 2, 3, 4} 
         * while
         * DeploymentModel may contain a dataset with {a,b,c}
         *
         * However, if we apply the filterfunc from each filter to every single data point,
         * we may end up with {1,2,a,c}
         * @public
         * @memberof Components.Grid
         */function doFilter(){var combinedFilterResults=[];// Iterate through each filter and retrieve the data it has individually filtered
filters.forEach(function(filter){combinedFilterResults=combinedFilterResults.concat(filter.filtered);});// Remove duplicates
combinedFilterResults=Array.from(new Set(combinedFilterResults));var filtered=null;// Iterate through each filter to extract what it has found
filters.forEach(function(filter){// Filter the data!
combinedFilterResults=combinedFilterResults.filter(filter.filterFunc);});// Apply default sort if one exists
if(self.defaultSort){combinedFilterResults.sort(self.defaultSort.sortFunc);}self.items=combinedFilterResults;// Pass updated dataset
$location.search(self.state);self.onUpdate({items:combinedFilterResults,state:self.state});}/**
         * Iterates through all filters and clears out their options
         * @public
         * @memberof Components.Grid
         */function clearFilters(){filters.forEach(function(filter){filter.clear();});}/**
         * When first loading, all child grid-filter components will call this method to add
         * themselves to this controller.
         * @public
         * @memberof Components.Grid
         */function addFilter(filter){filters.push(filter);}/**
         * When sorts first load, they will add themselves to this controller using this method
         */function addSort(sort){sorts.push(sort);}/**
         * Updates the state of all sorts so that the latest one used is the only one that's 
         * activated.
         */function updateSort(){sorts.forEach(function(sort){if(!angular.equals(sort,self.defaultSort)){sort.clear();}});}function stateUpdate(state){state=angular.extend(self.state,state);$location.search(state);self.onUpdate({items:self.items,state:state});}}})();(function(){'use strict';angular.module('fedramp.components').component('product',{templateUrl:'src/fedramp.components/product.html',controller:Product,controllerAs:'controller',bindings:{model:'<',onClose:'<'}});Product.$inject=['$log','$state'];/**
     * @constructor
     * @memberof Components
     */function Product($log,$state){var self=this;/**
         * Close the informational panel
         * @public
         * @memberof Components.Product
         */self.close=function(){if(self.onClose){self.onClose();return;}$state.go('fedramp.app.home',{},{reload:true});};/**
         * Is the products status considered 'Ready'
         * @public
         * @memberof Components.Product
         *
         * @returns
         *  A value indicating if the product ready
         */self.isReady=function(){return self.model.designation==='Ready';};/**
         * Is the products status considered 'In Process'
         * @public
         * @memberof Components.Product
         *
         * @returns
         *  A value indicating if the product is in processing
         */self.isProcessing=function(){return self.model.designation==='In-Process';};/**
         * Is the products status considered 'Compliant'
         * @public
         * @memberof Components.Product
         *
         * @returns
         *  A value indicating if the product is compliant
         */self.isCompliant=function(){var compliant=['Compliant','In PMO Review'];return compliant.includes(self.model.designation);};/**
         * The percent complete for the product status
         * @public
         * @memberof Components.Product
         *
         * @returns
         *  A percentage as an integer
         */self.percentComplete=function(){var percent=0;if(self.isReady()){percent=30;}else if(self.isProcessing()){percent=50;}else if(self.isCompliant()){percent=100;}return percent;};/**
         * The status message providing information concerning the
         * estimated or final compliancy date.
         * @public
         * @memberof Components.Product
         *
         * @returns
         *  Status message
         */self.statusMessage=function(){var message='';if(self.isCompliant()){message='Compliant Since '+(self.model.authorizationDate||'');}else{if(self.model.expectedCompliance){message='Estimated Compliance Date '+self.model.expectedCompliance;}else{message='This provider has not given an Estimated Compliance Date';}}return message;};}})();(function(){'use strict';angular.module('fedramp.components').component('provider',{templateUrl:'src/fedramp.components/provider.html',controller:Provider,controllerAs:'controller',bindings:{model:'<',onClose:'<'}});Provider.$inject=['$log','$state'];/**
     * @constructor
     * @memberof Components
     */function Provider($log,$state){var self=this;/**
         * Close the informational panel
         * @public
         * @memberof Components.Provider
         */self.close=function(){if(self.onClose){self.onClose();return;}$state.go('fedramp.app.home',{},{reload:true});};}})();(function(){'use strict';angular.module('fedramp.components').component('search',{templateUrl:'src/fedramp.components/search.html',controller:Search,controllerAs:'controller'});Search.$inject=['$log','$state'];/**
     * @constructor
     * @memberof Components
     */function Search($log,$state){var self=this;/**
         * The format to be used when rendering results in Bing.
         * For browsers where AngularJS does not work we would want
         * normal functionality.
         *
         * @member {string}
         * @memberof Components.Search
         */self.format='html';/**
         * The search query.
         *
         * @member {string}
         * @memberof Components.Search
         */self.query='';/**
         * Redirect to the search view to handle rendering of results
         *
         * @public
         * @memberof Components.Search
         */self.search=function(e){if(e){e.preventDefault();}if(self.query){$state.go('fedramp.app.search',{query:self.query},{reload:true});}};}})();(function(){'use strict';angular.module('fedramp.components').component('tile',{templateUrl:'src/fedramp.components/tile.html',controller:Tile,controllerAs:'controller',bindings:{expand:'<',model:'<',state:'<'}});Tile.$inject=['$log','$state','$stateParams','helperService','$location'];/**
     * @constructor
     * @memberof Components
     */function Tile($log,$state,$stateParams,helperService,$location){var self=this;/**
         * The tile template for the model type.
         */self.tileTemplate='src/fedramp.components/tile-'+self.model.type+'.html';/**
         * Redirect to the appropriate view
         * @public
         * @memberof Components.Tile
         */self.view=function(){var baseUrl='';if($stateParams.name){baseUrl='/'+self.model.type+'/'+$stateParams.name+'/versus/'+helperService.slugify(self.model.name);}else{baseUrl='/'+self.model.type+'/'+helperService.slugify(self.model.name);}$location.url(baseUrl+helperService.queryString());};}})();(function(){'use strict';angular.module('fedramp.models').factory('Agency',AgencyFactory);AgencyFactory.$inject=[];function AgencyFactory(){/**
         * The agency
         * @constructor
         * @memberof Models
         */function Agency(options){// Scope `this` to self
var self=this;/**
             * The model type
             * @member {string}
             * @memberof Models.Agency
             */self.type='agency';/**
             * The agency name
             * @member {string}
             * @memberof Models.Agency
             */self.name='';/**
             * The number of times the agency was used
             * @member {integer}
             * @memberof Models.Agency
             */self.reuses=0;/**
             * The number of times the agency was a sponsoring entity
             * @member {integer}
             * @memberof Models.Agency
             */self.sponsored=0;/**
             * The number of times the agency was an authorizing entity
             * @member {integer}
             * @memberof Models.Agency
             */self.authorized=0;/**
             * Providers associated to the agency
             * @member {array}
             * @memberof Models.Agency
             */self.providers=[];/**
             * Products associated to the agency
             * @member {array}
             * @memberof Models.Agency
             */self.products=[];/**
             * Assessors associated to the agency
             * @member {array}
             * @memberof Models.Agency
             */self.assessors=[];}return Agency;}})();(function(){'use strict';angular.module('fedramp.models').factory('Assessor',AssessorFactory);AssessorFactory.$inject=[];function AssessorFactory(){/**
         * The independent assessor
         * @constructor
         * @memberof Models
         */function Assessor(options){// Scope `this` to self
var self=this;/**
             * The model type
             * @member {string}
             * @memberof Models.Assessor
             */self.type='assessor';/**
             * The agency name
             * @member {string}
             * @memberof Models.Assessor
             */self.name='';/**
             * The number of times the assessor was used
             * @member {integer}
             * @memberof Models.Assessor
             */self.reuses=0;/**
             * Providers associated to the assessor
             * @member {array}
             * @memberof Models.Assessor
             */self.providers=[];/**
             * Products associated to the assessor
             * @member {array}
             * @memberof Models.Assessor
             */self.products=[];/**
             * Agencies associated to the assessor
             * @member {array}
             * @memberof Models.Assessor
             */self.agencies=[];/**
             * The point of contact name
             * @member {string}
             * @memberof Models.Assessor
             */self.pointOfContact='';/**
             * The point of contact email
             * @member {string}
             * @memberof Models.Assessor
             */self.email='';/**
             * The agency URL
             * @member {string}
             * @memberof Models.Assessor
             */self.url='';}return Assessor;}})();(function(){'use strict';angular.module('fedramp.models').factory('AtoLetter',AtoLetterFactory);function AtoLetterFactory(){return AtoLetter;}/**
     * Leveraged ATO letter.
     * @constructor
     * @memberof Models
     */function AtoLetter(options){// Scope `this` to self
var self=this;var mapping={'Letter_Date':'letterDate','Letter_Expiration_Date':'letterExpirationDate','Authorization_Date':'authorizationDate','Authorizing_Letter_Last_Sign_Date':'authorizingLetterSignedDate','Authorizing_Agency':'authorizingAgency','Authorizing_Subagency':'authorizingSubagency','Active':'active','Include_In_Marketplace':'includeInMarketplace','Independent_Assessor':'independentAssessor','Announcement_Date':'compliantDate'};/**
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
         * Date of announcement when compliant
         * @member {date}
         * @memberof Models.Data
         */self.compliantDate=null;/**
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
var self=this;var mapping={'Cloud_Service_Provider_Name':'name','Cloud_Service_Provider_Package':'pkg','Path':'path','Designation':'designation','Package_ID':'pkgId','Service_Model':'serviceModel','Deployment_Model':'deploymentModel','Impact_Level':'impactLevel','Original_Authorization_Date':'authorizationDate','Original_Expiration_Date':'expirationDate','Sponsoring_Agency':'sponsoringAgency','CSP_URL':'cspUrl','Stage':'stage','Independent_Assessor':'independentAssessor','Underlying_CSP_Package_ID':'underlyingCspPackages','FedRAMP_Website_URL':'fedrampWebsite','CSP_Website':'cspWebsite','CSO_Description':'csoDescription','Expected_Compliance_Date':'expectedCompliance','Leveraged_ATO_Letters':'atoLetters','Announcement_Date':'compliantDate'};/**
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
             * The CSP URL
             * @member {string}
             * @memberof Models.Data
             */self.cspUrl='';/**
             * Stage in validation process
             * @member {string}
             * @memberof Models.Data
             */self.stage='';/**
             * The independent assessor
             * @member {string}
             * @memberof Models.Data
             */self.independentAssessor='';/**
             * Underlying CSP packages
             * @member {array}
             * @memberof Models.Data
             */self.underlyingCspPackages=[];/**
             * The FedRAMP website
             * @member {string}
             * @memberof Models.Data
             */self.fedrampWebsite='';/**
             * The CSP website
             * @member {string}
             * @memberof Models.Data
             */self.cspWebsite='';/**
             * The CSO package services description
             * @member {string}
             * @memberof Models.Data
             */self.csoDescription='';/**
             * Date of expected compliance
             * @member {date}
             * @memberof Models.Data
             */self.expectedCompliance=null;/**
             * Date of announcement when compliant
             * @member {date}
             * @memberof Models.Data
             */self.compliantDate=null;/**
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
var self=this;/**
             * The model type
             * @member {string}
             * @memberof Models.Product
             */self.type='product';/**
             * The product name
             * @member {string}
             * @memberof Models.Product
             */self.name='';/**
             * The package identifier
             * @member {string}
             * @memberof Models.Product
             */self.pkgId='';/**
             * The number of times the product was used
             * @member {integer}
             * @memberof Models.Product
             */self.reuses=0;/**
             * The provider name
             * @member {string}
             * @memberof Models.Product
             */self.provider='';/**
             * Agencies associated to the product
             * @member {array}
             * @memberof Models.Product
             */self.agencies=[];/**
             * The deployment model
             * @member {string}
             * @memberof Models.Product
             */self.deploymentModel='';/**
             * The designation or status
             * @member {string}
             * @memberof Models.Product
             */self.designation='';/**
             * Service models
             * @member {array}
             * @memberof Models.Product
             */self.serviceModels=[];/**
             * The impact level
             * @member {string}
             * @memberof Models.Product
             */self.impactLevel='';/**
             * The logo URL
             * @member {string}
             * @memberof Models.Product
             */self.logo='';/**
             * The authorization date
             * @member {string}
             * @memberof Models.Product
             */self.authorizationDate='';/**
             * The expected compliance date
             * @member {string}
             * @memberof Models.Product
             */self.expectedCompliance='';/**
             * The expiration date
             * @member {string}
             * @memberof Models.Product
             */self.expirationDate='';/**
             * The independent assessor name
             * @member {string}
             * @memberof Models.Product
             */self.independentAssessor='';/**
             * The authorization type
             * @member {string}
             * @memberof Models.Product
             */self.authorizationType='';/**
             * The sponsoring agency name
             * @member {string}
             * @memberof Models.Product
             */self.sponsoringAgency='';}return Product;}})();(function(){'use strict';angular.module('fedramp.models').factory('Provider',ProviderFactory);ProviderFactory.$inject=[];function ProviderFactory(){/**
         * The cloud service provider.
         * @constructor
         * @memberof Models
         */function Provider(options){// Scope `this` to self
var self=this;/**
             * The model type
             * @member {string}
             * @memberof Models.Provider
             */self.type='provider';/**
             * The provider name
             * @member {string}
             * @memberof Models.Provider
             */self.name='';/**
             * The number of times the provider was used
             * @member {integer}
             * @memberof Models.Provider
             */self.reuses=0;/**
             * Products associated to the provider
             * @member {array}
             * @memberof Models.Provider
             */self.products=[];/**
             * Deployment models associated to the provider
             * @member {array}
             * @memberof Models.Provider
             */self.deploymentModels=[];/**
             * Service models associated to the provider
             * @member {array}
             * @memberof Models.Provider
             */self.serviceModels=[];/**
             * Statuses/designatinos associated to the provider
             * @member {array}
             * @memberof Models.Provider
             */self.designations=[];/**
             * Agencies associated to the provider
             * @member {array}
             * @memberof Models.Provider
             */self.agencies=[];/**
             * The logo URL
             * @member {string}
             * @memberof Models.Provider
             */self.logo='';}return Provider;}})();(function(){'use strict';angular.module('fedramp.services').factory('Settings',SettingsFactory);function SettingsFactory(){return Settings;}/**
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
         */function today(){var d=new Date();var dd=d.getDate();var mm=d.getMonth()+1;var yyyy=d.getFullYear();if(dd<10){dd='0'+dd;}if(mm<10){mm='0'+mm;}return mm+'/'+dd+'/'+yyyy;}return self.init(options);}})();(function(){'use strict';angular.module('fedramp.services').service('CsvService',CsvService);CsvService.$inject=['$log'];/**
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
         */self.pull=function(url){return $http.get(url).then(function(response){return response.data;});};}})();(function(){'use strict';angular.module('fedramp.services').service('helperService',HelperService);HelperService.$inject=['$log','$location'];/**
     * @constructor
     * @memberof Services
     */function HelperService($log,$location){var self=this;/**
         * Takes a string and creates a string in slug format for URLs
         * @public
         * @memberof Services.HelperService
         *
         * @param {string} s
         *  The string
         *
         * @returns
         *  A slugified string
         */self.slugify=function(s){return s.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');};/**
         * Creates a formatted date string
         * @public
         * @memberof Services.HelperService
         *
         * @returns
         *  Today's date formatting as YYYY/mm/dd
         */self.today=function(){var d=new Date();var dd=d.getDate();var mm=d.getMonth()+1;var yyyy=d.getFullYear();if(dd<10){dd='0'+dd;}if(mm<10){mm='0'+mm;}return yyyy+'/'+mm+'/'+dd;};/**
         * Creates a formatted date string
         * @public
         * @memberof Services.HelperService
         *
         * @param {string} str
         *  The date in string format
         *
         * @returns
         *  Today's date formatting as mm/dd/YYYY
         */self.toDate=function(str){if(!str){return'';}var d=new Date(str);var dd=d.getUTCDate();var mm=d.getUTCMonth()+1;var yyyy=d.getUTCFullYear();if(dd<10){dd='0'+dd;}if(mm<10){mm='0'+mm;}return mm+'/'+dd+'/'+yyyy;};/**
         * Scrolls to an anchor
         * @public
         * @memberof Services.HelperService
         *
         * @param {string} anchor
         *  The anchor element's ID
         */self.scrollTo=function(anchor){if(anchor){// Minor delay so most of the page is rendered.
setTimeout(function(){var el=document.getElementById(anchor);if(!el){return;}var y=el.offsetTop;var node=el;while(node.offsetParent&&node.offsetParent!=document.body){node=node.offsetParent;y+=node.offsetTop;}scrollTo(0,y);},100);}};/**
         * Navigate to a given URL
         * @public
         * @memberof Services.HelperService
         *
         * @param {string} url
         *  The URL to navigate the browser to
         */self.navigateTo=function(url){$location.url(url);};/**
         * Get the query string from the location search
         * @public
         * @memberof Services.HelperService
         *
         * @returns
         *  The query string
         */self.queryString=function(){var query='';var search=$location.search();for(var n in search){if(query.length>0){query+='&';}query+=n+'='+search[n];}if(query.length>0){query='?'+query;}return query;};}})();(function(){"use strict";angular.module('fedramp.services').factory('Searcher',SearcherFactory);SearcherFactory.$inject=['$log','$parse'];function SearcherFactory($log,$parse){var ARRAY_FILTER_REGEX=/^(.*)\sin\s(.+)$/;return Searcher;/**
         * Searcher is a factory that allows objects to be traversed and searched
         * for. The idea is that you can specify a property expression to look through
         * when you execute a search. 
         *
         * @example
         * Given the following object being searched:
         *
         * {
         *      name: 'John Doe',
         *      nickname: 'JD',
         *      counts: [1,2,3,4],
         *      products: [{
         *          name: 'Prod',
         *          related: [{
         *              relatedItemName: 'Some related item'   
         *          }]
         *      }]
         *
         * }
         *
         * var searcher = new Searcher();
         * search.prop(<expression>).<action>
         *
         * search.prop('i.name in products').contains(dataToSearch, searchTerm);
         *
         * Property expression examples:
         *
         * 'i.relatedItemName in products.related' => would search everything in relatedItemName
         * 'i.name in products' => would search everything in the name key in products
         * 'i in counts' => would searching everything in the counts array
         * 'nickname' => would search in nickname
         * 
         *
         * @constructor
         * @memberof Services
         */function Searcher(){var self=this;self.prop=prop;/**
             * Executes search by defined property expression
             */function prop(expression){return new PropertyExpression(expression);}}/**
         * Handles searching for information within an object using a property expression.
         */function PropertyExpression(expression){var self=this;self.contains=contains;self.equals=equals;self.withinDateRange=withinDateRange;self.criteriaFunc=criteriaFunc;/**
             * Allows a function to be passed in to perform a manual comparison.
             */function criteriaFunc(data,func){var results=[];eachResult(data,function(currentObject,value){var add=func.call(self,currentObject,value);if(add){results.push(add);}});return results;}/**
             * Iterates through an objects properties using the specified property expression
             * and performs a contains comparison.
             */function contains(data,searchTerm){var results=[];eachResult(data,function(currentObject,value){if(value.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase())!==-1){results.push(currentObject);return true;}return false;});return results;}/**
             * Iterates through an objects properties using the specifed property expression 
             * and performs an equals comparison.
             */function equals(data,searchTerm){var results=[];eachResult(data,function(currentObject,value){if(value.toString()===searchTerm.toString()){results.push(currentObject);return true;}return false;});return results;}/**
             * Performs a date range comparison
             */function withinDateRange(data,start,end){var results=[];var startDate=new Date(start);var endDate=new Date(end);eachResult(data,function(currentObject,value){var valueDate=new Date(value);if(valueDate>=startDate&&valueDate<=endDate){results.push(currentObject);return true;}return false;});return results;}/**
             * Helper function iterates through all objects making the property expression.
             */function eachResult(data,func){if(!angular.isArray(data)){data=[data];}data.forEach(function(currentObject){new Walker(currentObject,expression).walk(function(obj){return func.call(self,currentObject,obj);});});}}/**
         * Traverses an object based on the property expression
         */function Walker(data,propExpression){var self=this;var targetKey=null;var targetProps=null;var isPrimitive=true;var useIndex=false;self.walk=walk;function walk(func){find(data,targetProps,func);}/**
             * Recursively walks an object to reach the property expression
             */function find(obj,props,q){props=angular.copy(props);if(!props){return q.call(self,$parse(targetKey)(obj));}if(props.length===0){if(isPrimitive||useIndex){//return match(obj, q);
return q.call(self,obj);}return q.call(self,$parse(targetKey)(obj));}var curProp=props.shift();var value=$parse(curProp)(obj);if(angular.isArray(value)){for(var x=0;x<value.length;x++){var found=find(value[x],props,q);if(found){return;}}}}function parseKeys(){var m=propExpression.match(ARRAY_FILTER_REGEX);if(m){targetKey=m[1].split('.').splice(1).join('.');targetProps=m[2].split('.');isPrimitive=false;useIndex=targetKey==='';}else{targetKey=propExpression;}}parseKeys();}}})();(function(){'use strict';angular.module('fedramp.services').factory('StorageData',StorageDataFactory);StorageDataFactory.$inject=['StorageManager','Data','Agency','Assessor','Product','Provider','helperService'];function StorageDataFactory(StorageManager,Data,Agency,Assessor,Product,Provider,helperService){/**
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
             */self.providers=function(){var names=[];var items=[];var data=self.all();for(var i=0;i<data.length;i++){var d=data[i];if(!include(d.name,names)){continue;}names.push(d.name.trim());var item=new Provider();item.name=d.name.trim();item.logo=d.cspUrl;items.push(item);}items.forEach(function(item){item.products=self.products().filter(function(x){return x.provider===item.name;});item.products.forEach(function(prod){prod.name=prod.name.trim();item.reuses+=prod.reuses;item.products.forEach(function(prod){if(prod.serviceModels){prod.serviceModels.forEach(function(model){if(include(model,item.serviceModels)){item.serviceModels.push(model.trim());}});}if(prod.deploymentModel){if(include(prod.deploymentModel,item.deploymentModels)){item.deploymentModels.push(prod.deploymentModel.trim());}}if(include(prod.designation,item.designations)){item.designations.push(prod.designation.trim());}if(include(prod.sponsoringAgency,item.agencies)){item.agencies.push(prod.sponsoringAgency.trim());}prod.agencies.forEach(function(a){if(include(a,item.agencies)){item.agencies.push(a);}});});});// Sort any service models
item.serviceModels=item.serviceModels?item.serviceModels.map(function(x){return x.trim();}).sort():[];});return items;};/**
             * Extracts unique products
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of products
             */self.products=function(){var names=[];var items=[];var data=self.all();var _loop=function _loop(i){var d=data[i];if(!include(d.pkg,names)){return'continue';}names.push(d.pkg.trim());var item=new Product();item.name=d.pkg.trim();item.provider=d.name.trim();item.pkgId=d.pkgId.trim();item.serviceModels=d.serviceModel?d.serviceModel.map(function(x){return x.trim();}).sort():[];item.deploymentModel=d.deploymentModel.trim();item.designation=d.designation.trim();item.impactLevel=d.impactLevel.trim();item.logo=d.cspUrl;item.independentAssessor=d.independentAssessor;item.authorizationType=d.path;item.sponsoringAgency=d.sponsoringAgency;item.authorizationDate=helperService.toDate(d.authorizationDate);item.expectedCompliance=helperService.toDate(d.expectedCompliance);item.expirationDate=helperService.toDate(d.expirationDate);item.reuses=d.atoLetters.length;var leveraged=data.filter(function(x){return x?x.underlyingCspPackages.includes(d.pkgId):false;});if(leveraged.length>0){// Add the unleveraged ATOs that use this CSP (if not and underlying CSP will be 0)
item.reuses+=leveraged.length;// Add leveraged ATO of CSP dependencies
item.reuses+=leveraged.map(function(x){return x.atoLetters.length;}).reduce(function(p,c){return p+c;});}items.push(item);};for(var i=0;i<data.length;i++){var _ret=_loop(i);if(_ret==='continue')continue;}items.forEach(function(item){data.forEach(function(d){if(d.pkg===item.name){if(include(d.sponsoringAgency,item.agencies)){item.agencies.push(d.sponsoringAgency.trim());}d.atoLetters.forEach(function(a){if(include(a.authorizingAgency,item.agencies)){item.agencies.push(a.authorizingAgency.trim());}if(include(a.authorizingSubagency,item.agencies)){item.agencies.push(a.authorizingSubagency.trim());}});}});});return items;};/**
             * Extracts unique agencies
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of agencies
             */self.agencies=function(){var names=[];var items=[];var data=self.all();// Top level
for(var i=0;i<data.length;i++){var _d=data[i];if(include(_d.sponsoringAgency,names)){names.push(_d.sponsoringAgency.trim());var _item=new Agency();_item.name=_d.sponsoringAgency.trim();items.push(_item);}}// Nested
for(var _i2=0;_i2<data.length;_i2++){var _d2=data[_i2];for(var j=0;j<_d2.atoLetters.length;j++){var l=_d2.atoLetters[j];if(include(l.authorizingAgency,names)){names.push(l.authorizingAgency.trim());var _item2=new Agency();_item2.name=l.authorizingAgency.trim();items.push(_item2);}if(include(l.authorizingSubagency,names)){names.push(l.authorizingSubagency.trim());var _item3=new Agency();_item3.name=l.authorizingSubagency.trim();items.push(_item3);}}}items.forEach(function(item){data.forEach(function(d){d.atoLetters.filter(function(x){return safeTrim(x.authorizingAgency)===item.name||safeTrim(x.authorizingSubagency)===item.name;}).forEach(function(a){item.authorized++;if(include(d.pkg,item.products)){item.products.push(d.pkg.trim());}if(include(d.name,item.providers)){item.providers.push(d.name.trim());}if(include(a.independentAssessor,item.assessors)){item.assessors.push(a.independentAssessor.trim());}});if(safeTrim(d.sponsoringAgency)===item.name){item.sponsored++;if(include(d.pkg,item.products)){item.products.push(d.pkg.trim());}if(include(d.name,item.providers)){item.providers.push(d.name.trim());}if(include(d.independentAssessor,item.assessors)){item.assessors.push(d.independentAssessor.trim());}}});item.reuses=item.sponsored+item.authorized;});return items;};/**
             * Extracts unique independent assessors
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of independent assessors
             */self.assessors=function(){var names=[];var items=[];var data=self.all();// Top level
for(var i=0;i<data.length;i++){var _d3=data[i];if(!include(_d3.independentAssessor,names)){continue;}names.push(_d3.independentAssessor.trim());var _item4=new Assessor();_item4.name=_d3.independentAssessor.trim();items.push(_item4);}// Nested
for(var _i3=0;_i3<data.length;_i3++){var _d4=data[_i3];for(var j=0;j<_d4.atoLetters.length;j++){var l=_d4.atoLetters[j];var name='';if(!include(l.independentAssessor,names)){continue;}names.push(l.independentAssessor.trim());var _item5=new Assessor();_item5.name=l.independentAssessor.trim();items.push(_item5);}}items.forEach(function(item){data.forEach(function(d){if(safeTrim(d.independentAssessor)===item.name){if(include(d.pkg,item.products)){item.products.push(d.pkg.trim());}if(include(d.name,item.providers)){item.providers.push(d.name.trim());}if(include(d.sponsoringAgency,item.agencies)){item.agencies.push(d.sponsoringAgency.trim());}}d.atoLetters.forEach(function(a){if(safeTrim(a.independentAssessor)===item.name){if(include(d.pkg,item.products)){item.products.push(d.pkg.trim());}if(include(d.name,item.providers)){item.providers.push(d.name.trim());}if(include(a.authorizingAgency,item.agencies)){item.agencies.push(a.authorizingAgency.trim());}if(include(a.authorizingSubagency,item.agencies)){item.agencies.push(a.authorizingSubagency.trim());}}});});item.reuses=item.products.length;});return items;};function safeTrim(s){if(s){return s.trim();}return'';}function include(s,a){var st=safeTrim(s);if(st&&a){return!a.includes(st);}return false;}return self.init(options);}StorageData.prototype=Object.create(StorageManager.prototype);StorageData.prototype.constructor=StorageData;return StorageData;}})();(function(){'use strict';angular.module('fedramp.services').factory('StorageManager',StorageManagerFactory);function StorageManagerFactory(){return StorageManager;}/**
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
             */self.transform=function(raw){return new Settings(raw);};return self.init(options);}StorageSettings.prototype=Object.create(StorageManager.prototype);StorageSettings.prototype.constructor=StorageSettings;return StorageSettings;}})();(function(){'use strict';angular.module('fedramp').controller('SitemapController',SitemapController);SitemapController.$inject=['$log','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function SitemapController($log,fedrampData,helperService){var self=this;/**
         * All providers in the system
         *
         * @member {array}
         * @memberof Controllers.SitemapController
         */self.providers=fedrampData.providers();/**
         * All products in the system
         *
         * @member {array}
         * @memberof Controllers.SitemapController
         */self.products=fedrampData.products();/**
         * All agencies in the system
         *
         * @member {array}
         * @memberof Controllers.SitemapController
         */self.agencies=fedrampData.agencies();/**
         * All assessors in the system
         *
         * @member {array}
         * @memberof Controllers.SitemapController
         */self.assessors=fedrampData.assessors();/**
         * The current date
         *
         * @member {string}
         * @memberof Controllers.SitemapController
         */self.today=helperService.today();/**
         * Helper to slugify a string for a URL
         *
         * @member {function}
         * @memberof Controllers.SitemapController
         */self.slugify=helperService.slugify;}})();(function(){'use strict';angular.module('fedramp').controller('SearchController',SearchController);SearchController.$inject=['$log','$sce','$http','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function SearchController($log,$sce,$http,$stateParams,fedrampData,helperService){var self=this;/**
         * Flag if there was an error receiving a response
         *
         * @member {boolean}
         * @memberof Controllers.SearchController
         */self.error=false;/**
         * The search query
         *
         * @member {string}
         * @memberof Controllers.SearchController
         */self.query=$stateParams.query;/**
         * The search results.
         *
         * @member {array}
         * @memberof Controllers.SearchController
         */self.results=[];/**
         * The external search link.
         *
         * @member {string}
         * @memberof Controllers.SearchController
         */self.externalLink='https://search.usa.gov/search?utf8=✓&affiliate=fedramp&format=html&output=embed&commit=Search&query='+self.query;/**
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
         */self.internalLink=function(path,name){var loc=window.location;return loc.protocol+'//'+loc.host+loc.pathname+'#/'+path+'/'+helperService.slugify(name);};/**
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
         */self.extension=function(url){if(url){var m=url.match(/(.*)[\/\\]([^\/\\]+)\.(\w+)$/);if(m&&m.length>=3){return'['+m[3].toUpperCase()+']';}}return'';};/**
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
         */self.markdown=function(text){text=text.replace('','**').replace('','**');text=text.replace('–','-');return $sce.trustAsHtml(new showdown.Converter().makeHtml(text));};/**
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
         */function filterByName(items,query){return items.filter(function(x){return x.name.toLowerCase().indexOf(query.toLowerCase())!==-1;});}(function(){filterByName(fedrampData.providers(),self.query).forEach(function(x){self.results.push({title:x.name,content:'',unescapedUrl:self.internalLink('provider',x.name),publishedAt:null,siteLinks:[]});});filterByName(fedrampData.products(),self.query).forEach(function(x){self.results.push({title:x.name,content:'',unescapedUrl:self.internalLink('product',x.name),publishedAt:null,siteLinks:[]});});filterByName(fedrampData.agencies(),self.query).forEach(function(x){self.results.push({title:x.name,content:'',unescapedUrl:self.internalLink('agency',x.name),publishedAt:null,siteLinks:[]});});filterByName(fedrampData.assessors(),self.query).forEach(function(x){self.results.push({title:x.name,content:'',unescapedUrl:self.internalLink('assessor',x.name),publishedAt:null,siteLinks:[]});});// Attempt to query using the form parameters but returning as JSON.
// This will have issues in development due to CORS.
$http.get('https://search.usa.gov/search',{params:{utf8:'✓',affiliate:'fedramp',format:'json',commit:'Search',query:self.query}}).then(function(response){// Sample response:
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
if(response&&response.data){if(response.data.results){self.results=response.data.results;}}},function(response){self.error=true;});})();}})();(function(){'use strict';angular.module('fedramp').controller('AgenciesController',AgenciesController);AgenciesController.$inject=['$log','agencies'];/**
     * @constructor
     * @memberof Controllers
     */function AgenciesController($log,agencies){var self=this;/**
         * The filtered data
         * @member {array}
         * @memberof Controllers.AgenciesController
         */self.filteredData=[];/**
         * The agencies
         * @member {array}
         * @memberof Controllers.AgenciesController
         */self.agencies=agencies;/**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.AgenciesController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */self.onUpdate=function(items,state){self.filteredData=items;};/**
         * Determine how many "heavy" users are in the system
         * @public
         * @member {object}
         * @memberof Controllers.AgenciesController
         *
         * @returns
         *  The number of heavy usages
         */self.heavyUsers=function(){var heavy=self.filteredData.filter(function(x){return x.reuses>=5;}).length;return self.filteredData.length===0?0:Math.round(heavy/self.filteredData.length*100);};/**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.AgenciesController
         *
         * @param {array} agencies
         *  Array of items available
         *
         * @returns
         *  An array of option values for filtering
         */self.reuseRangeOptions=function(agencies){return[{value:{min:0,max:5},label:'0 - 5',selected:false},{value:{min:6,max:10},label:'5 - 10',selected:false},{value:{min:11,max:1000},label:'> 10',selected:false}];};/**
         * Filter the data set by the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.AgenciesController
         *
         * @param {object} agency
         *  The agency to compare
         * @param {integer} index
         *  The current index within the array of items
         * @param {array} arr
         *  Array of items
         * @param {array} selectedOptions
         *  Array of selected options
         *
         * @returns
         *  The matched item or null
         */self.reuseRangeFilter=function(agency,index,arr,selectedOptions){return selectedOptions.find(function(option){if(agency.reuses>=option.value.min&&agency.reuses<=option.value.max){return agency;}});};}})();(function(){'use strict';angular.module('fedramp').controller('AgencyComparisonController',AgencyComparisonController);AgencyComparisonController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function AgencyComparisonController($log,$state,$stateParams,fedrampData,helperService){var self=this;/**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.AgencyComparisonController
         */self.items=fedrampData.agencies();/**
         * The first item
         * @member {object}
         * @memberof Controllers.AgencyComparisonController
         */self.first=self.items.find(function(x){return helperService.slugify(x.name)===$stateParams.first;});/**
         * The second item
         * @member {object}
         * @memberof Controllers.AgencyComparisonController
         */self.second=self.items.find(function(x){return helperService.slugify(x.name)===$stateParams.second;});/**
         * Close the first item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.AgencyComparisonController
         */self.closeFirst=function(){var baseUrl='/agency/'+$stateParams.second;helperService.navigateTo(baseUrl+helperService.queryString());};/**
         * Close the second item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.AgencyComparisonController
         */self.closeSecond=function(){var baseUrl='/agency/'+$stateParams.first;helperService.navigateTo(baseUrl+helperService.queryString());};helperService.scrollTo('scrollToContent');}})();(function(){'use strict';angular.module('fedramp').controller('AgencyInformationController',AgencyInformationController);AgencyInformationController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function AgencyInformationController($log,$state,$stateParams,fedrampData,helperService){var self=this;var agencies=fedrampData.agencies();/**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.AgencyInformationController
         */self.items=agencies.filter(function(x){return helperService.slugify(x.name)!==$stateParams.name;});/**
         * The item
         * @member {object}
         * @memberof Controllers.AgencyInformationController
         */self.item=agencies.find(function(x){return helperService.slugify(x.name)===$stateParams.name;});/**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.AgencyInformationController
         */self.close=function(){helperService.navigateTo('/agencies'+helperService.queryString());};/**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.AgencyInformationController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */self.onUpdate=function(items){self.filteredData=items;};/**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.AgencyInformationController
         *
         * @param {array} agencies
         *  Array of items available
         *
         * @returns
         *  An array of option values for filtering
         */self.reuseRangeOptions=function(agencies){return[{value:{min:0,max:5},label:'0 - 5',selected:false},{value:{min:6,max:10},label:'5 - 10',selected:false},{value:{min:11,max:1000},label:'> 10',selected:false}];};/**
         * Filter the data set by the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.AgencyInformationController
         *
         * @param {object} agency
         *  The agency to compare
         * @param {integer} index
         *  The current index within the array of items
         * @param {array} arr
         *  Array of items
         * @param {array} selectedOptions
         *  Array of selected options
         *
         * @returns
         *  The matched item or null
         */self.reuseRangeFilter=function(agency,index,arr,selectedOptions){return selectedOptions.find(function(option){if(agency.reuses>=option.value.min&&agency.reuses<=option.value.max){return option;}});};helperService.scrollTo('scrollToContent');}})();(function(){'use strict';angular.module('fedramp').controller('AssessorComparisonController',AssessorComparisonController);AssessorComparisonController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function AssessorComparisonController($log,$state,$stateParams,fedrampData,helperService){var self=this;/**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.AssessorComparisonController
         */self.items=fedrampData.assessors();/**
         * The first item
         * @member {object}
         * @memberof Controllers.AssessorComparisonController
         */self.first=self.items.find(function(x){return helperService.slugify(x.name)===$stateParams.first;});/**
         * The second item
         * @member {object}
         * @memberof Controllers.AssessorComparisonController
         */self.second=self.items.find(function(x){return helperService.slugify(x.name)===$stateParams.second;});/**
         * Close the first item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.AssessorComparisonController
         */self.closeFirst=function(){var baseUrl='/assessor/'+$stateParams.second;helperService.navigateTo(baseUrl+helperService.queryString());};/**
         * Close the second item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.AssessorComparisonController
         */self.closeSecond=function(){var baseUrl='/assessor/'+$stateParams.first;helperService.navigateTo(baseUrl+helperService.queryString());};helperService.scrollTo('scrollToContent');}})();(function(){'use strict';angular.module('fedramp').controller('AssessorInformationController',AssessorInformationController);AssessorInformationController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function AssessorInformationController($log,$state,$stateParams,fedrampData,helperService){var self=this;var assessors=fedrampData.assessors();/**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.AssessorInformationController
         */self.items=assessors.filter(function(x){return helperService.slugify(x.name)!==$stateParams.name;});/**
         * The item
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         */self.item=assessors.find(function(x){return helperService.slugify(x.name)===$stateParams.name;});/**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         */self.close=function(){helperService.navigateTo('/assessors'+helperService.queryString());};/**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */self.onUpdate=function(items){self.filteredData=items;};/**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         *
         * @param {array} assessors
         *  Array of items available
         *
         * @returns
         *  An array of option values for filtering
         */self.reuseRangeOptions=function(assessors){return[{value:{min:0,max:5},label:'0 - 5',selected:false},{value:{min:6,max:10},label:'5 - 10',selected:false},{value:{min:11,max:1000},label:'> 10',selected:false}];};/**
         * Filter the data set by the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         *
         * @param {object} assessor
         *  The assessor to compare
         * @param {integer} index
         *  The current index within the array of items
         * @param {array} arr
         *  Array of items
         * @param {array} selectedOptions
         *  Array of selected options
         *
         * @returns
         *  The matched item or null
         */self.reuseRangeFilter=function(assessor,index,arr,selectedOptions){return selectedOptions.find(function(option){if(assessor.reuses>=option.value.min&&assessor.reuses<=option.value.max){return assessor;}});};helperService.scrollTo('scrollToContent');}})();(function(){'use strict';angular.module('fedramp').controller('AssessorsController',AssessorsController);AssessorsController.$inject=['$log','assessors'];/**
     * @constructor
     * @memberof Controllers
     */function AssessorsController($log,assessors){var self=this;/**
         * The filtered data
         * @member {array}
         * @memberof Controllers.AssessorsController
         */self.filteredData=[];/**
         * The assessors
         * @member {array}
         * @memberof Controllers.AssessorsController
         */self.assessors=assessors;/**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.AssessorsController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */self.onUpdate=function(items,state){self.filteredData=items;};/**
         * Determine how many "heavy" users are in the system
         * @public
         * @member {object}
         * @memberof Controllers.AssessorsController
         *
         * @returns
         *  The number of heavy usages
         */self.heavyUsers=function(){var heavy=self.filteredData.filter(function(x){return x.reuses>=5;}).length;return self.filteredData.length===0?0:Math.round(heavy/self.filteredData.length*100);};/**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.AssessorsController
         *
         * @param {array} agencies
         *  Array of items available
         *
         * @returns
         *  An array of option values for filtering
         */self.reuseRangeOptions=function(assessors){return[{value:{min:0,max:5},label:'0 - 5',selected:false},{value:{min:6,max:10},label:'5 - 10',selected:false},{value:{min:11,max:1000},label:'> 10',selected:false}];};/**
         * Filter the data set by the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.AssessorsController
         *
         * @param {object} assessor
         *  The assessor to compare
         * @param {integer} index
         *  The current index within the array of items
         * @param {array} arr
         *  Array of items
         * @param {array} selectedOptions
         *  Array of selected options
         *
         * @returns
         *  The matched item or null
         */self.reuseRangeFilter=function(assessor,index,arr,selectedOptions){return selectedOptions.find(function(option){if(assessor.reuses>=option.value.min&&assessor.reuses<=option.value.max){return option;}});};}})();(function(){'use strict';angular.module('fedramp').controller('HomeController',HomeController);HomeController.$inject=['$log','fedrampData','CsvService'];/**
     * @constructor
     * @memberof Controllers
     */function HomeController($log,fedrampData,CsvService){var self=this;/**
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
         * Filters and transforms data for download
         * @public
         * @memberof Controllers.HomeController
         */self.download=function(){// IE 11 and Edge
if(navigator.msSaveBlob&&downloadBlob){navigator.msSaveBlob(downloadBlob,self.filename());}};/**
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
         */self.leveragedAtos=function(){var products=fedrampData.products();if(products.length){return products.map(function(x){return x.reuses;}).reduce(function(p,c){return p+c;});}return 0;};}})();(function(){'use strict';angular.module('fedramp').controller('ProductComparisonController',ProductComparisonController);ProductComparisonController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function ProductComparisonController($log,$state,$stateParams,fedrampData,helperService){var self=this;/**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProductComparisonController
         */self.items=fedrampData.products();/**
         * The first item
         * @member {object}
         * @memberof Controllers.ProductComparisonController
         */self.first=self.items.find(function(x){return helperService.slugify(x.name)===$stateParams.first;});/**
         * The second item
         * @member {object}
         * @memberof Controllers.ProductComparisonController
         */self.second=self.items.find(function(x){return helperService.slugify(x.name)===$stateParams.second;});/**
         * Close the first item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.ProductComparisonController
         */self.closeFirst=function(){var baseUrl='/product/'+$stateParams.second;helperService.navigateTo(baseUrl+helperService.queryString());};/**
         * Close the second item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.ProductComparisonController
         */self.closeSecond=function(){var baseUrl='/product/'+$stateParams.first;helperService.navigateTo(baseUrl+helperService.queryString());};helperService.scrollTo('scrollToContent');}})();(function(){'use strict';angular.module('fedramp').controller('ProductInformationController',ProductInformationController);ProductInformationController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function ProductInformationController($log,$state,$stateParams,fedrampData,helperService){var self=this;var products=fedrampData.products();/**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProductInformationController
         */self.items=products.filter(function(x){return helperService.slugify(x.name)!==$stateParams.name;});/**
         * The item
         * @member {object}
         * @memberof Controllers.ProductInformationController
         */self.item=products.find(function(x){return helperService.slugify(x.name)===$stateParams.name;});/**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.ProductInformationController
         */self.close=function(){helperService.navigateTo('/products'+helperService.queryString());};/**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.ProductInformationController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */self.onUpdate=function(items){self.filteredData=items;};/**
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
         */self.search=function(product,i,arr,context){// If no search term, we display result since this is the same as having nothing selected
if(!context){return product;}context=context.toLowerCase();var productName=product.name.toLowerCase();var providerName=product.provider.toLowerCase();if(productName.indexOf(context)!==-1||providerName.indexOf(context)!==-1){return product;}return null;};/**
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
         */self.reuseRangeOptions=function(products){return[{value:{min:0,max:5},label:'0 - 5',selected:false},{value:{min:6,max:10},label:'5 - 10',selected:false},{value:{min:11,max:1000},label:'> 10',selected:false}];};/**
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
         */self.reuseRangeFilter=function(product,index,arr,selectedOptions){return selectedOptions.find(function(option){if(product.reuses>=option.value.min&&product.reuses<=option.value.max){return product;}});};helperService.scrollTo('scrollToContent');}})();(function(){"use strict";angular.module('fedramp').controller('ProductsController',ProductController);ProductController.$inject=['$log','products','$stateParams','$filter','$location'];/**
     * @constructor
     * @memberof Controllers
     */function ProductController($log,products,$stateParams,$filter,$location){var self=this;/**
         * The filtered data
         * @member {array}
         * @memberof Controllers.ProductsController
         */self.filteredData=[];/**
         * The products
         * @member {array}
         * @memberof Controllers.ProductsController
         */self.products=products;/**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.ProductsController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */self.onUpdate=function(items,state){self.filteredData=items;};/**
         * Determine how many compliant items are in the filtered data
         * @public
         * @member {object}
         * @memberof Controllers.ProductsController
         *
         * @returns
         *  The number of compliant items
         */self.compliant=function(){var compliant=self.filteredData.filter(function(x){return x.designation==='Compliant'||x.designation==='In PMO Review';}).length;return self.filteredData.length===0?0:Math.round(compliant/self.filteredData.length*100);};/**
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
         */self.reuseRangeOptions=function(products){return[{value:{min:0,max:5},label:'0 - 5',selected:false},{value:{min:6,max:10},label:'5 - 10',selected:false},{value:{min:11,max:1000},label:'> 10',selected:false}];};/**
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
         */self.reuseRangeFilter=function(product,index,arr,selectedOptions){return selectedOptions.find(function(option){if(product.reuses>=option.value.min&&product.reuses<=option.value.max){return product;}});};/**
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
         */self.productNameSearchFilterFunc=function(product,i,arr,searchTerm){// If no search term, we display result since this is the same as having nothing selected
if(!searchTerm){return product;}searchTerm=searchTerm.toLowerCase();var productName=product.name.toLowerCase();var providerName=product.provider.toLowerCase();if(productName.indexOf(searchTerm)!==-1||providerName.indexOf(searchTerm)!==-1){return product;}return null;};}})();(function(){'use strict';angular.module('fedramp').controller('ProviderComparisonController',ProviderComparisonController);ProviderComparisonController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function ProviderComparisonController($log,$state,$stateParams,fedrampData,helperService){var self=this;/**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProviderComparisonController
         */self.items=fedrampData.providers();/**
         * The first item
         * @member {object}
         * @memberof Controllers.ProviderComparisonController
         */self.first=self.items.find(function(x){return helperService.slugify(x.name)===$stateParams.first;});/**
         * The second item
         * @member {object}
         * @memberof Controllers.ProviderComparisonController
         */self.second=self.items.find(function(x){return helperService.slugify(x.name)===$stateParams.second;});/**
         * Close the first item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.ProviderComparisonController
         */self.closeFirst=function(){var baseUrl='/provider/'+$stateParams.second;helperService.navigateTo(baseUrl+helperService.queryString());};/**
         * Close the second item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.ProviderComparisonController
         */self.closeSecond=function(){var baseUrl='/provider/'+$stateParams.first;helperService.navigateTo(baseUrl+helperService.queryString());};helperService.scrollTo('scrollToContent');}})();(function(){'use strict';angular.module('fedramp').controller('ProviderInformationController',ProviderInformationController);ProviderInformationController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function ProviderInformationController($log,$state,$stateParams,fedrampData,helperService){var self=this;var providers=fedrampData.providers();/**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProviderInformationController
         */self.items=providers.filter(function(x){return helperService.slugify(x.name)!==$stateParams.name;});/**
         * The item
         * @member {object}
         * @memberof Controllers.ProviderInformationController
         */self.item=providers.find(function(x){return helperService.slugify(x.name)===$stateParams.name;});/**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.ProviderInformationController
         */self.close=function(){helperService.navigateTo('/providers'+helperService.queryString());};/**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.ProviderInformationController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */self.onUpdate=function(items){self.filteredData=items;};/**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.ProviderInformationController
         *
         * @param {array} providers
         *  Array of items available
         *
         * @returns
         *  An array of option values for filtering
         */self.reuseRangeOptions=function(providers){return[{value:{min:0,max:5},label:'0 - 5',selected:false},{value:{min:6,max:10},label:'5 - 10',selected:false},{value:{min:11,max:1000},label:'> 10',selected:false}];};/**
         * Filter the data set by the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.ProviderInformationController
         *
         * @param {object} provider
         *  The provider to compare
         * @param {integer} index
         *  The current index within the array of items
         * @param {array} arr
         *  Array of items
         * @param {array} selectedOptions
         *  Array of selected options
         *
         * @returns
         *  The matched item or null
         */self.reuseRangeFilter=function(provider,index,arr,selectedOptions){return selectedOptions.find(function(option){if(provider.reuses>=option.value.min&&provider.reuses<=option.value.max){return provider;}});};helperService.scrollTo('scrollToContent');}})();(function(){'use strict';angular.module('fedramp').controller('ProvidersController',ProvidersController);ProvidersController.$inject=['$log','providers'];/**
     * @constructor
     * @memberof Controllers
     */function ProvidersController($log,providers){var self=this;/**
         * The filtered data
         * @member {array}
         * @memberof Controllers.ProvidersController
         */self.filteredData=[];/**
         * The providers
         * @member {array}
         * @memberof Controllers.ProvidersController
         */self.providers=providers;/**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Controllers.ProvidersController
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         * @param {object} state
         *  The current state of the grid
         */self.onUpdate=function(items,state){self.filteredData=items;};/**
         * Determine how many compliant items are in the filtered data
         * @public
         * @member {object}
         * @memberof Controllers.ProvidersController
         *
         * @returns
         *  The number of compliant items
         */self.compliant=function(){var compliant=self.filteredData.filter(function(x){return x.designations.includes('Compliant')||x.designations.includes('In PMO Review');}).length;return self.filteredData.length===0?0:Math.round(compliant/self.filteredData.length*100);};/**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.ProvidersController
         *
         * @param {array} providers
         *  Array of items available
         *
         * @returns
         *  An array of option values for filtering
         */self.reuseRangeOptions=function(providers){return[{value:{min:0,max:5},label:'0 - 5',selected:false},{value:{min:6,max:10},label:'5 - 10',selected:false},{value:{min:11,max:1000},label:'> 10',selected:false}];};/**
         * Filter the data set by the reuse metric
         * @public
         * @member {object}
         * @memberof Controllers.ProvidersController
         *
         * @param {object} provider
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
         */self.reuseRangeFilter=function(provider,index,arr,selectedOptions){return selectedOptions.find(function(option){if(provider.reuses>=option.value.min&&provider.reuses<=option.value.max){return provider;}});};}})();