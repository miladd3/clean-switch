/**
 * Created by milad on 25/02/2017.
 */
var gulp = require('gulp');
var compass = require('gulp-compass');

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


gulp.task('default', [ 'style-compass' ]);

gulp.task('watch', [ 'style-compass','cleansw-compass'] , function(){
    gulp.watch('scss/*.scss', ['style-compass']);
    gulp.watch('scss/clean-switch.scss', ['cleansw-compass']);
});