$(document).on("pagecontainerbeforeshow", function (e, ui) {
	if (typeof(Storage) !== "undefined") {
		initLocalStorage();
	} else {
		$("#nostorage").text("The browser does not support storage");
	}
});

// TODO refactor
function savePlace(key, place) {
	var savedPlaces = JSON.parse( localStorage.getItem('savedPlaces'));
	if(savedPlaces){
		if(savedPlaces[key] === null) {
			savedPlaces.push(place);
		}
	} else savedPlaces = place;
	localStorage.setItem("savedPlaces",JSON.stringify(savedPlaces));
}

function reservePlace(key, place) {
	var reservedPlaces = JSON.parse( localStorage.getItem('reservedPlaces'));
	if(reservedPlaces){
		if(reservedPlaces[key] === null){
			reservedPlaces.push(place);
		}
	} else reservedPlaces = place;
	localStorage.setItem("reservedPlaces",JSON.stringify(reservedPlaces));
}

function getPage() {
	var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
	return page;
}

function initLocalStorage() {
	// create place object using page id as key
  var key = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
  var place = {};
  place[key]={name:$("#place").text(), image:$('img#image ').attr('src'), price:$("#price").text(), url:getPage()};

	// save property event (add to favourites)
	$("#save").click(function() {
		savePlace(key, place);
	});

	// reserve property event
	$("#reserve").click(function() {
    reservePlace(key, place);
  });
}

$( document ).on( "pagecreate", function() {
    $( ".photopopup" ).on({
        popupbeforeposition: function() {
            var maxHeight = $( window ).height() - 60 + "px";
            $( ".photopopup img" ).css( "max-height", maxHeight );
        }
    });
});