'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/**
 * @namespace Controllers
 */(function(){'use strict';angular.module('fedramp',['ui.router','sticky','fedramp.models','fedramp.services','fedramp.components']).config(['$compileProvider','fedrampDataProvider',function($compileProvider,fedrampDataProvider){$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob|data):/);$compileProvider.debugInfoEnabled(false);fedrampDataProvider.defaults.cache=true;}]).run(run);run.$inject=['$log','$rootScope'];function run($log,$rootScope){$log.debug('fedramp module initializing');$rootScope.$on("$stateChangeError",$log.debug.bind($log));}})();/**
 * @namespace Components
 */(function(){'use strict';angular.module('fedramp.components',['fedramp.models','fedramp.services']).run(run);run.$inject=['$log'];function run($log){$log.debug('fedramp.components module initializing');}})();/**
 * @namespace Models
 */(function(){'use strict';angular.module('fedramp.models',[]).run(run);run.$inject=['$log'];function run($log){$log.debug('fedramp.model module initializing');}})();/**
 * @namespace Services
 */(function(){'use strict';angular.module('fedramp.services',['fedramp.models'])// Path to data.json
.constant('dataUrl','https://raw.githubusercontent.com/18F/fedramp-data/master/data/data.json').constant('dictionaryUrl','https://raw.githubusercontent.com/18F/fedramp-data/master/dictionary/dictionary.json').run(run);run.$inject=['$log'];function run($log){$log.debug('fedramp.services module initializing');}})();angular.module('fedramp').run(['$templateCache',function($templateCache){$templateCache.put('src/templates/base.html','<ui-view />\n');$templateCache.put('src/templates/fedramp.html','<div id="topnav" class="hidden-print">\n    <div class="limit clearfix">\n        <!-- SEARCH FORM -->\n        <search />\n\n        <!-- PRIMARY NAVIGATION -->\n        <ul class="nav sf-js-enabled">\n            <li id="menu-item-11972" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11972 first-child last-child">\n                <a href="https://www.fedramp.gov/contact-us/">Contact Us</a>\n            </li>\n        </ul>\n        <select title="Top navigation menu" class="select-menu">\n            <option value="#" selected>Navigate to ...</option>\n            <option value="https://www.fedramp.gov/contact-us/">&nbsp;Contact Us</option>\n        </select>\n\n        <!-- SOCIAL MEDIA ICONS -->\n        <div class="sub-icons">\n            <ul class="clearfix">\n                <li class="first-child">\n                    <a class="subicon rss" title="Subscribe via RSS Feed" href="https://www.fedramp.gov/feed/">RSS Feed</a>\n                </li>\n                <li class="last-child">\n                    <a class="subicon twitter" rel="external" title="Follow @FedRAMP on Twitter" href="http://www.twitter.com/FedRAMP" target="_blank">Twitter</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n<div id="header" class="clearfix">\n    <div id="head-content" class="clearfix">\n\n        <!-- SITE-TITLE/LOGO -->\n        <div id="sitetitle">\n            <a href="https://www.fedramp.gov" title="FedRAMP"><img src="https://fedramp.sites.usa.gov/files/2015/02/logo3.png" alt="FedRAMP"></a>\n        </div>\n        \n        <!-- SECONDARY NAVIGATION -->\n        <div id="catnav" class="hidden-print">\n            <ul class="catnav clearfix sf-js-enabled">\n                <li id="menu-item-6842" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6842 first-child"><a href="https://www.fedramp.gov/">Home</a></li>\n                <li id="menu-item-8242" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8242"><a href="#" class="sf-with-ul">About Us</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-4102" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4102 first-child"><a href="https://www.fedramp.gov/about-us/about/">Program Overview</a></li>\n                        <li id="menu-item-7972" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7972"><a href="https://www.fedramp.gov/about-us/team-bios/">Team Bios</a></li>\n                        <li id="menu-item-8222" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8222"><a href="https://www.fedramp.gov/about-us/governance/">Governance</a></li>\n                        <li id="menu-item-44351" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-44351 last-child"><a href="javascript:void(0);" class="sf-with-ul">FedRAMP Forward</a>\n                            <ul class="sub-menu" style="display: none;">\n                                <li id="menu-item-51961" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51961 first-child"><a href="https://www.fedramp.gov/about-us/fedramp-first-four-years-last-nine-months/">FedRAMP: First Four Years &amp; Last Nine Months</a></li>\n                                <li id="menu-item-34752" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-34752"><a href="https://www.fedramp.gov/about-us/fedramp-forward-a-look-back-at-the-last-six-months/">FedRAMP Forward (Part 1)</a></li>\n                                <li id="menu-item-44381" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-44381 last-child"><a href="https://www.fedramp.gov/about-us/fedramp-forward-part-2/">FedRAMP Forward (Part 2)</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n                <li id="menu-item-8252" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8252"><a href="#" class="sf-with-ul">Participate</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-53191" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-53191 first-child"><a title="FedRAMP Accelerated" href="https://www.fedramp.gov/participate/fedramp-accelerated-process/">FedRAMP Accelerated Process</a></li>\n                        <li id="menu-item-4192" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4192"><a href="https://www.fedramp.gov/participate/agencies/">Federal Agencies</a></li>\n                        <li id="menu-item-4172" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4172"><a href="https://www.fedramp.gov/participate/csps/">Cloud Service Providers</a></li>\n                        <li id="menu-item-4182" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4182"><a href="https://www.fedramp.gov/participate/3paos/" class="sf-with-ul">Independent Assessors</a>\n                            <ul class="sub-menu" style="display: none;">\n                                <li id="menu-item-45731" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-45731 first-child last-child"><a href="https://www.fedramp.gov/participate/3paos/a2la-accreditation/">A2LA Accreditation</a></li>\n                            </ul>\n                        </li>\n                        <li id="menu-item-8022" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8022 last-child"><a href="https://www.fedramp.gov/provide-public-comment/">Provide Public Comment</a></li>\n                    </ul>\n                </li>\n                <li id="menu-item-8272" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-8272"><a href="#" class="sf-with-ul">Marketplace</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-10722" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-782 current_page_item menu-item-10722 first-child"><a href="https://www.fedramp.gov/marketplace/compliant-systems/">FedRAMP Compliant Systems</a></li>\n                        <li id="menu-item-10712" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10712"><a href="https://www.fedramp.gov/marketplace/in-process-systems/">FedRAMP In-Process Systems</a></li>\n                        <li id="menu-item-10702" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10702"><a href="https://www.fedramp.gov/marketplace/fedramp-ready-systems/">FedRAMP Ready Systems</a></li>\n                        <li id="menu-item-4082" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4082 last-child"><a href="https://www.fedramp.gov/marketplace/accredited-3paos/">Accredited 3PAOs</a></li>\n                    </ul>\n                </li>\n                <li id="menu-item-8292" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8292"><a href="#" class="sf-with-ul">Resources</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-53181" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-53181 first-child"><a title="Documents" href="https://www.fedramp.gov/resources/documents-2016/">Documents</a></li>\n                        <li id="menu-item-54551" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-54551"><a href="https://www.fedramp.gov/resources/templates-2016/">Templates</a></li>\n                        <li id="menu-item-29852" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-29852"><a href="https://www.fedramp.gov/resources/nist-publications/">NIST Publications</a></li>\n                        <li id="menu-item-4092" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4092 last-child"><a href="https://www.fedramp.gov/resources/faqs/">FAQs</a></li>\n                    </ul>\n                </li>\n                <li id="menu-item-32742" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-32742"><a href="#" class="sf-with-ul">Training</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-32382" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32382 first-child"><a href="https://www.fedramp.gov/resources/training/">FedRAMP Training</a></li>\n                        <li id="menu-item-32412" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32412 last-child"><a href="https://www.fedramp.gov/resources/fedramp-webcasts/">FedRAMP Webcasts</a></li>\n                    </ul>\n                </li>\n                <li id="menu-item-33192" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-33192 last-child"><a href="#" class="sf-with-ul">Newsroom</a>\n                    <ul class="sub-menu" style="display: none;">\n                        <li id="menu-item-27632" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-27632 first-child"><a href="https://www.fedramp.gov/category/newsroom/">Newsroom</a></li>\n                        <li id="menu-item-23732" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23732 last-child"><a href="https://www.fedramp.gov/events/">Events</a></li>\n                    </ul>\n                </li>\n            </ul>\n            <select title="Navigation menu for FedRAMP" class="select-menu-catnav">\n                <option value="#" selected>Navigate to ...</option>\n                <option value="https://www.fedramp.gov/">&nbsp;Home</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;About Us</option>\n                <option value="https://www.fedramp.gov/about-us/about/">–&nbsp;&nbsp;Program Overview</option>\n                <option value="https://www.fedramp.gov/about-us/team-bios/">–&nbsp;&nbsp;Team Bios</option>\n                <option value="https://www.fedramp.gov/about-us/governance/">–&nbsp;&nbsp;Governance</option>\n                <option value="">–&nbsp;&nbsp;FedRAMP Forward</option>\n                <option value="https://www.fedramp.gov/about-us/fedramp-first-four-years-last-nine-months/">–&nbsp;–&nbsp;&nbsp;FedRAMP: First Four Years &amp; Last Nine Months</option>\n                <option value="https://www.fedramp.gov/about-us/fedramp-forward-a-look-back-at-the-last-six-months/">–&nbsp;–&nbsp;&nbsp;FedRAMP Forward (Part 1)</option>\n                <option value="https://www.fedramp.gov/about-us/fedramp-forward-part-2/">–&nbsp;–&nbsp;&nbsp;FedRAMP Forward (Part 2)</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Participate</option>\n                <option value="https://www.fedramp.gov/participate/fedramp-accelerated-process/">–&nbsp;&nbsp;FedRAMP Accelerated Process</option>\n                <option value="https://www.fedramp.gov/participate/agencies/">–&nbsp;&nbsp;Federal Agencies</option>\n                <option value="https://www.fedramp.gov/participate/csps/">–&nbsp;&nbsp;Cloud Service Providers</option>\n                <option value="https://www.fedramp.gov/participate/3paos/">–&nbsp;&nbsp;Independent Assessors</option>\n                <option value="https://www.fedramp.gov/participate/3paos/a2la-accreditation/">–&nbsp;–&nbsp;&nbsp;A2LA Accreditation</option>\n                <option value="https://www.fedramp.gov/provide-public-comment/">–&nbsp;&nbsp;Provide Public Comment</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Marketplace</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/">–&nbsp;&nbsp;FedRAMP Compliant Systems</option>\n                <option value="https://www.fedramp.gov/marketplace/in-process-systems/">–&nbsp;&nbsp;FedRAMP In-Process Systems</option>\n                <option value="https://www.fedramp.gov/marketplace/fedramp-ready-systems/">–&nbsp;&nbsp;FedRAMP Ready Systems</option>\n                <option value="https://www.fedramp.gov/marketplace/accredited-3paos/">–&nbsp;&nbsp;Accredited 3PAOs</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Resources</option>\n                <option value="https://www.fedramp.gov/resources/documents-2016/">–&nbsp;&nbsp;Documents</option>\n                <option value="https://www.fedramp.gov/resources/templates-2016/">–&nbsp;&nbsp;Templates</option>\n                <option value="https://www.fedramp.gov/resources/nist-publications/">–&nbsp;&nbsp;NIST Publications</option>\n                <option value="https://www.fedramp.gov/resources/faqs/">–&nbsp;&nbsp;FAQs</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Training</option>\n                <option value="https://www.fedramp.gov/resources/training/">–&nbsp;&nbsp;FedRAMP Training</option>\n                <option value="https://www.fedramp.gov/resources/fedramp-webcasts/">–&nbsp;&nbsp;FedRAMP Webcasts</option>\n                <option value="https://www.fedramp.gov/marketplace/compliant-systems/#">&nbsp;Newsroom</option>\n                <option value="https://www.fedramp.gov/category/newsroom/">–&nbsp;&nbsp;Newsroom</option>\n                <option value="https://www.fedramp.gov/events/">–&nbsp;&nbsp;Events</option>\n            </select>\n        </div>\n    </div>\n</div>\n\n<a id="scrollToContent"></a>\n<ui-view></ui-view>\n\n<footer class="usa-footer usa-footer-big usa-sans limit hidden-print" role="contentinfo">\n    <div class="usa-grid usa-footer-return-to-top hidden">\n        <a href="#">Return to top</a>\n    </div>\n    <div class="usa-footer-primary-section">\n        <div class="usa-grid-full">\n            <nav class="usa-footer-nav usa-width-one-whole">\n                <ul class="usa-unstyled-list usa-width-one-third usa-footer-primary-content">\n                    <li class="usa-footer-primary-link">\n                        <h3>Contact Information</h3>\n                    </li>\n                    <li>\n                        <i class="fa fa-user" aria-hidden="true"></i>\n                        <span>FedRAMP PMO</span>\n                    </li>\n                    <li>\n                        <i class="fa fa-envelope" aria-hidden="true"></i>\n                        <a href="mailto:info@fedramp.gov">Email</a>\n                    </li>\n                    <li>\n                        <i class="fa fa-globe" aria-hidden="true"></i>\n                        <p>General Services Administration<br />\n                        1800 F Street, Washington, DC 20006</p>\n                    </li>\n                </ul>\n                <ul class="usa-unstyled-list usa-width-one-third usa-footer-primary-content">\n                    <li class="usa-footer-primary-link">\n                        <h3>Follow @FedRAMP on Twitter</h3>\n                    </li>\n                    <li>\n                        <a class="twitter-timeline" href="https://twitter.com/FedRAMP">Tweets by @FedRAMP</a>\n                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n                    </li>\n                </ul>\n                <ul class="usa-unstyled-list usa-width-one-third usa-footer-primary-content">\n                    <li class="usa-footer-primary-link">\n                        <h3>Subscribe to Updates</h3>\n                    </li>\n                    <li><a href="https://public.govdelivery.com/accounts/USGSA/subscriber/topics?qsp=USGSA_2224">Add your email to FedRAMP\'s subscriber list.</a></li>\n                </ul>\n            </nav>\n        </div>\n    </div>\n</footer>\n');$templateCache.put('src/templates/components/agencies-grid.html','<grid class="grid" raw-items="controller.agencies" on-update="controller.onUpdate(items, state)" state="controller.savedState">\n    <div class="sidebar hidden-print" ng-show="!controller.hideFilters">\n        <grid-filter-clear class="clear-filters"><i class="fa fa-times" aria-hidden="true"></i> Clear All</grid-filter-clear>\n        <grid-search id="searchName" property="name" placeholder="Search by Agency Name"></grid-search>\n        <grid-total></grid-total>\n        <grid-filter id="productsUsed" header="Products Used" expanded="true" opened="true" options-func="controller.reuseRangeOptions" filter-func="controller.reuseRangeFilter" class="grid-filter"></grid-filter>\n        <grid-filter id="assessors" property="a in assessors" header="Assessors" opened="false" expanded="true" class="grid-filter"></grid-filter>\n        <grid-filter id="products" property="p in products" header="Products" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="providers" property="p in providers" header="Providers" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <div class="export hidden-print" sticky offset="30">\n            <download-csv content="controller.filteredData" ng-if="controller.filteredData">\n                <button class="usa-button-secondary">\n                    <span>Export to CSV</span>\n                    <i class="fa fa-download" aria-hidden="true"></i>\n                </button>\n            </download-csv>\n        </div>\n    </div>\n    <div class="grid full-width-print" ng-class="{\'grid-with-sidebar\': !controller.hideFilters}">\n        <grid-filter-print></grid-filter-print>\n        <div class="fr-grid-layout fr-grid-header" ng-show="!controller.hideFilters">\n            <div class="fr-grid-layout-row">\n                <div class="fr-grid-cell-name">\n                    <grid-sort name="name" property="name" header="Name" class="grid-sort" default="true"></grid-sort>          \n                </div>\n                <div class="fr-grid-cell-contact">\n                    <grid-sort name="contactInformation" header="Contact Information" property="type" class="grid-sort"></grid-sort>    \n                </div>\n                <div class="fr-grid-cell-metric">\n                    <grid-sort name="products" property="products.length" class="grid-sort"></grid-sort>    \n                </div>\n            </div>\n        </div>\n        <tile ng-repeat="item in controller.filteredData" expand="controller.expandTiles" model="item"></tile>\n    </div>\n    <div class="clear"></div>\n</grid>\n');$templateCache.put('src/templates/components/agency.html','<div class="information agency">\n    <div class="row close hidden-print">\n        <a ng-click="controller.close()">\n            <div class="col">\n                <i class="fa fa-times"></i>\n                <br />\n                Close\n            </div>\n        </a>\n    </div>\n    <div class="row header">\n        <div class="col">\n            <div class="logo">\n                <img ng-if="controller.model.logo" ng-src="{{controller.model.logo}}" alt="Logo for {{controller.model.logo}}" />\n                <div ng-if="!controller.model.logo" class="no-image"></div>\n            </div>\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n        </div>\n        <div class="col reuse">\n            <div class="number">{{controller.model.products.length}}</div>\n            <div class="text">{{controller.model.useLabel}}</div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="contact-information">\n            <h4>Contact Information</h4>\n            <dl>\n                <dt ng-if="controller.model.pocName">POC:</dt>\n                <dd ng-if="controller.model.pocName">{{controller.model.pocName}}</dd>\n                <dt ng-if="controller.model.pocEmail">E-mail:</dt>\n                <dd ng-if="controller.model.pocEmail"><a ng-href="mailto:{{controller.model.pocEmail}}">{{controller.model.pocEmail}}</a></dd>\n            </dl>\n        </div>\n    </div>\n    <div class="row products">\n        <div class="col">\n            <h4>Products Used</h4>\n            <product-list products="controller.model.products"></product-list>\n            <p ng-if="controller.model.products.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/components/assessor.html','<div class="information assessor">\n    <div class="row close hidden-print">\n        <a ng-click="controller.close()">\n            <div class="col">\n                <i class="fa fa-times"></i>\n                <br />\n                Close\n            </div>\n        </a>\n    </div>\n    <div class="row header">\n        <div class="col">\n            <div class="logo">\n                <img ng-if="controller.model.logo" ng-src="{{controller.model.logo}}" alt="Logo for {{controller.model.logo}}" />\n                <div ng-if="!controller.model.logo" class="no-image"></div>\n            </div>\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n        </div>\n        <div class="col reuse">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">{{controller.model.useLabel}}</div>\n        </div>\n    </div>\n    <div class="row text-center" ng-if="controller.model.accreditationDate">\n        <div class="divider"></div>\n        <div class="accredited">Accredited Since {{controller.model.accreditationDate}}</div>\n    </div>\n    <div class="row text-center" ng-if="!controller.model.accreditationDate">\n        <div class="divider not-accredited"></div>\n        <div>Accreditation Date not available</div>\n    </div>\n    <div class="row">\n        <div class="contact-information">\n            <h4>Contact Information</h4>\n\n            <dl ng-if="controller.hasContactInformation()">\n                <dt ng-if="controller.model.pocName">POC:</dt>\n                <dd ng-if="controller.model.pocName">{{controller.model.pocName}}</dd>\n                <dt ng-if="controller.model.pocEmail">E-mail:</dt>\n                <dd ng-if="controller.model.pocEmail"><a ng-href="mailto:{{controller.model.pocEmail}}">{{controller.model.pocEmail}}</a></dd>\n                <dt ng-if="controller.model.website">Website:</dt>\n                <dd ng-if="controller.model.website"><a ng-href="{{controller.externalLink(controller.model.website)}}" target="_blank">{{controller.model.website}}</a></dd>\n            </dl>\n            <p ng-if="!controller.hasContactInformation()">\n                No contact information on record\n            </p>\n        </div>\n    </div>\n    <panel ng-if="controller.model.description" header="Assessor Description" expand="false">\n        <div ng-bind-html="controller.markdown(controller.model.description)"></div>\n    </panel>\n    <div class="row products">\n        <div class="col">\n            <h4>Client History</h4>\n            <product-list products="controller.model.products"></product-list>\n            <p ng-if="controller.model.products.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/components/assessors-grid.html','<grid class="grid" raw-items="controller.assessors" on-update="controller.onUpdate(items, state)" state="controller.savedState">\n    <div class="sidebar hidden-print" ng-show="!controller.hideFilters">\n        <grid-filter-clear class="clear-filters"><i class="fa fa-times" aria-hidden="true"></i> Clear All</grid-filter-clear>\n        <grid-search id="searchName" property="name" placeholder="Search by name"></grid-search>\n        <grid-total></grid-total>\n        <grid-filter id="assessmentsCompleted" header="Assessments Completed" expanded="true" opened="true" options-func="controller.reuseRangeOptions" filter-func="controller.reuseRangeFilter" class="grid-filter"></grid-filter>\n        <grid-filter id="agencies" property="a in agencies" header="Agencies" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="products" property="p in products" header="Products" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="providers" property="p in providers" header="Providers" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <div class="export hidden-print" sticky offset="30">\n            <download-csv content="controller.filteredData" ng-if="controller.filteredData">\n                <button class="usa-button-secondary">\n                    <span>Export to CSV</span>\n                    <i class="fa fa-download" aria-hidden="true"></i>\n                </button>\n            </download-csv>\n        </div>\n    </div>\n    <div class="grid full-width-print" ng-class="{\'grid-with-sidebar\': !controller.hideFilters}">\n        <grid-filter-print></grid-filter-print>\n        <div class="fr-grid-layout fr-grid-header" ng-show="!controller.hideFilters">\n            <div class="fr-grid-layout-row">\n                <div class="fr-grid-cell-name">\n                    <grid-sort name="assessorName" property="name" class="grid-sort" header="Name" default="true"></grid-sort>    \n                </div>\n                <div class="fr-grid-cell-contact">\n                    <grid-sort name="contactInformation" header="Contact Information" property="type" class="grid-sort"></grid-sort>    \n                </div>\n                <div class="fr-grid-cell-metric">\n                    <grid-sort name="reuses" property="reuses" class="grid-sort"></grid-sort>    \n                </div>\n            </div>\n        </div>\n        <tile ng-repeat="item in controller.filteredData" expand="controller.expandTiles" model="item"></tile>\n    </div>\n    <div class="clear"></div>\n</grid>\n');$templateCache.put('src/templates/components/comparison.html','<div class="usa-content">\n    <div class="comparison" style="position:relative;z-index:10;">\n        <!-- \n            This is passed in by using <first></first> \n        -->\n        <div class="first full-width-print" ng-transclude="first"></div>\n\n        <!-- \n            This is passed in by using <second></second> \n        -->\n        <div class="second full-width-print break-before-print" ng-transclude="second"></div>\n\n        <!--\n            Close both \n        -->\n        <div class="information close-both hidden-print">\n            <div class="row close" ui-sref="{{controller.onCloseBoth}}" ui-sref-opts="{removeParams:false}">\n                <a>\n                    <div class="col">\n                        <i class="fa fa-times"></i>\n                        <br>\n                        Close Both\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/components/dictionary.html','<grid id="dictionary-grid" ng-if="controller.dataDictionary.length > 0" raw-items="controller.dataDictionary" on-update="controller.onUpdate(items, state)" state="controller.state">\n    <div class="information">\n        <div class="fedramp">\n            <h2>Dictionary</h1>\n            <grid-search id="type" placeholder="Search by field name" property="field"></grid-search>\n            <div ng-repeat="term in controller.filteredDictionary | orderBy:\'field\' track by $index">\n                <h3>{{term.field}}</h3>\n                <dl>\n                    <dt>Description</dt>\n                    <dd>{{term.description}}</dd>\n                    <dt>Type</dt>\n                    <dd>{{term.type}}</dd>\n                    <dt>Source</dt>\n                    <dd>{{term.source}}</dd>\n                </dl>\n            </div>\n        </div>\n    </div>\n</grid>\n');$templateCache.put('src/templates/components/grid-filter-print.html','<div class="visible-print-block">{{controller.gridController.printDescription()}}</div>\n');$templateCache.put('src/templates/components/grid-filter.html','<div class="no-select">\n    <div ng-click="controller.toggleExpand()">\n        <span class="filter-header">{{::controller.header}}</span>\n        <span class="icons">\n            <i class="fa fa-plus" aria-hidden="true" ng-if="!controller.opened"></i>\n            <i class="fa fa-minus" aria-hidden="true" ng-if="controller.opened"></i>\n        </span>\n    </div>\n    <div class="options" ng-if="controller.opened">\n        <div ng-repeat="option in controller.options track by $index" ng-click="controller.selectOption(option)">\n            <span class="option" ng-class="{\'selected\': option.selected}">{{::option.label}} <i class="fa fa-check-circle" aria-hidden="true" ng-if="option.selected"></i> </span>\n        </div>\n    </div>\n</div>\n\n');$templateCache.put('src/templates/components/grid-search.html','<input type="text" placeholder="{{::controller.placeholder}}" ng-model="controller.searchTerm" ng-model-options="{ debounce: 150}" ng-change="controller.search()"/>\n');$templateCache.put('src/templates/components/grid-sort.html','<span ng-click="controller.toggleSort()" ng-if="controller.header" class="grid-sort-header no-select">{{::controller.header}}</span>\n<div ng-click="controller.toggleSort()" class="grid-sort-arrows no-select">\n    <i class="fa fa-sort" ng-if="!controller.activated" aria-hidden="true"></i>\n    <i class="fa fa-caret-up"  ng-if="controller.activated && controller.asc" ng-class="{\'grid-sort-selected\': controller.highlight(true)}" aria-hidden="true"></i>\n    <i class="fa fa-caret-down"  ng-if="controller.activated && !controller.asc" ng-class="{\'grid-sort-selected\': controller.highlight(false)}" aria-hidden="true"></i>\n    <!--<i class="fa fa-caret-down" ng-class="{\'grid-sort-selected\': controller.highlight(false)}" aria-hidden="true"></i>-->\n</div>\n');$templateCache.put('src/templates/components/panel.html','<div class="row panel">\n    <div class="header" ng-click="controller.expand = !controller.expand">\n        <h4>{{controller.header}}</h4>\n        <i ng-if="!controller.expand" class="fa fa-plus"></i>\n        <i ng-if="controller.expand" class="fa fa-minus"></i>\n    </div>\n</div>\n<div ng-if="controller.expand" class="row panel-content">\n    <ng-transclude></ng-transclude>\n</div>\n');$templateCache.put('src/templates/components/product-list.html','<div class="product-row" ng-repeat="provider in controller.groupedProducts track by $index">\n    <div class="provider">{{provider.name}}</div>\n    <div class="product" ng-repeat="model in provider.products">\n        <div class="name">\n            <a ui-sref="fedramp.app.product.information({name:model.slugified})">{{model.product.name}}</a>\n        </div>\n        <div class="designation">\n            {{model.product.designation === \'Compliant\' ? \'Authorized\' : model.product.designation}}\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/components/product-status.html','<img ng-if="::controller.status === \'Compliant\'" src="img/fedramp-process-compliant-blue.png" alt="Authorized" />\n<img ng-if="::controller.status === \'In Process\'" src="img/fedramp-process-in-process-blue.png" alt="In-Process" />\n<img ng-if="::controller.status === \'Ready\'" src="img/fedramp-process-ready-blue.png" alt="Ready" />\n<span ng-if="::controller.status === \'Compliant\'">FedRAMP Authorized</span>\n<span ng-if="::controller.status === \'In Process\'"> FedRAMP In Process</span>\n<span ng-if="::controller.status === \'Ready\'">FedRAMP Ready</span>\n');$templateCache.put('src/templates/components/product.html','<div class="information product">\n    <div class="row close hidden-print">\n        <a ng-click="controller.close()">\n            <div class="col">\n                <i class="fa fa-times"></i>\n                <br />\n                Close\n            </div>\n        </a>\n    </div>\n    <div class="row header">\n        <div class="col">\n            <div class="logo">\n                <img ng-if="controller.model.logo" ng-src="{{controller.model.logo}}" alt="Logo for {{controller.model.logo}}" />\n            </div>\n            <div class="title">\n                <strong>{{ controller.model.provider }} - {{ controller.model.name }}</strong>\n            </div>\n        </div>\n        <div class="col reuse">\n            <div class="number">{{controller.model.authorizations}}</div>\n            <div class="text">{{controller.model.useLabel}}</div>\n        </div>\n    </div>\n    <div class="row status">\n        <div class="col ready" ng-class="{\'active\': controller.isReady()}">\n            <img ng-if="controller.isReady()" ng-src="img/fedramp-process-ready-blue.png" alt="Ready" />\n            <img ng-if="!controller.isReady()" ng-src="img/fedramp-process-ready-grey.png" alt="Not Ready" />\n            <div class="text">FedRAMP Ready</div>\n        </div>                                 \n        <div class="col in-process" ng-class="{\'active\': controller.Processing()}">\n            <img ng-if="controller.isProcessing()" ng-src="img/fedramp-process-in-process-blue.png" alt="In-Process" />\n            <img ng-if="!controller.isProcessing()" ng-src="img/fedramp-process-in-process-grey.png" alt="Not In-Process" />\n            <div class="text">FedRAMP In Process</div>\n        </div>                                 \n        <div class="col compliant" ng-class="{\'active\': controller.isCompliant()}">\n            <img ng-if="controller.isCompliant()" ng-src="img/fedramp-process-compliant-blue.png" alt="Authorized" />\n            <img ng-if="!controller.isCompliant()" ng-src="img/fedramp-process-compliant-grey.png" alt="Not Authorized" />\n            <div class="text">FedRAMP Authorized</div>\n        </div>\n        <div class="col progress">\n            <div class="percent percent-{{controller.percentComplete()}}"></div>\n        </div>\n        <div class="col message">\n            {{ controller.statusMessage() }}\n        </div>\n    </div>\n    <div class="row system-profile">\n        <div class="col contact-information">\n            <h5>Contact Information</h5>\n            <dl>\n                <dt ng-if="controller.model.pocName">POC:</dt>\n                <dd ng-if="controller.model.pocName">{{controller.model.pocName}}</dd>\n                <dt ng-if="controller.model.pocEmail">E-mail:</dt>\n                <dd ng-if="controller.model.pocEmail"><a ng-href="mailto:{{controller.model.pocEmail}}">{{controller.model.pocEmail}}</a></dd>\n                <dt ng-if="controller.model.website">Website:</dt>\n                <dd ng-if="controller.model.website"><a ng-href="{{controller.externalLink(controller.model.website)}}" target="_blank">{{controller.model.website}}</a></dd>\n            </dl>\n        </div>\n        <div class="col">\n            <h4>System Profile</h4>\n\n            <h5>Service Model<span ng-show="controller.model.serviceModels.length > 1">s</span></h5>\n            <p>{{controller.model.serviceModels.join(\', \')}}</p>\n\n            <h5>Deployment Model</h5>\n            <p>{{controller.model.deploymentModel}}</p>\n\n            <h5>Impact Level</h5>\n            <p>{{controller.model.impactLevel}}</p>\n        </div>\n    </div>\n    <div class="row fedramp">\n        <div class="col">\n            <h4>Package ID</h4>\n            <p>\n                {{controller.model.pkgId}}\n                <br />\n                <a href="#">Package Access Request Form</a>\n            </p>\n\n            <h4>FedRAMP Authorized Detail</h4>\n            <dl>\n                <dt>Authorization Type:</dt>\n                <dd>{{ controller.model.authorizationType }}</dd>\n                <dt>Agency Lead:</dt>\n                <dd>{{ controller.model.sponsoringAgency }}</dd>\n                <dt>Independent Assessor:</dt>\n                <dd>{{ controller.model.independentAssessor }}</dd>\n                <dt ng-if="controller.model.authorizationDate">Authorization Date:</dt>\n                <dd ng-if="controller.model.authorizationDate">{{ controller.model.authorizationDate }}</dd>\n            </dl>\n        </div>\n    </div>\n    <panel ng-if="controller.model.serviceDescription" header="Service Description" expand="false">\n        <div ng-bind-html="controller.markdown(controller.model.serviceDescription)"></div>\n    </panel>\n    <div class="row products" ng-if="controller.additionalProducts.length > 0">\n        <div class="col">\n            <h4>Additional products from this provider</h4>\n            <ul>\n                <li ng-repeat="product in controller.additionalProducts | orderBy:\'+name\' track by $index">\n                    <a title="{{product.name}}" ng-href="{{controller.linkify(\'product\', product.name)}}">\n                        {{product.name}}\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class="row products" ng-if="controller.model.dependents.length > 0">\n        <div class="col">\n            <h4>Dependent Products</h4>\n            <product-list products="controller.model.dependents"></product-list>\n        </div>\n    </div>\n    <div class="row agencies">\n        <div class="col">\n            <h4>Agencies using this service</h4>\n            <ul ng-if="controller.model.agencies.length > 0">\n                <li ng-repeat="agency in controller.model.agencies | orderBy:\'+\' track by $index">\n                    <a title="{{agency}}" ng-href="{{controller.linkify(\'agency\', agency)}}">\n                        {{agency}}\n                    </a>\n                </li>\n            </ul>\n            <p ng-if="controller.model.agencies.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/components/products-grid.html','<grid id="products-grid" class="grid" raw-items="controller.products" on-update="controller.onUpdate(items, state)" state="controller.savedState">\n    <div class="sidebar hidden-print" ng-show="!controller.hideFilters">\n        <grid-filter-clear class="clear-filters"><i class="fa fa-times" aria-hidden="true"></i> Clear All</grid-filter-clear>\n        <grid-search id="productNameSearch" placeholder="Search by Provider or Product" filter-func="controller.productNameSearchFilterFunc"></grid-search>\n\n        <grid-total></grid-total>\n\n        <grid-filter id="status" header="Status" filter-func="controller.statusFilter" options-func="controller.statusFilterOptions" expanded="true" opened="true" class="grid-filter"></grid-filter>\n        <grid-filter id="authorizationType" property="authorizationType" header="Authorization Type" expanded="true" opened="true" class="grid-filter"></grid-filter>\n        <grid-filter id="reuseRange" header="Products Authorized" expanded="true" opened="false" options-func="controller.reuseRangeOptions" filter-func="controller.reuseRangeFilter" class="grid-filter"></grid-filter>\n        <grid-filter id="serviceModels" property="s in serviceModels" header="Service Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="deploymentModels" property="deploymentModel" header="Deployment Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="agencies" property="a in agencies" header="Agencies" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="impactLevel" property="impactLevel" header="Impact Level" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="providers" property="provider" header="Providers" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <div class="export hidden-print" sticky offset="30">\n            <download-csv content="controller.filteredData" ng-if="controller.filteredData">\n                <button class="usa-button-secondary">\n                    <span>Export to CSV</span>\n                    <i class="fa fa-download" aria-hidden="true"></i>\n                </button>\n            </download-csv>\n        </div>\n    </div>\n    <div class="grid full-width-print" ng-class="{\'grid-with-sidebar\': !controller.hideFilters}">\n        <grid-filter-print></grid-filter-print>\n        <div class="fr-grid-layout fr-grid-header" ng-show="!controller.hideFilters">\n            <div class="fr-grid-layout-row">\n                <div class="fr-grid-cell-name">\n                    <grid-sort name="productName" property="provider,name" header="Name" class="grid-sort" default="true"></grid-sort>\n                </div>\n                <div class="fr-grid-cell-service">\n                    <grid-sort name="serviceModels" property="serviceModels" header="Service Models" class="grid-sort"></grid-sort>\n                </div>\n                <div class="fr-grid-cell-impact">\n                    <grid-sort name="impactLevel" property="impactLevel" header="Impact Level" class="grid-sort"></grid-sort>\n                </div>\n                <div class="fr-grid-cell-icon">\n                    <grid-sort name="designation" property="designation" header="Status" class="grid-sort"></grid-sort>\n                </div>\n                <div class="fr-grid-cell-metric">\n                    <grid-sort name="authorizations" property="authorizations" default="-true" class="grid-sort"></grid-sort>\n                </div>\n            </div>\n        </div>\n        <tile ng-repeat="item in controller.filteredData" expand="controller.expandTiles" model="item"></tile>\n    </div>\n    <div class="clear"></div>\n</grid>\n');$templateCache.put('src/templates/components/provider.html','<div class="information provider">\n    <div class="row close hidden-print">\n        <a ng-click="controller.close()">\n            <div class="col">\n                <i class="fa fa-times"></i>\n                <br />\n                Close\n            </div>\n        </a>\n    </div>\n    <div class="row header">\n        <div class="col">\n            <div class="logo">\n                <img ng-if="controller.model.logo" ng-src="{{controller.model.logo}}" alt="Logo for {{controller.model.logo}}" />\n            </div>\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n        </div>\n        <div class="col reuse">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">Reuses</div>\n        </div>\n    </div>\n    <div class="row system-profile">\n        <div class="col contact-information">\n            <h5>Contact Information</h5>\n            <div><strong>POC:</strong></div>\n            <div><strong>E-mail:</strong></div>\n            <div><strong>Website:</strong></div>\n        </div>\n        <div class="col">\n            <h4>System Profile</h4>\n\n            <h5>Service Model<span ng-show="controller.model.serviceModels.length > 1">s</span></h5>\n            <p>{{controller.model.serviceModels.join(\', \')}}</p>\n\n            <h5>Deployment Model<span ng-show="controller.model.deploymentModels.length > 1">s</span></h5>\n            <p>{{controller.model.deploymentModels.join(\', \')}}</p>\n        </div>\n    </div>\n    <div class="row products">\n        <div class="col">\n            <h4>Products provided</h4>\n            <ul ng-if="controller.model.products.length > 0">\n                <li ng-repeat="product in controller.model.products | orderBy:\'+name\' track by $index">\n                    <a title="{{product.name}}" ng-href="{{controller.linkify(\'product\', product.name)}}">\n                        {{product.name}}\n                    </a>\n                </li>\n            </ul>\n            <p ng-if="controller.model.products.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n    <div class="row agencies">\n        <div class="col">\n            <h4>Agencies</h4>\n            <ul ng-if="controller.model.agencies.length > 0">\n                <li ng-repeat="agency in controller.model.agencies | orderBy:\'+\' track by $index">\n                    <a title="{{agency}}" ng-href="{{controller.linkify(\'agency\', agency)}}">\n                        {{agency}}\n                    </a>\n                </li>\n            </ul>\n            <p ng-if="controller.model.agencies.length === 0">\n                None\n            </p>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/components/search.html','<div class="usa-grid limit">\n    <div class="usa-width-one-whole">\n        <form id="search_form" class="usa-search" method="get" ng-submit="controller.search($event)" accept-charset="UTF-8" action="http://search.usa.gov/search">\n            <input type="hidden" name="utf8" value="✓" />\n            <input type="hidden" name="affiliate" id="affiliate" value="fedramp" />\n            <input type="hidden" name="format" id="format" value="{{controller.format}}" />\n            <label class="usa-sr-only" for="search-field">Search</label>\n            <input type="search" name="query" id="search-field" title="Search query" ng-model="controller.query" class="usagov-search-autocomplete ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" />\n            <button type="submit">\n                <span class="usa-search-submit-text">Search</span>\n            </button>\n        </form>\n    </div>\n</div>\n');$templateCache.put('src/templates/components/tile-agency.html','<!-- TODO: Determine if the US Grid layout should be used -->\n<div ng-if="controller.expand" class="agency expanded fr-grid-layout">\n    <div class="row fr-grid-layout-row">\n        <div class="col name fr-grid-cell-name">\n            <a ng-click="controller.view()">\n                <div class="logo" style="background-image:url();"></div>\n                <div class="title">\n                    <strong>{{ controller.model.name }}</strong>\n                </div>\n            </a>\n        </div>\n        <div class="col fr-grid-cell-contact">\n            <div class="detail"><strong>Contact Information</strong></div>\n            <!-- TODO Place contact info -->\n        </div>\n        <div class="col reuses fr-grid-cell-metric">\n            <div class="number">{{controller.model.products.length}}</div>\n            <div class="text">{{controller.model.useLabel}}</div>\n        </div>\n    </div>\n\n</div>\n\n<div ng-if="!controller.expand" class="agency card">\n    <div class="row header">\n        <div class="col reuses">\n            <a ng-click="controller.view()">\n                <div class="number">{{controller.model.products.length}}</div>\n                <div class="text">{{controller.model.useLabel}}</div>\n            </a>\n        </div>\n    </div>\n    <div class="row content">\n        <div class="col">\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/components/tile-assessor.html','<!-- TODO: Determine if the US Grid layout should be used -->\n<div ng-if="controller.expand" class="assessor expanded fr-grid-layout">\n    <div class="row fr-grid-layout-row">\n        <div class="col name fr-grid-cell-name">\n            <a ng-click="controller.view()">\n                <div class="logo" style="background-image:url();"></div>\n                <div class="title">\n                    <strong>{{ controller.model.name }}</strong>\n                </div>\n            </a>\n        </div>\n        <div class="col fr-grid-cell-contact">\n            <div class="detail"><strong>Contact Information</strong></div>\n            <!-- TODO Place contact info -->\n        </div>\n\n        <div class="col reuses fr-grid-cell-metric">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">{{controller.model.useLabel}}</div>\n        </div>\n    </div>\n</div>\n\n<div ng-if="!controller.expand" class="assessor card">\n    <div class="row header">\n        <div class="col reuses">\n            <a ng-click="controller.view()">\n                <div class="number">{{controller.model.reuses}}</div>\n                <div class="text">{{controller.model.useLabel}}</div>\n            </a>\n        </div>\n    </div>\n    <div class="row content">\n        <div class="col">\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/components/tile-product.html','<!-- TODO: Determine if the US Grid layout should be used -->\n<div ng-if="controller.expand" class="product expanded fr-grid-layout">\n    <div class="row fr-grid-layout-row">\n        <div class="col name fr-grid-cell-name">\n            <a ng-click="controller.view()" title="Click to compare">\n                <div class="logo" style="background-image:url({{::controller.model.logo}});"></div>\n                <div class="title">\n                    <strong>{{::controller.model.name }}</strong>\n                </div>\n            </a>\n        </div>\n        <div class="col service-model fr-grid-cell-service">\n            <div class="detail"><strong>Service Model</strong></div>\n            <div ng-repeat="service in ::controller.model.serviceModels">{{ ::service }}</div>\n        </div>\n        <div class="col impact-level fr-grid-cell-impact">\n            <div class="detail"><strong>Impact Level</strong></div>\n            <span>{{ ::controller.model.impactLevel }}</span>\n        </div>\n        <div class="col status fr-grid-cell-icon">\n            <product-status status="::controller.model.designation"></product-status>\n        </div>\n        <div class="col reuses fr-grid-cell-metric">\n            <div class="number">{{::controller.model.authorizations}}</div>\n            <div class="text">{{::controller.model.useLabel}}</div>\n        </div>\n    </div>\n</div>\n\n<div ng-if="!controller.expand" class="product card">\n    <div class="row header">\n        <div class="col name">\n            <a ng-click="controller.view()" title="Click to compare">\n                <div class="logo">\n                    <img ng-if="controller.model.logo" ng-src="{{controller.model.logo}}" alt="Logo for {{controller.model.logo}}" />\n                </div>\n            </a>\n        </div>\n        <div class="col reuses">\n            <div class="number">{{controller.model.authorizations}}</div>\n            <div class="text">{{controller.model.useLabel}}</div>\n        </div>\n        <div class="col status">\n            <product-status status="controller.model.designation"></product-status>\n        </div>\n    </div>\n    <div class="row content">\n        <div class="col">\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n            <dl>\n                <dt>Service Model:</dt>\n                <dd>{{ controller.model.serviceModels.join(\', \') }}</dd>\n                <!-- <dt>Deployment Model:</dt>\n                     <dd>{{ controller.model.deploymentModel }}</dd> -->\n                <dt>Impact Level:</dt>\n                <dd>{{ controller.model.impactLevel }}</dd>\n            </dl>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/components/tile-provider.html','<!-- TODO: Determine if the US Grid layout should be used -->\n<div ng-if="controller.expand" class="provider expanded fr-grid-layout">\n    <div class="row fr-grid-layout-row">\n        <div class="col name fr-grid-cell-name">\n            <a ng-click="controller.view()">\n                <div class="logo" style="background-image:url({{controller.model.logo}});"></div>\n                <div class="title">\n                    <strong>{{ controller.model.name }}</strong>\n                </div>\n            </a>\n        </div>\n        <div class="col service-model fr-grid-cell-service">\n            <div ng-repeat="model in controller.model.serviceModels">{{ model }}</div>\n        </div>\n        <!-- <div class="col deployment-model fr-grid-cell-deployment">\n             <div ng-repeat="model in controller.model.deploymentModels">{{ model }}</div>\n             </div> -->\n        <div class="col reuses fr-grid-cell-metric">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">Reuses</div>\n        </div>\n    </div>\n</div>\n\n<div ng-if="!controller.expand" class="provider card">\n    <div class="row header">\n        <div class="col name">\n            <a ng-click="controller.view()">\n                <div class="logo">\n                    <img ng-if="controller.model.logo" ng-src="{{controller.model.logo}}" alt="Logo for {{controller.model.logo}}" />\n                </div>\n            </a>\n        </div>\n        <div class="col reuses">\n            <div class="number">{{controller.model.reuses}}</div>\n            <div class="text">Reuses</div>\n        </div>\n    </div>\n    <div class="row content">\n        <div class="col">\n            <div class="title">\n                <strong>{{ controller.model.name }}</strong>\n            </div>\n            <dl>\n                <dt>Service Model:</dt>\n                <dd>{{ controller.model.serviceModels.join(\', \') }}</dd>\n                <!-- <dt>Deployment Model:</dt>\n                     <dd>{{ controller.model.deploymentModels.join(\', \') }}</dd> -->\n            </dl>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/components/tile.html','<div class="tile" ng-include src="::controller.tileTemplate"></div> \n');$templateCache.put('src/templates/home/agencies.html','<agencies-grid expand-tiles="homeController.expandTiles"></agencies-grid>\n');$templateCache.put('src/templates/home/agency-comparison.html','<!--\n    For updates to the way this is displayed, go to templates/comparison.html\n-->\n\n<comparison on-close-both="fedramp.app.home.agencies">\n    <first>\n        <agency model="controller.first" on-close="controller.closeFirst"></agency>\n    </first>\n    <second>\n        <agency model="controller.second" on-close="controller.closeSecond"></agency>\n    </second>\n</comparison>\n\n<!--<div class="usa-content">-->\n    <!--<div class="comparison">-->\n        <!--<div class="first">-->\n            <!--<agency model="controller.first" on-close="controller.closeFirst" />-->\n        <!--</div>-->\n        <!--<div class="second">-->\n            <!--<agency model="controller.second" on-close="controller.closeSecond" />-->\n        <!--</div>-->\n    <!--</div>-->\n<!--</div>-->\n');$templateCache.put('src/templates/home/agency-information.html','<div class="usa-content">\n    <div class="comparison">\n        <div class="first full-width-print">\n            <agency model="controller.item" on-close="controller.close" />\n        </div>\n        <div class="second comparison-list hidden-print">\n            <div ng-show="controller.items.length > 0">\n                <div class="text-center fr-filter-label">\n                    <span class="fr-filter-label-rule"></span>\n                    <span class="fr-filter-label-text">Select another to compare</span>\n                </div>\n                <agencies-grid raw-items="controller.items" expand-tiles="true" hide-filters="true"></agencies-grid>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/home/agency.html','<ui-view />\n');$templateCache.put('src/templates/home/assessor-comparison.html','<!--\n    For updates to the way this is displayed, go to templates/comparison.html\n-->\n<comparison on-close-both="fedramp.app.home.assessors">\n    <first>\n        <assessor model="controller.first" on-close="controller.closeFirst"></assessor>\n    </first>\n    <second>\n        <assessor model="controller.second" on-close="controller.closeSecond"></assessor>\n    </second>\n</comparison>\n\n<!--<div class="usa-content">-->\n    <!--<div class="comparison">-->\n        <!--<div class="first">-->\n            <!--<assessor model="controller.first" on-close="controller.closeFirst" />-->\n        <!--</div>-->\n        <!--<div class="second">-->\n            <!--<assessor model="controller.second" on-close="controller.closeSecond" />-->\n        <!--</div>-->\n    <!--</div>-->\n<!--</div>-->\n');$templateCache.put('src/templates/home/assessor-information.html','<div class="usa-content">\n    <div class="comparison">\n        <div class="first full-width-print">\n            <assessor model="controller.item" on-close="controller.close" />\n        </div>\n        <div class="second comparison-list hidden-print">\n            <div ng-show="controller.items.length > 0">\n                <div class="text-center fr-filter-label">\n                    <span class="fr-filter-label-rule"></span>\n                    <span class="fr-filter-label-text">Select another to compare</span>\n                </div>\n                <assessors-grid raw-items="controller.items" expand-tiles="true" hide-filters="true"></assessors-grid>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/home/assessor.html','<ui-view />\n');$templateCache.put('src/templates/home/assessors.html','<assessors-grid expand-tiles="homeController.expandTiles"></assessors-grid>\n');$templateCache.put('src/templates/home/home.html','<div class="usa-content hidden-print">\n    <div class="fr-dash-header usa-color-primary-darkest">\n        <div class="usa-grid-full text-center fr-dash-label">\n            <div class="usa-width-one-whole text-center">Products at a glance</div>\n        </div>\n        <div class="usa-grid-full text-center fr-large-metrics">\n            <div class="usa-width-one-third" ng-click="homeController.filterProducts(\'Ready\')">\n                <p class="fr-large-number">\n                    <span class="fr-metric-icon icon-ready-light"></span>\n                    <strong>{{homeController.totalReady()}}</strong>\n                    <span class="fr-metric-label">Ready</span>\n                </p>\n            </div>\n            <div class="usa-width-one-third" ng-click="homeController.filterProducts(\'In Process\')">\n                <p class="fr-large-number">\n                    <span class="fr-metric-icon icon-in-process-light"></span>\n                    <strong>{{homeController.totalInProcess()}}</strong>\n                    <span class="fr-metric-label">In Process</span>\n                </p>\n            </div>\n            <div class="usa-width-one-third" ng-click="homeController.filterProducts(\'Compliant\')">\n                <p class="fr-large-number">\n                    <span class="fr-metric-icon icon-compliant-light"></span>\n                    <strong>{{homeController.totalAuthorized()}}</strong>\n                    <span class="fr-metric-label">Authorized</span>\n                </p>\n            </div>\n        </div>\n    </div>\n    <div class="text-center fr-filter-label">\n        <span class="fr-filter-label-rule"></span>\n        <span class="fr-filter-label-text">Show me</span>\n    </div>\n    <div class="fr-filters usa-grid-full">\n        <div class="fr-filters-row">\n            <div class="usa-width-one-third">\n                <button id="filterByCSO"\n                        type="radio"\n                        ui-sref-active="selected"\n                        ui-sref="fedramp.app.home.products"  title="Show Cloud Offerings (CSOs)">\n                    <span>Products</span>\n                </button>\n            </div>\n            <div class="usa-width-one-third">\n                <button id="filterByAgency"\n                        ui-sref-active="selected"\n                        ui-sref="fedramp.app.home.agencies" title="Show Government Agencies">\n                    <span>Agencies</span>\n                </button>\n            </div>\n            <div class="usa-width-one-third">\n                <button id="filterBy3PAO"\n                        ui-sref-active="selected"\n                        ui-sref="fedramp.app.home.assessors" title="Show Assessment Organizations (3PAOs)">\n                    <span>Assessors</span>\n                </button>\n            </div>\n         </div>\n    </div>\n</div>\n<ui-view/>\n');$templateCache.put('src/templates/home/product-comparison.html','<!--\n    For updates to the way this is displayed, go to templates/comparison.html\n-->\n\n<comparison on-close-both="fedramp.app.home.products">\n    <first>\n        <product model="controller.first" products="controller.items" on-close="controller.closeFirst"></product>\n    </first>\n    <second>\n        <product model="controller.second" products="controller.items" on-close="controller.closeSecond"></product>\n    </second>\n</comparison>\n\n<!--<div class="usa-content">-->\n    <!--<div class="comparison" style="position:relative;z-index:10;">-->\n        <!--<div class="first">-->\n            <!--<product model="controller.first" products="controller.items" on-close="controller.closeFirst" />-->\n        <!--</div>-->\n        <!--<div class="second">-->\n            <!--<product model="controller.second" products="controller.items" on-close="controller.closeSecond" />-->\n        <!--</div>-->\n        <!--<div class="information close-both">-->\n            <!--<div class="row close" ui-sref="fedramp.app.home.products">-->\n                <!--<a>-->\n                    <!--<div class="col">-->\n                        <!--<i class="fa fa-times"></i>-->\n                        <!--<br>-->\n                        <!--Close Both-->\n                    <!--</div>-->\n                <!--</a>-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</div>-->\n<!--</div>-->\n');$templateCache.put('src/templates/home/product-information.html','<div class="usa-content">\n    <div class="comparison">\n        <div class="first full-width-print">\n            <product model="controller.item" products="controller.items" on-close="controller.close" />\n        </div>\n        <div class="second comparison-list hidden-print">\n            <div ng-show="controller.items.length > 0">\n                <div class="text-center fr-filter-label">\n                    <span class="fr-filter-label-rule"></span>\n                    <span class="fr-filter-label-text">Select another to compare</span>\n                </div>\n                <products-grid raw-items="controller.items" expand-tiles="true" hide-filters="true"></products-grid>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/home/product.html','<ui-view />\n');$templateCache.put('src/templates/home/products.html','<products-grid expand-tiles="homeController.expandTiles"></products-grid>\n');$templateCache.put('src/templates/home/provider-comparison.html','<div class="usa-content">\n    <div class="comparison">\n        <div class="first">\n            <provider model="controller.first" on-close="controller.closeFirst" />\n        </div>\n        <div class="second">\n            <provider model="controller.second" on-close="controller.closeSecond" />\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/home/provider-information.html','<div class="usa-content">\n    <div class="comparison">\n        <div class="first full-width-print">\n            <provider model="controller.item" on-close="controller.close" />\n        </div>\n        <div class="second comparison-list hidden-print">\n            <div ng-show="controller.items.length > 0">\n                <div class="text-center fr-filter-label">\n                    <span class="fr-filter-label-rule"></span>\n                    <span class="fr-filter-label-text">Select another to compare</span>\n                </div>\n                <grid class="grid" raw-items="controller.items" on-update="controller.onUpdate(items, state)">\n                    <div class="hidden">\n                        <grid-search id="searchName" property="name" placeholder="Search by Provider Name"></grid-search>\n                        <grid-filter id="designations" property="d in designations" header="Status" expanded="true" opened="true" class="grid-filter"></grid-filter>\n                        <grid-filter id="reuseRange" header="Reuse Range" expanded="true" opened="false" options-func="controller.reuseRangeOptions" filter-func="controller.reuseRangeFilter" class="grid-filter"></grid-filter>\n                        <grid-filter id="serviceModels" property="s in serviceModels" header="Service Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-filter id="deploymentModels" property="d in deploymentModels" header="Deployment Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-filter id="products" property="p.name in products" header="Products" expanded="true" opened="false" class="grid-filter"></grid-filter>\n                        <grid-sort name="provider" property="name" header="Name" class="grid-sort" default="true"></grid-sort>          \n                        <grid-sort name="serviceModels" property="serviceModels" header="Service Models" class="grid-sort"></grid-sort>    \n                        <grid-sort name="reuses" property="reuses" class="grid-sort"></grid-sort>    \n                    </div>\n                    <tile ng-repeat="item in controller.filteredData track by $index" expand="true" model="item"></tile>\n                </grid>\n            </div>\n        </div>\n    </div>\n</div>\n');$templateCache.put('src/templates/home/provider.html','<ui-view />\n');$templateCache.put('src/templates/home/providers.html','<div class="fr-post-filter-metrics usa-grid-full">\n    <div class="usa-width-one-whole">\n        <div class="col">\n            <p class="fr-large-number">\n                <span class="fr-metric-icon icon-cloud"></span>\n                <strong>{{controller.filteredData.length}}</strong>\n                <span class="fr-metric-label">Total</span>\n            </p>\n        </div>\n        <div class="col">\n            <p class="fr-large-number">\n                <span class="fr-metric-icon icon-cloud"></span>\n                <strong>{{controller.compliant()}}%</strong>\n                <span class="fr-metric-label">Compliant</span>\n            </p>\n        </div>\n    </div>\n    <div class="controls">\n        <label>\n            <input type="checkbox" ng-model="homeController.expandTiles" />\n            <div class="list-view">\n                <span><i class="fa fa-th-list fa-1" aria-hidden="true"></i></span>\n            </div>\n            <div class="grid-view">\n                <span><i class="fa fa-th fa-1" aria-hidden="true"></i></span>\n            </div>\n        </label>\n    </div>\n</div>\n\n<grid class="grid" raw-items="controller.providers" on-update="controller.onUpdate(items, state)">\n    <div class="sidebar">\n        <grid-filter-clear class="clear-filters"><i class="fa fa-times" aria-hidden="true"></i> Clear All</grid-filter-clear>\n        <grid-search id="searchName" property="name" placeholder="Search by Provider Name"></grid-search>\n        <grid-filter id="designations" property="d in designations" header="Status" expanded="true" opened="true" class="grid-filter"></grid-filter>\n        <grid-filter id="reuseRange" header="Reuse Range" expanded="true" opened="false" options-func="controller.reuseRangeOptions" filter-func="controller.reuseRangeFilter" class="grid-filter"></grid-filter>\n        <grid-filter id="serviceModels" property="s in serviceModels" header="Service Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="deploymentModels" property="d in deploymentModels" header="Deployment Models" expanded="true" opened="false" class="grid-filter"></grid-filter>\n        <grid-filter id="products" property="p.name in products" header="Products" expanded="true" opened="false" class="grid-filter"></grid-filter>\n    </div>\n    <div class="grid grid-with-sidebar">\n        <div class="fr-grid-layout fr-grid-header">\n            <div class="row fr-grid-layout-row">\n                <div class="fr-grid-cell-name">\n                    <grid-sort name="provider" property="name" header="Name" class="grid-sort" default="true"></grid-sort>          \n                </div>\n                <div class="fr-grid-cell-service">\n                    <grid-sort name="serviceModels" property="serviceModels" header="Service Models" class="grid-sort"></grid-sort>    \n                </div>\n                <div class="fr-grid-cell-metric">\n                    <grid-sort name="reuses" property="reuses" class="grid-sort"></grid-sort>    \n                </div>\n            </div>\n        </div>\n        <tile ng-repeat="item in controller.filteredData track by $index" expand="homeController.expandTiles" model="item"/>\n    </div>\n</grid>\n\n<div style="clear: both;">\n    <download-csv content="controller.filteredData" ng-if="controller.filteredData" style="float: right;">\n        <button>\n            <span>Export to CSV</span>\n            <i class="fa fa-download" aria-hidden="true" style="margin-left: 1rem;"></i>\n        </button>\n    </download-csv>\n</div>\n');$templateCache.put('src/templates/search/search.html','<div id="search">\n    <div class="article usa-grid-full" ng-repeat="article in controller.results track by $index">\n        <h4 class="article-title">\n            <span class="article-ext-type">{{controller.extension(article.unescapedUrl)}}</span>\n            <a ng-href="{{article.unescapedUrl}}" title="{{article.title}}">{{article.title}}</a>\n        </h4>\n        <div class="article-url">{{article.unescapedUrl}}</div>\n        <span class="article-description" ng-bind-html="controller.markdown(article.content)"></span>\n        <ul class="article-site-links">\n            <li ng-repeat="link in article.siteLinks"></li>\n        </ul>\n    </div>\n    <div id="internal-only" class="text-center" ng-if="controller.results.length > 0">\n        <p>\n            For more results please go to <a ng-href="{{controller.externalLink}}" title="Search on USA.gov">search.usa.gov</a>\n        </p>\n    </div>\n    <div id="no-results" class="text-center" ng-if="controller.results.length === 0">\n        <p>\n            There was a problem retrieving your search results. Please try the\n            search at <a ng-href="{{controller.externalLink}}" title="Search on USA.gov">search.usa.gov</a>\n        </p>\n    </div>\n</div>\n');$templateCache.put('src/templates/sitemap/sitemap.html','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n   <url ng-repeat="item in controller.providers track by $index">\n      <loc>https://truetandem.github.io/fedramp-dashboard/provider/{{controller.slugify(item.name)}}</loc>\n      <lastmod>{{controller.today}}</lastmod>\n      <changefreq>daily</changefreq>\n      <priority>0.8</priority>\n   </url>\n   <url ng-repeat="item in controller.products track by $index">\n      <loc>https://truetandem.github.io/fedramp-dashboard/product/{{controller.slugify(item.name)}}</loc>\n      <lastmod>{{controller.today}}</lastmod>\n      <changefreq>daily</changefreq>\n      <priority>0.8</priority>\n   </url>\n   <url ng-repeat="item in controller.agencies track by $index">\n      <loc>https://truetandem.github.io/fedramp-dashboard/agency/{{controller.slugify(item.name)}}</loc>\n      <lastmod>{{controller.today}}</lastmod>\n      <changefreq>daily</changefreq>\n      <priority>0.8</priority>\n   </url>\n   <url ng-repeat="item in controller.assessors track by $index">\n      <loc>https://truetandem.github.io/fedramp-dashboard/assessor/{{controller.slugify(item.name)}}</loc>\n      <lastmod>{{controller.today}}</lastmod>\n      <changefreq>daily</changefreq>\n      <priority>0.8</priority>\n   </url>\n</urlset> \n');}]);(function(){'use strict';angular.module('fedramp').run(runRoute);runRoute.$inject=['$rootScope','$location','helperService'];/**
     * Gets executed once when the application is first bootstrapped. Sets up event listeners
     * for ui-router state changes.
     */function runRoute($rootScope,$location,helperService){// Params for a route
var params={};// Options for a particular route
var routeOptions={};// Used to exclude all states in home
var STATE_REGEX=/^fedramp.app.(?!home)/g;/**
         * On the start of every state change, store location params and options locally. Currently, ui-router 
         * does not have a mechanism to forward query parameters.
         */$rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState,fromParams,options){params=$location.search();routeOptions=options;});$rootScope.$on('$stateChangeSuccess',function(event,toState,toParams,fromState,fromParams,options){// Enable routes to pass a underlying queryParams object that we can populate
// since ui-router doesn't allow arbitary query params from being passed
// with $state.go()
if(routeOptions&&routeOptions.queryParams){$location.search(routeOptions.queryParams);return;}// We check if the state we're coming from is NOT a child of the fedramp.app.home. Items that
// match would be all information and comparison pages. When we do match, we automatically load
// the query params that were saved in the $stateChangeStart event.
var match=fromState.name.match(STATE_REGEX);if(match){// We check if the removeParams: <boolean> was defined for a particular route change.
if(!routeOptions.removeParams){$location.search(params);}else{$location.search({});}}});}})();(function(){'use strict';angular.module('fedramp').config(routeConfig);// Add items to inject for safe minification
routeConfig.$inject=['$stateProvider','$urlRouterProvider'];/**
     * Configures the routes and views for the FedRAMP application
     */function routeConfig($stateProvider,$urlRouterProvider){// Go to root if something goes wrong
$urlRouterProvider.otherwise('/products');// Routes
$stateProvider.state('fedramp',{abstract:true,templateUrl:'src/templates/base.html',resolve:{/**
                     * JF - Note a few changes. 
                     *
                     * tl;dr
                     * fedrampData can now be injected anywhere. It's not only limited to state controllers now.
                     *
                     * Long version:
                     *
                     * The key 'fedrampData' within the resolve property
                     *
                     * resolve : {
                     *     fedrampData: [function{}]
                     * }
                     *
                     * is different than the injected provider 'fedrampData' being passed into the function below.
                     *
                     * ['..', 'fedrampData', function(..., fedrampData) {
                     *
                     * }
                     *
                     * UI-router resolves can only be injected into controllers bound to a particular state. So this 
                     * prevents you from injecting state based resolves into components, directives or service/factories. 
                     * For instance, previously, if you wanted to inject the result of fedrampData 
                     * into a component, you would get an error. 
                     *
                     * However, to mitigate this, we can take advantage of the fact that services in angular are singletons. 
                     * So we inject an actual service called fedrampData and call load() on it. This will then take the 
                     * properties/methods of storage and merge them into fedrampData (as well as wrap caching behavior. 
                     * See {@link Services.FedrampDataProvider} for details). 
                     *
                     * So now, we end up with a single fedrampData that contains all our storage information that can be injected anywhere.
                     *
                     * You'll notice that in the DataService.pull() promise, we load the fedrampData object and then return that 
                     * object. So here, we're telling ui-router that for STATE BASED controllers that inject the fedrampData 
                     * resolve (not the service), to simply point it to our service. 
                     *                    
                     *
                     */fedrampData:['DataService','fedrampData',function(DataService,fedrampData){return DataService.pull().then(function(storage){// Store it in service so that it is accessible by any one who injects fedrampData.
fedrampData.load(storage);return fedrampData;});}]}}).state('fedramp.sitemap',{url:'/sitemap.xml',templateUrl:'src/templates/sitemap/sitemap.html',controller:'SitemapController as controller'}).state('fedramp.app',{abstract:true,templateUrl:'src/templates/fedramp.html'}).state('fedramp.app.search',{url:'/search/:query',templateUrl:'src/templates/search/search.html',controller:'SearchController as controller'}).state('fedramp.app.home',{templateUrl:'src/templates/home/home.html',controller:'HomeController as homeController'})// Provider States
.state('fedramp.app.home.providers',{url:'/providers',templateUrl:'src/templates/home/providers.html',controller:'ProvidersController as controller',resolve:{providers:['fedrampData',function(fedrampData){return fedrampData.providers();}]}}).state('fedramp.app.provider',{url:'/provider',templateUrl:'src/templates/home/provider.html'}).state('fedramp.app.provider.information',{url:'/:name',templateUrl:'src/templates/home/provider-information.html',controller:'ProviderInformationController as controller'}).state('fedramp.app.provider.comparison',{url:'/:first/versus/:second',templateUrl:'src/templates/home/provider-comparison.html',controller:'ProviderComparisonController as controller'})// Product States
.state('fedramp.app.home.products',{url:'/products',templateUrl:'src/templates/home/products.html',controller:'ProductsController as controller',resolve:{products:['fedrampData',function(fedrampData){return fedrampData.products();}]}}).state('fedramp.app.product',{url:'/product',templateUrl:'src/templates/home/product.html'}).state('fedramp.app.product.information',{url:'/:name',templateUrl:'src/templates/home/product-information.html',controller:'ProductInformationController as controller'}).state('fedramp.app.product.comparison',{url:'/:first/versus/:second',templateUrl:'src/templates/home/product-comparison.html',controller:'ProductComparisonController as controller'})// Agency States
.state('fedramp.app.home.agencies',{url:'/agencies',templateUrl:'src/templates/home/agencies.html',controller:'AgenciesController as controller',resolve:{agencies:['fedrampData',function(fedrampData){return fedrampData.agencies();}]}}).state('fedramp.app.agency',{url:'/agency',templateUrl:'src/templates/home/agency.html'}).state('fedramp.app.agency.information',{url:'/:name',templateUrl:'src/templates/home/agency-information.html',controller:'AgencyInformationController as controller'}).state('fedramp.app.agency.comparison',{url:'/:first/versus/:second',templateUrl:'src/templates/home/agency-comparison.html',controller:'AgencyComparisonController as controller'})// Assessor States
.state('fedramp.app.home.assessors',{url:'/assessors',templateUrl:'src/templates/home/assessors.html',controller:'AssessorsController as controller',resolve:{assessors:['fedrampData',function(fedrampData){return fedrampData.assessors();}]}}).state('fedramp.app.assessor',{url:'/assessor',templateUrl:'src/templates/home/assessor.html'}).state('fedramp.app.assessor.information',{url:'/:name',templateUrl:'src/templates/home/assessor-information.html',controller:'AssessorInformationController as controller'}).state('fedramp.app.assessor.comparison',{url:'/:first/versus/:second',templateUrl:'src/templates/home/assessor-comparison.html',controller:'AssessorComparisonController as controller'}).state('fedramp.app.dictionary',{url:'/dictionary',template:'<dictionary></dictionary>'});}})();(function(){'use strict';angular.module('fedramp.components').component('agenciesGrid',{templateUrl:'src/templates/components/agencies-grid.html',controller:AgenciesGrid,controllerAs:'controller',bindings:{expandTiles:'<',rawItems:'<?',onUpdate:'&?'}});AgenciesGrid.$inject=['$log','fedrampData','$attrs'];/**
     * @constructor
     * @memberof Components
     */function AgenciesGrid($log,fedrampData,$attrs){var self=this;/**
         * The filtered data
         * @member {array}
         * @memberof Components.AgenciesGrid
         */self.filteredData=[];/**
         * The products
         * @member {array}
         * @memberof Components.AgenciesGrid
         */self.agencies=self.rawItems||fedrampData.agencies();/**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Components.AgenciesGrid
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */self.onUpdate=function(func){return function(items,state){self.filteredData=items;if(func){func({items:items});}};}(self.onUpdate);/**
         * Flag to hide filters
         */self.hideFilters=angular.isDefined($attrs.hideFilters)?$attrs.hideFilters:false;/**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Components.AgenciesGrid
         *
         * @param {array} products
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
         */self.reuseRangeFilter=function(agency,index,arr,selectedOptions){return selectedOptions.find(function(option){if(agency.products.length>=option.value.min&&agency.products.length<=option.value.max){return agency;}});};}})();(function(){'use strict';angular.module('fedramp.components').component('agency',{templateUrl:'src/templates/components/agency.html',controller:Agency,controllerAs:'controller',bindings:{model:'<',onClose:'<'}});Agency.$inject=['$log','$state','helperService'];/**
     * @constructor
     * @memberof Components
     */function Agency($log,$state,helperService){var self=this;/**
         * Close the informational panel
         * @public
         * @memberof Components.Agency
         */self.close=function(){if(self.onClose){self.onClose();return;}$state.go('fedramp.app.home',{},{reload:true});};/**
         * Build a link from the given item
         * @public
         * @memberof Components.Agency
         *
         * @param {string} modelType
         *  The item model type
         * @param {string} name
         *  The item name to be slugified
         *
         * @returns
         *  The pach for a hyperlink
         */self.linkify=function(modelType,name){return'#/'+modelType+'/'+helperService.slugify(name)+helperService.queryString();};}})();(function(){'use strict';angular.module('fedramp.components').component('assessor',{templateUrl:'src/templates/components/assessor.html',controller:Assessor,controllerAs:'controller',bindings:{model:'<',onClose:'<'}});Assessor.$inject=['$log','$sce','$state','helperService'];/**
     * @constructor
     * @memberof Components
     */function Assessor($log,$sce,$state,helperService){var self=this;/**
         * Close the informational panel
         * @public
         * @memberof Components.Assessor
         */self.close=function(){if(self.onClose){self.onClose();return;}$state.go('fedramp.app.home',{},{reload:true});};/**
         * Determine if there is contact information present
         * @public
         * @memberof Components.Assessor
         *
         * @returns
         *  A value indicating if there is contact information to display
         */self.hasContactInformation=function(){return self.model.pocName||self.model.pocEmail||self.model.website;};/**
         * Build a link from the given item
         * @public
         * @memberof Components.Assessor
         *
         * @param {string} modelType
         *  The item model type
         * @param {string} name
         *  The item name to be slugified
         *
         * @returns
         *  The pach for a hyperlink
         */self.linkify=function(modelType,name){return'#/'+modelType+'/'+helperService.slugify(name)+helperService.queryString();};/**
         * Parses possible markdown, or other encoded text, as HTML
         * @public
         * @memberof Components.Assessor
         *
         * @param {string} text
         *  The text to parse
         *
         * @returns
         *  The text in HTML format
         */self.markdown=function(text){return $sce.trustAsHtml(new showdown.Converter().makeHtml(text));};/**
         * Trust a URL
         * @public
         * @memberof Components.Assessor
         *
         * @param {string} url
         *  The external URL
         *
         * @returns
         *  The trusted URL
         */self.externalLink=function(url){if(url.indexOf('http')===-1){url='http://'+url;}return $sce.trustAsResourceUrl(url);};}})();(function(){'use strict';angular.module('fedramp.components').component('assessorsGrid',{templateUrl:'src/templates/components/assessors-grid.html',controller:AssessorGrid,controllerAs:'controller',bindings:{expandTiles:'<',rawItems:'<?',onUpdate:'&?'}});AssessorGrid.$inject=['$log','fedrampData','$attrs'];/**
     * @constructor
     * @memberof Components
     */function AssessorGrid($log,fedrampData,$attrs){var self=this;/**
         * The filtered data
         * @member {array}
         * @memberof Components.AssessorsGrid
         */self.filteredData=[];/**
         * The products
         * @member {array}
         * @memberof Components.AssessorsGrid
         */self.assessors=self.rawItems||fedrampData.assessors();/**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Components.AssessorsGrid
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */self.onUpdate=function(func){return function(items,state){self.filteredData=items;if(func){func({items:items});}};}(self.onUpdate);/**
         * Flag to hide filters
         */self.hideFilters=angular.isDefined($attrs.hideFilters)?$attrs.hideFilters:false;/**
         * Determine the options available for filtering the reuse metric
         * @public
         * @member {object}
         * @memberof Components.AssessorsGrid
         *
         * @param {array} products
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
         */self.reuseRangeFilter=function(assessor,index,arr,selectedOptions){return selectedOptions.find(function(option){if(assessor.reuses>=option.value.min&&assessor.reuses<=option.value.max){return option;}});};}})();(function(){'use strict';angular.module('fedramp.components').component('comparison',{transclude:{'first':'first','second':'second'},templateUrl:'src/templates/components/comparison.html',controller:Comparison,controllerAs:'controller',bindings:{onCloseBoth:'@'}});Comparison.$inject=[];/**
     * @constructor
     * @memberof Components
     */function Comparison(){var self=this;}})();(function(){'use strict';angular.module('fedramp.components').component('dictionary',{transclude:true,templateUrl:'src/templates/components/dictionary.html',controller:DictionaryController,controllerAs:'controller'});DictionaryController.$inject=['DataService'];/**
     * @constructor
     * @memberof Components
     */function DictionaryController(DataService){var self=this;// Original list of dictionary items
self.dataDictionary=[];// Filtered dictionary items
self.filteredDictionary=[];// Public functions
self.$onInit=$onInit;self.onUpdate=onUpdate;/**
         * Initializes component and queries for data dictionary.
         */function $onInit(){DataService.pullDataDictionary().then(function(dataDictionary){self.dataDictionary=dataDictionary;});}/**
         * When grid is filtered, updates array to render updated items
         */function onUpdate(items){self.filteredDictionary=items;}}})();(function(){'use strict';angular.module('fedramp.components').component('downloadCsv',{transclude:true,template:'<a href="{{controller.downloadUrl}}" download="{{controller.filename()}}" ng-click="controller.download()"><ng-transclude/></a>',controller:DownloadCsv,controllerAs:'controller',bindings:{// Contains array of information to be transformed into csv
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
         */function filename(date){if(!date){date=new Date();}var dd=date.getDate();var mm=date.getMonth()+1;var yyyy=date.getFullYear();if(dd<10){dd='0'+dd;}if(mm<10){mm='0'+mm;}return'fedramp-'+yyyy+'-'+mm+'-'+dd+'.csv';}}})();(function(){'use strict';angular.module('fedramp.components').component('gridFilterClear',{transclude:true,template:'<ng-transclude class="no-select" ng-click="controller.clear()"></ng-transclude>',controller:GridFilterClear,controllerAs:'controller',require:{gridController:'^grid'},bindings:{}});GridFilterClear.$inject=[];/**
     * @constructor
     * @memberof Components
     */function GridFilterClear(){var self=this;self.clear=clear;/**
         * Calls clear on grid component to clear out all filters
         * @public
         * @memberof Components
         */function clear(){self.gridController.clearFilters();}}})();(function(){'use strict';angular.module('fedramp.components').component('gridFilterPrint',{controller:GridFilterPrint,controllerAs:'controller',templateUrl:'src/templates/components/grid-filter-print.html',require:{gridController:'^grid'}});GridFilterPrint.$inject=[];function GridFilterPrint(){var self=this;}})();(function(){'use strict';angular.module('fedramp.components').component('gridFilter',{controller:GridFilter,controllerAs:'controller',templateUrl:'src/templates/components/grid-filter.html',require:{// We require that this component live inside of <grid></grid> so it can
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
id:'@'}});GridFilter.$inject=['$location','$parse','$element','$httpParamSerializer','Searcher'];/**
     * A generic filtering component that utilizes a property expression to extract all available options for a given
     * property. 
     *
     * If a property expression is not provided, a custom filterFunc and optionsFunc must be provided
     *
     * @example
     * // Given the following object being searched:
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
     *
     *
     * Property expression examples:
     *
     * 'i.relatedItemName in products.related' => would search everything in relatedItemName
     * 'i.name in products' => would search everything in the name key in products
     * 'i in counts' => would searching everything in the counts array
     * 'nickname' => would search in nickname
     * If a property expression is not provided, a filterFunc and optionsFunc must be provided.
     *
     * @example 
     * // Example HTML
     * <grid-filter property="name" header="Name" options="" expanded="true" opened="true"></grid-filter>
     *
     * // Example of custom filterFunc
     *
     * function myCustomFilterFunc(myObj, index, arr, selectedOptions){
     *      selectedOptionValues.forEach(function(selectedOption){
     *          if(myObj.someProperty === selectedOption.value){
     *              return myObj;
     *          }
     *          return null;
     *      });
     * }
     *
     * // Example of custom optionsFunc
     * function myCustomOptionsFunc(dataset){
     *     return [{
     *          label: 'Option 1',
     *          value: 'My val'
     *     }];
     * }
     *
     * @constructor
     * @memberof Components
     */function GridFilter($location,$parse,$element,$httpParamSerializer,Searcher){var self=this;var selectedCss='grid-filter-selected';var OBJECT_PARAM_REGEX=/\:\((.+?)\),{0,}/;// Options available to filter based on property
self.options=[];// Options that have been selected
self.selectedOptionValues=self.selectedOptionValues||[];// List of filtered data based on this particular filter
self.filtered=[];// Whether to initially render expanded mode with panels opened
self.opened=angular.isDefined(self.opened)?self.opened:true;// Exposed public functions
self.$onInit=$onInit;self.applyFilter=applyFilter;self.selectOption=selectOption;self.clear=clear;self.loadOptions=loadOptions;self.restoreState=restoreState;self.toggleExpand=toggleExpand;function $onInit(){if(!self.id){throw'Please add an id attribute';}if(!self.property&&(!self.optionsFunc||!self.filterFunc)){throw'If property is not specified, optionsFunc and filterFunc must be passed in';}// Allow custom optionsFunc and filterFuncs to be passed for custom filtering
self.optionsFunc=self.optionsFunc||optionsFunc;// Wrap custom func
self.filterFunc=self.filterFunc?wrapFilterFunc(self.filterFunc):filterFunc;// We give the parent controller a reference to this filter
self.gridController.addFilter(self);// If no options have been loaded, we load default ones
// Also, if tab is not expanded, then don't load anything
if(self.opened&&self.options.length===0){self.loadOptions(self.gridController.rawItems);}restoreState();if(self.expanded){$element.addClass('grid-filter-expanded');}}/**
         * Checks if any relevant query params exist containing filter values to load and then
         * adds them. Non-primitive objects are stored in the query param as follows:
         *
         * paramName=:(<json_representation>),:(<json_representation>)
         *
         * @public
         * @memberof Components.GridFilter
         *
         */function restoreState(){var params=self.gridController.state;if(!(self.id in params)){return null;}var values=params[self.id];var selected=[];self.opened=true;self.loadOptions(self.gridController.rawItems);// Check if loading non-primitive object
var m=values.match(OBJECT_PARAM_REGEX);if(m){values=values.split(OBJECT_PARAM_REGEX)// Remove empty results
.filter(Boolean)// Convert to js object
.map(function(x){return angular.fromJson(x);}).forEach(function(val){selected.push({value:val,selected:true});self.options.forEach(function(option){if(angular.equals(option.value,val)){option.selected=true;}});});}else{// Handle basic primitive options
values.split(',').forEach(function(val){selected.push({value:val,selected:true});self.options.forEach(function(option){if(option.value===val){option.selected=true;}});});}self.selectedOptionValues=selected;if(self.selectedOptionValues){applyFilter();}}/**
         * Toggles the selection of an option and then executes filter.
         * @public
         * @memberof Components.GridFilter
         */function selectOption(option){option.selected=!option.selected;var pos=self.selectedOptionValues.findIndex(function(x){return angular.equals(x.value,option.value);});if(pos==-1){self.selectedOptionValues.push(option);}else{self.selectedOptionValues.splice(pos,1);}saveState();applyFilter();}/**
         * Stores all selected values to the grid state. Primitive values get stored as a comma-separated list 
         * of strings. Non-primitive values (objects) get stored as a json string.
         *
         * @public
         * @memberof Components.GridFilter
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
if(self.selectedOptionValues.length===0){return obj;}return self.selectedOptionValues.find(function(option){var found=new Searcher().prop(self.property).equals(obj,option.value);if(found.length>0){return obj;}return null;});}/**
         * Loads a distinct list of values found in the specified property attribute.
         * If the property value is a basic string, an array of strings will be set for the options.
         *
         * If the property is an array, each instance of the array will be iterated to extract the contents to
         * generate an array containing unique values. This is done by using a set.
         *
         * @public
         * @memberof Components.GridFilter
         *
         * @param {array} source
         * Dataset from which to generate available options from.
         */function loadOptions(source){self.options=self.optionsFunc(source);}/**
         * Creates a set of options for a particular property to be filtered on.
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
         * @public
         * @memberof Components.GridFilter
         *
         * @param {array} source 
         * The dataset to generate options from.
         *
         * @returns {array}  
         * An array of options that can be selected to filter. These must be in the form 
         */function optionsFunc(source){var options=[];var cache={};new Searcher().prop(self.property).criteriaFunc(source,function(obj,value){if(!cache[value]){cache[value]=true;options.push({label:value,value:value,selected:false});return value;}});options.sort(function(o1,o2){if(o1.label<o2.label){return-1;}if(o1.label>o2.label){return 1;}return 0;});return options;}/**
         * Clears filter and resets dataset
         * @public
         * @memberof Components.GridFilter
         */function clear(){self.selectedOptionValues=[];self.options.forEach(function(x){return x.selected=false;});delete self.gridController.state[self.id];applyFilter();}/**
         * Wraps a custom filter func with some additonal pre-processing logic to ensure
         * that a filter without any selected options is returned. We also ensure to pass an additonal
         * parameter selectedOptionValues to the callers.
         *
         * @public
         * @memberof Components.GridFilter
         */function wrapFilterFunc(func){return function(obj,index,arr){if(self.selectedOptionValues.length===0){return obj;}return func(obj,index,arr,self.selectedOptionValues);};}/**
         * Toggles the selected css class.
         *
         * @public
         * @memberof Components.GridFilter
         */function toggleCss(){if(self.selectedOptionValues.length>0){$element.addClass(selectedCss);}else{$element.removeClass(selectedCss);}}/**
         * Toggles the opening and closing of filter options. If a filter was initially closed,
         * the options are then generated.
         */function toggleExpand(){if(!self.opened&&self.options.length===0){self.loadOptions(self.gridController.rawItems);}self.opened=!self.opened;}}})();(function(){'use strict';angular.module('fedramp.components').component('gridSearch',{templateUrl:'src/templates/components/grid-search.html',controller:GridSearch,controllerAs:'controller',require:{gridController:'^grid'},bindings:{// Property expression. Tells search which property to search on. 
property:'@',// Placeholder text to display on input field
placeholder:'@',id:'@',filterFunc:'<'}});GridSearch.$inject=['Searcher'];/**
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
     */function GridSearch(Searcher){var self=this;var searcher=new Searcher();self.filtered=[];self.$onInit=$onInit;self.search=search;self.clear=clear;self.restoreState=restoreState;function $onInit(){if(!self.id){throw'Id is required for grid search filter';}if(!self.property&&!self.filterFunc){throw'If property is not specified, filterFunc must be provided';}self.filterFunc=self.filterFunc?wrapFilterFunc(self.filterFunc):filterFunc;self.gridController.addFilter(self);restoreState();search();}/**
         * Filter applied to dataset when user searches
         *
         * @public
         * @memberof Components.GridSearch
         *
         * @param {object} obj
         * The current object instance within a dataset being filtered
         * @param {int} index
         * The index of the current object
         * @param {array} arr
         * Reference to the dataset being filtered
         */function filterFunc(obj,index,arr){if(self.searchTerm){var found=searcher.prop(self.property).contains(obj,self.searchTerm);if(found.length>0){return obj;}else{return null;}}else{return obj;}}/**
         * Every time a user searches, we filter based on the entire dataset and then internally 
         * store the results and call doFilter() on the parent dataset to appropriately merge results from
         * all relevant fitlers.
         *
         * @public
         * @memberof Components.GridSearch
         */function search(){saveState();var filtered=self.gridController.rawItems.filter(self.filterFunc);self.filtered=filtered;self.gridController.doFilter();}/**
         * Stores the current search parameters to state.
         *
         * @public
         * @memberof Components.GridSearch
         */function saveState(){if(self.searchTerm){self.gridController.state[self.id]=self.searchTerm;}else{delete self.gridController.state[self.id];}}/**
         * Extracts state informatin to restore search filter
         *
         * @public
         * @memberof Components.GridSearch
         */function restoreState(){var params=self.gridController.state;if(!(self.id in params)){return null;}self.searchTerm=params[self.id];}/**
         * When a custom filterFunc is provided, we wrap it with this function in order to properly
         * pass the searchTerm to the passed in function.
         *
         * @public
         * @memberof Components.GridSearch
         * @param {function} func
         * Custom filterFunc to be wrapped
         *
         * @returns
         * A function that has been wrapped to contain an additonal parameters
         */function wrapFilterFunc(func){return function(obj,index,arr){return func(obj,index,arr,self.searchTerm);};}/**
         * Clears the search text
         *
         * @public
         * @memberof Components.GridSearch
         */function clear(){self.searchTerm='';search();}}})();(function(){'use strict';angular.module('fedramp.components').component('gridSort',{templateUrl:'src/templates/components/grid-sort.html',require:{gridController:'^grid'},controller:GridSort,controllerAs:'controller',bindings:{name:'@',property:'@',caseSensitive:'@',header:'@',default:'@'}});GridSort.$inject=['$log','$parse','$element'];/**
     * @constructor
     * @memberof Components
     * @example <grid-sort property="provider" header="Provider"></grid-sort>
     */function GridSort($log,$parse,$element){var self=this;self.activated=null;self.asc=true;self.$onInit=$onInit;self.sort=sort;self.highlight=highlight;self.toggleSort=toggleSort;self.clear=clear;function $onInit(){if(!self.name){throw'Name must be specified for sort filter';}if(self.property){self.sortFunc=sortFunc;}restoreState();self.gridController.addSort(self);self.gridController.stateUpdate();}/**
         * Stores the sort information to the grid state.
         *
         * @public
         * @memberof Components.GridSort
         */function saveState(){// Merge any existing parameters
var existingParams=angular.extend(self.gridController.state,{'sort':(self.asc?'':'-')+self.name});// Update url
self.gridController.stateUpdate(existingParams);}/**
         * Restores the latest saved sort.
         *
         * @public
         * @memberof Components.GridSort
         */function restoreState(){var sortParam=self.gridController.state.sort;if(!sortParam){loadDefaultSort();return;}var m=sortParam.match(/(-)?(.*)/);if(m[2]!==self.name){return;}self.asc=m[1]===undefined;self.activated=true;self.sort(self.asc);}/**
         * Loads a specified default sort. This is to ensure a grid applies a sort when first loaded.
         *
         * @public
         * @memberof Components.GridSort
         */function loadDefaultSort(){if(self.default){// Parse if default should be in asc/desc
self.asc=self.default.split('-').reduce(function(p,c){return false;});self.sort(self.asc);}}/**
         * Sorts a list of items in the grid controller by the property for this particular
         * grid sort.
         *
         * @public
         * @memberof Components.GridSort
         * @param {boolean} doAscending
         * Sort direction to use
         */function sort(doAscending){self.activated=angular.isDefined(doAscending);self.asc=doAscending;self.gridController.defaultSort=self;self.gridController.items.sort(self.sortFunc);$element.addClass('sort-selected');// Update state of all sorts
self.gridController.updateSort();saveState();}/**
         * Toggles the sort. To maintain a consistent interaction, we always set the toggle to ascending
         * if the sort is not activated. This case would be hit when the user has clicked on the sort for the 
         * first time or after another sort.
         *
         * @public
         * @memberof Components.GridSort
         */function toggleSort(){if(!self.activated){self.sort(true);return;}self.sort(!self.asc);}/**
         * Performs a generic sort.
         *
         * @public
         * @memberof Components.GridSort
         */function sortFunc(_a,_b){// Enables to sort on multiple properties for a specific grid sort.
var props=self.property.split(',');for(var x=0;x<props.length;x++){var a=$parse(props[x])(_a);var b=$parse(props[x])(_b);// If we're dealing with numbers, delegate to number sort func
if(angular.isNumber(a)){return numberSortFunc(a,b);}if(angular.isArray(a)){a=a.join(',');b=b.join(',');}// Normalize everything and make it all lowercase for fair comparison
a=a.toLowerCase();b=b.toLowerCase();if(a<b){return self.asc?-1:1;}if(a>b){return self.asc?1:-1;}}return 0;}/**
         * Handles generic numerical sort.
         */function numberSortFunc(a,b){if(self.asc){return a-b;}return b-a;}/**
         * Determines whether to highlight sort selected option.
         */function highlight(asc){if(!self.activated){return false;}if(self!==self.gridController.defaultSort){return false;}if(self.asc===asc){return true;}return false;}/**
         * Clears the sorting.
         *
         * @public
         * @memberof Components.GridSort
         */function clear(){self.activated=false;$element.removeClass('sort-selected');}}})();(function(){'use strict';angular.module('fedramp.components')/**
         * Simply renders the total number of items within a filtered dataset. 
         *
         * @example
         * <grid-total></grid-total>
         *
         * @constructor
         * @memberof Components
         */.component('gridTotal',{template:'<span class="count">{{controller.gridController.items.length}}</span> results',controllerAs:'controller',require:{gridController:'^grid'}});})();(function(){'use strict';angular.module('fedramp.components').component('grid',{//templateUrl: 'src/templates/components/grid.html',
//transclude: {
//'filters': 'filters',
//'sorters': 'sorters',
//'tiles': 'tiles',
//'export': 'export'
//},
controller:Grid,controllerAs:'gridController',bindings:{// Contains original unfiltered dataset
rawItems:'<',// Callback function called when grid update occurs
onUpdate:'&',// Determines whether grid will maintain state via query params
state:'<',hideFilters:'@'}});Grid.$inject=['$log','$stateParams','$location'];/**
     * @constructor
     * @memberof Components
     * @example <grid items="items" raw-items="agencies"></grid>
     */function Grid($log,$stateParams,$location){var self=this;// Maintains a list of filters
var filters=[];var sorts=[];self.$onInit=$onInit;self.addFilter=addFilter;self.addSort=addSort;self.doFilter=doFilter;self.clearFilters=clearFilters;self.updateSort=updateSort;self.stateUpdate=stateUpdate;self.state=$location.search()||{};// Default sort to utilize for results
self.defaultSort=null;self.items=[];self.hideFilters=angular.isDefined(self.hideFilters)?self.hideFilters:false;/**
         * Generate a description of the applied filters for printing.
         * @public
         * @memberof Components.Grid
         *
         * @returns
         *  A human readable description of the filters applied
         */self.printDescription=function(){var message='';if(filters){filters.forEach(function(f){var name='';if(f.header){name=f.header;}else if(f.property){name=f.property;}var vals='';if(f.selectedOptionValues){f.selectedOptionValues.forEach(function(o){if(vals.length>0){vals+=', or ';}vals+=o.value;});}if(name.length&&vals.length){if(message.length>0){message+=' and ';}message+=name+' is '+vals;}});}return message.length===0?'No filters applied':message;};/**
         * Initializes the component.
         */function $onInit(){if(!self.onUpdate){throw'Specify an onUpdate function! Otherwise, you don\' get updates.';}self.items=self.rawItems;self.onUpdate({items:self.items,state:self.state});}/**
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
         *
         * @param {Components.GridFilter} filter
         * Instance of a GridFilter component
         */function addFilter(filter){filters.push(filter);}/**
         * When sorts first load, they will add themselves to this controller using this method
         * @public
         * @memberof Components.Grid
         *
         * @param {Components.GridSort} sort
         * Instance of a GridSort component
         */function addSort(sort){sorts.push(sort);}/**
         * Updates the state of all sorts so that the latest one used is the only one that's 
         * activated.
         * @public
         * @memberof Components.Grid
         */function updateSort(){sorts.forEach(function(sort){if(!angular.equals(sort,self.defaultSort)){sort.clear();}});}/**
         * Updates the state information for the grid by storing saved filters and sorting information in the $location.search().
         * Then executes the callback method to pass back state and list of items to calling clients.
         *
         * @public
         * @memberof Components.Grid
         *
         * @param {object} state
         * Object containing key/value data to add to the state
         */function stateUpdate(state){state=angular.extend(self.state,state);$location.search(state);self.onUpdate({items:self.items,state:state});}}})();(function(){'use strict';angular.module('fedramp.components').component('panel',{transclude:true,templateUrl:'src/templates/components/panel.html',controller:Panel,controllerAs:'controller',bindings:{header:'@',iconClass:'@',expand:'<'}});Panel.$inject=[];/**
     * @constructor
     * @memberof Components
     */function Panel(){var self=this;self.header=self.header||'';self.expand=angular.isDefined(self.expand)?self.expand:true;}})();(function(){'use strict';angular.module('fedramp.components').component('productList',{templateUrl:'src/templates/components/product-list.html',controller:ProductList,controllerAs:'controller',bindings:{products:'<'}});ProductList.$inject=['fedrampData','helperService'];/**
     * Renders a list of products with corresponding provider names. A link is generated for both provider and product.
     *
     * @constructor
     * @memberof Components
     */function ProductList(fedrampData,helperService){var self=this;self.productList=[];self.$onInit=$onInit;self.createList=createList;function $onInit(){createList();}function createList(){// Generate group provider/product object
var products=groupProviders();// Create an array containing the sorted provider names
var sortedProductKeys=Object.keys(products).sort(function(a,b){if(a.toLowerCase()<b.toLowerCase()){return-1;}if(a.toLowerCase()>b.toLowerCase()){return 1;}return 0;});// Since we can't sort objects (maps) by keys, we take original sorted
// array of providers and map each value to replace the provder string with
// an object.
sortedProductKeys=sortedProductKeys.map(function(v){return{name:v,products:products[v]};});self.groupedProducts=sortedProductKeys;}/**
         * Creates an object containing providers to products.
         *
         * @example
         *
         * {
         *      'Amazon': ['AWS', 'SomeOtherProduct']
         * }
         *
         * @returns
         * Object containing provider as key and product array as value
         */function groupProviders(){var providers=fedrampData.providers();var products={};self.products.reduce(function(arr,product){for(var x=0;x<providers.length;x++){var provider=providers[x];for(var y=0;y<provider.products.length;y++){var curProduct=provider.products[y];if(curProduct.name===product){var productModel=findProductByName(product);if(!products[provider.name]){products[provider.name]=[];}products[provider.name].push({product:productModel,slugified:helperService.slugify(product)});break;}}}return arr;},products);return products;}/**
         * Finds a product model by the product name.
         * @returns {models.Product}
         *
         */function findProductByName(productName){var products=fedrampData.products();return products.find(function(x){return x.name===productName;});}}})();(function(){'use strict';angular.module('fedramp.components').component('productStatus',{templateUrl:'src/templates/components/product-status.html',controller:ProductStatus,controllerAs:'controller',bindings:{status:'<'}});ProductStatus.$inject=[];/**
     * Renders the appropriate fedramp status icon and text based on the inputted status text
     * @constructor
     * @memberof Components
     */function ProductStatus(){var self=this;}})();(function(){'use strict';angular.module('fedramp.components').component('product',{templateUrl:'src/templates/components/product.html',controller:Product,controllerAs:'controller',bindings:{model:'<',products:'<',onClose:'<'}});Product.$inject=['$log','$sce','$state','helperService'];/**
     * @constructor
     * @memberof Components
     */function Product($log,$sce,$state,helperService){var self=this;/**
         * Filter any additional products from the same provider
         * @public
         * @memberof Components.Product
         */self.additionalProducts=(self.products||[]).filter(function(x){return x.provider===self.model.provider;});/**
         * Close the informational panel
         * @public
         * @memberof Components.Product
         */self.close=function(){if(self.onClose){self.onClose();return;}$state.go('fedramp.app.home',{},{reload:true});};/**
         * Build a link from the given item
         * @public
         * @memberof Components.Product
         *
         * @param {string} modelType
         *  The item model type
         * @param {string} name
         *  The item name to be slugified
         *
         * @returns
         *  The pach for a hyperlink
         */self.linkify=function(modelType,name){return'#/'+modelType+'/'+helperService.slugify(name)+helperService.queryString();};/**
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
         */self.isProcessing=function(){return self.model.designation==='In Process';};/**
         * Is the products status considered 'Compliant'
         * @public
         * @memberof Components.Product
         *
         * @returns
         *  A value indicating if the product is compliant
         */self.isCompliant=function(){var compliant=['Compliant'];return compliant.includes(self.model.designation);};/**
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
         */self.statusMessage=function(){var message='';if(self.isCompliant()){message='Authorized Since '+(self.model.compliantDate||'');}else{if(self.model.expectedCompliance){message='Estimated Compliance Date '+self.model.expectedCompliance;}else{message='This provider has not given an Estimated Compliance Date';}}return message;};/**
         * Parses possible markdown, or other encoded text, as HTML
         * @public
         * @memberof Components.Product
         *
         * @param {string} text
         *  The text to parse
         *
         * @returns
         *  The text in HTML format
         */self.markdown=function(text){return $sce.trustAsHtml(new showdown.Converter().makeHtml(text));};/**
         * Trust a URL
         * @public
         * @memberof Components.Product
         *
         * @param {string} url
         *  The external URL
         *
         * @returns
         *  The trusted URL
         */self.externalLink=function(url){if(url.indexOf('http')===-1){url='http://'+url;}return $sce.trustAsResourceUrl(url);};}})();(function(){'use strict';angular.module('fedramp.components').component('productsGrid',{templateUrl:'src/templates/components/products-grid.html',controller:ProductsGrid,controllerAs:'controller',bindings:{expandTiles:'<',rawItems:'<?',onUpdate:'&?'}});ProductsGrid.$inject=['$log','fedrampData','$attrs'];/**
     * @constructor
     * @memberof Components
     */function ProductsGrid($log,fedrampData,$attrs){var self=this;/**
         * The filtered data
         * @member {array}
         * @memberof Components.ProductsGrid
         */self.filteredData=[];/**
         * The products
         * @member {array}
         * @memberof Components.ProductsGrid
         */self.products=self.rawItems||fedrampData.products();/**
         * Event reciever for when the grid is updated.
         * @public
         * @member {object}
         * @memberof Components.ProductsGrid
         *
         * @param {array} items
         *  Array of items with filtering and sorting applied.
         */self.onUpdate=function(func){return function(items,state){self.filteredData=items;if(func){func({items:items});}};}(self.onUpdate);/**
         * Flag to hide filters
         */self.hideFilters=angular.isDefined($attrs.hideFilters)?$attrs.hideFilters:false;/**
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
         */self.reuseRangeOptions=function(products){return[{value:{min:0,max:5},label:'0 - 5',selected:false},{value:{min:6,max:10},label:'5 - 10',selected:false},{value:{min:11,max:1000},label:'> 10',selected:false}];};/**
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
         */self.reuseRangeFilter=function(product,index,arr,selectedOptions){return selectedOptions.find(function(option){if(product.reuses>=option.value.min&&product.reuses<=option.value.max){return product;}});};/**
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
         */self.productNameSearchFilterFunc=function(product,i,arr,searchTerm){// If no search term, we display result since this is the same as having nothing selected
if(!searchTerm){return product;}searchTerm=searchTerm.toLowerCase();var productName=product.name.toLowerCase();var providerName=product.provider.toLowerCase();if(productName.indexOf(searchTerm)!==-1||providerName.indexOf(searchTerm)!==-1){return product;}return null;};/**
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
         */self.statusFilter=function(product,index,arr,selectedOptions){var found=null;selectedOptions.forEach(function(option){if(option.value===product.designation){found=product;return found;}// TODO Need fedramp ready column
//if(option.value === 'Ready' && product.fedrampReady){
//}
});return found;};/**
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
         */self.statusFilterOptions=function(products){return[{value:'Ready',label:'Ready',selected:false},{value:'In Process',label:'In Process',selected:false},{value:'Compliant',label:'Authorized',selected:false}];};}})();(function(){'use strict';angular.module('fedramp.components').component('provider',{templateUrl:'src/templates/components/provider.html',controller:Provider,controllerAs:'controller',bindings:{model:'<',onClose:'<'}});Provider.$inject=['$log','$state','helperService'];/**
     * @constructor
     * @memberof Components
     */function Provider($log,$state,helperService){var self=this;/**
         * Close the informational panel
         * @public
         * @memberof Components.Provider
         */self.close=function(){if(self.onClose){self.onClose();return;}$state.go('fedramp.app.home',{},{reload:true});};/**
         * Build a link from the given item
         * @public
         * @memberof Components.Product
         *
         * @param {string} modelType
         *  The item model type
         * @param {string} name
         *  The item name to be slugified
         *
         * @returns
         *  The pach for a hyperlink
         */self.linkify=function(modelType,name){return'#/'+modelType+'/'+helperService.slugify(name)+helperService.queryString();};}})();(function(){'use strict';angular.module('fedramp.components').component('search',{templateUrl:'src/templates/components/search.html',controller:Search,controllerAs:'controller'});Search.$inject=['$log','$state'];/**
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
         */self.search=function(e){if(e){e.preventDefault();}if(self.query){$state.go('fedramp.app.search',{query:self.query},{reload:true});}};}})();(function(){'use strict';angular.module('fedramp.components').component('tile',{templateUrl:'src/templates/components/tile.html',controller:Tile,controllerAs:'controller',bindings:{expand:'<',model:'<',state:'<'}});Tile.$inject=['$log','$state','$stateParams','helperService','$location'];/**
     * @constructor
     * @memberof Components
     */function Tile($log,$state,$stateParams,helperService,$location){var self=this;/**
         * The tile template for the model type.
         */self.tileTemplate='src/templates/components/tile-'+self.model.type+'.html';/**
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
             * The agency point of contact name
             * @member {string}
             * @memberof Models.Agency
             */self.pocName='';/**
             * The agency point of contact email
             * @member {string}
             * @memberof Models.Agency
             */self.pocEmail='';/**
             * The agency logo
             * @member {string}
             * @memberof Models.Agency
             */self.logo='';/**
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
             */self.assessors=[];/**
             * Text used to describe primary metric label
             * @member {string}
             * @memberof Models.Agency
             */self.useLabel='Products Used';}return Agency;}})();(function(){'use strict';angular.module('fedramp.models').factory('AssessorData',AssessorDataFactory);AssessorDataFactory.$inject=[];function AssessorDataFactory(){return AssessorData;/**
         * The raw assessors data model with opinionated transformations
         * @constructor
         * @memberof Models
         */function AssessorData(options){// Scope `this` to self
var self=this;var mapping={'Name':'name','Accreditation_Date':'accreditationDate','Logo':'logo','Description':'description','POC_Name':'pocName','POC_Email':'pocEmail','website':'website'};/**
             * Assessor name
             * @member {string}
             * @memberof Models.AssessorData
             */self.name='';/**
             * Assessor accreditation date
             * @member {Date}
             * @memberof Models.AssessorData
             */self.accreditationDate='';/**
             * Assessor logo
             * @member {string}
             * @memberof Models.AssessorData
             */self.logo='';/**
             * Assessor description
             * @member {string}
             * @memberof Models.AssessorData
             */self.description='';/**
             * Assessor point of contact name
             * @member {string}
             * @memberof Models.AssessorData
             */self.pocName='';/**
             * Assessor point of contact email
             * @member {string}
             * @memberof Models.AssessorData
             */self.pocEmail='';/**
             * Assessor website
             * @member {string}
             * @memberof Models.AssessorData
             */self.website='';/**
             * Initialize the assessor data object.
             *
             * @param {object} options
             *  A dictionary of options to configure the assessor
             *
             * @returns
             *  The provider
             */self.init=function(options){if(!options){return;}for(var x in options){if(!options.hasOwnProperty(x)){continue;}var key=mapping[x];if(key){self[key]=options[x];}else{if(self.hasOwnProperty(x)){self[x]=options[x];}}}return self;};/**
             * Get a unique hash or identifier for the provider.
             * @public
             * @memberof Models.Data
             *
             * @returns
             *  The hash
             */self.hash=function(){var id=''+self.name+self.accreditationDate;if(id.length===0){return null;}return id;};return self.init(options);}}})();(function(){'use strict';angular.module('fedramp.models').factory('Assessor',AssessorFactory);AssessorFactory.$inject=[];function AssessorFactory(){/**
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
             * The date assessor was accredited
             * @member {string}
             * @memberof Models.Assessor
             */self.accreditationDate='';/**
             * Text used to describe primary metric label
             * @member {string}
             * @memberof Models.Assessor
             */self.useLabel='Assessed';/**
             * The description provided by the assessor
             * @member {string}
             * @memberof Models.Assessor
             */self.description='';/**
             * Assessor logo
             * @member {string}
             * @memberof Models.Assessor
             */self.logo='';/**
             * Assessor description
             * @member {string}
             * @memberof Models.Assessor
             */self.description='';/**
             * Assessor point of contact name
             * @member {string}
             * @memberof Models.Assessor
             */self.pocName='';/**
             * Assessor point of contact email
             * @member {string}
             * @memberof Models.Assessor
             */self.pocEmail='';/**
             * Assessor website
             * @member {string}
             * @memberof Models.Assessor
             */self.website='';}return Assessor;}})();(function(){'use strict';angular.module('fedramp.models').factory('AtoLetter',AtoLetterFactory);function AtoLetterFactory(){return AtoLetter;}/**
     * Leveraged ATO letter.
     * @constructor
     * @memberof Models
     */function AtoLetter(options){// Scope `this` to self
var self=this;var mapping={'Letter_Date':'letterDate','Letter_Expiration_Date':'letterExpirationDate','Authorization_Date':'authorizationDate','Authorizing_Letter_Last_Sign_Date':'authorizingLetterSignedDate','Authorizing_Agency':'authorizingAgency','Authorizing_Subagency':'authorizingSubagency','Agency_POC':'pocName','Agency_POC_email':'pocEmail','Agency_Logo':'logo','Include_In_Marketplace':'includeInMarketplace','Independent_Assessor':'independentAssessor','Announcement_Date':'compliantDate'};/**
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
         * The agency point of contact name
         * @member {string}
         * @memberof Models.AtoLetter
         */self.pocName='';/**
         * The agency point of contact email
         * @member {string}
         * @memberof Models.AtoLetter
         */self.pocEmail='';/**
         * The agency logo
         * @member {string}
         * @memberof Models.AtoLetter
         */self.logo='';/**
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
var self=this;var mapping={'Cloud_Service_Provider_Name':'name','Cloud_Service_Provider_Package':'pkg','Path':'path','Designation':'designation','Package_ID':'pkgId','Service_Model':'serviceModel','Deployment_Model':'deploymentModel','Impact_Level':'impactLevel','Original_Authorization_Date':'authorizationDate','Original_Expiration_Date':'expirationDate','Sponsoring_Agency':'sponsoringAgency','CSP_URL':'cspUrl','Stage':'stage','Independent_Assessor':'independentAssessor','Underlying_CSP_Package_ID':'underlyingCspPackages','FedRAMP_Website_URL':'fedrampWebsite','CSP_Website':'cspWebsite','CSO_Description':'csoDescription','Expected_Compliance_Date':'expectedCompliance','Announcement_Date':'compliantDate','CSP_POC_Name':'pocName','CSP_POC_Email':'pocEmail','Leveraged_ATO_Letters':'atoLetters'};/**
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
             * The product point of contact name
             * @member {string}
             * @memberof Models.Data
             */self.pocName='';/**
             * The product point of contact email
             * @member {string}
             * @memberof Models.Data
             */self.pocEmail='';/**
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
             * The compliance date
             * @member {string}
             * @memberof Models.Product
             */self.compliantDate='';/**
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
             */self.sponsoringAgency='';/**
             * Number of authorizations 
             * @member {number}
             * @memberof Models.Product
             */self.authorizations=0;/**
             * Text used to describe primary metric label
             * @member {string}
             * @memberof Models.Product
             */self.useLabel='Authorizations';/**
             * The service description
             * @member {string}
             * @memberof Models.Product
             */self.serviceDescription='';/**
             * The product point of contact name
             * @member {string}
             * @memberof Models.Product
             */self.pocName='';/**
             * The product point of contact email
             * @member {string}
             * @memberof Models.Product
             */self.pocEmail='';/**
             * Products dependent on the current product
             * @member {array}
             * @memberof Models.Product
             */self.dependents=[];}return Product;}})();(function(){'use strict';angular.module('fedramp.models').factory('Provider',ProviderFactory);ProviderFactory.$inject=[];function ProviderFactory(){/**
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
var self=this;var mapping={'Created_At':'lastRefresh','Produced_By':'producedBy'};/**
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
         */self.init=function(options){if(options){for(var x in options){if(!options.hasOwnProperty(x)){continue;}var key=mapping[x];if(key){self[key]=options[x];}}}return self;};/**
         * Refreshes the date to current date
         * @public
         * @memberof Models.Settings
         *
         * @returns
         *  The last refresh date
         */self.refresh=function(){self.lastRefresh=today(new Date(self.lastRefresh));return self.lastRefresh;};/**
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
         */self.needsRefresh=function(){return self.lastRefresh!==today(new Date());};self.hash=function(){return self.lastRefresh;};/**
         * Creates a formatted date string
         * @private
         * @memberof Models.Settings
         *
         * @returns
         *  Today's date formatting as mm/dd/YYYY
         */function today(date){var d=date;var dd=d.getDate();var mm=d.getMonth()+1;var yyyy=d.getFullYear();if(dd<10){dd='0'+dd;}if(mm<10){mm='0'+mm;}return mm+'/'+dd+'/'+yyyy;}return self.init(options);}})();(function(){'use strict';angular.module('fedramp.services').factory('Cache',CacheFactory);CacheFactory.$inject=['$cacheFactory'];/**
     * @constructor
     * @memberof Services
     */function CacheFactory($cacheFactory){var cache=$cacheFactory('fedramp');cache.wrap=wrap;return cache;/*
         * Wraps a function with additional behavior that does the following:
         * 
         * 1. Checks if the result of the function call is in cache
         * 2. If result is in cache, returns.
         * 3. If not in cache, execute apply on function with arguments and then store
         * result in cache using the passed in key.
         */function wrap(key){return function(func){return function(){var data=cache.get(key);if(angular.isDefined(data)){return data;}var result=func.apply(this,arguments);cache.put(key,result);return result;};};}}})();(function(){'use strict';angular.module('fedramp.services').service('CsvService',CsvService);CsvService.$inject=['$log'];/**
     * @constructor
     * @memberof Services
     */function CsvService($log){var self=this;/**
         * Takes an object and converts to a csv string
         *
         * @public
         * @memberof Service.CsvService
         *
         * @returns
         * A csv string representation of an object.
         */self.toCsv=function(data,config){return Papa.unparse(data,config);};/**
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
         */self.flatten=function(data){var rows=[];for(var i=0;i<data.length;i++){rows.push(flattenObject(data[i]));}return rows;};/**
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
         */function unicornString(camelCase){return camelCase.replace(/([A-Z])/g,' $1').replace(/^./,function(s){return s.toUpperCase();});}}})();(function(){'use strict';angular.module('fedramp.services').service('DataService',DataService);DataService.$inject=['$log','StorageData','StorageAssessorData','StorageSettings','Settings','Data','AssessorData','DatasourceService','dataUrl','dictionaryUrl'];/**
     * @constructor
     * @memberof Services
     */function DataService($log,StorageData,StorageAssessorData,StorageSettings,Settings,Data,AssessorData,DatasourceService,dataUrl,dictionaryUrl){var self=this;/**
         * Issue a GET request for the given URL.
         * @public
         * @memberof Services.DataService
         *
         * @returns
         *  The response as a promise
         */self.pull=function(){return DatasourceService.pull(dataUrl).then(function(response){var meta=response.meta;var data=response.data;// Add Assessors
var assessorStorage=saveAssessors(data.Assessors);// Add Providers
var storage=saveProviders(data.Providers,assessorStorage.all());// Add Settings
saveSettings(meta);return storage;});};/**
         * Issue a GET request to retrieve the data dictionary.
         */self.pullDataDictionary=function(){return DatasourceService.pull(dictionaryUrl).then(function(dataDictionary){for(var x=dataDictionary.length-1;x>=0;x--){var d=dataDictionary[x];// Remove empty keys
if(Object.keys(d).length===0){dataDictionary.splice(x,1);}}return dataDictionary;});};/**
         * Stores provider information into local storage
         */function saveProviders(data,assessors){var storage=new StorageData({Assessors:assessors});storage.clear();for(var i=0;i<data.length;i++){var d=new Data(data[i]);storage.update(d.hash(),d);}return storage;}/**
         * Stores assessor information into local storage
         */function saveAssessors(assessors){var assessorStorage=new StorageAssessorData();assessorStorage.clear();for(var i=0;i<assessors.length;i++){var d=new AssessorData(assessors[i]);assessorStorage.update(d.hash(),d);}return assessorStorage;}/**
         * Stores setting information into local storage
         */function saveSettings(meta){var settingStorage=new StorageSettings();var setting=new Settings(meta);setting.refresh();settingStorage.update(setting.hash(),setting);}}})();(function(){'use strict';angular.module('fedramp.services').service('DatasourceService',DatasourceService);DatasourceService.$inject=['$http'];/**
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
         */self.pull=function(url){return $http.get(url).then(function(response){return response.data;});};}})();(function(){'use strict';angular.module('fedramp.services').provider('fedrampData',FedrampDataProvider);/**
     * Singlegon used to store the contents of a storagedata object after it's been pulled.
     *
     * The idea is to store the initial data load into this service so that
     * any other angular service/factory/directive/component can inject without having to re-query. Currently,
     * ui-router resolves are only limited to controllers bound to a state. With this service, we do away with that
     * limitation.
     *
     * This provider allows for a cache property to be configured that enables/disables automatic caching.
     * Since this is defined as a provider (angular.module.provider), you append the word Provider to the name 
     * defined above. So fedrampData => fedrampDataProvider;
     *
     *
     * @example
     *  // To configure, you inject the provider into config().
     *
     *  angular
     *  .module('fedramp')
     *  .config(['fedrampDataProvider', function (fedrampDataProvider) {
     *       fedrampDataProvider.defaults.cache = false;
     *   }])
     *
     *
     * // Then to use it, you just inject it,
     * someService.$inject = ['fedrampData'];
     * @constructor
     * @memberof Services
     */function FedrampDataProvider(){var provider=this;provider.defaults={cache:true};/**
         * $get is executed once when the application is bootstrapped and uses the defaults to construct
         * the object. These defaults must be configured inside a config function by injecting fedrampDataProvider.
         */provider.$get=['$log','Cache',function($log,Cache){return new FedrampDataService();/**
             * Fedramp Data Service is a service used to store queried information to be used by any component, service or 
             * factory. The intent is to have an object that can be passed around containing a cache of previously obtained data.
             *
             * This should be cached up front.
             */function FedrampDataService(){var self=this;/**
                 * Stores cache storage data.
                 */self.load=load;/**
                 * Takes the contents of a storage factory object and adds its properties and methods
                 * to this current object.
                 */function load(storage){angular.extend(self,storage);// If we enable caching globally when configuring fedrampDataProvider,
// we wrap all data returning functions with a cache wrapper.
if(provider.defaults.cache){self.products=Cache.wrap('products')(storage.products);self.providers=Cache.wrap('providers')(storage.providers);self.assessors=Cache.wrap('assessors')(storage.assessors);self.agencies=Cache.wrap('agencies')(storage.agencies);}}}}];}})();(function(){'use strict';angular.module('fedramp.services').service('helperService',HelperService);HelperService.$inject=['$log','$location'];/**
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
         */self.toDate=function(str){if(!str||str==='N/A'){return'';}var d=new Date(str);var dd=d.getUTCDate();var mm=d.getUTCMonth()+1;var yyyy=d.getUTCFullYear();if(dd<10){dd='0'+dd;}if(mm<10){mm='0'+mm;}return mm+'/'+dd+'/'+yyyy;};/**
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
         */self.queryString=function(){var query='';var search=$location.search();for(var n in search){if(query.length>0){query+='&';}query+=n+'='+encodeURIComponent(search[n]);}if(query.length>0){query='?'+query;}return query;};}})();(function(){'use strict';angular.module('fedramp.services').factory('Searcher',SearcherFactory);SearcherFactory.$inject=['$log','$parse'];function SearcherFactory($log,$parse){var ARRAY_FILTER_REGEX=/^(.*)\sin\s(.+)$/;return Searcher;/**
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
         */function Searcher(){var self=this;/**
             * Executes search by defined property expression
             */self.prop=function(expression){return new PropertyExpression(expression);};}/**
         * Handles searching for information within an object using a property expression.
         */function PropertyExpression(expression){var self=this;/**
             * Allows a function to be passed in to perform a manual comparison.
             */self.criteriaFunc=function(data,func){var results=[];eachResult(data,function(currentObject,value){var add=func.call(self,currentObject,value);if(add){results.push(add);}});return results;};/**
             * Iterates through an objects properties using the specified property expression
             * and performs a contains comparison.
             */self.contains=function(data,searchTerm){var results=[];eachResult(data,function(currentObject,value){if(value.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase())!==-1){results.push(currentObject);return true;}return false;});return results;};/**
             * Iterates through an objects properties using the specifed property expression 
             * and performs an equals comparison.
             */self.equals=function(data,searchTerm){var results=[];eachResult(data,function(currentObject,value){if(value.toString()===searchTerm.toString()){results.push(currentObject);return true;}return false;});return results;};/**
             * Performs a date range comparison
             */self.withinDateRange=function(data,start,end){var results=[];var startDate=new Date(start);var endDate=new Date(end);eachResult(data,function(currentObject,value){var valueDate=new Date(value);if(valueDate>=startDate&&valueDate<=endDate){results.push(currentObject);return true;}return false;});return results;};/**
             * Helper function iterates through all objects making the property expression.
             */function eachResult(data,func){if(!angular.isArray(data)){data=[data];}data.forEach(function(currentObject){new Walker(currentObject,expression).walk(function(obj){return func.call(self,currentObject,obj);});});}}/**
         * Traverses an object based on the property expression
         */function Walker(data,propExpression){var self=this;var targetKey=null;var targetProps=null;var isPrimitive=true;var useIndex=false;self.walk=function(func){find(data,targetProps,func);};/**
             * Recursively walks an object to reach the property expression
             */function find(obj,props,q){props=angular.copy(props);if(!props){return q.call(self,$parse(targetKey)(obj));}if(props.length===0){if(isPrimitive||useIndex){//return match(obj, q);
return q.call(self,obj);}return q.call(self,$parse(targetKey)(obj));}var curProp=props.shift();var value=$parse(curProp)(obj);if(angular.isArray(value)){for(var x=0;x<value.length;x++){var found=find(value[x],props,q);if(found){return;}}}}function parseKeys(){var m=propExpression.match(ARRAY_FILTER_REGEX);if(m){targetKey=m[1].split('.').splice(1).join('.');targetProps=m[2].split('.');isPrimitive=false;useIndex=targetKey==='';}else{targetKey=propExpression;}}parseKeys();}}})();(function(){'use strict';angular.module('fedramp.services').factory('StorageAssessorData',StorageAssessorDataFactory);StorageAssessorDataFactory.$inject=['StorageManager','AssessorData','helperService'];function StorageAssessorDataFactory(StorageManager,AssessorData,helperService){/**
         * Provides storage specific functionality that extends the StorageManager
         * @constructor
         * @memberof Services
         * @extends StorageManager
         */function StorageAssessorData(options){StorageManager.call(this);var self=this;self.storageContainer='assessorData';/**
             * Transforms the raw object to a specifec model
             * @public
             * @memberof Services.StorageAssessorData
             *
             * @param {Object} raw
             *  The JSON object
             *
             * @returns
             *  The item
             */self.transform=function(raw){return new AssessorData(raw);};return self.init(options);}StorageAssessorData.prototype=Object.create(StorageManager.prototype);StorageAssessorData.prototype.constructor=StorageAssessorData;return StorageAssessorData;}})();(function(){'use strict';angular.module('fedramp.services').factory('StorageData',StorageDataFactory);StorageDataFactory.$inject=['StorageManager','Data','Agency','Assessor','Product','Provider','AssessorData','helperService'];function StorageDataFactory(StorageManager,Data,Agency,Assessor,Product,Provider,AssessorData,helperService){/**
         * Provides storage specific functionality that extends the StorageManager
         * @constructor
         * @memberof Services
         * @extends StorageManager
         */function StorageData(options){StorageManager.call(this);var self=this;var rawAssessors=options&&options['Assessors']?options.Assessors:[];self.storageContainer='data';/**
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
             */self.providers=function(){var names=[];var items=[];var data=self.all();for(var i=0;i<data.length;i++){var d=data[i];if(!include(d.name,names)){continue;}names.push(d.name.trim());var item=new Provider();item.name=d.name.trim();item.logo=d.cspUrl;items.push(item);}items.forEach(function(item){item.products=self.products().filter(function(x){return x.provider===item.name;});item.products.forEach(function(prod){prod.name=prod.name.trim();item.reuses+=prod.reuses;item.products.forEach(function(prod){if(prod.serviceModels){prod.serviceModels.forEach(function(model){if(include(model,item.serviceModels)){item.serviceModels.push(model.trim());}});}if(prod.deploymentModel){if(include(prod.deploymentModel,item.deploymentModels)){item.deploymentModels.push(prod.deploymentModel.trim());}}if(include(prod.designation,item.designations)){item.designations.push(prod.designation.trim());}if(validAgency(prod.sponsoringAgency)&&include(prod.sponsoringAgency,item.agencies)){item.agencies.push(prod.sponsoringAgency.trim());}prod.agencies.forEach(function(a){if(validAgency(a)&&include(a,item.agencies)){item.agencies.push(a);}});});});// Sort any service models
item.serviceModels=item.serviceModels?item.serviceModels.map(function(x){return x.trim();}).sort():[];});return items;};/**
             * Extracts unique products
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of products
             */self.products=function(){var names=[];var items=[];var data=self.all();var _loop=function _loop(i){var d=data[i];if(!include(d.pkg,names)){return'continue';}names.push(d.pkg.trim());var item=new Product();item.name=d.pkg.trim();item.provider=d.name.trim();item.pkgId=d.pkgId.trim();item.serviceModels=d.serviceModel?d.serviceModel.map(function(x){return x.trim();}).sort():[];item.deploymentModel=d.deploymentModel.trim();item.designation=d.designation.trim();item.impactLevel=d.impactLevel.trim();item.logo=d.cspUrl;item.independentAssessor=d.independentAssessor;item.authorizationType=d.path;item.sponsoringAgency=d.sponsoringAgency;item.authorizationDate=helperService.toDate(d.authorizationDate);item.expectedCompliance=helperService.toDate(d.expectedCompliance);item.compliantDate=helperService.toDate(d.compliantDate);item.expirationDate=helperService.toDate(d.expirationDate);item.serviceDescription=safeTrim(d.csoDescription);item.website=safeTrim(d.cspWebsite);item.pocName=safeTrim(d.pocName);item.pocEmail=safeTrim(d.pocEmail);// Find all products that depend on the current product
data.forEach(function(d){if(d.underlyingCspPackages.includes(item.pkgId)){item.dependents.push(d.pkg.trim());}});item.reuses=d.atoLetters.length;var leveraged=data.filter(function(x){return x?x.underlyingCspPackages.includes(d.pkgId):false;});if(leveraged.length>0){// Add the unleveraged ATOs that use this CSP (if not and underlying CSP will be 0)
item.reuses+=leveraged.length;// Add leveraged ATO of CSP dependencies
item.reuses+=leveraged.map(function(x){return x.atoLetters.length;}).reduce(function(p,c){return p+c;});}//
// Calculate number of authorizations
item.authorizations=item.reuses+(item.designation!=='In-Process'?1:0);items.push(item);};for(var i=0;i<data.length;i++){var _ret=_loop(i);if(_ret==='continue')continue;}items.forEach(function(item){data.forEach(function(d){if(d.pkg.trim()===item.name){if(validAgency(d.sponsoringAgency)&&include(d.sponsoringAgency,item.agencies)){item.agencies.push(d.sponsoringAgency.trim());}d.atoLetters.forEach(function(a){if(validAgency(a.authorizingAgency)&&include(a.authorizingAgency,item.agencies)){item.agencies.push(a.authorizingAgency.trim());}if(validAgency(a.authorizingSubagency)&&include(a.authorizingSubagency,item.agencies)){item.agencies.push(a.authorizingSubagency.trim());}});}});});return items;};/**
             * Extracts unique agencies
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of agencies
             */self.agencies=function(){var names=[];var items=[];var data=self.all();// Top level
for(var i=0;i<data.length;i++){var _d=data[i];if(validAgency(_d.sponsoringAgency)&&include(_d.sponsoringAgency,names)){names.push(_d.sponsoringAgency.trim());var _item=new Agency();_item.name=_d.sponsoringAgency.trim();items.push(_item);}}// Nested
for(var _i2=0;_i2<data.length;_i2++){var _d2=data[_i2];for(var j=0;j<_d2.atoLetters.length;j++){var l=_d2.atoLetters[j];if(validAgency(l.authorizingAgency)&&include(l.authorizingAgency,names)){names.push(l.authorizingAgency.trim());var _item2=new Agency();_item2.name=l.authorizingAgency.trim();_item2.pocName=l.pocName.trim();_item2.pocEmail=l.pocEmail.trim();_item2.logo=l.logo.trim();items.push(_item2);}if(validAgency(l.authorizingSubagency)&&include(l.authorizingSubagency,names)){names.push(l.authorizingSubagency.trim());var _item3=new Agency();_item3.name=l.authorizingSubagency.trim();_item3.pocName=l.pocName.trim();_item3.pocEmail=l.pocEmail.trim();_item3.logo=l.logo.trim();items.push(_item3);}}}items.forEach(function(item){data.forEach(function(d){d.atoLetters.filter(function(x){return safeTrim(x.authorizingAgency)===item.name||safeTrim(x.authorizingSubagency)===item.name;}).forEach(function(a){item.authorized++;if(include(d.pkg,item.products)){item.products.push(d.pkg.trim());}if(include(d.name,item.providers)){item.providers.push(d.name.trim());}if(include(a.independentAssessor,item.assessors)){item.assessors.push(a.independentAssessor.trim());}});if(safeTrim(d.sponsoringAgency)===item.name){item.sponsored++;if(include(d.pkg,item.products)){item.products.push(d.pkg.trim());}if(include(d.name,item.providers)){item.providers.push(d.name.trim());}if(include(d.independentAssessor,item.assessors)){item.assessors.push(d.independentAssessor.trim());}}});item.reuses=item.sponsored+item.authorized;});return items;};/**
             * Extracts unique independent assessors
             * @public
             * @memberof Services.StorageData
             *
             * @returns
             *  An array of independent assessors
             */self.assessors=function(){var names=[];var items=[];var data=self.all();// Top level
for(var i=0;i<data.length;i++){var _d3=data[i];if(!include(_d3.independentAssessor,names)){continue;}names.push(_d3.independentAssessor.trim());var _item4=new Assessor();_item4.name=_d3.independentAssessor.trim();_item4=fillFromRawAssessor(_item4);items.push(_item4);}// Nested
for(var _i3=0;_i3<data.length;_i3++){var _d4=data[_i3];for(var j=0;j<_d4.atoLetters.length;j++){var l=_d4.atoLetters[j];var name='';if(!include(l.independentAssessor,names)){continue;}names.push(l.independentAssessor.trim());var _item5=new Assessor();_item5=fillFromRawAssessor(_item5);_item5.name=l.independentAssessor.trim();items.push(_item5);}}items.forEach(function(item){data.forEach(function(d){if(safeTrim(d.independentAssessor)===item.name){if(include(d.pkg,item.products)){item.products.push(d.pkg.trim());}if(include(d.name,item.providers)){item.providers.push(d.name.trim());}if(validAgency(d.sponsoringAgency)&&include(d.sponsoringAgency,item.agencies)){item.agencies.push(d.sponsoringAgency.trim());}}d.atoLetters.forEach(function(a){if(safeTrim(a.independentAssessor)===item.name){if(include(d.pkg,item.products)){item.products.push(d.pkg.trim());}if(include(d.name,item.providers)){item.providers.push(d.name.trim());}if(validAgency(a.authorizingAgency)&&include(a.authorizingAgency,item.agencies)){item.agencies.push(a.authorizingAgency.trim());}if(validAgency(a.authorizingSubagency)&&include(a.authorizingSubagency,item.agencies)){item.agencies.push(a.authorizingSubagency.trim());}}});});item.reuses=item.products.length;});return items;};function safeTrim(s){if(s){return s.trim();}return'';}function include(s,a){var st=safeTrim(s);if(st&&a){return!a.includes(st);}return false;}function validAgency(agency){return include(agency,['JAB Authorization','CSP Supplied']);}/**
             * Finds the assessor using a name from the list of raw assessors.
             *
             * @returns
             * Assessor being populated.
             */function fillFromRawAssessor(assessor){for(var x=0;x<rawAssessors.length;x++){// Empty {} seem to be returned sometimes
if(Object.keys(rawAssessors[x]).length===0){continue;}var assessorData=new AssessorData(rawAssessors[x]);if(safeTrim(assessorData.name)===safeTrim(assessor.name)){assessor.accreditationDate=helperService.toDate(assessorData.accreditationDate);assessor.description=assessorData.description;assessor.logo=assessorData.logo;assessor.pocName=assessorData.pocName;assessor.pocEmail=assessorData.pocEmail;assessor.website=assessorData.website;break;}}return assessor;}return self.init(options);}StorageData.prototype=Object.create(StorageManager.prototype);StorageData.prototype.constructor=StorageData;return StorageData;}})();(function(){'use strict';angular.module('fedramp.services').factory('StorageManager',StorageManagerFactory);function StorageManagerFactory(){return StorageManager;}/**
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
             */self.transform=function(raw){var s=new Settings();s.lastRefresh=raw.lastRefresh;s.producedBy=raw.producedBy;return s;};self.first=function(){var settings=self.all();if(settings.length===0){return null;}return settings[0];};return self.init(options);}StorageSettings.prototype=Object.create(StorageManager.prototype);StorageSettings.prototype.constructor=StorageSettings;return StorageSettings;}})();(function(){'use strict';angular.module('fedramp').controller('AgenciesController',AgenciesController);AgenciesController.$inject=['$log','agencies'];/**
     * @constructor
     * @memberof Controllers
     */function AgenciesController($log,agencies){}})();(function(){'use strict';angular.module('fedramp').controller('AgencyComparisonController',AgencyComparisonController);AgencyComparisonController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
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
         */self.onUpdate=function(items){self.filteredData=items;};helperService.scrollTo('scrollToContent');}})();(function(){'use strict';angular.module('fedramp').controller('AssessorComparisonController',AssessorComparisonController);AssessorComparisonController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
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
         */self.onUpdate=function(items){self.filteredData=items;};helperService.scrollTo('scrollToContent');}})();(function(){'use strict';angular.module('fedramp').controller('AssessorsController',AssessorsController);AssessorsController.$inject=['$log','assessors'];/**
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
         */self.reuseRangeFilter=function(assessor,index,arr,selectedOptions){return selectedOptions.find(function(option){if(assessor.reuses>=option.value.min&&assessor.reuses<=option.value.max){return option;}});};}})();(function(){'use strict';angular.module('fedramp').controller('HomeController',HomeController);HomeController.$inject=['$log','fedrampData','CsvService','Cache','$state','helperService'];/**
     * @constructor
     * @memberof Controllers
     */function HomeController($log,fedrampData,CsvService,Cache,$state,helperService){var self=this;/**
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
         */self.totalAuthorized=Cache.wrap('totalAuthorized')(function(){return fedrampData.products().filter(function(x){return x.designation==='Compliant';}).length;});/**
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
         * The total number of products that are In-Process
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total number of in-process products
         */self.totalInProcess=Cache.wrap('totalInProcess')(function(){return fedrampData.products().filter(function(x){return x.designation==='In Process';}).length;});/**
         * The total number of products that are Ready
         * TODO: Need to validate how this will be calculated
         *
         * @public
         * @memberof Controllers.HomeController
         *
         * @returns
         *  The total number of fedramp ready products
         */self.totalReady=Cache.wrap('totalReady')(function(){return 0;});/**
         * Takes user to products grid and applies status filter.
         * @public
         * @memberof Controllers.HomeController
         */self.filterProducts=function(status){$state.go('fedramp.app.home.products',{},{reload:true,queryParams:{status:status}}).then(function(){helperService.scrollTo('products-grid');});};}})();(function(){'use strict';angular.module('fedramp').controller('ProductComparisonController',ProductComparisonController);ProductComparisonController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
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
         */self.onUpdate=function(items){self.filteredData=items;};helperService.scrollTo('scrollToContent');}})();(function(){"use strict";angular.module('fedramp').controller('ProductsController',ProductsController);ProductsController.$inject=[];/**
     * @constructor
     * @memberof Controllers
     */function ProductsController(){}})();(function(){'use strict';angular.module('fedramp').controller('ProviderComparisonController',ProviderComparisonController);ProviderComparisonController.$inject=['$log','$state','$stateParams','fedrampData','helperService'];/**
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
         */self.reuseRangeFilter=function(provider,index,arr,selectedOptions){return selectedOptions.find(function(option){if(provider.reuses>=option.value.min&&provider.reuses<=option.value.max){return provider;}});};}})();(function(){'use strict';angular.module('fedramp').controller('SearchController',SearchController);SearchController.$inject=['$log','$sce','$http','$stateParams','fedrampData','helperService'];/**
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
         */self.slugify=helperService.slugify;}})();