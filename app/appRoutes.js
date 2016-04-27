feastly.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'Components/Homepage/homeview.html',
      controller: 'HomeController'
    })
    .when('/landing', {
      templateUrl: 'Components/LandingPage/landingview.html',
      controller: 'LandingController'
    })
    .when('/recipe', {
      templateUrl: 'Components/Recipe/recipeview.html',
      controller: 'RecipeViewCtrl'
    })
     .when('/results', {
      templateUrl: 'Components/SearchResults/resultsview.html',
      controller: 'ResultsController'
    })
     .otherwise({redirectTo: '/recipe'});

});