var config = require('../config');

if(!config.tasks.templates) return;

var browserSync = require('browser-sync');
var gulp = require('gulp');
var handleErrors = require('../lib/handleErrors');
var path = require('path');
var render = require('gulp-nunjucks-render');
var fs = require('fs');

var exclude = path.normalize('!**/{' + config.tasks.templates.excludeFolders.join(',') + '}/**');

var paths = {
    src: [path.join(config.root.src, config.tasks.templates.src, '/**/*.html'), exclude],
    dest: path.join(config.root.dest, config.tasks.templates.dest),
};

var templatesTask = function() {
    render.nunjucks.configure([path.join(config.root.src, config.tasks.templates.src)], {watch: false });

    return gulp.src(paths.src)
        .pipe(render())
        .on('error', handleErrors)
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream());
};

gulp.task('templates', templatesTask);

module.exports = templatesTask;
