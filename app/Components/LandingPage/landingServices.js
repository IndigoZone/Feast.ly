angular.module('landing.services',[])
.factory('Auth', function($http){
  var register = function(username,password){
    return $http({
      method: "POST",
      // for local testing use local host
      // url: "http://localhost:4444/api/register",
      url: "/api/register",
      data: {username: username, password: password}
    });
  };
  var login = function(username,password){
    return $http({
      method: "POST",
      // for local testing use local host endpoint
      // url: "http://localhost:4444/api/login",
      url: "/api/login",
      data: {username: username, password: password}
    }).then(function(res){
      return res.data;
    });
  };
  return{
    register:register,
    login:login
  };
});