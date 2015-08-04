$(document).on("pagecontainerbeforeshow", function (e, ui) {
	var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
	if(page === "favourites") {
		if (typeof(Storage) !== "undefined") {
			displayDetails(getData());
		} else {
			$("#nostorage").text("The browser does not support storage");
		}
	}
});

function getData() {
	var placeDetails = JSON.parse( localStorage.getItem('savedPlaces'));
	return placeDetails;
}

function displayDetails(details) {
	var text;
	if(details){
		text = '<ul data-role="listview" data-inset="true" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">';

  	for(var i in details) {
  		text += '<li class="ui-li-has-thumb ui-first-child"><a href=\"' + details[i].url + '.html\" rel ="external" class="ui-btn ui-btn-icon-right ui-icon-caret-r" ><img src=' + details[i].image + '><h2>' + details[i].price + '</h2><p>' + details[i].name + '</p></a></li>';
  	}
  	text += '</ul>';
	}
	else text = '<p>You don\'t have any favourites saved. <a href="index.html" rel="external">Search</a> to save a place.</p>';
	$("#result").html(text);
}

