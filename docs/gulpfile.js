/**
 * Created by milad on 25/02/2017.
 */
var gulp = require('gulp');
var compass = require('gulp-compass');
var sass = require('gulp-sass');


gulp.task('style-sass', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('cleansw-sass', function () {
    return gulp.src('./scss/clean-switch.scss')
        .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', [ 'style-sass','cleansw-sass']);

gulp.task('watch', [ 'style-sass','cleansw-sass'] , function(){
    gulp.watch('scss/*.scss', ['style-sass']);
    gulp.watch('scss/clean-switch.scss', ['cleansw-sass']);
});
