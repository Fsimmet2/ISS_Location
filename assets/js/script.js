$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
  var number = data['number'];
  $('#spacepeeps').html(number);

  data['people'].forEach(function (d) {
     $('#astronames').append('<p class="col-xs-6 col-md-6 col-lg-4 col-xl-4 name text-center"><img class="img-fluid" src="http://localhost/perso/ISS_Location/assets/img/astronaut.svg" alt=""><br/>' + d['name'] + '</p>');
   });
 });

 function initMap(){

   var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, draggable: false, draggableCursor:'default',disableDefaultUI: true, scrollwheel: false, styles:[
       {
           "featureType": "all",
           "elementType": "labels",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "administrative",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "administrative",
           "elementType": "labels.text",
           "stylers": [
               {
                   "visibility": "on"
               }
           ]
       },
       {
           "featureType": "administrative",
           "elementType": "labels.text.fill",
           "stylers": [
               {
                   "visibility": "on"
               },
               {
                   "color": "#60676c"
               },
               {
                   "lightness": "17"
               },
               {
                   "weight": "7.44"
               }
           ]
       },
       {
           "featureType": "administrative",
           "elementType": "labels.text.stroke",
           "stylers": [
               {
                   "color": "#ffffff"
               },
               {
                   "weight": "6.64"
               }
           ]
       },
       {
           "featureType": "administrative.country",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "administrative.country",
           "elementType": "labels",
           "stylers": [
               {
                   "visibility": "on"
               }
           ]
       },
       {
           "featureType": "administrative.country",
           "elementType": "labels.text.fill",
           "stylers": [
               {
                   "visibility": "on"
               },
               {
                   "color": "#150202"
               }
           ]
       },
       {
           "featureType": "administrative.province",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "administrative.locality",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "administrative.neighborhood",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "administrative.land_parcel",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "landscape",
           "elementType": "all",
           "stylers": [
               {
                   "visibility": "on"
               }
           ]
       },
       {
           "featureType": "landscape",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               },
               {
                   "hue": "#ff0000"
               }
           ]
       },
       {
           "featureType": "landscape",
           "elementType": "labels",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "landscape.man_made",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "on"
               },
               {
                   "color": "#944242"
               }
           ]
       },
       {
           "featureType": "landscape.man_made",
           "elementType": "geometry.fill",
           "stylers": [
               {
                   "color": "#ffffff"
               }
           ]
       },
       {
           "featureType": "landscape.natural",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "on"
               },
               {
                   "color": "#ffffff"
               }
           ]
       },
       {
           "featureType": "landscape.natural.landcover",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "landscape.natural.terrain",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               },
               {
                   "saturation": "-1"
               }
           ]
       },
       {
           "featureType": "poi",
           "elementType": "all",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "poi",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "poi.attraction",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "road",
           "elementType": "geometry.stroke",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "road.highway",
           "elementType": "geometry.fill",
           "stylers": [
               {
                   "color": "#292929"
               }
           ]
       },
       {
           "featureType": "road.highway",
           "elementType": "geometry.stroke",
           "stylers": [
               {
                   "visibility": "off"
               },
               {
                   "color": "#494949"
               },
               {
                   "saturation": "-85"
               }
           ]
       },
       {
           "featureType": "road.arterial",
           "elementType": "geometry.fill",
           "stylers": [
               {
                   "color": "#888888"
               },
               {
                   "visibility": "on"
               }
           ]
       },
       {
           "featureType": "road.local",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "road.local",
           "elementType": "geometry.fill",
           "stylers": [
               {
                   "color": "#7f7f7f"
               }
           ]
       },
       {
           "featureType": "transit",
           "elementType": "all",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "transit",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "transit.line",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "transit.station",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "transit.station.airport",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "transit.station.bus",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "transit.station.rail",
           "elementType": "geometry",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "water",
           "elementType": "geometry",
           "stylers": [
               {
                   "color": "#dddddd"
               }
           ]
       },
       {
           "featureType": "water",
           "elementType": "geometry.fill",
           "stylers": [
               {
                   "color": "#eeeeee"
               }
           ]
       },
       {
           "featureType": "water",
           "elementType": "geometry.stroke",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       }
   ]
});

   function moveISS () {
       $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
           var lat = parseFloat(data['iss_position']['latitude']);
           var lon = parseFloat(data['iss_position']['longitude']);

           map.setCenter(new google.maps.LatLng(lat, lon));
           marker.setPosition(new google.maps.LatLng(lat, lon));
       });
       setTimeout(moveISS, 5000);
   }

   var sat = 'http://localhost/perso/ISS_Location/assets/img/satellite.svg';
   var marker = new google.maps.Marker({ map: map, icon: sat});

   moveISS();
 }

 