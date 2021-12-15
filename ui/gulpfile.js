'use strict';

const fs = require('fs');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');

let destinationDir = null;

if(process.env.GULP_DESTINATION_DIR){
    destinationDir = process.env.GULP_DESTINATION_DIR;
    process.stdout.write(`Using destination directory from environment variables: "${destinationDir}"\n`);
}else{
    destinationDir = '../docs/assets/compiled';
    process.stdout.write(`Using default destination directory: "${destinationDir}"\n`);
}

if(!fs.existsSync(destinationDir)){
    process.stdout.write(`Destination directory "${destinationDir}" doesn't exist\n`);
    process.exit();
}

function buildStyles() {
    return gulp.src('./sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destinationDir));
}

function buildJavascript() {
    return gulp.src('./js/main.js')
        .pipe(webpack({
          devtool: 'source-map',
        }))
        .pipe(gulp.dest(destinationDir))
}

exports.build = gulp.parallel(buildStyles, buildJavascript);

exports.watch = function () {
    gulp.watch('./sass/**/*.scss', {ignoreInitial: false}, buildStyles);
    gulp.watch('./js/**/*.js', {ignoreInitial: false}, buildJavascript);
};
