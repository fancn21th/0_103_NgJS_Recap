module.exports = {
  buildPath: "./build",
  filesToWatch: [
    "./src/assets/js/vendor/*.js",
    "./src/app/**/*.js",
    "./src/assets/css/**/*.css",
    "./src/**/*.html"
  ],
  filesToInject: [
    "./src/assets/js/vendor/*.js",
    "./src/app/**/*.js",
    "./src/assets/css/**/*.css"
  ]
};
