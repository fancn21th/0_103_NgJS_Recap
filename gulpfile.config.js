module.exports = {
  buildPath: "./build",
  filesToWatch: [
    "./src/assets/js/vendor/*.js",
    "./src/app/**/*.js",
    "./src/assets/css/**/*.css",
    "./src/index.html",
    "./src/app/**/*.html"
  ],
  filesToInject: [
    "./src/assets/js/vendor/*.js",
    "./src/app/**/*.js",
    "./src/assets/css/**/*.css"
  ]
};
