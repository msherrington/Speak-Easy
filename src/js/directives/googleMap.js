/* global google: true, */

angular.module('skillsApp')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window', '$http'];
function googleMap($window, $http){
  const vm = this;

  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '='
    },
    link($scope, element){

      let userLat = 0;
      let userLng = 0;
      let latLng = { lat: userLat, lng: userLng };
      let markers = [];

      const map = new $window.google.maps.Map(element[0], {
        zoom: 14,
        scrollwheel: false,
        center: $scope.center
      });

      const marker = new $window.google.maps.Marker({
        position: $scope.center,
        map
      });

      const slider = document.getElementById('slider');
      const sliderDiv = document.getElementById('sliderAmount');
      const circle = new google.maps.Circle({
        fillColor: '#3399FF',
        fillOpacity: 0.2,
        strokeColor: '#0099FF',
        strokeOpacity: 0.4,
        map: map,
        center: $scope.center,
        radius: 1000
      });

    //map circle radius function
      slider.onchange = function() {
        // console.log('Changed!');
        sliderDiv.innerHTML = this.value;
        circle.radius = sliderDiv.innerHTML;
        //Store val of slider
        circle.setRadius(parseFloat(circle.radius));
        console.log(markers);
        console.log(circle.radius + 'meters');

        for(var i = 0; i < markers.length; i++){
          // console.log('werking');
          // console.log(markers[i].distance + 'they here');
          if(markers[i].distance <= circle.radius){
            console.log('its less');
            markers[i].setMap(map);
            console.log(markers[i].map);
          } else{
            console.log('its more');
            markers[i].setMap(null);
            console.log(markers[i].map);
          }
        }
        // loop through markers
        // check if marker.distance is less than the radius
        // if yes, set map to map
        // if no, set map to null


      };

      //geolocation..
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var pos = {
            lat: parseFloat(position.coords.latitude),
            lng: parseFloat(position.coords.longitude)
          };

          marker.setPosition(pos);
          map.setCenter(pos);
          circle.setCenter(pos);
          getUserLatLng(pos);
        }, function () {
          handleLocationError(true,  googleMap.getCenter());
        });
      } else {
      // Browser doesn't support Geolocation
        handleLocationError(false, googleMap.getCenter());
      }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        marker.setPosition(pos);
        marker.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
      }

      //Places User markers on the map
      function getUserLatLng(pos) {

        $http.get('http://localhost:7000/api/users')
          .then((response) => {
            vm.all = response.data;

            const users = vm.all;

            for (var i=0; i<users.length; i++) {
              userLat = parseFloat(users[i].lat);
              userLng = parseFloat(users[i].lng);
              addMarker(latLng, pos);
              // findDistance(p1, p1);
            }
          });
      }

      function addMarker(latLng, pos) {
        // const latLng = latLng;
        var image = 'http://www.apnaplates.com/app/webroot/GSS/test/ferrari-badge-small-4.png';
        latLng = { lat: userLat, lng: userLng };

        const marker = new google.maps.Marker({
          position: latLng,
          map,
          icon: image,
          distance: findDistance(new google.maps.LatLng(pos), new google.maps.LatLng(latLng))
        });

        markers.push(marker);

        // findDistance(new google.maps.LatLng(pos), new google.maps.LatLng(latLng));
      }

      //WORKING TO FIND DISTANCE FROM A POINT//
      //Try to set p1 as geolocation and p2 as each users latlng
      //run the function for each user
      // let p1 = new google.maps.LatLng({lat: 0, lng: 0});
      // let p2 = new google.maps.LatLng({lat: 0, lng: 0});

      // findDistance(p1, p2);
      function findDistance(p1, p2){

        console.log(google.maps.geometry.spherical.computeDistanceBetween(p1, p2));
        //calculates distance between two points in km's
        return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2)).toFixed(2);

      }
    }
  };

  return directive;
}
