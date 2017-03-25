angular.module('skillsApp')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window'];
function googleMap($window){
  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '='
    },
    link($scope, element){
      const map = new $window.google.maps.Map(element[0], {
        zoom: 14,
        scrollwheel: false,
        center: $scope.center
      });

      const marker = new $window.google.maps.Marker({
        position: $scope.center,
        map
      });
      console.log(element);
    }
  };
  return directive;
}
