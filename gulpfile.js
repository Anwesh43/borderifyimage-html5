const gulp = require('gulp')
const jsmin = require('gulp-jsmin')
const rename = require('gulp-rename')
gulp.task('default',()=>{
    gulp.src('./client/*.js').pipe(jsmin()).pipe(rename({suffix:'.min'})).pipe(gulp.dest('dist')).pipe(gulp.dest('public'))
})
