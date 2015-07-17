$(document).on("pagecontainerbeforeshow", function (e, ui) {
	var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
	if(page === "place1-detail") {
		if (typeof(Storage) != "undefined") {
			initLocalStorage();
		} else {
			$("#nostorage").text("The browser does not support storage");
		}
	}
});

function setSavedPlaceData() {
	var savedPlaces = [
    {name:$("#place").text(), image:$('img#image ').attr('src'), price:$("#price").text(), url:getPage()}];
	localStorage.setItem("savedPlaces",JSON.stringify(savedPlaces));
}

function setReservedPlaceData() {
	var reservedPlaces = [
    {name:$("#place").text(), image:$('img#image ').attr('src'), price:$("#price").text(), url:getPage()}];
	localStorage.setItem("reservedPlaces",JSON.stringify(reservedPlaces));
}

function getPage() {
	var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
	return page;
}

function initLocalStorage() {
	$("#save").click(function() {
		setSavedPlaceData();
	});
	$("#reserve").click(function() {
        setReservedPlaceData();
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