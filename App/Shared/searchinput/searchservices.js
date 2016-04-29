angular.module('search.services', [])

.factory('Recipes', ['$http', '$q',function($http, $q){
  getRecipes = function() {
    $http({
        method: 'GET',
        url: 'http://api.yummly.com/v1/api/recipe',
        params: 'limit=10, sort_by=created:desc',
        headers: {'X-Yummly-App-ID':'2f7bad12','X-Yummly-App-Key': 'f8160837c1f14975a5f7b327310dc034'}
     }).success(function(data){
        console.log('data successfully retrieved', data);
        res.send(data);
    }).error(function(){
        alert("error retrieving data");
    });
  };
}]);

  // var searchParams = function(param1, param2, param3){
  //   var deferred =$q.defer();
  //   $http.get('http://api.yummly.com/v1/api/recipes?q='+param1 + param2 + param3).success(function(data){
  //           deferred.resolve(data.query.results.recipeName);
  //         })
  //         .error(function(err){
  //           console.log('Error retrieving recipes');
  //           deferred.reject(err);
  //         });
  //       return deferred.promise;
  //     };
  //
  // return {
  //   searchParams: searchParams
  // };
}]);
