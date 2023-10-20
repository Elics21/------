const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src("src/sass/**/*.+(sass|scss)")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('server', function(){
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
    gulp.watch("src/sass/**/*.+(sass|scss)", gulp.series('sass'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/js/**/*.js").on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('server', 'sass'));