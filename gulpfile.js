"use strict";

var gulp = require("gulp");

var server = require("browser-sync").create();

var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");

var posthtml = require("gulp-posthtml");
var htmlmin = require("gulp-htmlmin");

var imagemin = require("gulp-imagemin");

var uglify = require("gulp-uglify");

var del = require("del");
var rename = require("gulp-rename");
var run = require("run-sequence");

gulp.task("serve", function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch("source/css/style.css", ["style"]);
  gulp.watch("source/js/*.js", ["js"]);
  gulp.watch("source/*.html", ["html"]).on("change", server.reload);
});

gulp.task("clean", function () {
  return del([
    "index.html",
    "css",
    "js"
  ]);
});

gulp.task("copy", function () {
  return gulp.src([
      "source/css/*.css",
      "!source/css/style.css"
    ])
    .pipe(gulp.dest("css"));
});

gulp.task("style", function() {
  return gulp.src("source/css/style.css")
    .pipe(plumber())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest("."));
});

gulp.task("js", function () {
  return gulp.src("source/js/*.js")
    .pipe(uglify().on("error", function (evt) { console.log(evt); }))
    .pipe(gulp.dest("js"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp.src([
      "img/**/*.{png,jpg,svg}"
    ])
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("img"));
});

gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "style",
    "html",
    "js",
    done
  );
});
