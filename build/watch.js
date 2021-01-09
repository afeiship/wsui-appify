(function() {
  'use strict';
  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del'],
  });

  //clean
  gulp.task('watch', function() {
    return gulp.watch(
      ['src/*.scss', 'src/components/**/*.scss'],
      gulp.series(['clean', 'styles', 'docs'])
    );
  });
})();
