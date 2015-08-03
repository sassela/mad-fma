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

var bounds = new google.maps.LatLngBounds();

function initialize() {
	// dynamically update for each place
	var pointB = new google.maps.LatLng(51.52307, -0.12426);

	var mapOptions = {
	 zoom: 12
	};

	map = new google.maps.Map(document.getElementById('map-canvas'),
	           mapOptions);

	setPointA();
	setPointB(pointB);
}

function setPointA(){
	var pointA;
// Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pointA = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
			placePointAMarker(pointA);
			extendBounds(bounds, pointA);

//	  todo update with accomm info
//      var infowindow = new google.maps.InfoWindow({
//        map: map,
//        position: pos,
//        content: 'Location found using HTML5.'
//      });

    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function setPointB(pointB){
	placePointBMarker(pointB);
	extendBounds(bounds, pointB);
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

	var defaultPointA = new google.maps.LatLng(51.521951, -0.130204);

  var options = {
//    map: map,
//    position: pos,
    content: content
  };

	placePointAMarker(defaultPointA);

//	todo update
//  var infowindow = new google.maps.InfoWindow(options);
//  map.setCenter(options.position);

}

function placePointAMarker(pointA){
  var marker = new google.maps.Marker({
      position: pointA,
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5
      },
      draggable: true,
      title: 'You are here'
    });
}

function placePointBMarker(pointB){
	var marker = new google.maps.Marker({
	    position: pointB,
	    map: map,
	    title: 'Accomm 1'
	  });
}

function extendBounds(bounds, point) {
	bounds.extend(point);
	map.fitBounds(bounds);
}

google.maps.event.addDomListener(window, 'load', initialize);