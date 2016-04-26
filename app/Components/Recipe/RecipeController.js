 angular.module ('recipeView', [])

  .controller('RecipeViewCtrl', function($scope) {
    $scope.recipeName = recipeResults['recipe']['label'];
    $scope.recipeImage = recipeResults['recipe']['image'];
    $scope.recipeIngredients = recipeResults['recipe']['ingredientLines']
  });