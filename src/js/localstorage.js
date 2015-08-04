$(document).on("pagecontainerbeforeshow", function (e, ui) {
	if (typeof(Storage) !== "undefined") {
		initLocalStorage();
	} else {
		$("#nostorage").text("The browser does not support storage");
	}
});

function storeItem(lsObjectStr, key, place) {
	// store a 'place' item into a given local storage object
	var storedItems = JSON.parse( localStorage.getItem(lsObjectStr));
	if(storedItems){
		// if item is not already saved, add to local storage object
		if(storedItems[key] == null) {
			$.extend(storedItems, place);
		}
	} else storedItems = place;
	// update object in local storage
	localStorage.setItem(lsObjectStr,JSON.stringify(storedItems));
}

function getPage() {
	var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
	return page;
}

function initLocalStorage() {
	// create place object using page id as key
  var key = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
  var place = {};
  // todo add reservation dates to reserved property. Add stars to favourites?
  // create place object from information on the detail page
  place[key]={name:$("#place").text(), image:$('img#image ').attr('src'), price:$("#price").text(), url:getPage()};

	// save property event (add to favourites)
	$("#save").click(function() {
		storeItem('savedPlaces', key, place);
	});

	// reserve property event
	$("#reserve").click(function() {
		storeItem('reservedPlaces', key, place);
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