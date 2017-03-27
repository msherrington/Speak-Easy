angular
  .module('skillsApp')
  .factory('User', User)
  .factory('UserReview', UserReview);

User.$inject = ['$resource'];
function User($resource) {
  return new $resource('/api/users/:id', {
    id: '@id'
  },{
    update: { method: 'PUT' }
  });
}

UserReview.$inject = ['$resource'];
function UserReview($resource){
  return new $resource('/api/users/:userId/reviews/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
