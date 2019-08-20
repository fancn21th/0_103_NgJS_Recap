const { parallel, series, src, dest, watch } = require("gulp");
const inject = require("gulp-inject");
const del = require("del");
const browserSync = require("browser-sync").create();

// INJECT TASK
function index(cb) {
  const target = src("./src/index.html");
  const sources = src(
    [
      "./src/assets/js/vendor/*.js",
      "./src/assets/js/app/*.js",
      "./src/assets/**/*.css"
    ],
    {
      read: false
    }
  );
  return target
    .pipe(inject(sources, { ignorePath: "src" }))
    .pipe(dest("./build"));
}

// COPY TASK
function copyCss(cb) {
  return src("./src/**/*.css").pipe(dest("./build"));
}

function copyVendorJs(cb) {
  return src("./src/**/js/vendor/*.js").pipe(dest("./build"));
}

function copyAppJs(cb) {
  return src("./src/**/js/app/*.js").pipe(dest("./build"));
}

// CLEAN TASK
function clean(cb) {
  return del(["./build"], { force: true });
}

// BUILD TASK
const build = series(clean, parallel(copyVendorJs, copyAppJs, copyCss), index);

// SERVE
function serve(cb) {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });

  watch(
    [
      "./src/assets/js/vendor/*.js",
      "./src/assets/js/app/*.js",
      "./src/assets/**/*.css",
      "./src/**/*.html"
    ],
    { delay: 500 },
    series(build)
  );
}

exports.build = build;
exports.default = series(build, index, serve);
