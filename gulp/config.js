const root = {
    src: 'project/src',
    dist: 'project/dist',
}

module.exports = {
    isDevelepment: true,

    root: {
        src: root.src,
        dist: root.dist
    },

    app: {
        src: root.src + '/**/*.html',
        entry: root.src + '/*.html',
        output: root.dist
    },
    assets: {
        styles: {
            src: root.src + '/assets/styles/**/*.scss',
            entry: root.src + '/assets/styles/*.scss',
            output: root.dist + '/styles',
            options: {
            }
        },
        scripts: {
            src: root.src + '/assets/scripts/**/*.js',
            entry: root.src + '/assets/scripts/*.js',
            output: root.dist + '/scripts',
        },
        images: {
            src: root.src + '/assets/images/**/*.*',
            entry: root.src + '/assets/images/**/*.*',
            output: root.dist + '/images',
        },
        fonts: {
            src: root.src + '/assets/fonts/**/*.*',
            entry: root.src + '/assets/fonts/*.*',
            output: root.dist + '/fonts',
        }
    },
    components: {
        src: root.src + '/components/**/*.*',
        entry: root.src + '/components/**/*.*',
        output: root.dist + '/'
    }
}