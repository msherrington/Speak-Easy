angular
 .module('skillsApp')
 .directive('base64', base64);

function base64(){

  const fileReader = new FileReader();

  return{
    restrict: 'A',
    require: 'ngModel',
    link($scope, element, attrs, ngModel) {
      // console.log(element);

      fileReader.onload = function fileLoaded(){
        ngModel.$setViewValue(fileReader.result);
        // console.log(fileReader.result);
      };

      element.on('change', (e) => {
        // Datatransfer for firefox and e.target for chrome
        const file = (e.target.files || e.dataTransfer.files)[0];
        fileReader.readAsDataURL(file);
      });
    }
  };
}
