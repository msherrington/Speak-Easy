angular
  .module('skillsApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('MessageCtrl', MessageCtrl)
  .controller('UsersProfileCtrl', UsersProfileCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);


UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User) {
  const vm = this;

  vm.all = User.query();
}

MessageCtrl.$inject = ['User', '$stateParams', '$http'];
function MessageCtrl(User, $stateParams, $http) {

  const vm = this;

  vm.user = User.get($stateParams);

  function sendMail(){

    const data = ({
      contactName: vm.contactName,
      contactEmail: vm.contactEmail,
      contactMsg: vm.contactMsg,
      contactTo: vm.user.email
    });

    $http.post('/api/message', data); //not sure about full stop

  }
  vm.sendMail = sendMail;
}

UsersProfileCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersProfileCtrl(User, $stateParams, $state) {
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
      .then(() => $state.go('usersProfile', $stateParams));
    }
  }
  vm.update = usersUpdate;
}
