'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();


function buildStyles() {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watcher () {
  browserSync.init({
    server: {
        baseDir: "./"
    }
});
  gulp.watch('./scss/**/*.scss', buildStyles);
  gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.buildStyles = buildStyles;
exports.watch = watcher;