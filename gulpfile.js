let gulp = require('gulp');
let babel = require('gulp-babel');
let del = require('del');

gulp.task('default', x=>{
    del.sync('dest/*');
    return gulp.src(['src/**/*.js', 'src/**/www'])
    .pipe(babel())
    .pipe(gulp.dest('dest'))
    .on('error',handleError)
});


function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}