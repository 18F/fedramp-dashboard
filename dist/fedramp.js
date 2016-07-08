'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/**
 * @namespace Controllers
 */(function(){'use strict';angular.module('fedramp',['ui.router','fedramp.models','fedramp.services','fedramp.components']).config(['$compileProvider',function($compileProvider){$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob|data):/);}]).run(run);run.$inject=['$log','$rootScope'];function run($log,$rootScope){$log.debug('fedramp module initializing');$rootScope.$on("$stateChangeError",$log.debug.bind($log));}})();/**
 * @namespace Components
 */(function(){'use strict';angular.module('fedramp.components',['fedramp.models','fedramp.services']).run(run);run.$inject=['$log'];function run($log){$log.debug('fedramp.components module initializing');}})();/**
 * @namespace Models
 */(function(){'use strict';angular.module('fedramp.models',[]).run(run);run.$inject=['$log'];function run($log){$log.debug('fedramp.model module initializing');}})();/**
 * @namespace Services
 */(function(){'use strict';angular.module('fedramp.services',['fedramp.models']).run(run);run.$inject=['$log'];function run($log){$log.debug('fedramp.services module initializing');}})();angular.module('fedramp').run(['$templateCache',function($templateCache){$templateCache.put('src/fedramp/base.html','<ui-view />\n');$templateCache.put('src/fedramp/fedramp.html','<div id="topnav">\n    <div class="limit clearfix">\n        <!-- SEARCH FORM -->\n        <search />\n\n        <!-- PRIMARY NAVIGATION -->\n        <ul class="nav sf-js-enabled">\n            <li id="menu-item-11972" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11972 first-child last-child">\n                <a href="https://www.fedramp.gov/contact-us/">Contact Us</a>\n            </li>\n        </ul>\n        <select title="Top navigation menu" class="select-menu">\n            <option value="#" selected>Navigate to ...</option>\n            <option value="https://www.fedramp.gov/contact-us/">&nbsp;Contact Us</option>\n        </select>\n\n        <!-- SOCIAL MEDIA ICONS -->\n        <div class="sub-icons">\n            <ul class="clearfix">\n                <li class="first-child">\n                    <a class="subicon rss" title="Subscribe via RSS Feed" href="https://www.fedramp.gov/feed/">RSS Feed</a>\n                </li>\n                <li class="last-child">\n                    <a class="subicon twitter" rel="external" title="Follow @FedRAMP on Twitter" href="http://www.twitter.com/FedRAMP" target="_blank">Twitter</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n<div id="header" class="clearfix">\n    <div id="head-content" class="clearfix">\n\n        <!-- SITE-TITLE/LOGO -->\n        <div id="sitetitle">\n            <a href="https://www.fedramp.gov" title="FedRAMP"><img src="https://fedramp.sites.usa.gov/files/2015/02/logo3.png" alt="FedRAMP"></a>\n        </div>\n        \n        <!-- SECONDARY NAVIGATION -->\n        <div id="catnav">\n            <ul class="catnav clearfix sf-js-enabled">\n                <li id="menu-item-6842" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6842 first-child"><a href="https://www.fedramp.gov/">Home</a></li>\n                <li id="menu-item-8242" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8242"><a href="#" class="sf-with-ul">About Us</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-4102" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4102 first-child"><a href="https://www.fedramp.gov/about-us/about/">Program Overview</a></li>\n                        <li id="menu-item-7972" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7972"><a href="https://www.fedramp.gov/about-us/team-bios/">Team Bios</a></li>\n                        <li id="menu-item-8222" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8222"><a href="https://www.fedramp.gov/about-us/governance/">Governance</a></li>\n                        <li id="menu-item-44351" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-44351 last-child"><a href="javascript:void(0);" class="sf-with-ul">FedRAMP Forward</a>\n                            <ul class="sub-menu" style="display: none;">\n                                <li id="menu-item-51961" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51961 first-child"><a href="https://www.fedramp.gov/about-us/fedramp-first-four-years-last-nine-months/">FedRAMP: First Four Years &amp; Last Nine Months</a></li>\n                                <li id="menu-item-34752" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-34752"><a href="https://www.fedramp.gov/about-us/fedramp-forward-a-look-back-at-the-last-six-months/">FedRAMP Forward (Part 1)</a></li>\n                                <li id="menu-item-44381" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-44381 last-child"><a href="https://www.fedramp.gov/about-us/fedramp-forward-part-2/">FedRAMP Forward (Part 2)</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n                <li id="menu-item-8252" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8252"><a href="#" class="sf-with-ul">Participate</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-53191" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-53191 first-child"><a title="FedRAMP Accelerated" href="https://www.fedramp.gov/participate/fedramp-accelerated-process/">FedRAMP Accelerated Process</a></li>\n                        <li id="menu-item-4192" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4192"><a href="https://www.fedramp.gov/participate/agencies/">Federal Agencies</a></li>\n                        <li id="menu-item-4172" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4172"><a href="https://www.fedramp.gov/participate/csps/">Cloud Service Providers</a></li>\n                        <li id="menu-item-4182" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4182"><a href="https://www.fedramp.gov/participate/3paos/" class="sf-with-ul">Independent Assessors</a>\n                            <ul class="sub-menu" style="display: none;">\n                                <li id="menu-item-45731" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-45731 first-child last-child"><a href="https://www.fedramp.gov/participate/3paos/a2la-accreditation/">A2LA Accreditation</a></li>\n                            </ul>\n                        </li>\n                        <li id="menu-item-8022" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8022 last-child"><a href="https://www.fedramp.gov/provide-public-comment/">Provide Public Comment</a></li>\n                    </ul>\n                </li>\n                <li id="menu-item-8272" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-8272"><a href="#" class="sf-with-ul">Marketplace</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-10722" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-782 current_page_item menu-item-10722 first-child"><a href="https://www.fedramp.gov/marketplace/compliant-systems/">FedRAMP Compliant Systems</a></li>\n                        <li id="menu-item-10712" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10712"><a href="https://www.fedramp.gov/marketplace/in-process-systems/">FedRAMP In-Process Systems</a></li>\n                        <li id="menu-item-10702" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10702"><a href="https://www.fedramp.gov/marketplace/fedramp-ready-systems/">FedRAMP Ready Systems</a></li>\n                        <li id="menu-item-4082" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4082 last-child"><a href="https://www.fedramp.gov/marketplace/accredited-3paos/">Accredited 3PAOs</a></li>\n                    </ul>\n                </li>\n                <li id="menu-item-8292" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8292"><a href="#" class="sf-with-ul">Resources</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-53181" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-53181 first-child"><a title="Documents" href="https://www.fedramp.gov/resources/documents-2016/">Documents</a></li>\n                        <li id="menu-item-54551" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-54551"><a href="https://www.fedramp.gov/resources/templates-2016/">Templates</a></li>\n                        <li id="menu-item-29852" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-29852"><a href="https://www.fedramp.gov/resources/nist-publications/">NIST Publications</a></li>\n                        <li id="menu-item-4092" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4092 last-child"><a href="https://www.fedramp.gov/resources/faqs/">FAQs</a></li>\n                    </ul>\n                </li>\n                <li id="menu-item-32742" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-32742"><a href="#" class="sf-with-ul">Training</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-32382" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32382 first-child"><a href="https://www.fedramp.gov/resources/training/">FedRAMP Training</a></li>\n                        <li id="menu-item-32412" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32412 last-child"><a href="https://www.fedramp.gov/resources/fedramp-webcasts/">FedRAMP Webcasts</a></li>\n                    </ul>\n                </li>\n                <li id="menu-item-33192" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-33192 last-child"><a href="#" class="sf-with-ul">Newsroom</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-27632" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-27632 first-child"><a href="https://www.fedramp.gov/category/newsroom/">Newsroom</a></li>\n                        <li id="menu-item-23732" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23732 last-child"><a href="https://www.fedramp.gov/events/">Events</a></li>\n                    </ul>\n                </li>\n            </ul>\n            <select title="Navigation menu for FedRAMP" class="select-menu-catnav">\n                <option value="#" selected>Navigate to ...</option>\n                <option value="https://www.fedramp.gov/">&nbsp;Home</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;About Us</option>\n                <option value="https://www.fedramp.gov/about-us/about/">–&nbsp;&nbsp;Program Overview</option>\n                <option value="https://www.fedramp.gov/about-us/team-bios/">–&nbsp;&nbsp;Team Bios</option>\n                <option value="https://www.fedramp.gov/about-us/governance/">–&nbsp;&nbsp;Governance</option>\n                <option value="">–&nbsp;&nbsp;FedRAMP Forward</option>\n                <option value="https://www.fedramp.gov/about-us/fedramp-first-four-years-last-nine-months/">–&nbsp;–&nbsp;&nbsp;FedRAMP: First Four Years &amp; Last Nine Months</option>\n                <option value="https://www.fedramp.gov/about-us/fedramp-forward-a-look-back-at-the-last-six-months/">–&nbsp;–&nbsp;&nbsp;FedRAMP Forward (Part 1)</option>\n                <option value="https://www.fedramp.gov/about-us/fedramp-forward-part-2/">–&nbsp;–&nbsp;&nbsp;FedRAMP Forward (Part 2)</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Participate</option>\n                <option value="https://www.fedramp.gov/participate/fedramp-accelerated-process/">–&nbsp;&nbsp;FedRAMP Accelerated Process</option>\n                <option value="https://www.fedramp.gov/participate/agencies/">–&nbsp;&nbsp;Federal Agencies</option>\n                <option value="https://www.fedramp.gov/participate/csps/">–&nbsp;&nbsp;Cloud Service Providers</option>\n                <option value="https://www.fedramp.gov/participate/3paos/">–&nbsp;&nbsp;Independent Assessors</option>\n                <option value="https://www.fedramp.gov/participate/3paos/a2la-accreditation/">–&nbsp;–&nbsp;&nbsp;A2LA Accreditation</option>\n                <option value="https://www.fedramp.gov/provide-public-comment/">–&nbsp;&nbsp;Provide Public Comment</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Marketplace</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/">–&nbsp;&nbsp;FedRAMP Compliant Systems</option>\n                <option value="https://www.fedramp.gov/marketplace/in-process-systems/">–&nbsp;&nbsp;FedRAMP In-Process Systems</option>\n                <option value="https://www.fedramp.gov/marketplace/fedramp-ready-systems/">–&nbsp;&nbsp;FedRAMP Ready Systems</option>\n                <option value="https://www.fedramp.gov/marketplace/accredited-3paos/">–&nbsp;&nbsp;Accredited 3PAOs</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Resources</option>\n                <option value="https://www.fedramp.gov/resources/documents-2016/">–&nbsp;&nbsp;Documents</option>\n                <option value="https://www.fedramp.gov/resources/templates-2016/">–&nbsp;&nbsp;Templates</option>\n                <option value="https://www.fedramp.gov/resources/nist-publications/">–&nbsp;&nbsp;NIST Publications</option>\n                <option value="https://www.fedramp.gov/resources/faqs/">–&nbsp;&nbsp;FAQs</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Training</option>\n                <option value="https://www.fedramp.gov/resources/training/">–&nbsp;&nbsp;FedRAMP Training</option>\n                <option value="https://www.fedramp.gov/resources/fedramp-webcasts/">–&nbsp;&nbsp;FedRAMP Webcasts</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Newsroom</option>\n                <option value="https://www.fedramp.gov/category/newsroom/">–&nbsp;&nbsp;Newsroom</option>\n                <option value="https://www.fedramp.gov/events/">–&nbsp;&nbsp;Events</option>\n            </select>\n        </div>\n    </div>\n</div>\n\n<ui-view></ui-view>\n\n<footer class="usa-footer usa-footer-big usa-sans" role="contentinfo">\n</footer>\n');$templateCache.put('src/fedramp.components/agency.html','<div class="usa-grid">\n    <a ng-click="controller.close()"><div class="usa-width-whole">Close</div></a>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-two-thirds">\n        <!-- Logo -->\n        Logo\n    </div>\n    <div class="usa-width-one-sixth">\n        <!-- Status -->\n        Status\n    </div>\n    <div class="usa-width-one-sixth">\n        {{controller.model.reuse}}\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Contact Information</strong>\n    </div>\n    <div>POC:</div>\n    <div>E-mail:</div>\n    <div>Website:</div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Providers:</strong>\n    </div>\n    <div class="usa-width-one-whole">\n        <ul>\n            <li ng-repeat="provider in controller.model.providers track by $index">{{provider}}</li>\n        </ul>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Products:</strong>\n    </div>\n    <div class="usa-width-one-whole">\n        <ul>\n            <li ng-repeat="product in controller.model.products track by $index">{{product}}</li>\n        </ul>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Independent Assessors:</strong>\n    </div>\n    <div class="usa-width-one-whole">\n        <ul>\n            <li ng-repeat="assessor in controller.model.assessors track by $index">{{assessor}}</li>\n        </ul>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>FedRAMP Compliant Detail</strong>\n    </div>\n    <div>Authorization Type:</div>\n    <div>Agency Lead:</div>\n</div>\n');$templateCache.put('src/fedramp.components/assessor.html','<div class="usa-grid">\n    <a ng-click="controller.close()"><div class="usa-width-whole">Close</div></a>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-two-thirds">\n        <!-- Logo -->\n        Logo\n    </div>\n    <div class="usa-width-one-sixth">\n        <!-- Status -->\n        Status\n    </div>\n    <div class="usa-width-one-sixth">\n        {{controller.model.reuse}}\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Contact Information</strong>\n    </div>\n    <div>POC: {{controller.model.pointOfContact}}</div>\n    <div>E-mail: {{controller.model.email}}</div>\n    <div>Website: {{controller.model.url}}</div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Description</strong>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Providers:</strong>\n    </div>\n    <div class="usa-width-one-whole">\n        <ul>\n            <li ng-repeat="provider in controller.model.providers track by $index">{{provider}}</li>\n        </ul>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Products:</strong>\n    </div>\n    <div class="usa-width-one-whole">\n        <ul>\n            <li ng-repeat="product in controller.model.products track by $index">{{product}}</li>\n        </ul>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Agencies:</strong>\n    </div>\n    <div class="usa-width-one-whole">\n        <ul>\n            <li ng-repeat="agency in controller.model.agencies track by $index">{{agency}}</li>\n        </ul>\n    </div>\n</div>\n');$templateCache.put('src/fedramp.components/product.html','<div class="usa-grid">\n    <a ng-click="controller.close()"><div class="usa-width-whole">Close</div></a>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-two-thirds">\n        <!-- Logo -->\n        Logo\n    </div>\n    <div class="usa-width-one-sixth">\n        <!-- Status -->\n        Status\n    </div>\n    <div class="usa-width-one-sixth">\n        {{controller.model.reuse}}\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>System Profile</strong>\n    </div>\n    <div>\n        Service Model<span ng-show="controller.model.serviceModels.length > 1">s</span>:\n        {{controller.model.serviceModels.join(\', \')}}\n    </div>\n    <div>\n        Deployment Model:\n        {{controller.model.deploymentModel}}\n    </div>\n    <div>\n        Impact Level:\n        {{controller.model.impactLevel}}\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Contact Information</strong>\n    </div>\n    <div>POC:</div>\n    <div>E-mail:</div>\n    <div>Website:</div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Package ID</strong>\n        <p>{{controller.model.pkgId}}</p>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Service Description</strong>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>FedRAMP Compliant Detail</strong>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Associated Risks</strong>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Agencies using this service</strong>\n    </div>\n    <div class="usa-width-one-whole">\n        <ul>\n            <li ng-repeat="agency in controller.model.agencies track by $index">{{agency}}</li>\n        </ul>\n    </div>\n</div>\n');$templateCache.put('src/fedramp.components/provider.html','<div class="usa-grid">\n    <a ng-click="controller.close()"><div class="usa-width-whole">Close</div></a>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-two-thirds">\n        <!-- Logo -->\n        Logo\n    </div>\n    <div class="usa-width-one-sixth">\n        <!-- Status -->\n        Status\n    </div>\n    <div class="usa-width-one-sixth">\n        {{controller.model.reuse}}\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>System Profile</strong>\n    </div>\n    <div>\n        Service Model<span ng-show="controller.model.serviceModels.length > 1">s</span>:\n        {{controller.model.serviceModels.join(\', \')}}\n    </div>\n    <div>\n        Deployment Model<span ng-show="controller.model.deploymentModels.length > 1">s</span>:\n        {{controller.model.deploymentModels.join(\', \')}}\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Contact Information</strong>\n    </div>\n    <div>POC:</div>\n    <div>E-mail:</div>\n    <div>Website:</div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Service Description</strong>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>FedRAMP Compliant Detail</strong>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Associated Risks</strong>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Products</strong>\n    </div>\n    <div class="usa-width-one-whole">\n        <ul>\n            <li ng-repeat="product in controller.model.products track by $index">{{product}}</li>\n        </ul>\n    </div>\n</div>\n<div class="usa-grid">\n    <div class="usa-width-one-whole">\n        <strong>Agencies using this service</strong>\n    </div>\n    <div class="usa-width-one-whole">\n        <ul>\n            <li ng-repeat="agency in controller.model.agencies track by $index">{{agency}}</li>\n        </ul>\n    </div>\n</div>\n');$templateCache.put('src/fedramp.components/search.html','<form id="search_form" method="get" ng-submit="controller.search($event)" accept-charset="UTF-8" action="http://search.usa.gov/search">\n    <input type="hidden" name="utf8" value="✓" />\n    <input type="hidden" name="affiliate" id="affiliate" value="fedramp" />\n    <input type="hidden" name="format" id="format" value="{{controller.format}}" />\n    <input type="text" name="query" id="query" title="Search query" ng-model="controller.query" class="usagov-search-autocomplete ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" />\n    <input type="submit" name="commit" value="Search" />\n</form>\n');$templateCache.put('src/fedramp.components/tile.html','<a ng-click="controller.view()">\n    <div ng-if="controller.expand" class="usa-width-one-whole tile expanded">\n        <div class="usa-grid-full">\n            <div class="usa-width-one-third">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n            <div class="usa-width-one-sixth">\n                <div ng-repeat="service in controller.model.serviceModel">{{ service }}</div>\n                &nbsp;\n            </div>\n            <div class="usa-width-one-sixth">\n                <span>{{ controller.model.deploymentModel }}</span>\n                &nbsp;\n            </div>\n            <div class="usa-width-one-sixth">\n                <span>{{ controller.model.impactLevel }}</span>\n                &nbsp;\n            </div>\n            <div class="usa-width-one-twelfth">\n                <!-- Status -->\n                Status\n            </div>\n            <div class="usa-width-one-twelfth">\n                <!-- Reuses -->\n                {{ controller.model.reuses }}\n                &nbsp;\n            </div>\n        </div>\n    </div>\n    <div ng-if="!controller.expand" class="usa-width-one-half tile">\n        <div class="usa-grid-full">\n            <div class="usa-width-two-thirds">\n                <!-- Logo -->\n                Logo\n            </div>\n            <div class="usa-width-one-sixth">\n                <!-- Status -->\n                Status\n            </div>\n            <div class="usa-width-one-sixth">\n                <!-- Reuses -->\n                {{ controller.model.reuses }}\n            </div>\n        </div>\n        <div class="usa-grid-full">\n            <div class="usa-width-one-whole">\n                <div>\n                    <strong>Service Model:</strong>\n                    {{ controller.model.serviceModel.join(\', \') }}\n                </div>\n                <div>\n                    <strong>Deployment Model:</strong>\n                    {{ controller.model.deploymentModel }}\n                </div>\n                <div>\n                    <strong>Impact Level:</strong>\n                    {{ controller.model.impactLevel }}\n                </div>\n            </div>\n        </div>\n    </div>\n</a>\n');$templateCache.put('src/fedramp/home/agencies.html','<tile ng-repeat="item in controller.agencies track by $index" expand="homeController.expandTiles" model="item" />\n<div class="usa-grid-full">\n    <div class="usa-width-one-whole text-center">\n        <download-csv content="controller.agencies">\n            <button>\n                <span>Export to CSV</span>\n                <i class="fa fa-download" aria-hidden="true" style="margin-left: 1rem;"></i>\n            </button>\n        </download-csv>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/agency-comparison.html','<div class="usa-content">\n    <div class="usa-grid">\n        <div class="usa-width-one-half">\n            <agency model="controller.first" on-close="controller.closeFirst" />\n        </div>\n        <div class="usa-width-one-half">\n            <agency model="controller.second" on-close="controller.closeSecond" />\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/agency-information.html','<div class="usa-content">\n    <div class="usa-grid">\n        <div class="usa-width-one-half">\n            <agency model="controller.item" on-close="controller.close" />\n        </div>\n        <div class="usa-width-one-half">\n            <div ng-show="controller.items.length > 0">\n                <div class="usa-grid">\n                    <tile ng-repeat="model in controller.items track by $index" expand="true" model="model" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/agency.html','<ui-view />\n');$templateCache.put('src/fedramp/home/assessor-comparison.html','<div class="usa-content">\n    <div class="usa-grid">\n        <div class="usa-width-one-half">\n            <assessor model="controller.first" on-close="controller.closeFirst" />\n        </div>\n        <div class="usa-width-one-half">\n            <assessor model="controller.second" on-close="controller.closeSecond" />\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/assessor-information.html','<div class="usa-content">\n    <div class="usa-grid">\n        <div class="usa-width-one-half">\n            <assessor model="controller.item" on-close="controller.close" />\n        </div>\n        <div class="usa-width-one-half">\n            <div ng-show="controller.items.length > 0">\n                <div class="usa-grid">\n                    <tile ng-repeat="model in controller.items track by $index" expand="true" model="model" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/assessor.html','<ui-view />\n');$templateCache.put('src/fedramp/home/assessors.html','<tile ng-repeat="item in controller.assessors track by $index" expand="homeController.expandTiles" model="item" />\n<div class="usa-grid-full">\n    <div class="usa-width-one-whole text-center">\n        <download-csv content="controller.assessors">\n            <button>\n                <span>Export to CSV</span>\n                <i class="fa fa-download" aria-hidden="true" style="margin-left: 1rem;"></i>\n            </button>\n        </download-csv>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/home.html','<div class="usa-content">\n    <div class="usa-grid-full text-center">\n        <div class="usa-width-one-half">\n            <p>\n                <strong style="font-size: larger;">{{homeController.leveragedAtos()}}</strong>\n                <div>Total reuses</div>\n            </p>\n        </div>\n        <div class="usa-width-one-half">\n            <p>\n                <strong style="font-size: larger;">{{homeController.totalAuthorized()}}</strong>\n                <div>Total Authorized</div>\n            </p>\n        </div>\n    </div>\n    <div class="usa-grid-full text-center">\n        <div class="usa-width-one-third">\n            <p>\n                <strong style="font-size: larger;">67%</strong>\n                <div>TBD</div>\n            </p>\n        </div>\n        <div class="usa-width-one-third">\n            <p>\n                <strong style="font-size: larger;">${{homeController.totalCostSavings()}}</strong>\n                <div>Cost Savings</div>\n            </p>\n        </div>\n        <div class="usa-width-one-third">\n            <p>\n                <strong style="font-size: larger;">3,297</strong>\n                <div>TBD</div>\n            </p>\n        </div>\n    </div>\n    <div class="text-center">Filter results by</div>\n    <div ng-show="homeController.hasData()">\n        <div class="filters usa-grid-full">\n            <div class="usa-width-one-fourth">\n                <button id="filterByCSO"\n                        type="radio"\n                        ui-sref="fedramp.app.home.products">\n                    Cloud Service Offerings\n                </button>\n            </div>\n            <div class="usa-width-one-fourth">\n                <button id="filterByCSP"\n                        ui-sref="fedramp.app.home.providers">\n                    Cloud Service Providers\n                </button>\n            </div>\n            <div class="usa-width-one-fourth">\n                <button id="filterByAgency"\n                        ui-sref="fedramp.app.home.agencies">\n                    Agencies\n                </button>\n            </div>\n            <div class="usa-width-one-fourth">\n                <button id="filterBy3PAO"\n                        ui-sref="fedramp.app.home.assessors">\n                    3PAO\n                </button>\n            </div>\n        </div>\n        <div class="usa-grid-full">\n            <div class="usa-width-one-whole">\n                <div style="float: right;">\n                    <label>\n                        <input type="checkbox" ng-model="homeController.expandTiles" />\n                        <div>\n                            <span><i class="fa fa-th fa-1" aria-hidden="true"></i></span>\n                        </div>\n                        <div>\n                            <span><i class="fa fa-th-list fa-1" aria-hidden="true"></i></span>\n                        </div>\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ui-view/>\n');$templateCache.put('src/fedramp/home/product-comparison.html','<div class="usa-content">\n    <div class="usa-grid">\n        <div class="usa-width-one-half">\n            <product model="controller.first" on-close="controller.closeFirst" />\n        </div>\n        <div class="usa-width-one-half">\n            <product model="controller.second" on-close="controller.closeSecond" />\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/product-information.html','<div class="usa-content">\n    <div class="usa-grid">\n        <div class="usa-width-one-half">\n            <product model="controller.item" on-close="controller.close" />\n        </div>\n        <div class="usa-width-one-half">\n            <div ng-show="controller.items.length > 0">\n                <div class="usa-grid">\n                    <tile ng-repeat="model in controller.items track by $index" expand="true" model="model" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/product.html','<ui-view />\n');$templateCache.put('src/fedramp/home/products.html','<!--<select id="filter"-->\n        <!--ng-model="controller.search.name"-->\n        <!--ng-options="option for option in controller.filterOptions"-->\n        <!--ng-change="controller.applyFilter()">-->\n    <!--<option value=""></option>-->\n<!--</select>-->\n<!--<select -->\n        <!--ng-model="controller.search.agency"-->\n        <!--ng-options="option for option in controller.agencies">-->\n    <!--<option value=""></option>-->\n<!--</select>-->\n<!--<select -->\n        <!--ng-model="controller.search.serviceModel"-->\n        <!--ng-options="option for option in controller.serviceModels">-->\n    <!--<option value=""></option>-->\n<!--</select>-->\n<!--<input type="text" ng-model="controller.search.provider"/>-->\n\n<style>\n.badge {\n    display: inline-block;\n    min-width: 10px;\n    padding: 3px 7px;\n    font-size: 12px;\n    line-height: 1;\n    color: #000;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    background-color: #e5e5e5;\n    border-radius: 10px;\n}\n</style>\n<div class="usa-grid-full">\n    <div class="usa-width-one-whole">\n        <select style="text-align:center;margin:1em auto;" ng-model="controller.selectedFilter" ng-options="option as option.name group by option.type for option in controller.filterOptionGroups" ng-change="controller.filterSelected()"></select>\n        <span ng-repeat="selected in controller.selectedNames" class="badge">\n            {{selected}} <a ng-click="controller.removeProviderFilter(selected)">(X)</a>\n        </span>\n\n        <span ng-repeat="selected in controller.selectedAgencies" class="badge">\n            {{selected}} <a ng-click="controller.removeAgencyFilter(selected)">(X)</a>\n        </span>\n\n        <span ng-repeat="selected in controller.selectedServiceModels" class="badge">\n            {{selected}} <a ng-click="controller.removeServiceModelFilter(selected)">(X)</a>\n        </span>\n    </div>\n</div>\n<tile ng-repeat="item in controller.filteredData track by $index" expand="homeController.expandTiles" model="item" />\n<div class="usa-grid-full">\n    <div class="usa-width-one-whole text-center">\n        <download-csv content="controller.filteredData">\n            <button>\n                <span>Export to CSV</span>\n                <i class="fa fa-download" aria-hidden="true" style="margin-left: 1rem;"></i>\n            </button>\n        </download-csv>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/provider-comparison.html','<div class="usa-content">\n    <div class="usa-grid">\n        <div class="usa-width-one-half">\n            <provider model="controller.first" on-close="controller.closeFirst" />\n        </div>\n        <div class="usa-width-one-half">\n            <provider model="controller.second" on-close="controller.closeSecond" />\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/provider-information.html','<div class="usa-content">\n    <div class="usa-grid">\n        <div class="usa-width-one-half">\n            <provider model="controller.item" on-close="controller.close" />\n        </div>\n        <div class="usa-width-one-half">\n            <div ng-show="controller.items.length > 0">\n                <div class="usa-grid">\n                    <tile ng-repeat="model in controller.items track by $index" expand="true" model="model" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/home/provider.html','<ui-view />\n');$templateCache.put('src/fedramp/home/providers.html','<tile ng-repeat="item in controller.providers track by $index" expand="homeController.expandTiles" model="item" />\n<div class="usa-grid-full">\n    <div class="usa-width-one-whole text-center">\n        <download-csv content="controller.providers">\n            <button>\n                <span>Export to CSV</span>\n                <i class="fa fa-download" aria-hidden="true" style="margin-left: 1rem;"></i>\n            </button>\n        </download-csv>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/search/search.html','<div id="search">\n    <div class="article usa-grid-full" ng-repeat="article in controller.results track by $index">\n        <h4 class="article-title">\n            <span class="article-ext-type">{{controller.extension(article.unescapedUrl)}}</span>\n            <a ng-href="{{article.unescapedUrl}}" title="{{article.title}}">{{article.title}}</a>\n        </h4>\n        <div class="article-url">{{article.unescapedUrl}}</div>\n        <span class="article-description" ng-bind-html="controller.markdown(article.content)"></span>\n        <ul class="article-site-links">\n            <li ng-repeat="link in article.siteLinks"></li>\n        </ul>\n    </div>\n    <div id="internal-only" class="text-center" ng-if="controller.results.length > 0">\n        <p>\n            For more results please go to <a ng-href="{{controller.externalLink}}" title="Search on USA.gov">search.usa.gov</a>\n        </p>\n    </div>\n    <div id="no-results" class="text-center" ng-if="controller.results.length === 0">\n        <p>\n            There was a problem retrieving your search results. Please try the\n            search at <a ng-href="{{controller.externalLink}}" title="Search on USA.gov">search.usa.gov</a>\n        </p>\n    </div>\n</div>\n');$templateCache.put('src/fedramp/sitemap/sitemap.html','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n   <url ng-repeat="item in controller.providers track by $index">\n      <loc>https://truetandem.github.io/fedramp-dashboard/provider/{{controller.slugify(item.name)}}</loc>\n      <lastmod>{{controller.today}}</lastmod>\n      <changefreq>daily</changefreq>\n      <priority>0.8</priority>\n   </url>\n   <url ng-repeat="item in controller.products track by $index">\n      <loc>https://truetandem.github.io/fedramp-dashboard/product/{{controller.slugify(item.name)}}</loc>\n      <lastmod>{{controller.today}}</lastmod>\n      <changefreq>daily</changefreq>\n      <priority>0.8</priority>\n   </url>\n   <url ng-repeat="item in controller.agencies track by $index">\n      <loc>https://truetandem.github.io/fedramp-dashboard/agency/{{controller.slugify(item.name)}}</loc>\n      <lastmod>{{controller.today}}</lastmod>\n      <changefreq>daily</changefreq>\n      <priority>0.8</priority>\n   </url>\n   <url ng-repeat="item in controller.assessors track by $index">\n      <loc>https://truetandem.github.io/fedramp-dashboard/assessor/{{controller.slugify(item.name)}}</loc>\n      <lastmod>{{controller.today}}</lastmod>\n      <changefreq>daily</changefreq>\n      <priority>0.8</priority>\n   </url>\n</urlset> \n');}]);(function(){'use strict';angular.module('fedramp').config(routeConfig);// Add items to inject for safe minification
routeConfig.$inject=['$stateProvider','$urlRouterProvider'];/**
     * Configures the routes and views for the FedRAMP application
     */function routeConfig($stateProvider,$urlRouterProvider){// Go to root if something goes wrong
$urlRouterProvider.otherwise('/');// Routes
$stateProvider.state('fedramp',{abstract:true,templateUrl:'src/fedramp/base.html',resolve:{fedrampData:['DataService',function(DataService){return DataService.pull().then(function(storage){return storage;});}]}}).state('fedramp.sitemap',{url:'/sitemap.xml',templateUrl:'src/fedramp/sitemap/sitemap.html',controller:'SitemapController as controller'}).state('fedramp.app',{abstract:true,templateUrl:'src/fedramp/fedramp.html'}).state('fedramp.app.search',{url:'/search/:query',templateUrl:'src/fedramp/search/search.html',controller:'SearchController as controller'}).state('fedramp.app.home',{url:'',templateUrl:'src/fedramp/home/home.html',controller:'HomeController as homeController'}).state('fedramp.app.home.providers',{url:'/providers',templateUrl:'src/fedramp/home/providers.html',controller:'ProvidersController as controller',resolve:{providers:['fedrampData',function(fedrampData){return fedrampData.providers();}]}}).state('fedramp.app.provider',{url:'/provider',templateUrl:'src/fedramp/home/provider.html'}).state('fedramp.app.provider.information',{url:'/:name',templateUrl:'src/fedramp/home/provider-information.html',controller:'ProviderInformationController as controller'}).state('fedramp.app.home.provider.comparison',{url:'/:first/versus/:second',templateUrl:'src/fedramp/home/provider-comparison.html',controller:'ProviderComparisonController as controller'}).state('fedramp.app.home.products',{url:'/products',templateUrl:'src/fedramp/home/products.html',controller:'ProductsController as controller',resolve:{products:['fedrampData',function(fedrampData){return fedrampData.products();}]}}).state('fedramp.app.product',{url:'/product',templateUrl:'src/fedramp/home/product.html'}).state('fedramp.app.product.information',{url:'/:name',templateUrl:'src/fedramp/home/product-information.html',controller:'ProductInformationController as controller'}).state('fedramp.app.product.comparison',{url:'/:first/versus/:second',templateUrl:'src/fedramp/home/product-comparison.html',controller:'ProductComparisonController as controller'}).state('fedramp.app.home.agencies',{url:'/agencies',templateUrl:'src/fedramp/home/agencies.html',controller:'AgenciesController as controller',resolve:{agencies:['fedrampData',function(fedrampData){return fedrampData.agencies();}]}}).state('fedramp.app.agency',{url:'/agency',templateUrl:'src/fedramp/home/agency.html'}).state('fedramp.app.agency.information',{url:'/:name',templateUrl:'src/fedramp/home/agency-information.html',controller:'AgencyInformationController as controller'}).state('fedramp.app.agency.information.comparison',{url:'/:first/versus/:second',templateUrl:'src/fedramp/home/agency-comparison.html',controller:'AgencyComparisonController as controller,'}).state('fedramp.app.home.assessors',{url:'/assessors',templateUrl:'src/fedramp/home/assessors.html',controller:'AssessorsController as controller',resolve:{assessors:['fedrampData',function(fedrampData){return fedrampData.assessors();}]}}).state('fedramp.app.assessor',{url:'/assessor',templateUrl:'src/fedramp/home/assessor.html'}).state('fedramp.app.assessor.information',{url:'/:name',templateUrl:'src/fedramp/home/assessor-information.html',controller:'AssessorInformationController as controller'}).state('fedramp.app.assessor.information.comparison',{url:'/:first/versus/:second',templateUrl:'src/fedramp/home/assessor-comparison.html',controller:'AssessorComparisonController as controller'});}})();(function(){'use strict';angular.module('fedramp.components').component('agency',{templateUrl:'src/fedramp.components/agency.html',controller:Agency,controllerAs:'controller',bindings:{model:'<',onClose:'<'}});Agency.$inject=['$log','$state'];/**
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
         */function $onChanges(changes){$log.debug(changes);prepareDownload();}/**
         * Generates the appropriate csv content and blob and sets it on the downloadUrl
         */function prepareDownload(){var csv=CsvService.toCsv(CsvService.flatten(self.content));if(csv){var downloadBlob=new Blob([csv],{type:'text/csv;charset=utf-8;'});self.downloadUrl=window.URL.createObjectURL(downloadBlob);}}/**
         * Filters and transforms data for download
         * @public
         * @memberof Components.DownloadCsv
         */function download(){$log.info('Download clicked');if(navigator.msSaveBlob&&downloadBlob){// IE 11 and Edge
navigator.msSaveBlob(downloadBlob,self.filename());}}/**
         * Generates the file name to be used when downloading the data
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  A file name in the format "fedramp-YYYY-mm-dd.csv"
         */function filename(date){if(!date){date=new Date();}var dd=date.getDate();var mm=date.getMonth()+1;var yyyy=date.getFullYear();if(dd<10){dd='0'+dd;}if(mm<10){mm='0'+mm;}return'fedramp-'+yyyy+'-'+mm+'-'+dd+'.csv';}}})();(function(){'use strict';angular.module('fedramp.components').component('product',{templateUrl:'src/fedramp.components/product.html',controller:Product,controllerAs:'controller',bindings:{model:'<',onClose:'<'}});Product.$inject=['$log','$state'];/**
     * @constructor
     * @memberof Components
     */function Product($log,$state){var self=this;/**
         * Close the informational panel
         * @public
         * @memberof Components.Product
         */self.close=function(){if(self.onClose){self.onClose();return;}$state.go('fedramp.app.home',{},{reload:true});};}})();(function(){'use strict';angular.module('fedramp.components').component('provider',{templateUrl:'src/fedramp.components/provider.html',controller:Provider,controllerAs:'controller',bindings:{model:'<',onClose:'<'}});Provider.$inject=['$log','$state'];/**
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
         * @memberof Controllers.HomeController
         */self.format='html';/**
         * The search query.
         *
         * @member {string}
         * @memberof Controllers.HomeController
         */self.query='';/**
         * Redirect to the search view to handle rendering of results
         *
         * @public
         * @memberof Components.Search
         */self.search=function(e){if(e){e.preventDefault();}if(self.query){$state.go('fedramp.app.search',{query:self.query},{reload:true});}};}})();(function(){'use strict';angular.module('fedramp.components').component('tile',{templateUrl:'src/fedramp.components/tile.html',controller:Tile,controllerAs:'controller',bindings:{expand:'<',model:'<'}});Tile.$inject=['$log','$state','$stateParams','helperService'];/**
     * @constructor
     * @memberof Components
     */function Tile($log,$state,$stateParams,helperService){var self=this;/**
         * Redirect to the appropriate view
         * @public
         * @memberof Components.Tile
         */self.view=function(){if($stateParams.name){$state.go('fedramp.app.'+self.model.type+'.comparison',{first:helperService.slugify($stateParams.name),second:helperService.slugify(self.model.name)},{reload:true});}else{$state.go('fedramp.app.'+self.model.type+'.information',{name:helperService.slugify(self.model.name)},{reload:true});}};}})();(function(){'use strict';angular.module('fedramp.models').factory('Agency',AgencyFactory);AgencyFactory.$inject=[];function AgencyFactory(){/**
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
var self=this;var mapping={'Cloud_Service_Provider_Name':'name','Cloud_Service_Provider_Package':'pkg','Path':'path','Designation':'designation','Package_ID':'pkgId','Service_Model':'serviceModel','Deployment_Model':'deploymentModel','Impact_Level':'impactLevel','Original_Authorization_Date':'authorizationDate','Original_Expiration_Date':'expirationDate','Sponsoring_Agency':'sponsoringAgency','Active':'active','CSP_URL':'cspUrl','Underlying_CSP_Package_ID':'underlyingCspPackages','Stage':'stage','Independent_Assessor':'independentAssessor','Leveraged_ATO_Letters':'atoLetters'};/**
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
         */self.pull=function(url){return $http.get(url).then(function(response){return response.data;});};}})();(function(){'use strict';angular.module('fedramp.services').service('helperService',HelperService);HelperService.$inject=['$log'];function HelperService($log){var self=this;self.slugify=function(s){return s.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');};/**
         * Creates a formatted date string
         * @private
         * @memberof Models.Settings
         *
         * @returns
         *  Today's date formatting as mm/dd/YYYY
         */self.today=function(){var d=new Date();var dd=d.getDate();var mm=d.getMonth()+1;var yyyy=d.getFullYear();if(dd<10){dd='0'+dd;}if(mm<10){mm='0'+mm;}return yyyy+'/'+mm+'/'+dd;};}})();(function(){'use strict';angular.module('fedramp.services').factory('StorageData',StorageDataFactory);StorageDataFactory.$inject=['StorageManager','Data','Agency','Assessor','Product','Provider'];function StorageDataFactory(StorageManager,Data,Agency,Assessor,Product,Provider){/**
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
             */self.providers=function(){var names=[];var items=[];var data=self.all();for(var i=0;i<data.length;i++){var d=data[i];if(!include(d.name,names)){continue;}names.push(d.name.trim());var item=new Provider();item.name=d.name.trim();items.push(item);}items.forEach(function(item){item.products=self.products().filter(function(x){return x.provider===item.name;});item.products.forEach(function(prod){item.reuses+=prod.reuses;item.products.forEach(function(prod){if(prod.serviceModels){prod.serviceModels.forEach(function(model){if(include(model,item.serviceModels)){item.serviceModels.push(model.trim());}});}});item.products.forEach(function(prod){if(prod.deploymentModels){prod.deplomentModels.forEach(function(model){if(include(model,item.deploymentModels)){item.deploymentModels.push(model.trim());}});}});item.products.forEach(function(prod){if(include(prod.designation,item.designations)){item.designations.push(prod.designation.trim());}});});});return items;};/**
             * Extracts unique products
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of products
             */self.products=function(){var names=[];var items=[];var data=self.all();var _loop=function _loop(i){var d=data[i];if(!include(d.pkg,names)){return'continue';}names.push(d.pkg.trim());var item=new Product();item.name=d.pkg.trim();item.provider=d.name.trim();item.pkgId=d.pkgId.trim();item.serviceModels=d.serviceModel?d.serviceModel:[];item.deploymentModel=d.deploymentModel.trim();item.designation=d.designation.trim();item.impactLevel=d.impactLevel.trim();item.reuses=d.atoLetters.length;var leveraged=data.filter(function(x){return x?x.underlyingCspPackages.includes(d.pkgId):false;});if(leveraged.length>0){// Add the unleveraged ATOs that use this CSP (if not and underlying CSP will be 0)
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
             */self.transform=function(raw){return new Settings(raw);};return self.init(options);}StorageSettings.prototype=Object.create(StorageManager.prototype);StorageSettings.prototype.constructor=StorageSettings;return StorageSettings;}})();(function(){'use strict';angular.module('fedramp').controller('AgenciesController',AgenciesController);AgenciesController.$inject=['$log','agencies'];/**
     * @constructor
     * @memberof Controllers
     */function AgenciesController($log,agencies){var self=this;$log.debug(agencies);self.agencies=agencies;}})();(function(){'use strict';angular.module('fedramp').controller('AgencyComparisonController',AgencyComparisonController);AgencyComparisonController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
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
         */self.closeFirst=function(){$state.go('fedramp.app.'+self.second.type+'.information',{name:$stateParams.second},{reload:true});};/**
         * Close the second item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.AgencyComparisonController
         */self.closeSecond=function(){$state.go('fedramp.app.'+self.first.type+'.information',{name:$stateParams.first},{reload:true});};}})();(function(){})();(function(){'use strict';angular.module('fedramp').controller('AgencyInformationController',AgencyInformationController);AgencyInformationController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function AgencyInformationController($log,$state,$stateParams,fedrampData,helperService){var self=this;/**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.AgencyInformationController
         */self.items=fedrampData.agencies();/**
         * The item
         * @member {object}
         * @memberof Controllers.AgencyInformationController
         */self.item=self.items.find(function(x){return helperService.slugify(x.name)===$stateParams.name;});/**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.AgencyInformationController
         */self.close=function(){$state.go('fedramp.app.home',{},{reload:true});};}})();(function(){'use strict';angular.module('fedramp').controller('AssessorComparisonController',AssessorComparisonController);AssessorComparisonController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
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
         */self.closeFirst=function(){$state.go('fedramp.app.'+self.second.type+'.information',{name:$stateParams.second},{reload:true});};/**
         * Close the second item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.AssessorComparisonController
         */self.closeSecond=function(){$state.go('fedramp.app.'+self.first.type+'.information',{name:$stateParams.first},{reload:true});};}})();(function(){})();(function(){'use strict';angular.module('fedramp').controller('AssessorInformationController',AssessorInformationController);AssessorInformationController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function AssessorInformationController($log,$state,$stateParams,fedrampData,helperService){var self=this;/**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.AssessorInformationController
         */self.items=fedrampData.assessors();/**
         * The item
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         */self.item=self.items.find(function(x){return helperService.slugify(x.name)===$stateParams.name;});/**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.AssessorInformationController
         */self.close=function(){$state.go('fedramp.app.home',{},{reload:true});};}})();(function(){'use strict';angular.module('fedramp').controller('AssessorsController',AssessorsController);AssessorsController.$inject=['$log','assessors'];/**
     * @constructor
     * @memberof Controllers
     */function AssessorsController($log,assessors){var self=this;$log.debug(assessors);self.assessors=assessors;}})();(function(){'use strict';angular.module('fedramp').controller('HomeController',HomeController);HomeController.$inject=['$log','fedrampData','CsvService'];/**
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
         */self.leveragedAtos=function(){var products=fedrampData.products();if(products.length){return products.map(function(x){return x.reuses;}).reduce(function(p,c){return p+c;});}return 0;};/**
         * Sorts the filtered data
         */function sortData(){if(!self.sortBy||self.sortBy.length===0){return;}self.filteredData=self.filteredData.sort(function(a,b){if(a[self.sortBy]===b[self.sortBy]){return 0;}if(self.sortAscending){return a[self.sortBy]<b[self.sortBy]?-1:1;}return a[self.sortBy]>b[self.sortBy]?-1:1;});}}})();(function(){'use strict';angular.module('fedramp').controller('ProductComparisonController',ProductComparisonController);ProductComparisonController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
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
         */self.closeFirst=function(){$state.go('fedramp.app.'+self.second.type+'.information',{name:$stateParams.second},{reload:true});};/**
         * Close the second item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.ProductComparisonController
         */self.closeSecond=function(){$state.go('fedramp.app.'+self.first.type+'.information',{name:$stateParams.first},{reload:true});};}})();(function(){'use strict';angular.module('fedramp').controller('ProductController',ProductController);ProductController.$inject=['$log','fedrampData'];/**
     * @constructor
     * @memberof Controllers
     */function ProductController($log,fedrampData){var self=this;}})();(function(){'use strict';angular.module('fedramp').controller('ProductInformationController',ProductInformationController);ProductInformationController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function ProductInformationController($log,$state,$stateParams,fedrampData,helperService){var self=this;/**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProductInformationController
         */self.items=fedrampData.products();/**
         * The item
         * @member {object}
         * @memberof Controllers.ProductInformationController
         */self.item=self.items.find(function(x){return helperService.slugify(x.name)===$stateParams.name;});/**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.ProductInformationController
         */self.close=function(){$state.go('fedramp.app.home',{},{reload:true});};}})();(function(){"use strict";angular.module('fedramp').controller('ProductsController',ProductController);ProductController.$inject=['$log','products','$stateParams','$filter'];function ProductController($log,products,$stateParams,$filter){var self=this;self.filterOptionGroups=[];// Agencies
self.agencies=[];// Product Names
self.productNames=[];// Service Models
self.serviceModels=[];// Selected product names
self.selectedNames=[];// Selected agencies
self.selectedAgencies=[];// Selected service models
self.selectedServiceModels=[];// Assign products resolve to controller
self.products=products;// Funcs
self.filterName=filterName;self.filterServiceModel=filterServiceModel;self.filterAgency=filterAgency;self.filterSelected=filterSelected;self.removeProviderFilter=removeProviderFilter;self.removeAgencyFilter=removeAgencyFilter;self.removeServiceModelFilter=removeServiceModelFilter;// Used to prevent duplicate options
var filterCache={};function onInit(){// Populate Product names
var providerCache={};self.products.forEach(function(value,index,arr){if(!providerCache[value.provider]){self.filterOptionGroups.push({name:value.provider,type:'Provider'});providerCache[value.provider]=true;}});// Populate Agency list
var agencyMap={};self.products.forEach(function(element,index,array){if(element&&element.agencies){element.agencies.forEach(function(agency){if(agency&&!agencyMap[agency]){self.agencies.push(agency);self.filterOptionGroups.push({name:agency,type:'Agency'});agencyMap[agency]=true;}});}});// Populate service models
self.serviceModels=['IaaS','PaaS','SaaS'];self.serviceModels.forEach(function(value,index,arr){self.filterOptionGroups.push({name:value,type:'Service Model'});});self.filterOptionGroups.sort(function(a,b){if(a.name===b.name){return 0;}if(a.name<b.name){return-1;}return 1;});applyFilters();}/**
         * Filter applied to render by product name
         */function filterName(value,index,arr){if(self.selectedNames&&self.selectedNames.length>0){if(self.selectedNames.includes(value.provider)){return value;}return null;}return value;}/**
         * Filter applied to render by service model
         */function filterServiceModel(value,index,arr){if(self.selectedServiceModels&&self.selectedServiceModels.length>0){var found=false;self.selectedServiceModels.forEach(function(curValue){if(value.serviceModels.includes(curValue)){found=true;}});if(!found){return null;}}return value;}/**
         * Filter applied to render by agency
         */function filterAgency(value,index,arr){if(self.selectedAgencies&&self.selectedAgencies.length>0&&value.agencies){var found=false;for(var x=0;x<self.selectedAgencies.length;x++){var curValue=self.selectedAgencies[x];if(value.agencies.includes(curValue)){found=true;}}if(!found){return null;}}return value;}function filterSelected(){if(!filterCache[self.selectedFilter.name]){switch(self.selectedFilter.type){case'Provider':self.selectedNames.push(self.selectedFilter.name);filterCache[self.selectedFilter.name]=true;break;case'Agency':self.selectedAgencies.push(self.selectedFilter.name);filterCache[self.selectedFilter.name]=true;break;case'Service Model':self.selectedServiceModels.push(self.selectedFilter.name);filterCache[self.selectedFilter.name]=true;break;}}applyFilters();}/**
         * Applies angular filters rather than applying them in markup. This
         * improves efficiency and allows us to retain a reference to the filtered
         * items
         */function applyFilters(){var f=$filter('filter')(self.products,filterName);f=$filter('filter')(f,filterAgency);f=$filter('filter')(f,filterServiceModel);self.filteredData=f;}/**
         * Removes a provider tag filter
         */function removeProviderFilter(filter){var pos=self.selectedNames.indexOf(filter);self.selectedNames.splice(pos,1);filterCache[filter]=false;applyFilters();}/**
         * Removes an agency tag filter
         */function removeAgencyFilter(filter){var pos=self.selectedAgencies.indexOf(filter);self.selectedAgencies.splice(pos,1);filterCache[filter]=false;applyFilters();}/**
         * Removes a service model tag filter
         */function removeServiceModelFilter(filter){var pos=self.selectedServiceModels.indexOf(filter);self.selectedServiceModels.splice(pos,1);filterCache[filter]=false;applyFilters();}// Initialize everything
onInit();}})();(function(){'use strict';angular.module('fedramp').controller('ProviderComparisonController',ProviderComparisonController);ProviderComparisonController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
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
         */self.closeFirst=function(){$state.go('fedramp.app.'+self.second.type+'.information',{name:$stateParams.second},{reload:true});};/**
         * Close the second item and return to the informational view
         * @public
         * @member {object}
         * @memberof Controllers.ProviderComparisonController
         */self.closeSecond=function(){$state.go('fedramp.app.'+self.first.type+'.information',{name:$stateParams.first},{reload:true});};}})();(function(){})();(function(){'use strict';angular.module('fedramp').controller('ProviderInformationController',ProviderInformationController);ProviderInformationController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function ProviderInformationController($log,$state,$stateParams,fedrampData,helperService){var self=this;/**
         * The related items for this type of item
         * @member {array}
         * @memberof Controllers.ProviderInformationController
         */self.items=fedrampData.providers();/**
         * The item
         * @member {object}
         * @memberof Controllers.ProviderInformationController
         */self.item=self.items.find(function(x){return helperService.slugify(x.name)===$stateParams.name;});/**
         * Close the information and return to the home view
         * @public
         * @member {object}
         * @memberof Controllers.ProviderInformationController
         */self.close=function(){$state.go('fedramp.app.home',{},{reload:true});};}})();(function(){'use strict';angular.module('fedramp').controller('ProvidersController',ProvidersController);ProvidersController.$inject=['$log','providers'];/**
     * @constructor
     * @memberof Controllers
     */function ProvidersController($log,providers){var self=this;self.providers=providers;}})();(function(){'use strict';angular.module('fedramp').controller('SearchController',SearchController);SearchController.$inject=['$log','$sce','$http','$stateParams','fedrampData','helperService'];/**
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
if(response&&response.data){if(response.data.results){self.results=response.data.results;}}},function(response){self.error=true;});})();}})();(function(){'use strict';angular.module('fedramp').controller('SitemapController',SitemapController);SitemapController.$inject=['$log','fedrampData','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function SitemapController($log,fedrampData,helperService){var self=this;self.providers=fedrampData.providers();self.products=fedrampData.products();self.agencies=fedrampData.agencies();self.assessors=fedrampData.assessors();self.today=helperService.today();self.slugify=helperService.slugify;}})();