(function () {
  'use strict';
  function MyCtrl ($scope) {
    var vm = this;
    $scope.$watch(function () {
      return vm.name;
    }, function (newValue, oldValue) {
      console.log(oldValue, newValue);
      if (newValue !== oldValue) {
        vm.changed = true;
      }
    });
    $scope.$watch(function () {
      return vm.changed;
    }, function (newValue, oldValue) {
      console.log(oldValue, newValue);
      if (newValue !== oldValue) {
        vm.name = 'goodbye';
      }
    });
    this.changed = false;
    this.name = 'hello world!';
  }
  angular.module('app', [])
    .controller('MyCtrl', MyCtrl);
}());
