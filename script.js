function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 12.9716,
            lng: 77.5946
        },
        zoom: 15,
    });

    var marker = new google.maps.Marker({
        position: {
            lat: 12.9716,
            lng: 77.5946
        },
        map: map,
        icon: 'Marker.png',
        //icon: 'https://cdn0.iconfinder.com/data/icons/internet-and-web-flat-icons-free/512/Marker-128.png',
        draggable: true
    });
    var SearchBox = new google.maps.places.SearchBox(document.getElementById('search'));

    SearchBox.addListener('places_changed', function () {

        var places = SearchBox.getPlaces();
        var bounds = new google.maps.LatLngBounds();
        var i, place;
        for (i = 0; place = places[i]; i++) {
            bounds.extend(place.geometry.location);
            marker.setPosition(place.geometry.location);
        }
        map.fitBounds(bounds);
        map.setZoom(15);
    });
    marker.addListener('position_changed', function () {

        var lat = marker.getPosition().lat();
        var lng = marker.getPosition().lng();

        $('#lat').val(lat);
        $('#lng').val(lng);
    });
}

/*--------|[MAP SCRIPT END HERE]|--------*/

$(document).ready(function() {
    $('#addContact').click(function AddContact() {
        var contactName = $('#contactName').val();
        var contactNumber = $('#contactNumber').val();
        var contactRole = $('#contactRole').val();
        var contactType = $('#contactType').val();
        $('.table').append(
            '<tr> <td>'+contactName+'</td> <td>'+contactType+'</td> <td>'+contactRole+'</td> <td>'+contactNumber+'</td> <td class="DeletItem"><button class="btn btn-default"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td></tr>'
        );
        var contactName = $('#contactName').val('');
        var contactNumber = $('#contactNumber').val('');
        var contactRole = $('#contactRole').val('');
        var contactType = $('#contactType').val('');
        
        $('.DeletItem').click(function RemoveContact() {
        $(this).parent().remove();
    });
    });
});




