$(document).on("pagecontainerbeforeshow", function (e, ui) {
	var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
	if(page === "savedplaces") {
		if (typeof(Storage) != "undefined") {
//			storeData();
			displayDetails(getData());
		} else {
			$("#nostorage").text("The browser does not support storage");
		}
	}
});

//function storeData() {
//	var placeDetails = [
//    {name:'place1', image:"images/places/house1b.png", price:650, url:'index.html'},
//    {name:'place2', image:"images/places/house2.png", price:650, url:'index.html'},
//    {name:'place3', image:"images/places/house3c.png", price:650, url:'index.html'}
//    ];
//	localStorage.setItem("placeDetails",JSON.stringify(placeDetails));
//}

function getData() {
	var placeDetails = JSON.parse( localStorage.getItem('placeDetails'));
	return placeDetails;
}

function displayDetails(details) {
	var text = '<ul data-role="listview" data-inset="true" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">';

	for(var i in details) {
		text += '<li class="ui-li-has-thumb ui-first-child"><a href=' + details[i].url + ' rel ="external" class="ui-btn ui-btn-icon-right ui-icon-caret-r" ><img src=' + details[i].image + '><h2>Z' + details[i].price + ' / month</h2><p>' + details[i].name + '</p></a></li>';
	}
	text += '</ul>';
	$("#result").html(text);
}

