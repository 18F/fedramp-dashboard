var gulp          = require('gulp');
var babel         = require('gulp-babel');
var uglify        = require('gulp-uglify');
var rename        = require('gulp-rename');
var concat        = require('gulp-concat');
var replace       = require('gulp-replace');
var del           = require('del');
var zip           = require('gulp-zip');
var tar           = require('gulp-tar');
var gzip          = require('gulp-gzip');
var templateCache = require('gulp-angular-templatecache');
var jshint        = require('gulp-jshint');
var sass          = require('gulp-sass');
var cleanCSS      = require('gulp-clean-css');

// Filename for final minified javascript file
var concatOutputFilename = 'fedramp.js';

/**
 * Deletes the build/ directory to ensure a clean start
 */
gulp.task('clean', function () {
    'use strict';
    console.log('Blowing away the build artifacts');
    return del(['build', 'fonts', 'css', 'dist']);
});

/**
 * Compile SASS
 */
gulp.task('sass', function () {
    'use strict';
    return gulp
        .src([
            'node_modules/font-awesome/**/*.scss',
            'node_modules/uswds/src/stylesheets/**/*.scss',
            'src/sass/**/*.scss'
        ])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(concat('fedramp.css'))
        .pipe(gulp.dest('css'));
});

/**
 * Copies all source files over to build/src.
 */
gulp.task('copy:src', ['clean'], function () {
    'use strict';
    console.log('Copying over all of the source files');
    return gulp
        .src(['src/**/*'])
        .pipe(gulp.dest('build/src'));
});

/**
 * Copies the necessary production libs
 */
gulp.task('copy:lib', ['clean'], function () {
    'use strict';
    console.log('Copying over all of the lib files');
    return gulp
        .src([
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
        ])
        .pipe(gulp.dest('build/lib'));
});

gulp.task('copy:test', ['clean'], function () {
    'use strict';
    console.log('Copying over all of the lib files');
    return gulp
        .src([
            'node_modules/jasmine-core/lib/jasmine-core/jasmine.css'
        ])
        .pipe(gulp.dest('test'));
});

/**
 * Copies over all font resources
 */
gulp.task('copy:fonts', ['clean'], function () {
    'use strict';
    console.log('Copying over all of the font files');
    return gulp
        .src([
            'node_modules/uswds/dist/fonts/**/*',
            'node_modules/font-awesome/fonts/**/*'
        ])
        .pipe(gulp.dest('fonts'));
});

/**
 * Runs the linter (jshint) on all the source files
 */
gulp.task('copy:lint', ['copy:src'], function () {
    'use strict';
    console.log('Linting dev JS files');
    return gulp
        .src([
            'build/src/**/*.js',
        ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));

    // Ensure build fails and linter complains
    //.pipe(jshint.reporter('fail'));
});

/**
 * Finds all templates and creates a file containing the contents of each template in
 * an angular module.
 * Requires the `copy` build task to finish
 */
gulp.task('templates:cache', ['copy'], function () {
    'use strict';
    console.log('Caching angular templates');
    return gulp
        .src(['build/**/*.html'])
        .pipe(templateCache({
            module: 'fedramp',
            filename: 'fedramp.templates.js'
        }))
        .pipe(gulp.dest('build/src'));
});

/**
 * Concatenates all the minified application javascript files from /build/src.min
 * into one file.
 **/
gulp.task('mangle:concat', ['templates'], function () {
    'use strict';
    console.log('Concatenating JS files');
    return gulp
        .src([
            'build/src/**/*.module.js',
            'build/src/**/*.js'
        ])
        .pipe(concat(concatOutputFilename))
        .pipe(gulp.dest('build/'));
});

gulp.task('mangle:babel', ['mangle:concat'], function () {
    'use strict';
    return gulp
        .src('build/' + concatOutputFilename)
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('build/'));
});

/**
 * Concatenate the minified application source with the libraries
 */
gulp.task('mangle:concat-test', ['mangle:babel'], function () {
    'use strict';
    console.log('Concatenating JS files');
    return gulp
        .src([
            'build/lib/jasmine.js',
            'build/lib/jasmine-html.js',
            'build/lib/boot.js',
            'build/lib/polyfill.min.js',
            'test/blanket.min.js',
            'test/jasmine-blanket.js',
            'build/lib/angular.min.js',
            'build/lib/angular-ui-router.min.js',
            'build/lib/angular-aria.min.js',
            'build/lib/angular-sticky.min.js',
            'build/lib/angular-mocks.js',
            'build/lib/papaparse.min.js',
            'build/lib/showdown.min.js',
            'build/lib/uswds.min.js'
        ])
        .pipe(concat('fedramp.test.js'))
        .pipe(gulp.dest('build/'));
});

/**
 * Minifies all individual javascript files
 */
gulp.task('mangle:uglify', ['mangle:babel'], function () {
    'use strict';
    console.log('Uglifying js files');
    return gulp
        .src(['build/' + concatOutputFilename])
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('build/'));
});

/**
 * Concatenate the minified application source with the libraries
 */
gulp.task('mangle:concat-libs', ['mangle:uglify'], function () {
    'use strict';
    console.log('Concatenating JS files');
    return gulp
        .src([
            'build/lib/polyfill.min.js',
            'build/lib/angular.min.js',
            'build/lib/angular-ui-router.min.js',
            'build/lib/angular-aria.min.js',
            'build/lib/angular-sticky.min.js',
            'build/lib/papaparse.min.js',
            'build/lib/showdown.min.js',
            'build/lib/uswds.min.js',
            'build/fedramp.min.js'
        ])
        .pipe(concat('fedramp.min.js'))
        .pipe(gulp.dest('build/'));
});

/**
 * Copy compiled and minified source to dist/
 */
gulp.task('mangle:copy', ['mangle:concat-libs'], function () {
    'use strict';
    return gulp
        .src('build/fedramp*.js')
        .pipe(gulp.dest('dist'));
});

/**
 * Watch specific files to trigger builds during development
 */
gulp.task('watch:dog', [], function () {
    'use strict';
    console.log('Watch dog, ARF ARF!!!');
    gulp.watch('src/**/*.js', ['default']);
    gulp.watch('src/**/*.html', ['default']);
    gulp.watch('src/**/*.scss', ['default']);
    gulp.watch('test/**/*.js', ['default']);
});

// Creates sub-tasks
gulp.task('mangle', ['mangle:concat', 'mangle:babel', 'mangle:concat-test', 'mangle:uglify', 'mangle:concat-libs', 'mangle:copy']);
gulp.task('templates', ['templates:cache']);
gulp.task('copy', ['copy:src', 'copy:lib', 'copy:test', 'copy:fonts', 'copy:lint']);

// Default is the 'main' task that gets executed when you simply run `gulp`
gulp.task('default', ['clean', 'sass', 'copy', 'templates', 'mangle']);
gulp.task('package', ['clean', 'sass', 'copy', 'templates', 'mangle']);
gulp.task('watch', ['watch:dog']);


