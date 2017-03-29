angular
  .module('skillsApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth', 'User'];
function MainCtrl($rootScope, $state, $auth, User){
  const vm = this;

  vm.isAuthenticated = $auth.isAuthenticated;

  $rootScope.$on('error', (e, err) => {
    vm.stateHasChanged = false;
    vm.message = err.data.message;
    console.log(e, err);
    if(err.status === 401) $state.go('login');
  });

  $rootScope.$on('$stateChangeSuccess', (e, toState) => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;

    if($auth.getPayload()) {
      vm.currentUserId = $auth.getPayload().userId;
      User.get({ id: vm.currentUserId }).$promise.then((user) => {
        vm.currentUser = user;

        if(toState.name === 'message' && vm.currentUser.locked === true) {
          e.preventDefault();
          $state.go('usersIndex');
          vm.message = 'Complete your profile in order to message other users';
          // console.log(vm.message);
        }

      });
      // Need to look at blacklisting password from this object
    }

    const protectedStates = ['usersProfile', 'usersEdit', 'message'];

    function secureState(e, toState) {
      console.log('Changing states');
      vm.message = null;
      if(!$auth.isAuthenticated() && protectedStates.includes(toState.name)) {
        e.preventDefault();
        $state.go('login');
        vm.message = 'You must be logged in to go there!';
        // console.log(vm.message);
      }
    }

    $rootScope.$on('$stateChangeStart', secureState);


  });

  vm.logout = logout;

  function logout(){
    $auth.logout() //remove the token..
    .then(() => $state.go('login'));
  }
}
