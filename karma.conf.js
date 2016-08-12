// Karma configuration
// Generated on Sun Jun 12 2016 12:12:53 GMT-0400 (EDT)

module.exports = function(config) {
    'use strict';

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'node_modules/babel-polyfill/dist/*.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-ui-router/release/*.min.js',
            'node_modules/angular-aria/*.min.js',
            'node_modules/angular-sticky-top/*.min.js',
            'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
            'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
            'node_modules/jasmine-core/lib/jasmine-core/boot.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/papaparse/papaparse.min.js',
            'node_modules/showdown/dist/*.min.js',
            'node_modules/uswds/dist/js/*.min.js'
            'dist/test/fedramp.test.js',
            'dist/test/fedramp.js',
            'dist/test/test-data.js',
            'dist/test/test-data-factory.js',
            'dist/test/**/*.js'
        ],


        // list of files to exclude
        exclude: [
            'dist/test/blanket.min.js',
            'dist/test/jasmine-blanket.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'dist/test/fedramp.js': ['coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'coveralls'],

        coverageReporter: {
            type: 'lcov',
            dir: 'dist/coverage/'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
