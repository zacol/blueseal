var config = require('../config');

if(!config.tasks.scripts) return;

var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');

var paths = {
    src: path.join(config.root.src, config.tasks.scripts.src, config.tasks.scripts.entry),
    dest: path.join(config.root.dest, config.tasks.scripts.dest)
};

var scriptsTask = function() {
    return browserify(paths.src)
        .bundle()
        .on('error', function(err) {
            console.error(err);
        })
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream());
};

gulp.task('scripts', scriptsTask);

module.exports = scriptsTask;
