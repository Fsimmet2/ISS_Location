$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
  var number = data['number'];
  $('#spacepeeps').html(number);

  data['people'].forEach(function (d) {
     $('#astronames').append('<li>' + d['name'] + '</li>');
   });
 });

 function initMap(){

   var map = new google.maps.Map(document.getElementById('map'), {zoom: 3});

   function moveISS () {
       $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
           var lat = parseFloat(data['iss_position']['latitude']);
           var lon = parseFloat(data['iss_position']['longitude']);

           map.setCenter(new google.maps.LatLng(lat, lon));
           marker.setPosition(new google.maps.LatLng(lat, lon));
       });
       setTimeout(moveISS, 5000);
   }

   var marker = new google.maps.Marker({ map: map });

   moveISS();
 }
 api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo
 $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
   var number = data['number'];
   $('#spacepeeps').html(number);

   data['people'].forEach(function (d) {
      $('#astronames').append('<li>' + d['name'] + '</li>');
    });
  });
