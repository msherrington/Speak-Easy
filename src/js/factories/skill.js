angular
  .module('skillsApp')
  .factory('Skill', Skill);

Skill.$inject = ['$resource'];
function Skill($resource) {
  return new $resource('/api/skills/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
