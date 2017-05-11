angular.module('skillsApp')
  .directive('skills', skills);

skills.$inject = ['$window', '$http'];
function skills($window, $http){
  const vm = this;

  getskills();
  function getskills(){
    $http.get('/api/skills')
  .then((response) => {
    vm.all = response.data;
  });
  }
}
