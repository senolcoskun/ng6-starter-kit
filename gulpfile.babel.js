'use strict';

import gulp from 'gulp';
import webpack from 'webpack';
import sass from 'gulp-sass'; // sonradan kaldırılacak
import autoprefixer from 'gulp-autoprefixer'; // sonradan kaldırılacak
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel'; // sonradan kaldırılacak
import concat from 'gulp-concat'; // sonradan kaldırılacak

const paths = {
src:'src',
dest:'dist'
};

const sassPaths = {
    src: `${paths.src}/*.scss`,
	dest: `${paths.dest}/css/`
};

const jsPaths = {
	src: `${paths.src}/*.js`,
	dest: `${paths.dest}/js/`
};

gulp.task('css', () => {
	return gulp.src(sassPaths.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassPaths.dest));
});


gulp.task("js", function () {
  return gulp.src(jsPaths.src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(jsPaths.dest));
});

gulp.task('default',['css', 'js']);