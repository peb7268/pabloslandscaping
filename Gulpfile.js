var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var livereload 	= require('gulp-livereload');

var paths 		= {
	sass: './public/styles/sass',
	css:  './public/styles/css',
	js:   './public/js'
}

gulp.task('sass', function () {
  gulp.src(paths.sass + '/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.css))
    .pipe(livereload());
});
 
gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch(paths.sass + '/**/*.scss', ['sass']);
});


gulp.task('default', ['sass', 'sass:watch']);