var gulp    = require('gulp'),
    plumber = require('gulp-plumber');

module.exports = function() {
  gulp.src('node_modules/snapsvg/dist/snap.svg.js')
    .pipe(plumber())
    .pipe(gulp.dest('public/'));
};

