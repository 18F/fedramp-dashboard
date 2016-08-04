# FedRAMP Dashboard

[![Gitter](https://badges.gitter.im/truetandem/fedramp-dashboard.svg)](https://gitter.im/truetandem/fedramp-dashboard?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Build Status](https://travis-ci.org/truetandem/fedramp-dashboard.svg?branch=master)](https://travis-ci.org/truetandem/fedramp-dashboard)
[![Coverage Status](https://coveralls.io/repos/github/truetandem/fedramp-dashboard/badge.svg?branch=master)](https://coveralls.io/github/truetandem/fedramp-dashboard?branch=master)
[![Code Climate](https://codeclimate.com/github/truetandem/fedramp-dashboard/badges/gpa.svg)](https://codeclimate.com/github/truetandem/fedramp-dashboard)
[![Accessibility](https://continua11y.18f.gov/truetandem/fedramp-dashboard.svg?branch=master)](https://continua11y.18f.gov/truetandem/fedramp-dashboard)

The purpose of the FedRAMP Dashboard project is to create a publicly available, web-based responsive dashboard providing greater visibility and up to date status for vendors going through the FedRAMP authorization process.   

The dashboard will provide many benefits to the FedRAMP user community including increased transparency and monitoring, improved decision-making and prioritization abilities, and reduced effort in compliance activities, among others. 

The FedRAMP Dashboard project team employed a user-centered design approach leveraging key principles from the [U.S. Digital Services Playbook](https://playbook.cio.gov/#plays_index_anchor):

1. Understand what people need 
2. Address the whole experience, from start to finish
3. Make it simple and intuitive

The team frequently interacted with user constituencies from FedRAMP, OMB, 18f, Federal Agencies, and Cloud Service Providers to understand the varying needs of each group and to derive the dashboard requirements from those needs.  

Read more about the FedRAMP program [here](https://www.fedramp.gov/about-us/about/ "FedRAMP").

## Table of contents

 - [Project Management](#project-management)
 - [Application](#application)
 - [Features](#features)
   - [Header](#header)
   - [Cloud Service Providers](#cloud-service-providers)
   - [Agencies](#agencies)
   - [3PAOs](#3paos)
   - [Analysis Tools](#analysis-tools)
 - [Maintenance](#maintenance)
    - [Add new Cloud Offering, Agency, or 3PAO](#add-new-cloud-offering-agency-or-3pao)
    - [Logo Guidelines](#logo-guidelines)
        - [File Type](#file-type)
        - [Target File Size](#target-file-size)
        - [Pixel Dimension if PNG](#pixel-dimension-if-png)
        - [Orientation and Crop](#orientation-and-crop)
    - [Adding a new filter to the dashboard](#adding-a-new-filter-to-the-dashboard)
    - [Maintain static header/footer](#maintain-static-headerfooter)
        - [Search](#search)
        - [Header](#header-1)
        - [Footer](#footer)
 - [Getting to know the code](#getting-to-know-the-code)
    - [Clone all things](#clone-all-things)
    - [Checking dependencies](#checking-dependencies)
    - [Running a local server](#running-a-local-server)
    - [Executing tests and coverage reports](#executing-tests-and-coverage-reports)
    - [Packaging Application](#packaging-application)

## Project Management
The project team utilized Taiga, a free online open source project management tool, to administer User Stories, Tasks, and Sprints.  All public projects in Taiga are free and openly accessible, providing full public visibility into the FedRAMP Dashboard Product Backlog and sprint activities.

Visit the FedRAMP Dashboard Taiga project [here](https://tree.taiga.io/project/truetandem-fedramp-dashboard) or download the project materials locally:

 - [User Stories](https://api.taiga.io/api/v1/userstories/csv?uuid=926a76483f8144adacd750da0f95ebe8)
 - [Tasks](https://api.taiga.io/api/v1/tasks/csv?uuid=b0b63151452144f594a1d03631dcb447)
 - [Issues](https://api.taiga.io/api/v1/issues/csv?uuid=3116edcad252441d98f87c217490766b)

GitHub commits can be traced back to their corresponding Taiga tasks through commit comments.  Commits directly related to a Taiga task will be prefixed with the task ID:

```
[TG-xxx] Commit description
```

## Application
The FedRAMP Dashboard is written entirely in client-side code: `HTML`, `CSS`, and `JavaScript`, and populated by a FedRAMP-managed `json` data feed .  The code is hosted in a [public code repository on GitHub](https://github.com/truetandem/fedramp-dashboard) and is [licensed](https://github.com/truetandem/fedramp-dashboard/blob/master/LICENSE) under the Creative Commons, CC0 1.0 Universal Public domain dedication.  

A GitHub Pages “gh-pages” branch was created in the GitHub repository to generate a website associated with the project for hosting the work-in-progress FedRAMP Dashboard page and related content.  The page facilitates rapid deployment for continuous integration, user testing, and feature demonstrations.   

 - Visit the [FedRAMP Dashboard test site](https://truetandem.github.io/fedramp-dashboard/)
 - View the raw FedRAMP `json` [data feed](https://raw.githubusercontent.com/18F/fedramp-data/master/data/data.json) 
 - Run the dashboard [Unit Tests](https://truetandem.github.io/fedramp-dashboard/test)
 - View the online [System Documentation](https://truetandem.github.io/fedramp-dashboard/doc)

For information on contributing to the FedRAMP Dashboard codebase, please visit [CONTRIBUTING.md](https://github.com/truetandem/fedramp-dashboard/blob/master/CONTRIBUTING.md)

## Features
The following User Stories were created and refined in response to many user surveys, interviews, and usability testing sessions, and became the base requirements for the FedRAMP Dashboard.  Click on the User Story number to see the story details, otherwise the title and brief description are provided here. 

#### Header
>[User Story 52](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/52): **Total Authorizations** - The high-level metrics at the top of the dashboard, counts for FedRAMP Ready, In-Process, and Authorized.  

#### Cloud Service Providers
>[User Story 19](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/19): **Provider check status** - View the cloud service offering/product current Authorization status both on the Products listing and the Product detail.  Products that are "Authorized" are represented by the double check-mark icon in the product listing view.

>[User Story 23](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/23): **Monitor CSP Authorizations** - See which agencies are using a product from the Product details view. The Agency names are listed out and created as hyperlinks to the Agency detail view. 

>[User Story 53](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/53): **Total Reuse (Authorizations)** - See how many time a product has been authorized for use by an agency, and see which agencies are using the product.  The count is visible in the product listing and the details page.

>[User Story 145](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/145): **In-process Time-line** - Visual representation of where a cloud product is in the FedRAMP authorization process.  The time-line is represented as a series of blocks in the Product detail page, color-coded to show each step in the process (when available).  Time-line data is not always available, in which case the time-line is left off the product details.

>[User Story 147](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/147): **View Authorization Dates** - With-in the product time-line, users can see the date when the product passed through each gateway.  The time-line gateways are FedRAMP Ready, In-Process, and Authorized.

#### Agencies
>[User Story 16](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/16): **Identify agency performance** - For each Agency, show the number of cloud products they are using.  The count is shown next to the Agency name on the Agency listing page and the services that make up the count are list in the Agency detail view.

>[User Story 18](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/18): **Visual representation of Agency** - In the Agency listing view, the Agency name, icon, point of contact, and number of products used is shown.  In the Agency detail page the same information is provided, but also the products used are listed out and are hyper-linked to their respective product detail page. 

>[User Story 22](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/22): **Review which agencies use a service** - In the cloud product details page, the listing of agencies who use that particular cloud product is provided, and the agencies listed are hyper-linked to their respective agency detail page.

#### 3PAOs
>[User Story 64](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/64): **View 3PAOs** - The 3PAO details view provides a description of the assessor's services to help potential customers (agencies) determine if they are a good fit to do their assessment. 

>[User Story 66](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/66): **What work has a 3PAO done** - The 3PAO details view provides a listing of the cloud providers and their corresponding products in which the 3PAO has performed assessments. The services listed are hyper-linked to their respective product detail page.

#### Analysis Tools
>[User Story 14](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/14): **Search dashboard** - The dashboard can be quickly filtered by entering the name of a Provider, Agency, or 3PAO.  The search box is in the filter area and is context-sensitive depending on which view you are in (Provider, Agency, or 3PAO).

>[User Story 17](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/17): **Pull data for reports** - Dashboard users can download the dashboard data into a CSV file for local use. The data is filtered to match the dashboard filter settings at the time of the download.

>[User Story 21](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/21): **Compare 2 CSP providers** - Click an item in the dashboard list view (works for Products, Agencies, and 3PAOs).  When the item details page shows, the list of remaining items is shown to the right of the details.  Select a second item and the details page for that item appears next to the original selection.  Close one, to find another to compare, or close both to the return to the initial filtered list view.

>[User Story 100](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/100): **Filter dashboard (by category)** - The filter area appears to the left of the main content listing area and is context-sensitive based on the current item type being viewed (Products, Agencies, 3PAOs).  The filters are aggregate, so as a filter is selected, the next filter will only apply to the currently filtered result set and the result set count appears in the upper portion of the filter area.  A check mark represents a current selected filter.  Filters are cleared one at a time by re-clicking a current filter, or all at once using the "Clear Filters" action at the top of the filter section. 

>[User Story 144](https://tree.taiga.io/project/truetandem-fedramp-dashboard/us/144): **Print Dashboard** - A printer-friendly formatted output has been created so the dashboard can be easily printed using the browser's native print functionality. 

## Maintenance 
### Add new Cloud Offering, Agency, or 3PAO
1. Add the new entity (provider, offering, agency, 3PAO) to the FedRAMP data source. *NOTE: Make sure the entity name is unique*
2. Ensure logo images follow the guidelines provided in the **Logo Guidelines** section below 
3. Add logo image file to the correct directory on the FedRAMP web server.
4. Ensure the `URL` to the image file is in the new data entry.  *NOTE: use https*
5. Publish new FedRAMP data to `data.gov` feed. 

### Logo Guidelines
To ensure consistency with logo images for Providers, Agencies, and Assessors appearing in the FedRAMP dashboard, please leverage the following guidelines.

#### File Type
`SVG` or `PNG` (with transparent background)

#### Target File Size
50k or smaller

#### Pixel Dimension if PNG
150px max width x 150 px max height

#### Orientation and Crop
Limit open space around logo and align edges of logo to bottom left corner. 

![logo guidelines graphic](https://cloud.githubusercontent.com/assets/12962390/17411346/22a43d28-5a46-11e6-9f85-c284d96249df.png)

### Adding a new filter to the dashboard
A grid consists of the following components:
- grid
  - gridFilter
    - A component that allows 0 or more options to be selected using a property expression or custom option/filter functions
  - gridSort
    - A component that filters based on a property expression
  - gridSearch
    - A component that allows free text-based searches

    
The `grid` is the parent component that all child components must require. The gridFilter component maintains state by using the `id` passed into `<grid-filter id="blah"></grid-filter>` and uses that as the key for the value that gets stored in the URL hash.

For instance, `<grid-filter id="blah"></grid-filter>` would render 
`?blah=<value from selectedOptions>`

The `<grid-filter/>` has two modes of operation

1. Using a `property expression` that defines which property to use to generate a list of available options. For more information regarding property expressions, please see the @example at http://truetandem.github.io/fedramp-dashboard/doc/Services.Searcher.html
2. Providing custom functions (`optionsFunc` and `filterFunc`) to render available options and apply custom filtering behavior.


Assume we have the following data
```json
[
  {
    "name": "TrueTandem",
    "employees": [
        {
           "name": "Bryan",
           "favoriteLanguages" : ["go"]
        },
        {
            "name": "John",
            "favoriteLanguages" : ["go", "js"]
        }
    ]
  },
  {
    "name": "18F",
    "employees": [
        {
           "name": "Laura",
           "favoriteLanguages" : ["ruby"]
        }
    ]
  }  
]
```

### 1. Using Property Expressions

#### Render filter containing list of company names (where property name = "name")
Filter Values = ['TrueTandem', '18F']

```html
<grid-filter id="companyName" property="name"></grid-filter>
```
#### Render filter containing list of favorite languages (where propery name = "favoriteLanguages"
Filter Values = ['go', 'js', 'ruby']

```html
<grid-filter id="favoriteLanguages" property="e.favoriteLanguages in employees"></grid-filter>
```

#### Render filter containing list of employee names (where propery name = "employees.name"
Filter Values = ['Bryan', 'John', 'Laura']

```html
<grid-filter id="employeeName" property="e.name in employees"></grid-filter>
```

### 2. Using Custom Functions
The gridFilter component also allows an `optionsFunc` and `filterFunc` to be passed in to accomodate custom filter options and behavior.

```html
<grid-filter id="name" options-func="optionsNameFunc" filter-func="filterByNameFunc"></grid-filter>
```

The optionsFunc must return an array of options that a user can select. It should be in the following format:
```javascript
{
    value: <object>,
    label: 'Friendly text label'
}
```
> Note that for values that are **NOT** primitive types, the json representation will be stored in the url. 

```javascript
// data contains array of currently filtered items.
function optionsNameFunc(data){
    return [
       {
          value: '12345',
          label: 'John'
       },
       {
          value: '54321',
          label: 'Bryan'
       },
       {
          value: '1523',
          label: 'Laura'
       }       
    ];
}
```

The `filterFunc` will be passed into the native `Array.prototype.filter` filter. That means that returning the current object will include that value in the filtered dataset. If null is returned, it will be excluded. The only added change is the inclusion of the fourth parameter, `selectedOptions`. This contains an array of options that have been selected by the user.

```javascript
function filterByNameFunc(company, index, arr, selectedOptions){
    for (var x = 0; x < selectedOptions.length; x++) {
        var option = selectedOptions[x];
        if (option.value === company.name) {
            return company;
        }
    }
    return null;
}
```

### Maintain static header/footer

#### Search

The topmost portion of the header consists of the search form. The this area is contained in
[the main template](src/templates/fedramp.html) within the element

```html
<div id="topnav" class="hidden-print"><!-- Search related elements --></div>
```

The actual [search template](src/templates/components/search.html) contains
the grid along with the form elements. The contents were based on the original template found on
the [www.fedramp.gov](https://www.fedramp.gov) site, but then adapted to follow the
[U.S. Web Design Standards](https://standards.usa.gov/search-bar/).

While the [search component](src/fedramp.components/search.component.js) is the backing to the
form the actual search logic takes place within the
[search controller](src/fedramp/search/search.controller.js). The controller handles the external
and internal queries, the displaying of results, and any exception handling and informational
messages.

To adjust the styles applied within the search please make all changes in
[search.scss](sass/search.scss).

#### Header

The remaining sections of the header can be referenced in
[the main template](src/templates/fedramp.html) within the element

```html
<div id="header" class="clearfix"><!-- Header related elements --></div>
```

Two main sections of importance:

  1. The site title/logo
  2. The site navigation

The logo is currently referencing ![FedRAMP Logo](https://fedramp.sites.usa.gov/files/2015/02/logo3.png)
and redirects the user to [www.fedramp.gov](https://www.fedramp.gov) if clicked.

The navigation is created with multiple layers of unordered lists for each subsequent
submenu. An example of this format which would be nested

```html
<ul class="catnav clearfix sf-js-enabled">
    <!-- Other menu items -->
    <li id="menu-item-8272" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-8272"><a href="#" class="sf-with-ul">Marketplace</a>
        <ul class="sub-menu" style="display: none;">
            <li id="menu-item-10722" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-782 current_page_item menu-item-10722 first-child"><a href="https://www.fedramp.gov/marketplace/compliant-systems/">FedRAMP Compliant Systems</a></li>
            <li id="menu-item-10712" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10712"><a href="https://www.fedramp.gov/marketplace/in-process-systems/">FedRAMP In-Process Systems</a></li>
            <li id="menu-item-10702" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10702"><a href="https://www.fedramp.gov/marketplace/fedramp-ready-systems/">FedRAMP Ready Systems</a></li>
            <li id="menu-item-4082" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4082 last-child"><a href="https://www.fedramp.gov/marketplace/accredited-3paos/">Accredited 3PAOs</a></li>
        </ul>
    </li>
    <!-- Other menu items -->
</ul>
```

To adjust the styles applied within the header please make all changes in
[header.scss](sass/header.scss).

#### Footer

The footer section can be referenced in
[the main template](src/templates/fedramp.html) within the element

```html
<footer class="usa-footer ..." role="contentinfo"><!-- Footer elements --></footer>
```

The footer has been divided into three (3) sections:

  1. Contact Information
  2. Twitter
  3. Subscribe to Updates

The contact information and subscription sections are basic HTML and can be
modified directly. However, the Twitter section required customization
found in the [Twitter component](src/fedramp.components/twitter.component.js).
This piece was separated due to how AngularJS does not render certain
potentially unsafe elements found within views. In order to circumvent this
we load the necessary JavaScript dynamically

```javascript
let script = document.createElement('script');
script.async = 'async';
script.src = 'https://platform.twitter.com/widgets.js';
script.charset = 'utf-8';
document.body.appendChild(script);
```

To adjust the styles applied within the footer please make all changes in
[footer.scss](sass/footer.scss).

## Getting to know the code

### Clone all things

First you are going to want to clone the repository

```
git clone https://github.com/truetandem/fedramp-dashboard.git
```

### Checking dependencies

For quick development we use [npm](https://www.npmjs.com/). Once
this has been installed we execute a single command:

```
npm install
```

### Running a local server

To run a local server we issue the command:

```
npm start
```

Then direct your browser at [http://localhost:8080](http://localhost:8080)

### Executing tests and coverage reports

To make a single pass through the test suite use the command:

```
npm test
```

The individual test results will be seen in the output, and the coverage
results may be viewed after running ```npm start``` at
[http://localhost:8080/coverage](http://localhost:8080/coverage)

### Packaging Application

To package up the application, use the command:

```
npm run package
```

This will generate the following file structure:

```
build/
   css/
   dest/
   fonts/
   img/
   lib/
   src/
```

where
 - `css/` contains the production ready stylesheets
 - `dest/` contains the production ready application code
 - `fonts/` contains the fonts used in the application
 - `img/` contains the images used in the application
 - `lib/`  contains third-party libraries
 - `src/`  contains the original source files
