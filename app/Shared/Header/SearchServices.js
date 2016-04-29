angular.module('search.services', [])

.factory('Recipes', ['$http', '$q',function($http, $q){
  getRecipes = function(criteria) {

    $http({
        method: 'GET',
        url: 'http://api.yummly.com/v1/api/recipes?',
        params: criteria,
        headers: {'X-Yummly-App-ID':'2f7bad12','X-Yummly-App-Key': 'f8160837c1f14975a5f7b327310dc034'}
     }).success(function(res){
        console.log('data successfully retrieved', res);
        // res.send(res.matches);
        // res.end();
    }).error(function(){
        alert("error retrieving data");
    });
  };

  return{
    getRecipes : getRecipes
  };
}]);
