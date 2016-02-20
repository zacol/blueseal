var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

var defaultTask = function(cb) {
    gulpSequence('clean', ['fonts', 'images', 'media'], ['templates', 'styles', 'scripts'], 'static', 'watch', cb);
};

gulp.task('default', defaultTask);

module.exports = defaultTask;
