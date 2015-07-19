var currentImageEl = 0;

function init() {
	$("img").click(function() {
		navigate(placeImages, currentImageEl, 1);
	});
	// TODO add swipe
	$("#next").click(function() {
		navigate(placeImages, currentImageEl, 1);
	});
	$( document ).on( "swipeleft", function() {
    	navigate(placeImages, currentImageEl, 1);
    });

	$("#prev").click(function() {
        navigate(placeImages, currentImageEl, -1);
    });
    $( document ).on( "swiperight", function() {
    	navigate(placeImages, currentImageEl, -1);
    });

}

var placeImages = ["images/places/house1.jpeg", "images/places/house1b.jpeg", "images/places/house1c.jpeg", "images/places/house1d.jpeg"];
// TODO all images object. add horizontal / vertical attribute. Alt text.

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

$( document ).on( "pagecreate", function() {
	init();
    $( ".photopopup" ).on({
        popupbeforeposition: function() {
            var maxHeight = $( window ).height() - 60 + "px";
            $( ".photopopup img" ).css( "max-height", maxHeight );
        }
    });
});


