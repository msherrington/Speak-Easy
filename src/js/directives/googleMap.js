/* global google: true, */

angular.module('skillsApp')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window', '$http'];
function googleMap($window, $http){
  const vm = this;

  // let userLat = 0;
  // let userLng = 0;
  // let userName = null;

  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '='
    },
    link($scope, element){
      const map = new $window.google.maps.Map(element[0], {
        zoom: 10,
        scrollwheel: false,
        center: $scope.center
      });

      // Event listener to close infowindows by clicking anywhere on map
      map.addListener('click', () => {
        if(infowindow) infowindow.close();
      });

      const marker = new $window.google.maps.Marker({
        position: $scope.center,
        map
      });

      getUserLatLng();

      const slider = document.getElementById('slider');
      const sliderDiv = document.getElementById('sliderAmount');
      let infowindow = null;
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
        // console.log(circle.radius + 'meters');
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

      function getUserLatLng() {
        $http.get('http://localhost:7000/api/users')
        .then((response) => {
          vm.all = response.data;
          const users = vm.all;

          // console.log(users);
          for (var i=0; i<users.length; i++) {
            const user = users[i];
            addMarker(user);
          }
        });
      }

      function addMarker(user) {
        const latLng = { lat: parseFloat(user.lat), lng: parseFloat(user.lng) };
        // console.log(user);
        var image = 'http://www.apnaplates.com/app/webroot/GSS/test/ferrari-badge-small-4.png';
        const marker = new google.maps.Marker({
          position: latLng,
          map,
          icon: image,
          animation: google.maps.Animation.DROP
        });

        // Event listener for user markers
        marker.addListener('click', () => {
          markerClick(marker, user);
        });
      }

      function markerClick(marker, user) {

        console.log(user.username);
        // Close any open infowindows
        if(infowindow) infowindow.close();

        // Locate data from individual user posts
        const userName = user.username;
        const userImage = user.profilePic;

          // Update the infowindow with relevant drink data
        infowindow = new google.maps.InfoWindow({
          content: `
          <div class="infowindow">
            <img src="${userImage}">
            <h3>${userName}</h3>
          </div>`,
          // content: '<div id="infowindow_content" ng-include src="\'infowindow.html\'"></div>',
          maxWidth: 200
        });
        // Open the new InfoWindow
        infowindow.open(map, marker);
      }
    }
  };
  return directive;
}
