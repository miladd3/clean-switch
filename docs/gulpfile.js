/**
 * Created by milad on 25/02/2017.
 */
var gulp = require('gulp');
var compass = require('gulp-compass');
const sass = require('gulp-sass');


gulp.task('style-compass', function() {
    gulp.src('./scss/style.scss')
      .pipe(compass({
          css: 'css',
          sass: 'scss'
      }))
      .pipe(gulp.dest('css'));
});

gulp.task('cleansw-compass', function() {
    gulp.src('./scss/clean-switch.scss')
      .pipe(compass({
          css: 'css',
          sass: 'scss'
      }))
      .pipe(gulp.dest('css'))
      .pipe(gulp.dest('./dist'))
});

gulp.task('style-sass', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('cleansw-sass', function () {
    return gulp.src('./scss/clean-switch.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', [ 'style-sass','cleansw-sass']);

gulp.task('watch', [ 'style-sass','cleansw-sass'] , function(){
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('scss/clean-switch.scss', ['cleansw-sass']);
});