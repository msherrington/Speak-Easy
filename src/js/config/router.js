angular
  .module('skillsApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('usersIndex', {
      url: '/',
      templateUrl: 'js/views/users/index.html',
      controller: 'UsersIndexCtrl as usersIndex'
    })
    .state('usersProfile', {
      url: '/users/:id',
      templateUrl: 'js/views/users/profile.html',
      controller: 'UsersProfileCtrl as usersProfile'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: 'js/views/users/edit.html',
      controller: 'UsersEditCtrl as usersEdit'
    })
    .state('message', {
      url: '/users/:id/message',
      templateUrl: 'js/views/users/message.html',
      controller: 'MessageCtrl as message'
    })

    // update our routes for register and login
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'RegisterCtrl as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/login.html',
      controller: 'LoginCtrl as login'
    });

  $urlRouterProvider.otherwise('/');

}
