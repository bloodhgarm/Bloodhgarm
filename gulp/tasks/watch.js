var gulp = require('gulp');
var config = require('../config.js');

gulp.task('watch', gulp.series(
    'build',
    gulp.parallel(
        'browsersync',
        function () {
            gulp.watch(config.app.src, gulp.parallel('build:apps'));
            gulp.watch(config.assets.styles.src, gulp.parallel('build:assets:styles'));
            gulp.watch(config.assets.scripts.src, gulp.parallel('build:assets:scripts'));
            gulp.watch(config.assets.images.src, gulp.parallel('build:assets:images'));
            gulp.watch(config.assets.fonts.src, gulp.parallel('build:assets:fonts'));
        }
    )
));