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
    $http.get('http://localhost:7000/api/skills')
  .then((response) => {
    console.log(response);
    vm.all = response.data;
    // console.log(vm.all[0].lat);
    // console.log(vm.all[0].lng);
    vm.u = vm.all;

    const skills = vm.all;
    // console.log(skills[0].lang);
    // console.log(users);
    //
    // for (var i=0; i<users.length; i++) {
    //   console.log(users[i].lat);
    //   console.log(users[i].lng);
    // }
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

  vm.submit = submit;
}
