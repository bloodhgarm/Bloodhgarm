var gulp = require('gulp'),
    del = require("del");

var config = require('../config');

gulp.task('build', gulp.series([
    function () {
        return del(config.root.dist);
    },
    gulp.parallel(
        'build:apps',
        'build:assets:styles',
        'build:assets:scripts',
        'build:assets:images',
        'build:assets:fonts',
    )
]));