var gulp = require('gulp');
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

// App specific constants

// Filename for final minified javascript file
var minifiedOutputFilename = 'fedramp.min.js';

// Regex to use to find dev paths to extract
var jsPathRegex = /(\s.*)<!-- AppFiles -->(\n{1,})(\s.*){1,}<!-- AppFilesEnd -->/g;

// References to use when replacing dev paths
var prodJsPath = [ 
    '\n<!-- Added on ' + new Date() + ' -->',
    '<script src="lib/jquery-3.0.0.min.js"></script>',
    '<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>',
    '<script src="lib/angular-ui-router.min.js"></script>',
    '<script src="lib/papaparse.min.js"></script>',
    '<script src="fedramp.min.js"></script>'
];
    
/**
 * Deletes the build/ directory to ensure a clean start
 */
gulp.task('clean', function(){
    "use strict";
    console.log('Blowing away the build/ directory');
    return del(['build']);
});

/**
 * Copies all source files over to build/src.
 */
gulp.task('copy:src', ['clean'], function(){
    "use strict";
    console.log('Copying over all of the source files');
    return gulp.src(['src/**/*'])
        .pipe(gulp.dest('build/src'));
});

/**
 * Copies the necessary production libs to the both the build/lib and build/dest/lib
 * folders.
 */
gulp.task('copy:lib', ['clean'], function(){
    "use strict";
    console.log('Copying over all of the lib files');
    return gulp.src([
        'lib/angular-ui-router.min.js',
        'lib/jquery-3.0.0.min.js',
        'lib/papaparse.min.js'
    ])
        .pipe(gulp.dest('build/lib'))
        .pipe(gulp.dest('build/dest/lib'));
});

/**
 * Runs the linter (jshint) on all the source files
 *
 * Waits for `copy:src` task to complete
 */
gulp.task('copy:lint', ['copy:src'], function(){
    "use strict";
    console.log('Linting dev JS files');
    return gulp.src([
        'build/src/**/*.js',
    ])
        .pipe(jshint('.jshintrc'))

        // Add pretty colors to error output
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
    "use strict";
    console.log('Caching angular templates');
    return gulp.src(['build/**/*.html'])
        .pipe(templateCache({
            module: 'fedramp',
            filename: 'fedramp.templates.js'
        }))
        .pipe(gulp.dest('build/src'));
});

/**
 * Minifies all individual javascript files and then dumps them into
 * `build/src.min` directory.
 *
 * Waits for the `templates` task to complete
 */
gulp.task('mangle:uglify', ['templates'], function(){
    "use strict";
    console.log('Uglifying js files');
    return gulp.src(['build/src/**/*.js'])
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('build/src.min'));
});


/**
 * Concatenates all the minified application javascript files from /build/src.min
 * into one file.
 *
 * Waits for the `mangle:uglify` build task to complete before executing.
 **/
gulp.task('mangle:concat', ['mangle:uglify'], function(){
    "use strict";
    console.log('Concatenating JS files');
    return gulp.src([
            'build/src.min/**/*.module.min.js',
            'build/src.min/**/*.js'
    ])
        .pipe(concat(minifiedOutputFilename))
        .pipe(gulp.dest('./build/dest/'));
});




/**
 * Replaces the dev js references with production references to point to minified file and then copies it to
 * the build/dest directory.
 *
 * Depends on the mangle task to finish
 */
gulp.task('homepage', ['mangle'], function(){
    "use strict";
    console.log('Replacing dev js src paths with production paths');
    return gulp.src(['index.html'])
        // Replace dev js references to production paths
        .pipe(replace(jsPathRegex, prodJsPath.join('\n')))
        .pipe(gulp.dest('build/dest'));
});

/**
 * Zips up the site
 *
 * Depends on the homepage task to finish
 */
gulp.task('archive:zip', ['homepage'], function(){
    "use strict";
    console.log('Zipping up FedRAMP');
    return gulp.src('build/dest/**/*')
        .pipe(zip('fedramp.zip'))
        .pipe(gulp.dest('build/dist'));
});


/**
 * Tars up the site
 *
 * Depends on the homepage task to finish
 */
gulp.task('archive:gzip', ['homepage'], function(){
    "use strict";
    console.log('Gzipping FedRAMP');
    return gulp.src('build/dest/**/*')
        .pipe(tar('fedramp.tar'))
        .pipe(gzip())
        .pipe(gulp.dest('build/dist'));
});


// Creates sub-tasks
gulp.task('archive', ['archive:zip', 'archive:gzip']);
gulp.task('mangle', ['mangle:uglify', 'mangle:concat']);
gulp.task('templates', ['templates:cache']);
gulp.task('copy', ['copy:src', 'copy:lib', 'copy:lint']);

// Default is the 'main' task that gets executed when you simply run `gulp`
gulp.task('default', ['clean', 'copy', 'templates', 'mangle', 'homepage', 'archive']);


