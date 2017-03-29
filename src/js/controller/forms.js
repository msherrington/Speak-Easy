// angular
//     .module('skillsApp')
//     .controller('SelectOptGroupCtrl', SelectOptGroupCtrl);
//
// function SelectOptGroupCtrl() {
//   const vm = this;
//
//   vm.sizes = [
//     'Basic',
//     'Adequate',
//     'Intermediate',
//     'Advanced',
//     'Native'
//   ];
//   vm.skills = [
//     { category: 'speaking', name: 'English' },
//     { category: 'speaking', name: 'French' },
//     { category: 'speaking', name: 'Spanish' },
//     { category: 'speaking', name: 'klingon' },
//     { category: 'developing', name: 'Javascript' },
//     { category: 'developing', name: 'Ruby' },
//     { category: 'developing', name: 'Php' },
//     { category: 'developing', name: 'Ewokese' }
//   ];
//   vm.selectedSkills = [];
//   vm.printSelectedSkills = function printSelectedSkills() {
//     // var numberOfSkills = this.selectedSkills.length;
//
//         // If there is more than one topping, we add an 'and'
//         // to be gramatically correct. If there are 3+ toppings
//         // we also add an oxford comma.
//     // if (numberOfSkills > 1) {
//     //   var needsOxfordComma = numberOfSkills > 2;
//     //   var lastSkillConjunction = (needsOxfordComma ? ',' : '') + ' and ';
//     //   var lastSkill = lastSkillConjunction +
//     //   this.selectedSkills[this.selectedSkills.length - 1];
//     //   return this.selectedSkills.slice(0, -1).join(', ') + lastSkill;
//     // }
//
//     return this.selectedSkills.join('');
//   };
// }
