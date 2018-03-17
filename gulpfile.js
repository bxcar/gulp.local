var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/sass/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});
/*
gulp.task('mytask', function () {
    console.log('Hello, I am task');
});

gulp.task('mytask1', function () {
    return gulp.src('sources-files')
        .pipe(plugin())
        .pipe(gulp.dest('folder'))
});*/
