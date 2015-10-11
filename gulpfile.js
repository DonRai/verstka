'use strict';
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css')

//task for js scripts
gulp.task('js', function () {
    gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'js/*.js'
    ])
        .pipe(concat('src/app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.'))
});

//task for less and css styles
gulp.task('css', function () {
    gulp.src([
        'less/styles.less',
        'css/*.css'
    ])
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(concat('src/style.css'))
        .pipe(gulp.dest('.'))
});

// start task gulp watch
gulp.task('watch', function() {
    gulp.start('css');
    gulp.start('js');

    gulp.watch(['less/*.less', 'less/**/*.less'], function() {
        gulp.start('css');
    });

    gulp.watch(['js/*.js'], function() {
        gulp.start('js');
    });
});