// ---------------------------------------------------------------------------------------------------------------------------->
// MAP ELEMENT  ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->


// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    var mapOptions = {

        zoom: 18, // How zoomed in you want the map to start at (always required)
        scrollwheel: false, //set to true to enable mouse scrolling while inside the map area

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(-36.9025367,174.687434),

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        //styles: [
        //    {
        //        "featureType": "water",
        //        "elementType": "geometry.fill",
        //        "stylers": [
        //            {
        //                "color": "#d3d3d3"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "transit",
        //        "stylers": [
        //            {
        //                "color": "#808080"
        //            },
        //            {
        //                "visibility": "off"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "road.highway",
        //        "elementType": "geometry.stroke",
        //        "stylers": [
        //            {
        //                "visibility": "on"
        //            },
        //            {
        //                "color": "#b3b3b3"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "road.highway",
        //        "elementType": "geometry.fill",
        //        "stylers": [
        //            {
        //                "color": "#ffffff"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "road.local",
        //        "elementType": "geometry.fill",
        //        "stylers": [
        //            {
        //                "visibility": "on"
        //            },
        //            {
        //                "color": "#ffffff"
        //            },
        //            {
        //                "weight": 1.8
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "road.local",
        //        "elementType": "geometry.stroke",
        //        "stylers": [
        //            {
        //                "color": "#d7d7d7"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "poi",
        //        "elementType": "geometry.fill",
        //        "stylers": [
        //            {
        //                "visibility": "on"
        //            },
        //            {
        //                "color": "#ebebeb"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "administrative",
        //        "elementType": "geometry",
        //        "stylers": [
        //            {
        //                "color": "#a7a7a7"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "road.arterial",
        //        "elementType": "geometry.fill",
        //        "stylers": [
        //            {
        //                "color": "#ffffff"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "road.arterial",
        //        "elementType": "geometry.fill",
        //        "stylers": [
        //            {
        //                "color": "#ffffff"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "landscape",
        //        "elementType": "geometry.fill",
        //        "stylers": [
        //            {
        //                "visibility": "on"
        //            },
        //            {
        //                "color": "#efefef"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "road",
        //        "elementType": "labels.text.fill",
        //        "stylers": [
        //            {
        //                "color": "#696969"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "administrative",
        //        "elementType": "labels.text.fill",
        //        "stylers": [
        //            {
        //                "visibility": "on"
        //            },
        //            {
        //                "color": "#737373"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "poi",
        //        "elementType": "labels.icon",
        //        "stylers": [
        //            {
        //                "visibility": "off"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "poi",
        //        "elementType": "labels",
        //        "stylers": [
        //            {
        //                "visibility": "off"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "road.arterial",
        //        "elementType": "geometry.stroke",
        //        "stylers": [
        //            {
        //                "color": "#d6d6d6"
        //            }
        //        ]
        //    },
        //    {
        //        "featureType": "road",
        //        "elementType": "labels.icon",
        //        "stylers": [
        //            {
        //                "visibility": "off"
        //            }
        //        ]
        //    },
        //    {},
        //    {
        //        "featureType": "poi",
        //        "elementType": "geometry.fill",
        //        "stylers": [
        //            {
        //                "color": "#dadada"
        //            }
        //        ]
        //    }
        //]
    };

    var mapOptions2 = {

        zoom: 17, // How zoomed in you want the map to start at (always required)
        scrollwheel: false, //set to true to enable mouse scrolling while inside the map area

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(-43.5327838,172.6455112),
    };


    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement1 = document.getElementById('map');
    if ( mapElement1 ){
        var map1 = new google.maps.Map(mapElement1, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(-36.9025367,174.688000),
            map: map1,
            title: 'Strikeforce Gym New Lynn',
            icon: 'img/map-marker.png'

        });
    }
    var mapElement2 = document.getElementById('map2');
    if ( mapElement2 ){
        var map2 = new google.maps.Map(mapElement2, mapOptions2);
        var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(-43.5327838,172.6455112),
            map: map2,
            title: 'Strikeforce Gym Cantebury',
            icon: 'img/map-marker.png'

        });
    }



}