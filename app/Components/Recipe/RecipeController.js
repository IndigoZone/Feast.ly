 angular.module ('feastly.recipe', [])

  .controller('RecipeViewCtrl', function($scope, Recipe) {
    // $scope.recipeName = thisRecipe.name;
    // $scope.recipeName;
    $scope.tellMe = function(){
      console.log("&&&&&&&&&&", recipeViewRes);
    };
    $scope.getRecipe = function(){
      // console.log(thisRecipe)
      Recipe.showRecipe(thisRecipe).then(function(){
        $scope.tellMe();
        $scope.recipeName = recipeViewRes.name;
        $scope.recipeImage = recipeViewRes.images[0].hostedLargeUrl;
        $scope.recipeIngredients = recipeViewRes.ingredientLines;
        $scope.recipeLink = recipeViewRes.source.sourceRecipeUrl;
      })
    
    }
    $scope.getRecipe();
    
  });