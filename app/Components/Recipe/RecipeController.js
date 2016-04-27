 angular.module ('feastly.recipe', [])

  .controller('RecipeViewCtrl', function($scope) {
    $scope.recipeName = recipeResults['recipe']['label'];
    $scope.recipeImage = recipeResults['recipe']['image'];
    $scope.recipeIngredients = recipeResults['recipe']['ingredientLines'];
    $scope.recipeInstructions = "If using whole chickens, use kitchen shears to cut along one side of the" +  
    "backbone of each chicken. Then cut along the other side to remove backbone; discard it. Open the" +  
    "chickens, skin side up, on a clean surface. Press down to flatten. Place in a large bowl.\n\n" + 
"Thinly slice 2 lemons. Squeeze the juice of remaining lemon and add both to bowl with chickens." + 
"Add remaining ingredients, except salt, and toss. Refrigerate, covered, 30 minutes or overnight.\n\n" + 
"Heat a grill to medium hot. Wrap 4 bricks with aluminum foil (a large heavy skillet can also be used)." + 
"Remove chickens from marinade; salt both sides. Brush grill with oil; transfer chickens to the grill," +
 "skin side up, and place bricks on top of chickens. Grill 10 to 15 minutes per side, until skin is" + 
 "dark brown and juices run clear when chicken is pierced. Serve garnished with lemon wedges."
  });