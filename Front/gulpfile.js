const gulp = require("gulp");
//change the Sass To Css
const gulpSass = require("gulp-sass");

const sass = gulpSass(require("sass"));
//Compile The sass files To Css and move it To New Dest
gulp.task("sass", async () => {
  gulp
    .src("src/Components/**/*.scss")

    .pipe(sass())

    .pipe(gulp.dest("src/css"));
});

gulp.task("watching", () => {
  //Watching and real Time Update The Data
  gulp.watch("src/Components/**/*.scss", async () => {
    //after watching will Compile The sass files To Css and move it To New Dest
    gulp
      .src("src/Components/**/*.scss")

      .pipe(sass())

      .pipe(gulp.dest("src/css"));
  });
});
