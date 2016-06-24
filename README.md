# FedRAMP Dashboard

[![Gitter](https://badges.gitter.im/truetandem/fedramp-dashboard.svg)](https://gitter.im/truetandem/fedramp-dashboard?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Build Status](https://travis-ci.org/truetandem/fedramp-dashboard.svg?branch=master)](https://travis-ci.org/truetandem/fedramp-dashboard)
[![Coverage Status](https://coveralls.io/repos/github/truetandem/fedramp-dashboard/badge.svg?branch=master)](https://coveralls.io/github/truetandem/fedramp-dashboard?branch=master)
[![Code Climate](https://codeclimate.com/github/truetandem/fedramp-dashboard/badges/gpa.svg)](https://codeclimate.com/github/truetandem/fedramp-dashboard)
[![Accessibility](https://continua11y.18f.gov/truetandem/fedramp-dashboard.svg?branch=master)](https://continua11y.18f.gov/truetandem/fedramp-dashboard)

## Project Management

Taiga: [https://tree.taiga.io/project/truetandem-fedramp-dashboard](https://tree.taiga.io/project/truetandem-fedramp-dashboard)

 - [User Stories](https://api.taiga.io/api/v1/userstories/csv?uuid=926a76483f8144adacd750da0f95ebe8)
 - [Tasks](https://api.taiga.io/api/v1/tasks/csv?uuid=b0b63151452144f594a1d03631dcb447)
 - [Issues](https://api.taiga.io/api/v1/issues/csv?uuid=3116edcad252441d98f87c217490766b)

## Application
 - [Site](https://truetandem.github.io/fedramp-dashboard/)
 - [Tests](https://truetandem.github.io/fedramp-dashboard/test)
 - [Documentation](https://truetandem.github.io/fedramp-dashboard/doc)


## Getting to know the code

### Clone all things

First you are going to want to clone the repository

```
git clone git@github.com:truetandem/fedramp-dashboard.git
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