//Dependencies & Variables
var gulp = require ("gulp");
var concat = require ("gulp-concat");
var uglify = require ("gulp-uglify");
var utilities = require ("gulp-util");
var del = require ("del");
var jshint = require ("gulp-jshint");
var sass = require ("gulp-sass");
var shell = require ("gulp-shell");
var sourcemaps = require ("gulp-sourcemaps");
var browserSync = require ("browser-sync").create();
var lib = require("bower-files") ({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});

var buildProduction = utilities.env.production;

//TypeScript
gulp.task ("tsClean", function() {
  return del (["app/*.js", "app/*.js.map"]);
});

gulp.task ("ts", ["tsClean"], shell.task(["tsc"]));

//Bower
gulp.task ("jsBowerClean", function() {
  return del (["./build/js/vendor.min.js"]);
});

gulp.task ("jsBower", ["jsBowerClean"], function() {
  return gulp.src (lib.ext("js").files)
    .pipe (concat("vendor.min.js"))
    .pipe (uglify())
    .pipe (gulp.dest("./build/js"));
});

gulp.task ("cssBowerClean", function() {
  return del (["./build/css/vendor.css"]);
});

gulp.task ("cssBower", ["cssBowerClean"], function() {
  return gulp.src (lib.ext("css").files)
    .pipe (concat("vendor.css"))
    .pipe (gulp.dest("./build/css"));
});

gulp.task ("bower", ["jsBower", "cssBower"]);

//JShint
gulp.task ("jshint", function() {
  return gulp.src (["js/*.js"])
    .pipe (jshint())
    .pipe (jshint.reporter("default"));
});

//SASS
gulp.task ("sassBuild", function() {
  return gulp.src (["resources/styles/*"])
    .pipe (sourcemaps.init())
    .pipe (sass())
    .pipe (sourcemaps.write())
    .pipe (gulp.dest("./build/css"));
});

//Server
gulp.task ("server", function() {
  browserSync.init ({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch (["app/*.ts"], ["tsBuild"]);
  gulp.watch (["resources/js/*.js"], ["jsBuild"]);
  gulp.watch (["resources/styles/*.css", "resources/styles.scss"], ["cssBuild"]);
  gulp.watch (["*.html"], ["htmlBuild"]);
});

gulp.task ("tsBuild", ["ts"], function() {
  browserSync.reload();
});

gulp.task ("jsBuild", ["jshint"], function() {
  browserSync.reload();
});

gulp.task ("cssBuild", ["sassBuild"], function() {
  browserSync.reload();
});

gulp.task ("htmlBuild", function() {
  browserSync.reload();
});

//Global Build
gulp.task ("build", ["ts"], function() {
  gulp.start ("bower");
  gulp.start ("sassBuild");
});
