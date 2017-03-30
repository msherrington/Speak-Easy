angular
  .module('skillsApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('MessageCtrl', MessageCtrl)
  .controller('UsersProfileCtrl', UsersProfileCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);


UsersIndexCtrl.$inject = ['User', 'filterFilter', 'orderByFilter', '$http', '$scope'];
function UsersIndexCtrl(User, filterFilter, orderByFilter, $http, $scope) {
  const vm = this;

  getskills();
  function getskills(){
    // console.log('getskills!');
    $http.get('http://localhost:7000/api/skills')
  .then((response) => {
    // console.log(response);
    vm.all = response.data;
    // console.log(vm.all[0].lang);
    // console.log(vm.all[0].lng);

    const skills = vm.all;
    // console.log(users);
    //
    // for (var i=0; i<skills.length; i++) {
    //   console.log(skills[i].lang);
    //   // console.log(skills[i]);
    // }
  });
  }

  function filterUsers() {
    // const params = {};
      // if(vm.useStrength) params.strength = vm.strength;
      // if(vm.useRoast) params.roast = vm.roast;

    vm.filtered = filterFilter(vm.all, vm.q);
    vm.filtered = orderByFilter(vm.filtered, vm.sort);
  }
  $scope.$watchGroup([
    () => vm.q,
    () => vm.sort
  ], filterUsers);

  // get user data from our API to use in Google Markers
  function getUser(){
    $http.get('http://localhost:7000/api/users')
    .then((response) => {
      // console.log(response);
      vm.all = response.data;
      vm.u = vm.all;
      filterUsers();
    });
  }

  getUser();

  vm.all = User.query();
}

MessageCtrl.$inject = ['User', '$stateParams', '$http', '$state'];
function MessageCtrl(User, $stateParams, $http, $state) {

  const vm = this;

  vm.user = User.get($stateParams);

  function sendMail(){

    const data = ({
      contactName: vm.contactName,
      contactEmail: vm.contactEmail,
      contactMsg: vm.contactMsg,
      contactTo: vm.user.email
    });

    $http.post('/api/message', data);
    $state.go('usersProfile', $stateParams);
  }
  vm.sendMail = sendMail;
}

UsersProfileCtrl.$inject = ['User', 'UserReview', '$stateParams', '$state'];
function UsersProfileCtrl(User, UserReview, $stateParams, $state) {
  const vm = this;
  vm.newReview = {};

  vm.user = User.get($stateParams);

  function usersDelete() {
    vm.user
    .$remove()
    .then(() => $state.go('usersIndex'));
  }

  vm.delete = usersDelete;

  function addReview(){
    UserReview
      .save({ userId: vm.user.id }, vm.newReview)
      .$promise
      .then((review) => {
        vm.user.reviews.push(review);
        vm.newReview = {};
      });
  }

  vm.addReview = addReview;

  function deleteReview(review){
    UserReview
      .delete({ userId: vm.user.id, id: review.id })
      .$promise
      .then(() => {
        const index = vm.user.reviews.indexOf(review);
        vm.user.reviews.splice(index, 1);
      });
  }

  vm.deleteReview = deleteReview;

}

UsersEditCtrl.$inject = ['User', '$stateParams', '$state', '$http'];
function UsersEditCtrl(User, $stateParams, $state, $http) {
  const vm = this;

  vm.levels = [
    'Basic',
    'Adequate',
    'Intermediate',
    'Advanced',
    'Native'
  ];

  User.get($stateParams)
    .$promise
    .then((data) => {
      data.skills = data.skills.map((skill) => {
        skill.language = skill.language ? skill.language.id : null;
        return skill;
      });
      vm.user = data;
    });

  $http.get('/api/skills')
    .then((response) => {
      vm.skills = response.data;
    });


  function usersUpdate() {
    if (vm.userForm.$valid) {
      vm.user.locked = false;
      vm.user
      .$update()
      .then(() => $state.go('usersProfile', $stateParams));
    }
  }
  vm.update = usersUpdate;
}
