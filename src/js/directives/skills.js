/* global google: true, */

angular.module('skillsApp')
  .directive('skills', skills);

skills.$inject = ['$window', '$http'];
function skills($window, $http){
  const vm = this;

  getskills();
  function getskills(){
    console.log('getskills!');
    $http.get('http://localhost:7000/api/skills')
  .then((response) => {
    console.log(response);
    vm.all = response.data;
    // console.log(vm.all[0].lat);
    // console.log(vm.all[0].lng);
    vm.u = vm.all;

    const users = vm.all;
    // console.log(users);
    //
    // for (var i=0; i<users.length; i++) {
    //   console.log(users[i].lat);
    //   console.log(users[i].lng);
    // }
  });
  }
  // return directive;
}
