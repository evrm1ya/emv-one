
'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var notify =  require('gulp-notify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var server = require('gulp-server-livereload');
var gutil = require('gulp-util');
var chalk = require('chalk');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var duration = require('gulp-duration');
var babelify = require('babelify');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

gulp.task('server', function() {
  gulp.src(__dirname)
    .pipe(server({
      livereload: {
        enable: true
      },
      directoryListing: false,
      defaultFile: 'index.html',
      open: true 
    }));
});

var config = {
  js: {
    src: 'js/index.jsx',
    watch: './js/**/*',
    outputDir: './dist/',
    outputFile: 'bundle.js'
  },
  sass: {
    src: 'sass/**/*.scss',
    outFile: 'styles.css',
    outDir: './'
  }
};

function mapError(err) {
  let errName = chalk.red(err.name);
  if (err.filename) {
    let file = chalk.yellow(err.filename);
    let line = chalk.magenta(err.lineNumber || err.loc.line);
    let column = chalk.magenta(err.columnNumber || err.column || err.loc.column);
    let description = chalk.blue(err.description || err.message);
    gutil.log(
      `${errName}: ${file}: Line ${line} & Column ${column}: ${description}`
    );
  }
  else {
    let message = chalk.yellow(err.message);
    gutil.log(`${errName}: ${message}`);
  }
}

/**
 * bundle(browserifyBundler, srcDestEtcOpts)
 * opts = {
 *   durationTitle: '',
 *   source: '',
 *   outFile: '',
 *   sourcemapDest: '',
 *   outDir: ''
 * }
 */

// basic log to check errObj
// swap with mapError to check
function logErr(err) {
  console.log(err);
}

function bundle(bundler, opts) {
  var bundleTimer = duration(`${opts.durationTitle} bundle time`);

  bundler
    .bundle()
    .on('error', mapError)
    .pipe(source(opts.source))
    .pipe(buffer())
    .pipe(rename(opts.outFile))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write(opts.sourcemapDest))
    .pipe(gulp.dest(opts.outDir))
    .pipe(notify({
      message: 'Generated file: <%= file.relative %>'
    }))
    .pipe(bundleTimer)
}

var browserifyJsOpts = {
  entries: ['js/index.jsx'],
  extensions: ['.jsx'],
  cache: {},
  packageCache: {},
  debug: true
};

gulp.task('build', function() {
  let bundler = browserify(browserifyJsOpts)
    .plugin(watchify, {ignoreWatch: true})
    .transform(babelify, {presets: ['es2015', 'react']});

  let opts = {
    durationTitle: 'Javascript',
    source: config.js.src,
    outFile: config.js.outputFile,
    sourcemapDest: './map',
    outDir: config.js.outputDir
  };

  bundle(bundler, opts);

  bundler.on('update', function() {
    bundle(bundler, opts);
  });
});

var sassqwatch = gulp.watch(config.sass.src, ['sass']);

sassqwatch.on('change', function(event) {
  let file = chalk.blue('File');
  let eventPath = chalk.cyan(event.path);
  let was = chalk.blue('was');
  let eventType = chalk.red(event.type);
  console.log(`${file} ${eventPath} ${was} ${eventType}, running tasks...`);
});

gulp.task('sass', function() {
  gulp.src(config.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(config.sass.outFile))
    .pipe(gulp.dest(config.sass.outDir));
});

gulp.task('default', ['build', 'sass', 'server']);
