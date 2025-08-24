var gulp 			 = require('gulp'),
	minifycss    = require("gulp-minify-css"),
	less 			   = require('gulp-less'),
	path 			   = require('path'),
	uglify       = require('gulp-uglify'),
	rename       = require('gulp-rename'),
	jshint       = require('gulp-jshint'),
  concat       = require('gulp-concat');



gulp.task('default', function() {
   gulp.watch( paths.less, ['less']);
   gulp.watch( paths.scripts , ['scripts']);
   gulp.watch( paths.scripts_lint, ['lint']);
});




var paths = {
  less              : './app/less/**/*.less',
  css               : './build/css/',
  scripts           : './app/js/**/*.js',
  script_dest       : './build/js/',
  scripts_lint      : './app/js/app.js',
};
 
gulp.task('less', function () {
  return gulp.src('./app/less/**/*.less')
    .pipe(less( './app/less/app.less' ))
    .pipe(rename('app.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest( paths.css ));
});

gulp.task('scripts', function() {
   return gulp.src( [
                    './app/js/ibmFlickr.js',
                    './app/js/app.js'

                    ] )
  
   .pipe(concat('combinedscripts.js'))
   .pipe(rename('app.min.js'))
   .pipe(uglify())
   .pipe(gulp.dest( paths.script_dest ));
});

gulp.task('lint', function() {
  return gulp.src( paths.scripts_lint )
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('vendors', function() {
   return gulp.src([
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'node_modules/vue/dist/vue.min.js'

                    ] )
    .pipe(concat('combinedvendor.js'))
    .pipe(rename('vendor.min.js'))
    .pipe(gulp.dest( paths.script_dest ));
});

