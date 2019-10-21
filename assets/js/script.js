//Buttons
$(document).ready(function() {

    $('#menu2').toggle();
    $('#menu3').show();
    $('#menu4').toggle();
    $('#menu5').toggle();
    $('#menu6').toggle();

    $('#gamesNav').on('click', function() {
        $('#menu2').toggle(1000);
        $('#back2').on('click', function() {
            $('#menu2').hide(1000);
        });
    });

    $('#resumeNav').on('click', function() {
        $('#menu3').toggle(1000);
        $('#back3').on('click', function() {
            $('#menu3').hide(1000);
        });
    });

    $('#mapsNav').on('click', function() {
        $('#menu4').toggle(1000);
        $('#back4').on('click', function() {
            $('#menu4').hide(1000);
        });
    });

    $('#repositoriesNav').on('click', function() {
        $('#menu3').toggle();
        $('#menu5').toggle(1000);
        $('#back5').on('click', function() {
            $('#menu5').hide(1000);
        });
    });

    $('#testbutton').on('click', function() {
        $('#menu2').toggle(1000);
        $('#back2').on('click', function() {
            $('#menu2').hide(1000);
        });
    });

    $('#moreinfo').on('click', function() {
        $('#menu6').toggle(1000);
        $('#back6').on('click', function() {
            $('#menu6').hide(1000);
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
