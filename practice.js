var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function(){
  var Avengers={};
  Avengers.cast = [
  {
    name: "ravi";
    character : "Hello World";
  }
  ];
  return Avengers;
})
function AvengersCtrl($scope, Avengers){
  $scope.avengers = Avengers;

}