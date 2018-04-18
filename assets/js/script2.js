 var localAstros = localStorage.astronautes;

// Get info astronauts
function astro(){
  $.getJSON('http://api.open-notify.org/astros.json?callback=?', function (data){
    var astro = {
      "data": data.people,
      "timestamp": Date.now()
    };
    localStorage.setItem('astronautes' , JSON.stringify(astro, null, 2));
    apAstro(data.people);
  })
}

// Append astronauts in html
function apAstro(tab){
  tab.forEach(function (d) {
     $('#astronames').append("<p class='col-xs-6 col-md-6 col-lg-4 col-xl-4 name text-center'><img class='img-fluid' src='assets/img/astronaut.svg' alt=''><br/>" + d['name'] + '</p>');
   });
}

// Check if in localStorage already have astronautes
 if (localAstros) {
   var res = JSON.parse(localAstros);
   var now = Date.now();
   var day = 60 * 60 * 24 * 1000;
   var oldTime = parseFloat(res.timestamp);
   if (now - oldTime > day) {
     astro();
   }else {
     var name = JSON.stringify(res.data, null, 2);
     var names = JSON.parse(name);
     apAstro(names);
   }
 }else {
   astro();
 }


 function initMap(){

   var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, draggable: false, draggableCursor:'default',disableDefaultUI: true, scrollwheel: false});

   function moveISS () {

  $.getJSON('https://api.wheretheiss.at/v1/satellites/25544', function(data) {

           var lat = parseFloat(data['latitude']);
           var lon = parseFloat(data['longitude']);

           map.setCenter(new google.maps.LatLng(lat, lon));
           marker.setPosition(new google.maps.LatLng(lat, lon));
       });
       setTimeout(moveISS, 5000);
   }

   var sat = 'assets/img/satellite.svg';
   var marker = new google.maps.Marker({ map: map, icon: sat});

   moveISS();
 }

 $.getJSON('https://api.wheretheiss.at/v1/satellites/25544', function(data) {
   var alt = Math.round(data.altitude);
   var vel = Math.round(data.velocity);

 })
