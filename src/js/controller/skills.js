angular
  .module('skillsApp')
  .controller('SkillsNewCtrl', SkillsNewCtrl);

SkillsNewCtrl.$inject = ['Skill', '$state'];
function SkillsNewCtrl(Skill, $state) {
  const vm = this;
  vm.skill = {};

  function skillsCreate() {
    if (vm.skillForm.$valid) {
      Skill
        .save(vm.skill)
        .$promise
        .then(() => $state.go('usersIndex'));
    }
  }
  vm.create = skillsCreate;
}
