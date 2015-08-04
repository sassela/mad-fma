var currentImageEl = 0;

function init() {
	var key = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
  var placeImages = {
  	"place1-detail": ["images/places/house1.jpeg", "images/places/house1b.jpeg", "images/places/house1c.jpeg", "images/places/house1d.jpeg"],
  	// todo change page keys
  	002: ["images/places/house2.jpeg", "images/places/house2b.jpeg", "images/places/house2c.jpeg"],
  	003: ["images/places/house3.jpeg", "images/places/house3b.jpeg", "images/places/house3c.jpeg"]
  };
  // TODO add horizontal / vertical attribute. Alt text.

	$("img").click(function() {
		navigate(placeImages[key], currentImageEl, 1);
	});

	$("#next").click(function() {
		navigate(placeImages[key], currentImageEl, 1);
	});
	$( document ).on( "swipeleft", function() {
    	navigate(placeImages[key], currentImageEl, 1);
    });

	$("#prev").click(function() {
        navigate(placeImages, currentImageEl, -1);
    });
    $( document ).on( "swiperight", function() {
    	navigate(placeImages, currentImageEl, -1);
    });
}

function display(images) {
	console.log(images[0]);
}

function navigate(placeImages, current, direction) {
	if((current + direction) > placeImages.length){
		current = 0;
	} else if((current + direction) < 0){
		current = placeImages.length-1;
	}

	$("img").attr("src", placeImages[current]);
	current+=direction;
	currentImageEl = current;
}

$( document ).on( "pageshow", function() {
	init();
    $( ".photopopup" ).on({
        popupbeforeposition: function() {
            var maxHeight = $( window ).height() - 60 + "px";
            $( ".photopopup img" ).css( "max-height", maxHeight );
        }
    });
});


