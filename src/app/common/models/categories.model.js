angular
  .module("recap.models.categories", [])
  .service("CategoriesModel", function($http, $q) {
    var model = this,
      URLS = {
        FETCH: "data/categories.json"
      },
      categories,
      currentCategory;

    function extract(result) {
      return result.data;
    }

    function cacheCategories(result) {
      categories = extract(result);
      return categories;
    }

    model.getCategories = function() {
      return categories
        ? $q.when(categories)
        : $http.get(URLS.FETCH).then(cacheCategories);
    };

    model.setCurrentCategory = function(category) {
      return model.getCategoryByName(category).then(function(category) {
        currentCategory = category;
      });
    };

    model.getCurrentCategory = function() {
      return currentCategory;
    };

    model.getCurrentCategoryName = function() {
      return currentCategory ? currentCategory.name : "";
    };

    model.getCategoryByName = function(categoryName) {
      var deferred = $q.defer();

      function findCategory() {
        return categories.find(function(c) {
          return c.name == categoryName;
        });
      }

      if (categories) {
        deferred.resolve(findCategory());
      } else {
        model.getCategories().then(function() {
          deferred.resolve(findCategory());
        });
      }

      return deferred.promise;
    };
  });
