angular
  .module("recap", ["ui.router", "categories", "categories.bookmarks"])
  .config(function($stateProvider) {
    $stateProvider.state("recap", {
      url: "/", // Make to navigate to index.html#/
      templateUrl: "app/categories/categories.tmpl.html",
      controller: "MainCtrl"
    });
  })
  .controller("MainCtrl", function($scope) {});
