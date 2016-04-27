angular.module ('feastly.landing', [])
.controller('LandingController', function($scope){
  $scope.username  = "";
  $scope.password  = "";
  $scope.login = function(){
    console.log('Signing in...');
  };
  $scope.register = function(){
    console.log('Signing up...');
  };
});