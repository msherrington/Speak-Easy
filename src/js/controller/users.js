angular
  .module('skillsApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('MessageCtrl', MessageCtrl)
  .controller('UsersProfileCtrl', UsersProfileCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);


UsersIndexCtrl.$inject = ['User', '$http'];
function UsersIndexCtrl(User, $http) {
  const vm = this;

  // get user data from our API to use in Google Markers
  function getUser(){
    $http.get('http://localhost:7000/api/users')
    .then((response) => {
      console.log(response);
      vm.all = response.data;
      vm.u = vm.all;
    });
  }

  getUser();

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
        vm .user.reviews.push(review);
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
