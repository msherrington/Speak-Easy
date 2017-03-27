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

  $rootScope.$on('$stateChangeSuccess', () => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;

    if($auth.getPayload()) {
      vm.currentUserId = $auth.getPayload().userId;
      // vm.currentUser = User.get({ id: vm.currentUserId });
      // Need to look at blacklisting password from this object
    }
  });

  vm.logout = logout;

  function logout(){
    $auth.logout() //remove the token..
    .then(() => $state.go('login'));
  }
}
