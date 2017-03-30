angular
  .module('skillsApp')
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl);

RegisterCtrl.$inject = ['$auth', '$state', '$http'];
function RegisterCtrl($auth, $state, $http){
  const vm = this;
  vm.user = {};

  getskills();
  function getskills(){
    // console.log('getskills!');
    $http.get('/api/skills')
  .then((response) => {
    console.log(response);
    vm.all = response.data;
    const skills = vm.all;
  });
  }
  function submit(){
    if(vm.registerForm.$invalid) return;
    $auth.signup(vm.user)
      .then(() => $state.go('login'));
  }

  vm.submit = submit;
}

LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state){
  const vm = this;
  vm.credentials = {};

  function submit(){
    $auth.login(vm.credentials)
      .then(() => $state.go('usersIndex'));
  }

  function authenticate(provider) {
    $auth.authenticate(provider)
      .then(() => $state.go('usersIndex'));
  }

  vm.authenticate = authenticate;
  vm.submit = submit;
}
