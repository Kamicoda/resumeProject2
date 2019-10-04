//Buttons
$(document).ready(function() {

    $('#menu2').toggle();
    $('#menu3').toggle();
    $('#menu4').toggle();
    $('#menu5').toggle();

    $('#gamesNav').on('click', function() {
        $('#menu1').toggle(1000);
        $('#menu2').toggle(1000);
        $('#back2').on('click', function() {
            $('#menu1').show(1000);
            $('#menu2').hide(1000);
        });
    });

    $('#resumeNav').on('click', function() {
        $('#menu1').toggle(1000);
        $('#menu3').toggle(1000);
        $('#back3').on('click', function() {
            $('#menu1').show(1000);
            $('#menu3').hide(1000);
        });
    });

    $('#mapsNav').on('click', function() {
        $('#menu1').toggle(1000);
        $('#menu4').toggle(1000);
        $('#back4').on('click', function() {
            $('#menu1').show(1000);
            $('#menu4').hide(1000);
        });
    });

    $('#repositoriesNav').on('click', function() {
        $('#menu1').toggle(1000);
        $('#menu5').toggle(1000);
        $('#back5').on('click', function() {
            $('#menu1').show(1000);
            $('#menu5').hide(1000);
        });
    });


});


//Maps
var map;

function initMap() {
    var myLatLng = { lat: 53.143887, lng: -1.201440 };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng,

    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'random location'
    });
}