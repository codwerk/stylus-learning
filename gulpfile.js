'use strict';

var gulp = require('gulp'),
    gp = require('gulp-load-plugins')();

gulp.task('stylus', function(){
    return gulp.src('src/static/stylus/main.styl')
        .pipe(gp.sourcemaps.init())
        .pipe(gp.plumberNotifier())
        .pipe(gp.stylus({
            pretty:true
        }))
        .pipe(gp.autoprefixer({
            browsers: ['last 10 versions']
        }))
        .on("error", gp.notify.onError({
            title: "stile"
        }))
        .pipe(gp.csscomb())
        .pipe(gp.cssbeautify({indent: ' '}))
        .pipe(gp.sourcemaps.write())
        .pipe(gulp.dest('build/static/css/'))
});


gulp.task('watch', function(){
    gulp.watch('src/static/stylus/**/*.styl', ['stylus']);
});

gulp.task('build', ['stylus', 'watch']);

gulp.task('default', ['build'])

