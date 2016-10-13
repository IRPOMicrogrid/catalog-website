var map;
var infowindow;
var gmarkers = new Array();
var current_location;
var directionsDisplay;
var directionsService;

function initMap() {
    
    var mapOptions = {
        center: {lat: -34.397, lng: 150.644},
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false
    };
  
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    infowindow = new google.maps.InfoWindow();
}