$(document).on("pagecontainerbeforeshow", function (e, ui) {
	if (typeof(Storage) !== "undefined") {
		initLocalStorage();
	} else {
		$("#nostorage").text("The browser does not support storage");
	}
});

var reservedPlaces = JSON.parse( localStorage.getItem('reservedPlaces'));
var savedPlaces = JSON.parse( localStorage.getItem('savedPlaces'));

//TODO unique places only
function savePlace() {
	if(savedPlaces){
		savedPlaces.push({name:$("#place").text(), image:$('img#image ').attr('src'), price:$("#price").text(), url:getPage()});
	} else savedPlaces = [{name:$("#place").text(), image:$('img#image ').attr('src'), price:$("#price").text(), url:getPage()}];
	localStorage.setItem("savedPlaces",JSON.stringify(savedPlaces));
}

function reservePlace() {
	if(reservedPlaces){
	reservedPlaces.push({name:$("#place").text(), image:$('img#image ').attr('src'), price:$("#price").text(), url:getPage()});
	} else reservedPlaces = [{name:$("#place").text(), image:$('img#image ').attr('src'), price:$("#price").text(), url:getPage()}];
	localStorage.setItem("reservedPlaces",JSON.stringify(reservedPlaces));
}

function getPage() {
	var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
	return page;
}

function initLocalStorage() {
	$("#save").click(function() {
		savePlace();
	});
	$("#reserve").click(function() {
    reservePlace();
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