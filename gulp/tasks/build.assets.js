var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify');

var config = require('../config');



gulp.task('build:assets:styles', function(){
    return gulp.src(config.assets.styles.entry)
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
            title: 'Assets : Styles',
            message: err.message
        }))
    }))
    .pipe(sass(config.assets.styles.options))
    .pipe(gulp.dest(config.assets.styles.output))
});

gulp.task('build:assets:scripts', function(){
    return gulp.src(config.assets.scripts.entry)
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
            title: 'Assets : Scripts',
            message: err.message
        }))
    }))
    .pipe(gulp.dest(config.assets.scripts.output))
});

gulp.task('build:assets:images', function(){
    return gulp.src(config.assets.images.entry)
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
            title: 'Assets : Images',
            message: err.message
        }))
    }))
    .pipe(gulp.dest(config.assets.images.output))
});

gulp.task('build:assets:fonts', function(){
    return gulp.src(config.assets.fonts.entry)
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
            title: 'Assets : Fonts',
            message: err.message
        }))
    }))
    .pipe(gulp.dest(config.assets.fonts.output))
});