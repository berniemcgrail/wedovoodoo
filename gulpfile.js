var gulp = require('gulp');

var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var fileinclude = require('gulp-file-include');
var rename = require('gulp-rename');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');

var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

// SASS
//================
gulp.task('sass', function() {
    gulp.src('sass/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'));
});

// BROWSER-SYNC
//================
gulp.task('browser-sync', function() {
    browserSync({
        proxy: "local.wedovoodoo.co",
        open: true
    });
});

gulp.task('browser-sync-templates', function() {
    browserSync({
        server: {
            baseDir: './',
            directory: true
        },
        ghostMode: {
            clicks: true,
            location: true,
            forms: true,
            scroll: true
        },
        startPath: "built",
        open: true,
        logPrefix: "Act"
    });
});

// GULP
//================
gulp.task('default', function(){
    gulp.start('sass')
});

gulp.task('watch', ['default', 'browser-sync'], function () {
    watchFiles();
});

function watchFiles(){
    gulp.watch('sass/*.scss', ['sass', browserSync.reload]);
}