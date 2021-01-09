(function () {
  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var fs = require('fs');
  var includePaths = [path.join(__dirname, '/node_modules/')];

  // save globals
  require('@jswork/next-global');
  nx.global(null);
  nx.$global = { includePaths };

  //import
  fs.readdirSync('./build').map(function (file) {
    require('./build/' + file);
  });

  gulp.task('default', gulp.series(['clean', 'styles']));
})();
