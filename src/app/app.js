angular
  .module("recap", ["ui.router", "categories", "categories.bookmarks"])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      //abstract state serves as a PLACEHOLDER or NAMESPACE for application states
      .state("recap", {
        url: "",
        abstract: true
      });
    $urlRouterProvider.otherwise("/");
  });
