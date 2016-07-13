angular.module('search.directive', [])

.controller('search.ctrl', ['$scope', 'Recipes', '$state', 'Recipe', function($scope, Recipes, $state, Recipe) {
  $scope.userInput = {};
  $scope.list = results;

  $scope.searchRecipes = function(input){
    input.toString();
    $scope.userInput['q'] = input.split(" ").join('+');
    Recipes.getRecipes($scope.userInput).then(function(data){
        // console.log('data:',data)
         $scope.list = data.data;
        // return data;
        //Look into this later
        if($state.current.url !== '/results'){
          $state.go('results');
        } else {
        $state.go($state.current, {}, {reload: true});          
        }
    })
  };

    $scope.showRecipe = function(value){
      thisRecipe = value;
    }
    $scope.showRecipe();
}]);
