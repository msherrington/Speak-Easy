/* global google:ignore mapStyles:ignore */


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
        radius: 0
      });

    //map circle radius function
      slider.onchange = function(){
        // function plotInBounds(){
        // console.log('Changed!');
        sliderDiv.innerHTML = (this.value)/1000;
        circle.radius = sliderDiv.innerHTML;
        //Store val of slider
        circle.setRadius(parseFloat(circle.radius));

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

            console.log(users);
            for (var i=0; i<users.length; i++) {
              const user = users[i];
              userLat = parseFloat(users[i].lat);
              userLng = parseFloat(users[i].lng);
              addMarker(latLng, pos, user);
            }
          });
      }

      function addMarker(latLng, pos, user) {
        // const latLng = latLng;
        // var image =
        // latLng = { lat: userLat, lng: userLng };
        latLng = { lat: user.lat, lng: user.lng };
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

        markers.push(marker);
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


      function markerClick(marker, user, latLng) {
        // Close any open infowindows
        if(infowindow) infowindow.close();
        animation: google.maps.Animation.DROP;
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
            <a href="/users/${user.id}"><h3>${userName}</h3></a>
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
