// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var map;
// todo add places
//var citymap = {};
//citymap['acc1'] = {
//  position: new google.maps.LatLng(51.52307, -0.12426),
//  description: 'blah'
//};
//citymap['acc2'] = {
//  center: new google.maps.LatLng(40.714352, -74.005973),
//  population: 8405837
//};
//citymap['acc3'] = {
//  center: new google.maps.LatLng(34.052234, -118.243684),
//  population: 3857799
//};
//citymap['acc4'] = {
//  center: new google.maps.LatLng(49.25, -123.1),
//  population: 603502
//};

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

		var accomm1 = new google.maps.LatLng(51.52307, -0.12426);

		  var marker = new google.maps.Marker({
              position: pos,
              map: map,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 5
              },
              draggable: true,
              title: 'You are here'
          });

        	var accomm1Positions = new google.maps.Marker({
        	position: accomm1,
        	map: map,
        	title: 'Accomm 1'
        	});

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

//	todo update zoom
//  var markerBounds = new LatLngBounds();
//  markerBounds.extend(51.52307, -0.12426);
//  map.setCenter(markerBounds.getCenter(), map.getBoundsZoomLevel(markerBounds));
//  map.fitBounds(markerBounds);
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

	var pos = new google.maps.LatLng(51.521951, -0.130204);

  var options = {
//    map: map,
//    position: pos,
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