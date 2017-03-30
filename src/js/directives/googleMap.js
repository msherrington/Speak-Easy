/* global google:ignore mapStyles:ignore */

angular.module('skillsApp')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window', '$http'];
function googleMap($window){

  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      users: '=',
      query: '='
    },
    link($scope, element){
      let userLat = 0;
      let userLng = 0;
      const latLng = { lat: userLat, lng: userLng };
      let markers = [];
      let pos = null;

      const map = new $window.google.maps.Map(element[0], {
        zoom: 12,
        scrollwheel: false,
        center: $scope.center,
        styles: mapStyles
      });

      // Event listener to close infowindows by clicking anywhere on map
      map.addListener('click', () => {
        if(infowindow) infowindow.close();
      });

      const marker = new $window.google.maps.Marker({
        position: $scope.center,
        icon: '../images/blueMarker.png',
        map
      });

      //Runs function to find latlng of all users
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
        radius: 10000
      });

      //map circle radius function
      slider.onchange = function(){
        sliderDiv.innerHTML = this.value/1000;
        circle.radius = this.value;

        //Store val of slider
        circle.setRadius(parseFloat(circle.radius));
        filterMarkersByRadius();
        //Loops through marker locations and only shows those within the radius

      };

      function filterMarkersByRadius() {
        for(var i = 0; i < markers.length; i++){
          if(markers[i].distance <= circle.radius){
            markers[i].setMap(map);
          } else{
            markers[i].setMap(null);
          }
        }
      }

      //geolocation..
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          pos = {
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
        const users = $scope.users;

        for(var i = 0; i < markers.length; i++){
          markers[i].setMap(null);
        }

        markers = [];

        for (i=0; i<users.length; i++) {
          const user = users[i];
          userLat = parseFloat(users[i].lat);
          userLng = parseFloat(users[i].lng);
          addMarker(latLng, pos, user);
        }
      }

      //add marker to each users latlng
      function addMarker(latLng, pos, user) {
        latLng = { lat: parseFloat(user.lat), lng: parseFloat(user.lng) };
        const marker = new google.maps.Marker({
          position: latLng,
          map: null,
          icon: '../images/userMarker.png',
          distance: findDistance(new google.maps.LatLng(pos), new google.maps.LatLng(latLng))
        });

        // Event listener for user markers
        marker.addListener('click', () => {
          console.log('marker clicked');
          markerClick(marker, user, latLng);
        });

        //push markers into an array to use later
        markers.push(marker);
        filterMarkersByRadius();
      }

      // find distance between points 1 and 2
      function findDistance(p1, p2){
        //calculates distance between two points in km's
        return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2)).toFixed(2);
      }

      function markerClick(marker, user){
        // Close any open infowindows
        if(infowindow) infowindow.close();

        // Locate data from individual user posts
        const userName = user.username;
        const userImage = user.profilePic;

        //info window settings
        infowindow = new google.maps.InfoWindow({
          content: `
          <div class="infowindow">
            <img src="${userImage}">
            <a href="/users/${user.id}"><h3>${userName}</h3></a>
          </div>`,
          maxWidth: 200
        });

        // Event listener for user markers
        marker.addListener('click', () => {
          markerClick(marker, user);
        });

        // Open the new InfoWindow
        infowindow.open(map, marker);
      }

      $scope.$watch('users', () => {
        getUserLatLng(pos);
      });

    }
  };
  return directive;
}
