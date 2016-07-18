var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var del = require('del');
var zip = require('gulp-zip');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');
var templateCache = require('gulp-angular-templatecache');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

// App specific constants

// Filename for final minified javascript file
var concatOutputFilename = 'fedramp.js';

// Regex to use to find dev paths to extract
var jsPathRegex = /(\s.*)<!-- AppFiles -->(\n{1,})(\s.*){1,}<!-- AppFilesEnd -->/g;

// References to use when replacing dev paths
var prodJsPath = [ 
    '\n        <!-- Added on ' + new Date() + ' -->',
    '        <script src="lib/angular.min.js"></script>',
    '        <script src="lib/angular-ui-router.min.js"></script>',
    '        <script src="lib/papaparse.min.js"></script>',
    '        <script src="lib/uswds.min.js"></script>',
    '        <script src="fedramp.min.js"></script>'
];

/**
 * Deletes the build/ directory to ensure a clean start
 */
gulp.task('clean', function(){
    'use strict';
    console.log('Blowing away the build/ directory');
    return del(['build']);
});

/**
 * Copies all source files over to build/src.
 */
gulp.task('copy:src', ['clean'], function(){
    'use strict';
    console.log('Copying over all of the source files');
    return gulp.src(['src/**/*'])
        .pipe(gulp.dest('build/src'));
});

/**
 * Copies the necessary production libs to the both the build/lib and build/dest/lib
 * folders.
 */
gulp.task('copy:lib', ['clean'], function(){
    'use strict';
    console.log('Copying over all of the lib files');
    return gulp
        .src([
            'node_modules/babel-polyfill/dist/*.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-ui-router/release/*.min.js',
            'node_modules/papaparse/papaparse.min.js',
            'node_modules/showdown/dist/*.min.js',
            'node_modules/uswds/dist/js/*.min.js'
        ])
        .pipe(gulp.dest('lib'))
        .pipe(gulp.dest('build/lib'))
        .pipe(gulp.dest('build/dest/lib'));
});

/**
 * Copies over all css resources
 */
gulp.task('copy:css', ['clean'], function(){
    'use strict';
    console.log('Copying over all of the css files');
    return gulp
        .src([
            'css/**/*'
        ])
        .pipe(gulp.dest('build/css'))
        .pipe(gulp.dest('build/dest/css'));
});

/**
 * Copies over all css resources
 */
gulp.task('copy:img', ['clean'], function(){
    'use strict';
    console.log('Copying over all of the image files');
    return gulp
        .src([
            'img/**/*'
        ])
        .pipe(gulp.dest('build/img'))
        .pipe(gulp.dest('build/dest/img'));
});

/**
 * Copies over all font resources
 */
gulp.task('copy:fonts', ['clean'], function(){
    'use strict';
    console.log('Copying over all of the font files');
    return gulp
        .src([
            'fonts/**/*'
        ])
        .pipe(gulp.dest('build/fonts'))
        .pipe(gulp.dest('build/dest/fonts'));
});

/**
 * Runs the linter (jshint) on all the source files
 *
 * Waits for `copy:src` task to complete
 */
gulp.task('copy:lint', ['copy:src'], function(){
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
gulp.task('templates:cache', ['copy'], function(){
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
gulp.task('mangle:concat', ['templates'], function(){
    'use strict';
    console.log('Concatenating JS files');
    return gulp
        .src([
            'build/src/**/*.module.js',
            'build/src/**/*.js'
        ])
        .pipe(concat(concatOutputFilename))
        .pipe(gulp.dest('./build/dest/'));
});

gulp.task('mangle:babel', ['mangle:concat'], function () {
    'use strict';
    return gulp
        .src('build/dest/' + concatOutputFilename)
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('./build/dest/'));
});

/**
 * Minifies all individual javascript files and then dumps them into
 * `build/src.min` directory.
 *
 * Waits for the `templates` task to complete
 */
gulp.task('mangle:uglify', ['mangle:babel'], function(){
    'use strict';
    console.log('Uglifying js files');
    return gulp
        .src(['build/dest/' + concatOutputFilename])
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('build/dest/'));
});

gulp.task('mangle:copy', ['mangle:uglify'], function(){
    'use strict';
    return gulp
        .src('build/dest/fedramp*.js')
        .pipe(gulp.dest('dist'));
});


/**
 * Replaces the dev js references with production references to point to minified file and then copies it to
 * the build/dest directory.
 *
 * Depends on the mangle task to finish
 */
gulp.task('homepage', ['mangle'], function(){
    'use strict';
    console.log('Replacing dev js src paths with production paths');
    return gulp
        .src(['index.html'])
        .pipe(replace(jsPathRegex, prodJsPath.join('\n')))
        .pipe(gulp.dest('build/dest'));
});

/**
 * Zips up the site
 *
 * Depends on the homepage task to finish
 */
gulp.task('archive:zip', ['homepage'], function(){
    'use strict';
    console.log('Zipping up FedRAMP');
    return gulp
        .src('build/dest/**/*')
        .pipe(zip('fedramp.zip'))
        .pipe(gulp.dest('build/dist'));
});


/**
 * Tars up the site
 *
 * Depends on the homepage task to finish
 */
gulp.task('archive:gzip', ['homepage'], function(){
    'use strict';
    console.log('Gzipping FedRAMP');
    return gulp
        .src('build/dest/**/*')
        .pipe(tar('fedramp.tar'))
        .pipe(gzip())
        .pipe(gulp.dest('build/dist'));
});

gulp.task('watch:dog', [], function () {
    'use strict';
    console.log('Watch dog, ARF ARF!!!');
    gulp.watch('src/**/*.js', ['default']);
    gulp.watch('src/**/*.html', ['default']);
    gulp.watch('test/**/*.js', ['default']);
    gulp.watch('test/**/*.js', ['default']);
    gulp.watch('sass/**/*.scss', ['default']);
    gulp.watch('node_modules/uswds/src/stylesheets/**/*.scss', ['default']);
});

gulp.task('sass', function () {
    'use strict';
    return gulp
        .src([
            'node_modules/uswds/src/stylesheets/**/*.scss',
            'sass/**/*.scss'
        ])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('fedramp.css'))
        .pipe(gulp.dest('css'));
});

// Creates sub-tasks
gulp.task('archive', ['archive:zip', 'archive:gzip']);
gulp.task('mangle', ['mangle:concat', 'mangle:babel', 'mangle:uglify', 'mangle:copy']);
gulp.task('templates', ['templates:cache']);
gulp.task('copy', ['copy:src', 'copy:lib', 'copy:img', 'copy:css', 'copy:fonts', 'copy:lint']);

// Default is the 'main' task that gets executed when you simply run `gulp`
gulp.task('default', ['clean', 'sass', 'copy', 'templates', 'mangle']);
gulp.task('package', ['clean', 'sass', 'copy', 'templates', 'mangle', 'homepage', 'archive']);
gulp.task('watch', ['watch:dog']);


