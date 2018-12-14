var gulp = require('gulp'),
    browserSync = require('browser-sync');
var config = require('../config.js');

gulp.task('browsersync', function() {
    browserSync.init({
        server: {
            baseDir: "./project/dist"
        },
        files: [
            './project/dist'
        ]
    });
});