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
2. Add image file to the correct directory on the FedRAMP web server.
3. Ensure the `URL` to the image file is in the new data entry.
4. Publish new FedRAMP data to `data.gov` feed. 

### Adding a new filter to the dashboard
> Provide `code` example

### Maintain static header/footer
> Provide `code` example

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
