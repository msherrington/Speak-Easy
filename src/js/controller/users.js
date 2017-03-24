angular
  .module('skillsApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersNewCtrl', UsersNewCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);


UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User) {
  const vm = this;

  vm.all = User.query();
}

UsersNewCtrl.$inject = ['User', '$state'];
function UsersNewCtrl(User, $state) {
  const vm = this;
  vm.user = {};

  function usersCreate() {
    if (vm.userForm.$valid) {
      User
      .save(vm.user)
      .$promise
      .then(() => $state.go('usersIndex'));
    }
  }
  vm.create = usersCreate;
 // vm.userForm.$setPristine();
 // vm.userForm.$setUntouched();=
}

UsersShowCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersShowCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  function usersDelete() {
    vm.user
    .$remove()
    .then(() => $state.go('usersIndex'));
  }

  vm.delete = usersDelete;
}

UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersEditCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  function usersUpdate() {
    if (vm.userForm.$valid) {
      vm.user
      .$update()
      .then(() => $state.go('usersShow', $stateParams));
    }
  }
  vm.update = usersUpdate;
}
