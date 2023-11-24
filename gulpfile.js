const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync');
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

gulp.task("sass", function () {
    return gulp
        .src("src/sass/**/*.+(sass|scss)")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task("server", function () {
    browserSync({
        server: {
            baseDir: "src",
        },
        notify: false,
    });
    gulp.watch("src/sass/**/*.+(sass|scss)", gulp.series("sass"));
    gulp.watch("src/*.html").on("change", browserSync.reload);
    gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
});

gulp.task("build:css", function () {
    return gulp
        .src("src/css/**/*.css")
        .pipe(cleanCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("build:js", function () {
    return gulp
        .src("src/js/**/*.js")
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("copy:html", function () {
    return gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

gulp.task("build", gulp.series("sass", "build:css", "build:js", "copy:html"));

gulp.task('default', gulp.parallel('server', 'sass'));