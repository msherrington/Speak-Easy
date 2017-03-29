/* global describe, expect, it, beforeEach, inject */
describe('mainCtrl', () => {
  beforeEach(module('skillsApp')); // ng-app="coffeeAssembly"

  let $rootScope, $controller;

  beforeEach(inject((_$rootScope_, _$controller_) => {
    $rootScope = _$rootScope_;
    $controller = _$controller_; //ng-controller="blah"
  }));

  describe('test1', () => {
    let $scope, vm;

    beforeEach(() => {
      //this creates a new scope instance which gives us $scope.$watch etc..
      $scope = $rootScope.$new();
      //instantiate our controller ng-controller="CoffeeIndexCtrl"
      vm = $controller('mainCtrl', { $scope });

      vm.all = [{
        username: 'Guv',
        password: 'a',
        passwordConfirmation: 'a'
      }, {
        name: 'Mark',
        password: 'b',
        passwordConfirmation: 'b'
      }, {
        name: 'Valerio',
        password: 'c',
        passwordConfirmation: 'c'
      }];
    });

    it('test2', () =>{
      vm.q = 'b';
      //q means name in this case//
      $scope.$digest();

      expect(vm.filtered.length).to.equal(1);
      expect(vm.filtered[0].name).to.equal('b');
    });

    it('test3', () => {
      vm.useStrength = 4;
      vm.strength = 4;
      $scope.$digest();

      expect(vm.filtered.length).to.equal(1);
      expect(vm.filtered[0].strength).to.equal(4);
    });

  });
});
