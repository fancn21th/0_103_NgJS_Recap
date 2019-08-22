angular
  .module("categories", ["recap.models.categories"])
  .config(function($stateProvider) {
    $stateProvider.state("recap.categories", {
      url: "/",
      views: {
        "categories@": {
          controller: "CategoriesListCtrl as categoriesListCtrl",
          templateUrl: "app/categories/categories.tmpl.html"
        }
      }
    });
  })
  .controller("CategoriesListCtrl", function CategoriesListCtrl(
    CategoriesModel
  ) {
    var categoriesListCtrl = this;

    CategoriesModel.getCategories().then(function(result) {
      categoriesListCtrl.categories = result;
    });
  });
