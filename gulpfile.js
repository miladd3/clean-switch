const {src, dest, watch} = require('gulp');

const gulpSass = require('gulp-sass');

gulpSass.compiler = require('node-sass');


function sass() {
    return src('./clean-switch.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(dest('./'))
        .pipe(dest('./docs/css/'));
}

exports.sass = sass

function watchSass() {
    watch('./clean-switch.scss', sass);
}

exports.watch = watchSass

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask