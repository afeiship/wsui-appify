(function() {
  'use strict';

  var gulp = require('gulp');
  var autoprefixer = require('autoprefixer');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });

  var { includePaths } = nx.$global;

  //styles
  gulp.task('styles', function() {
    return gulp
      .src('src/index.scss')
      .pipe($.jswork.pkgHeader())
      .pipe($.sassGlob())
      .pipe($.sass({ includePaths }))
      .pipe($.postcss([autoprefixer()]))
      .pipe(gulp.dest('dist'))
      .pipe($.rename('index.scss'))
      .pipe(gulp.dest('dist'));
  });


})();
