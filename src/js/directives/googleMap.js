/* global google:ignore */

angular
.module('skillsApp')
.directive('googleMap', googleMap);

googleMap.$inject = ['$window', 'mapStyles'];
function googleMap($window, mapStyles){

  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      users: '=',
      query: '='
    },
    link($scope, element){
      // Declare variables for positioning markers
      let userLat = 0;
      let userLng = 0;
      const latLng = { lat: userLat, lng: userLng };
      let markers = [];
      let pos = null;

      // Creates map + sets details
      const map = new $window.google.maps.Map(element[0], {
        zoom: 11,
        scrollwheel: false,
        center: $scope.center,
        styles: mapStyles
      });

      // Event listener to close infowindows by clicking anywhere on map
      map.addListener('click', () => {
        if(infowindow) infowindow.close();
      });

      // Sets location marker on map
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

      // Sets circle radius and style
      const circle = new google.maps.Circle({
        fillColor: '#3399FF',
        fillOpacity: 0.2,
        strokeColor: '#0099FF',
        strokeOpacity: 0.4,
        map: map,
        center: $scope.center,
        radius: 10000
      });

      // Map circle radius function
      slider.onchange = function(){
        sliderDiv.innerHTML = this.value/1000;
        circle.radius = this.value;

        // Store val of slider
        circle.setRadius(parseFloat(circle.radius));
        //Loops through marker locations and only shows those within the radius
        filterMarkersByRadius();
      };

      // Filters map markers by radius
      function filterMarkersByRadius() {
        for(var i = 0; i < markers.length; i++){
          if(markers[i].distance <= circle.radius){
            markers[i].setMap(map);
          } else{
            markers[i].setMap(null);
          }
        }
      }

      // HTML5 Geolocation..
      navigator.geolocation.getCurrentPosition(function (position) {
        pos = {
          lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.longitude)
        };
        marker.setPosition(pos);
        map.setCenter(pos);
        circle.setCenter(pos);
        getUserLatLng(pos);
      });

      // Function to plot user locations on the map
      function getUserLatLng(pos) {
        const users = $scope.users;

        for(var i = 0; i < markers.length; i++){
          markers[i].setMap(null);
        }

        markers = [];

        // Loops through users and passes user location to addmarker function
        for (i=0; i<users.length; i++) {
          const user = users[i];
          userLat = parseFloat(users[i].lat);
          userLng = parseFloat(users[i].lng);
          addMarker(latLng, pos, user);
        }
      }

      // Adds marker to each users latlng
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
          markerClick(marker, user, latLng);
        });

        // Push markers into an array to use later
        markers.push(marker);
        filterMarkersByRadius();
      }

      // Find distance between points 1 and 2
      function findDistance(p1, p2){
        // Calculates distance between two points in metres
        return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2)).toFixed(2);
      }

      function markerClick(marker, user){
        // Close any open infowindows
        if(infowindow) infowindow.close();

        // Locate data from individual user posts
        const userName = user.username;
        const userImage = user.profilePic;

        // Info window settings and display
        infowindow = new google.maps.InfoWindow({
          content: `
          <div class="infowindow">
          <a href="/users/${user.id}"><img src="${userImage}"></a>
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

      // Updates markers within radius on map according to filter results
      $scope.$watch('users', () => {
        getUserLatLng(pos);
      });

    }
  };
  return directive;
}


// Map Style (from here to end of file)
angular
  .module('skillsApp')
  .constant('mapStyles', [{
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#444444' }]
  }, {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [{ color: '##000000' }]
  }, {
    featureType: 'poi',
    elementType: 'all',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'road',
    elementType: 'all',
    stylers: [{
      saturation: -100
    }, {
      lightness: 45
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [{
      saturation: '0'
    }, {
      visibility: 'on'
    }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#00bc66'
    }, {
      saturation: '-59'
    }, {
      lightness: '46'
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'transit',
    elementType: 'all',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'water',
    elementType: 'all',
    stylers: [{
      color: '#46bcec'
    }, {
      visibility: 'on'
    }]
  }]);
