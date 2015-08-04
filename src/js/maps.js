var map;

var bounds = new google.maps.LatLngBounds();

function initialize() {

	var mapOptions = {
	 zoom: 12
	};

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	setPointA();

	// extract latitude and longitude from query string
  var pointB = new google.maps.LatLng(extractPointBFromUrl()[0], extractPointBFromUrl()[1]);
	setPointB(pointB);
}

function setPointA(){
	// set point A using geolocation or default coordinates
	var pointA;
	// Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pointA = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
			placePointAMarker(pointA);
			extendBounds(bounds, pointA);

    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function extractPointBFromUrl(){
	// extract accommodation coordinates from query string in URL
	var thisUrl = $(location).attr('href');
	var latLng = thisUrl.split("=")[1].split(",");
	return latLng;
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
    content: content
  };

	placePointAMarker(defaultPointA);

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