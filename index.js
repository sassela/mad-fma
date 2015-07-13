var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );

$(document).on("pagecontainerbeforeshow", function (e, ui) {
	if(page === "/[a-z\d]+-details/") {
		if (typeof(Storage) != "undefined") {
			setData();
//			displayDetails(getData());
		} else {
			$("#nostorage").text("The browser does not support storage");
		}
	}
});

function setData() {
	var placeDetails = [
    {name:$("#place").html(text), image:$('.image img').attr('src');, price:$("#price").html(text), url: page}
    ];
	localStorage.setItem("placeDetails",JSON.stringify(placeDetails));
}

//function getData() {
//	var placeDetails = JSON.parse( localStorage.getItem('placeDetails'));
//	return placeDetails;
//}
//
//function displayDetails(details) {
//	var text = '<ul data-role="listview" data-inset="true" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">';
//
//	for(var i in details) {
//		text += '<li class="ui-li-has-thumb ui-first-child"><a href=' + details[i].url + ' rel ="external" class="ui-btn ui-btn-icon-right ui-icon-caret-r" ><img src=' + details[i].image + '><h2>Z' + details[i].price + ' / month</h2><p>' + details[i].name + '</p></a></li>';
//	}
//	text += '</ul>';
//	$("#result").html(text);
}

