$(document).on("pagecontainerbeforeshow", function (e, ui) {
	var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
	if(page === "localstorage") {
		if (typeof(Storage) != "undefined") {
			storeData();
			displayDetails(getData());
		} else {
			$("#nostorage").text("The browser does not support storage");
		}
	}
});

function storeData() {
	var placeDetails = [
    {name:'place1', image:"images/places/house1b.png", price:650, url:'index.html'},
    {name:'place2', image:"images/places/house1b.png", price:650, url:'index.html'},
    {name:'place3', image:"images/places/house1b.png", price:650, url:'index.html'}
    ];
	localStorage.setItem("placeDetails",JSON.stringify(placeDetails));
}

function getData() {
	var placeDetails = JSON.parse( localStorage.getItem('placeDetails'));
	return placeDetails;
}

function displayDetails(details) {
	var text = '';
	for(var i in details) {
		text += i + ': ' + details[i].name + '<br>';
	}
	$("#result").html(text);
}

