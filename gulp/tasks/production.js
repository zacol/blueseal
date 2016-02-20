var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

var productionTask = function(cb) {
    gulpSequence('clean', ['fonts', 'images', 'media'], ['templates', 'styles', 'scripts'], 'rev', 'static', cb);
};

gulp.task('production', productionTask);

module.exports = productionTask;
