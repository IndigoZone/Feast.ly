// feastly.config(function($routeProvider, $httpProvider) {
//   $routeProvider
//     .when('/home', {
//       templateUrl: 'Components/Homepage/homeview.html',
//       controller: 'homeViewCtrl',
//       authenticate: true
//     })
//     .when('/register', {
//       templateUrl: 'Components/LandingPage/register.html',
//       controller: 'LandingController'
//     })
//     .when('/login', {
//       templateUrl: 'Components/LandingPage/login.html',
//       controller: 'LandingController'
//     })
//     .when('/recipe', {
//       templateUrl: 'Components/Recipe/recipeview.html',
//       controller: 'RecipeViewCtrl',
//       authenticate: true
//     })
//      .when('/results', {
//       templateUrl: 'Components/SearchResults/resultsview.html',
//       controller: 'ResultsController',
//       authenticate: true
//     })
//      .otherwise({redirectTo: '/login'});
// });

feastly.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
    //STATES
     .state('footer', {
      url: '',
      templateUrl: '/Shared/Footer/footerview.html',
    })
    .state('home', {
      url: '/home',
      templateUrl: 'Components/Homepage/homeview.html',
      controller: 'homeViewCtrl',
      authenticate: true
    })
    .state('register', {
      url: '/register',
      templateUrl: 'Components/LandingPage/register.html',
      controller: 'LandingController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'Components/LandingPage/login.html',
      controller: 'LandingController'
    })
    .state('recipe', {
      url: '/recipes',
      templateUrl: 'Components/Recipe/recipeview.html',
      controller: 'RecipeViewCtrl',
      authenticate: true
    })
     .state('results', {
      url: '/results',
      templateUrl: 'Components/SearchResults/resultsview.html',
      controller: 'ResultsController',
      authenticate: true
    });
});