var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var del = require('del');

//browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

// Watchers
gulp.task('watch', function() {
    gulp.watch(['src/*.html'], ['html']);
    gulp.watch(['src/js/*.js'], ['js']);
    gulp.watch(['src/css/*.css'], ['css']);
    gulp.watch(['src/images/*'], ['images']);
    gulp.watch(['src/*.html'], browserSync.reload);
    gulp.watch(['src/js/*.js'], browserSync.reload);
    gulp.watch(['src/css/*.css'], browserSync.reload);
    
});
//Optimization tasks
//---------------------

//minimizing html
gulp.task('html', ['html:src']);
gulp.task('html:src', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});


//minimizing css
gulp.task('css', ['css:src']);
gulp.task('css:src', function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});


//minimizing javascripts
gulp.task('js', ['js:src']);
gulp.task('js:src', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});



//minimizing images
gulp.task('images', ['images:src']);
gulp.task('images:src', function(){
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});


// Cleaning 
gulp.task('clean', function() {
  return del.sync('dist')
});

// default tasks
// ---------------
gulp.task('default', ['browser-sync', 'watch']);
gulp.task('build', ['clean','html','css','js','images']);