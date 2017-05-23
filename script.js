var app = angular.module("myMod", []);

app.controller("myController", function($scope) {
  $scope.things=[];

  $scope.addItem=function(newItem) {
    console.log(newItem);
    $scope.things.push(newItem);
  }
})
