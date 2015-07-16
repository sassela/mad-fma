$(document).on("pagecontainerbeforeshow", function (e, ui) {
	var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
	if(page === "place1-detail") {
		if (typeof(Storage) != "undefined") {
			init();
		} else {
			$("#nostorage").text("The browser does not support storage");
		}
	}
});

function setData() {
	var placeDetails = [
    {name:$("#place").text(), image:$('img#image ').attr('src'), price:$("#price").text(), url:getPage()}];
	localStorage.setItem("placeDetails",JSON.stringify(placeDetails));
}

function getPage() {
	var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
	return page;
}

function init() {
	$("#save").click(function() {
		setData();
	});
}