/* global google: true, */

angular.module('skillsApp')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window', '$http'];
function googleMap($window, $http){
  const vm = this;
  getUser();

  function getUser(){
    $http.get('http://localhost:7000/api/users')
    .then((response) => {
      // console.log(response);
      vm.all = response.data;
      // console.log(vm.all[0].lat);
      // console.log(vm.all[0].lng);
      vm.u = vm.all;

      const users = vm.all;
      // console.log(users);
      //
      // for (var i=0; i<users.length; i++) {
      //   console.log(users[i].lat);
      //   console.log(users[i].lng);
      // }
    });
  }
// googleMap.$inject = ['$window', '$http'];
// function googleMap($window, $http){
//   const vm = this;

  let userLat = 0;
  let userLng = 0;
  let latLng = { lat: userLat, lng: userLng };

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

      const currentLocationWindow = new google.maps.InfoWindow({
        map: map
      });

      const marker = new $window.google.maps.Marker({
        position: $scope.center,
        map
      });
      // console.log(element);

      // const users = '???';
      // console.log(users);


      const slider = document.getElementById('slider');
      const sliderDiv = document.getElementById('sliderAmount');
      // let infowindow = null;
      const circle = new google.maps.Circle({
        fillColor: '#3399FF',
        fillOpacity: 0.2,
        strokeColor: '#0099FF',
        strokeOpacity: 0.4,
        map: map,
        center: $scope.center,
        radius: 1000
      });

      // console.log(circle.radius + 'meters');
      // console.log(circle.radius + 'meters');
      // console.log(circle.radius * 0.000621371 + 'miles');

    //map circle radius function
      slider.onchange = function() {
        // console.log('Changed!');
        sliderDiv.innerHTML = this.value;
        circle.radius = sliderDiv.innerHTML;
        //Store val of slider
        circle.setRadius(parseFloat(circle.radius));
        console.log(circle.radius + 'meters');
        // console.log(circle.radius + 'miles');
        // console.log(circle.radius * 0.000621371 + 'miles');
      };


      //geolocation..
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var pos = {
            lat: parseFloat(position.coords.latitude),
            lng: parseFloat(position.coords.longitude)
          };

          // currentLocationWindow.setPosition(pos);
          // currentLocationWindow.setContent('Current Location');
          marker.setPosition(pos);
          map.setCenter(pos);
          circle.setCenter(pos);
        }, function () {
          handleLocationError(true,  googleMap.getCenter());
        });
      } else {
      // Browser doesn't support Geolocation
        handleLocationError(false, googleMap.getCenter());
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        currentLocationWindow.setPosition(pos);
        currentLocationWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
      }

      addMarkers();


      function addMarkers() {
        // console.log('yo1');

        function getUserLatLng() {
          // console.log('yo2');
          $http.get('http://localhost:7000/api/users')
          .then((response) => {
            vm.all = response.data;
            // console.log(users[0].lat);

            const users = vm.all;
            // console.log(users);
            // console.log(users[1].lat);

            // for (var i=0; i<users.length; i++) {
            //   console.log(users[i].lat);
            //   console.log(users[i].lng);
            // }

            // console.log(users.lng);
            // const users = 10;
            // console.log(10);
            for (var i=0; i<users.length; i++) {
              // console.log(`User - ${i}`);
              // console.log(users[i].lat);
              // console.log(users[i].lng);
              userLat = parseFloat(users[i].lat);
              userLng = parseFloat(users[i].lng);
              addMarker(userLat, userLng);
            }


          });
        }





        getUserLatLng();
      }

      function addMarker(userLat, userLng) {
        // const latLng = latLng;
        var image = 'http://www.apnaplates.com/app/webroot/GSS/test/ferrari-badge-small-4.png';
        latLng = { lat: userLat, lng: userLng };
        // console.log(latLng);
        // console.log(latLng.userlat);
        // console.log(latLng.userlng);
        const marker = new google.maps.Marker({
          position: latLng,
          map,
          icon: image
        });

        // marker.addListener('click', () => {
        //   markerClick(marker, user);
        // });
      }



      // getUserLatLng();



    }
  };

  return directive;
}
