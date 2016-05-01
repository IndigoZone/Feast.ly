angular.module('search.services', [])

.factory('Recipes', ['$http', '$q',function($http, $q){
  getRecipes = function(criteria) {
    $http({
        method: 'GET',
        url: 'http://api.yummly.com/v1/api/recipes?',
        params: criteria,
        headers: {'X-Yummly-App-ID':'85328aaa','X-Yummly-App-Key': '9b9c3f69de268c05cd19da7b5bea7a42'}
     }).success(function(res){
        console.log('data successfully retrieved', res);
    }).error(function(){
        alert("error retrieving data");
    });
  };

  return{
    getRecipes : getRecipes
  };
}]);
