angular.module('search.directive', [])

.controller('search.ctrl', ['$scope', 'Recipes', function($scope, Recipes) {
  $scope.userInput = {};

  $scope.searchRecipes = function(input){
    input.toString();
    $scope.userInput['q'] = input.split(" ").join('+');
    console.log($scope.userInput)
    Recipes.getRecipes($scope.userInput)
  };
}]);
// .directive('searchInput', function() {
//   return {
//     template: 'Name: {{customer.name}} Address: {{customer.address}}'
//   };
// });
