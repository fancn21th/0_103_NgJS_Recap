angular
  .module("recap", ["ui.router", "categories", "categories.bookmarks"])
  .config(function($stateProvider) {
    var categoriesState = {
      url: "/categories",
      templateUrl: "app/categories/categories.tmpl.html",
      controller: "MainCtrl"
    };
    $stateProvider.state("categories", categoriesState);
  })
  .controller("MainCtrl", function($scope) {});
