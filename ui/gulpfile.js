'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('/dist/css'));
}

exports.buildStyles = buildStyles;

exports.build = gulp.parallel(buildStyles);

exports.watch = function () {
    gulp.watch('./sass/**/*.scss', {ignoreInitial: false}, buildStyles);
};