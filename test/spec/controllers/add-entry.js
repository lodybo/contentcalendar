'use strict';

describe('Controller: AddEntryCtrl', function () {

  // load the controller's module
  beforeEach(module('contentcalendarApp'));

  var AddEntryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddEntryCtrl = $controller('AddEntryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
