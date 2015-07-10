// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var map;

function initialize() {
  var mapOptions = {
    zoom: 12
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

//		var churchillHotelPosition = new google.maps.LatLng(51.52307, -0.12426);

//		var currentPositionImage ='http://www.dcs.bbk.ac.uk/lo/mad/madexamples/session5/classactivities/zedlandhotels/icons/currentlocation.png';
		  var marker = new google.maps.Marker({
              position: pos,
              map: map,
              title: 'You are here'
          });
//        	var userPosition  = new google.maps.Marker({
//        	position: pos,
//        	map: map,
//        	icon: currentPositionImage,
//        	title: 'You are here'
//        	});

//        	var churchillHotelMarkerImage = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=A|FF0000|000000';
//        	var churchillPosition = new google.maps.Marker({
//        	position: churchillHotelPosition,
//        	map: map,
//        	icon: churchillHotelMarkerImage,
//        	title: 'Churchill Hotel'
//        	});

//	todo update with accomm info
//      var infowindow = new google.maps.InfoWindow({
//        map: map,
//        position: pos,
//        content: 'Location found using HTML5.'
//      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

	var pos = new google.maps.LatLng(51.521951, -0.130204);

  var options = {
    map: map,
    position: pos,
    content: content
  };

  var marker = new google.maps.Marker({
	    position: pos,
	    map: map,
	    title: 'You are here'
	});

//	todo update
//  var infowindow = new google.maps.InfoWindow(options);
//  map.setCenter(options.position);

}

google.maps.event.addDomListener(window, 'load', initialize);