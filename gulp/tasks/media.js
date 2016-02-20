var config = require('../config');

if(!config.tasks.media) return;

var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var path = require('path');

var paths = {
    src: path.join(config.root.src, config.tasks.media.src, '/**'),
    dest: path.join(config.root.dest, config.tasks.media.dest)
};

var mediaTask = function() {
    return gulp.src(paths.src)
        .pipe(changed(paths.dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream());
};

gulp.task('media', mediaTask);

module.exports = mediaTask;
