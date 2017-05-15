angular
  .module('skillsApp')
  .config(Auth);

Auth.$inject = ['$authProvider'];
function Auth($authProvider){
  $authProvider.signupUrl = '/api/register';
  $authProvider.loginUrl = '/api/login';

  $authProvider.github({
    clientId: '8bb526bfe8e01cb01663',
    url: '/api/oauth/github'
  });

  $authProvider.facebook({
    clientId: '419015885131630',
    url: '/api/oauth/facebook'
  });
}
