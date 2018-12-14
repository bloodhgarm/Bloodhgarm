var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rigger = require('gulp-rigger'),
    notify = require('gulp-notify');

var config = require('../config');

gulp.task('build:apps', function(){
    return gulp.src(config.app.entry)
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
            title: 'Applications',
            message: err.message
        }))
    }))
    .pipe(rigger())
    .pipe(gulp.dest(config.app.output))
});