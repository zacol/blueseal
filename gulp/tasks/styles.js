var config = require('../config');

if(!config.tasks.styles) return;

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var autoprefixer = require('gulp-autoprefixer');
var path = require('path');

var paths = {
    src: path.join(config.root.src, config.tasks.styles.src, '/**/*.{' + config.tasks.styles.extensions + '}'),
    dest: path.join(config.root.dest, config.tasks.styles.dest)
};

var stylesTask = function () {
    return gulp.src(paths.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', handleErrors)
        .pipe(autoprefixer(config.tasks.styles.autoprefixer))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream());
};

gulp.task('styles', stylesTask);

module.exports = stylesTask;
