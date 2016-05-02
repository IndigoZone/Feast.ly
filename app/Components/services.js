var recipeViewRes;
angular.module('feastly.services', [])
.factory('Recipe', function ($http) {
  var showRecipe = function(value){
    console.log('value:', value)
    return $http({
      method: 'GET',
      url: 'http://api.yummly.com/v1/api/recipe/' + value + '?_app_id=85328aaa&_app_key=9b9c3f69de268c05cd19da7b5bea7a42'
    }).then(function(res){
      console.log(res.data)
      recipeViewRes = res.data;
      console.log(recipeViewRes);
    })
  };

  return {
    showRecipe: showRecipe
  };
})