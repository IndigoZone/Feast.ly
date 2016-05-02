feastly.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'Components/Homepage/homeview.html',
      controller: 'homeViewCtrl',
      authenticate: true
    })
    .when('/register', {
      templateUrl: 'Components/LandingPage/register.html',
      controller: 'LandingController'
    })
    .when('/login', {
      templateUrl: 'Components/LandingPage/login.html',
      controller: 'LandingController'
    })
    .when('/recipe', {
      templateUrl: 'Components/Recipe/recipeview.html',
      controller: 'RecipeViewCtrl',
      authenticate: true
    })
     .when('/results', {
      templateUrl: 'Components/SearchResults/resultsview.html',
      // controller: 'ResultsController',
      authenticate: true
    })
     .otherwise({redirectTo: '/login'});
});
