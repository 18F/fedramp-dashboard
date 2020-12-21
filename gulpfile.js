/*
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
========================================
========================================
========================================
----------------------------------------
USWDS SASS GULPFILE
----------------------------------------
*/

const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const gulp = require("gulp");
const pkg = require("./node_modules/uswds/package.json");
const postcss = require("gulp-postcss");
const replace = require("gulp-replace");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const uswds = require("./node_modules/uswds-gulp/config/uswds");

const del = require('del')
const jshint = require('gulp-jshint');
const templateCache = require('gulp-angular-templatecache');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

sass.compiler = require("sass");

/*
----------------------------------------
PATHS
----------------------------------------
- All paths are relative to the
project root
- Don't use a trailing `/` for path
names
----------------------------------------
*/

// Project Sass source directory
const PROJECT_SASS_SRC = "./src/sass";

// Compiled CSS destination
const CSS_DEST = "./dist/css";

// Site CSS destination
// Like the _site/assets/css directory in Jekyll, if necessary.
const SITE_CSS_DEST = "./path/to/site/css/destination";


const concatOutputFilename = 'fedramp.js';

/*
----------------------------------------
TASKS
----------------------------------------
*/

gulp.task("copy-uswds-setup", () => {
  return gulp
    .src(`${uswds}/scss/theme/**/**`)
    .pipe(gulp.dest(`${PROJECT_SASS_SRC}`));
});

/**
 * Deletes the build/ directory to ensure a clean start
 */
gulp.task('clean:all', function () {
    'use strict';
    console.log('Blowing away the build artifacts');
    return del(['build', 'fonts', 'img', 'css', 'dist']);
});

/**
 * Copies all source files over to build/src.
 */
gulp.task('copy:src', function () {
    'use strict';
    console.log('Copying over all of the source files');
    return gulp
        .src(['src/**/*'])
        .pipe(gulp.dest('build/src'));
});

/**
 * Copies the necessary production libs
 */
gulp.task('copy:lib', function () {
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

gulp.task('copy:test', function () {
    'use strict';
    console.log('Copying over all of the lib files');
    return gulp
        .src([
            'test/**/*',
            'node_modules/jasmine-core/lib/jasmine-core/jasmine.css'
        ])
        .pipe(gulp.dest('dist/test'));
});

/**
 * Copies over all font resources
 */
gulp.task('copy:fonts', function () {
    'use strict';
    console.log('Copying over all of the font files');
    return gulp
        .src([
            'node_modules/uswds/dist/fonts/**/*',
            'node_modules/font-awesome/fonts/**/*'
        ])
        .pipe(gulp.dest('dist/fonts'));
});

/**
 * Copies over all image resources
 */
gulp.task('copy:images', function () {
    'use strict';
    console.log('Copying over all of the image files');
    return gulp
        .src([
            'node_modules/uswds/dist/img/**/*',
            'src/img/**/*'
        ])
        .pipe(gulp.dest('dist/img'));
});

/**
 * Runs the linter (jshint) on all the source files
 */
gulp.task('copy:lint', function () {
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


gulp.task('copy', gulp.series('copy:src', 'copy:lib', 'copy:test', 'copy:fonts', 'copy:images', 'copy:lint'));

/**
 * Finds all templates and creates a file containing the contents of each template in
 * an angular module.
 * Requires the `copy` build task to finish
 */
gulp.task('templates', function () {
    'use strict';
    console.log('Caching angular templates');
    return gulp
        .src([
            '!build/src/index.html',
            'build/src/templates/**/*.html'
        ])
        .pipe(templateCache({
            module: 'fedramp',
            filename: 'fedramp.templates.js',
            root: 'templates',
        }))
        .pipe(gulp.dest('build/src'));
});

/**
 * Concatenates all the minified application javascript files from /build/src.min
 * into one file.
 **/
gulp.task('mangle:concat', function () {
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

gulp.task('mangle:babel', function () {
    'use strict';
    return gulp
        .src('build/' + concatOutputFilename)
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('build/'));
});

/**
 * Concatenate the minified application source with the libraries
 */
gulp.task('mangle:concat-test', function () {
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
gulp.task('mangle:uglify', function () {
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
gulp.task('mangle:concat-libs', function () {
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
        .pipe(replace(/\/\/# sourceMappingURL=.+.js.map/g, ''))
        .pipe(concat('fedramp.min.js'))
        .pipe(gulp.dest('build/'));
});

/**
 * Copy compiled and minified source to dist/test/
 */
gulp.task('mangle:copy-test', function () {
    'use strict';
    return gulp
        .src([
            'build/fedramp.js',
            'build/fedramp.test.js'
        ])
        .pipe(gulp.dest('dist/test/'));
});

/**
 * Copy compiled and minified source to dist/
 */
gulp.task('mangle:copy', function() {
    return gulp
        .src([
            'build/fedramp.min.js',
            'build/src/index.html',
            'build/src/robots.txt'
        ])
        .pipe(gulp.dest('dist/'));
});

gulp.task('mangle', gulp.series('mangle:concat', 'mangle:babel', 'mangle:concat-test', 'mangle:uglify', 'mangle:concat-libs', 'mangle:copy', 'mangle:copy-test'));

/**
 * Removes artifacts not necessary for a release
 */
gulp.task('clean:release', function () {
    'use strict';
    console.log('Removing development files');
    return del([
        'dist/coverage/',
        'dist/doc/',
        'dist/test/'
    ]);
});

gulp.task("build-sass", function(done) {
  var plugins = [
    // Autoprefix
    autoprefixer({
      cascade: false,
      grid: true
    }),
    // Minify
    csso({ forceMediaMerge: false }),
  ];
  return (
    gulp
      .src([
            'node_modules/font-awesome/**/*.scss',
            `${PROJECT_SASS_SRC}/index.scss`
        ])
      .pipe(
        sass.sync({
          includePaths: [
            `${PROJECT_SASS_SRC}/index.scss`,
            `${uswds}/scss`,
            `${uswds}/scss/packages`
          ]
        })
      )
      .pipe(replace(/\buswds @version\b/g, "based on uswds v" + pkg.version))
      .pipe(postcss(plugins))
      // uncomment the next line if necessary for Jekyll to build properly
      //.pipe(gulp.dest(`${SITE_CSS_DEST}`))
      .pipe(concat('fedramp.css'))
      .pipe(gulp.dest(`${CSS_DEST}`))
  );
});

gulp.task("watch-sass", function() {
  gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series("build-sass"));
});

gulp.task("watch", gulp.series("build-sass", "watch-sass"));

gulp.task("default", gulp.series(
    'clean:all',
    'build-sass',
    'copy',
    'templates',
    'mangle'
));

gulp.task("package", gulp.series('default', 'clean:release'));
