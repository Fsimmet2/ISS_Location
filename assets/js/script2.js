 let localAstros = localStorage.astronautes;

// Get info astronauts
function astro(){
  $.getJSON('http://api.open-notify.org/astros.json?callback=?', data => {
    let astro = {
      "data": data.people,
      "timestamp": Date.now()
    };
    localStorage.setItem('astronautes' , JSON.stringify(astro, null, 2));
    apAstro(data.people);
  })
}

// Append astronauts in html
function apAstro(tab){
  tab.forEach(d => {
     $('#astronames').append("<p class='col-xs-12 col-md-6 col-lg-4 col-xl-4 name text-center'><img class='img-fluid' src='assets/img/astronaut.svg' alt=''><br/><a class='button' target='_blank' href='https://en.wikipedia.org/wiki/"+d['name'].replace(" ", '_')+"'><i class='fas fa-info-circle fa-2x'></i></a>" + d['name'] + '</p>');
   });
}

// Check if in localStorage already have astronautes
 if (localAstros) {
   let res = JSON.parse(localAstros);
   let now = Date.now();
   let day = 60 * 60 * 24 * 1000;
   let oldTime = parseFloat(res.timestamp);
   if (now - oldTime > day) {
     astro();
   }else {
     let name = JSON.stringify(res.data, null, 2);
     let names = JSON.parse(name);
     apAstro(names);
   }
 }else {
   astro();
 }


// Initialize map
 function initMap(){

   let map = new google.maps.Map(document.getElementById('map'), {zoom: 4, draggable: false, draggableCursor:'default',disableDefaultUI: true, scrollwheel: false, styles:

   [
       {
           "featureType": "administrative",
           "elementType": "geometry.stroke",
           "stylers": [
               {
                   "visibility": "off"
               }
           ]
       },
       {
           "featureType": "administrative",
           "elementType": "labels.text.fill",
           "stylers": [
               {
                   "color": "#303030"
               }
           ]
       },
       {
           "featureType": "landscape",
           "elementType": "all",
           "stylers": [
               {
                   "color": "#f2f2f2"
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
           "featureType": "road",
           "elementType": "all",
           "stylers": [
               {
                   "saturation": -100
               },
               {
                   "lightness": 45
               }
           ]
       },
       {
           "featureType": "road.highway",
           "elementType": "all",
           "stylers": [
               {
                   "visibility": "simplified"
               }
           ]
       },
       {
           "featureType": "road.arterial",
           "elementType": "labels.icon",
           "stylers": [
               {
                   "visibility": "off"
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
           "featureType": "water",
           "elementType": "all",
           "stylers": [
               {
                   "color": "#ebd2a6"
               },
               {
                   "visibility": "on"
               }
           ]
       }
   ]});

// Function set marker position and center map compared to the iss location
   function moveISS () {

  $.getJSON('https://api.wheretheiss.at/v1/satellites/25544', data => {

           let lat = parseFloat(data['latitude']);
           let lon = parseFloat(data['longitude']);

           map.setCenter(new google.maps.LatLng(lat, lon));
           marker.setPosition(new google.maps.LatLng(lat, lon));
       });
       setTimeout(moveISS, 5000);
   }

   let sat = 'assets/img/satellite.svg';
   let marker = new google.maps.Marker({ map: map, icon: sat});

   moveISS();
 }

// Get some info (altitude et velocity)
 $.getJSON('https://api.wheretheiss.at/v1/satellites/25544', data => {
   let alt = Math.round(data.altitude);
   let vel = Math.round(data.velocity);
   $("#alt").append(alt);
   $("#vel").append(vel);

 })

// Scroll smooth
 $(document).ready( function() {
 		$('.js-scrollTo').on('click', function(){
 			var page = $(this).attr('href');
      console.log($(this).attr('class'));
 			let speed = 750;
 			$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
 			return false;
 		});
 	});

window.sr = ScrollReveal({duration : 2000});
sr.reveal('.astros');
sr.reveal('.infos');
sr.reveal('.def');
