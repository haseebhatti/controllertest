describe('MyCtrl', function () {
  'use strict';
  var scope, controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($controller, $rootScope) {
    // The injector unwraps the underscores (_) from around the parameter names when matching

    scope = $rootScope.$new();
    controller = $controller('MyCtrl as mc', {
      $scope: scope
    });
  }));
  it('should give its name as hello world!', function () {
    expect(scope.$$watchersCount).toEqual(2);
  });
  it('should set changed property when watch is called', function () {
    console.log('exp', scope.$$watchers[0]);
    scope.$digest();
    scope.mc.name = 'foo';
    scope.$digest();
    expect(scope.mc.changed).toEqual(true);
  });
});
