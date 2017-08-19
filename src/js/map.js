var map;
//create a new blank array for all the listing markers.
var markers = [];
var defaultIcon, highlightedIcon;
var largeInfowindow;

function initMap() {
	//creates a new map 
	var styledMapType = new google.maps.StyledMapType(
            [
              {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
              }
            ],
            {name: 'Styled Map'});
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.7413549, lng: -73.9980244},
		zoom: 13,
		mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
	}); 
  // //listen for idle state of map to resize map
  //  google.maps.event.addListener(map, "idle", function(){
  //       google.maps.event.trigger(map, 'resize'); 
  //   });
  google.maps.event.trigger(map, 'resize'); 
	 //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
	
	largeInfowindow = new google.maps.InfoWindow();
	var bounds = new google.maps.LatLngBounds();
	defaultIcon = {
    url: 'images/defaultIcon.png',
    scaledSize: new google.maps.Size(30, 30), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(15, 30) // anchor
  };
	highlightedIcon = {
    url: 'images/highlightedIcon.png',
    scaledSize: new google.maps.Size(30, 30), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(15, 30) // anchor
  };
	// Initialize the drawing manager.
    var drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT,
        drawingModes: [
          google.maps.drawing.OverlayType.POLYGON
        ]
      }
    });

	//the following group uses the location array to create an array of markers on initialize.
	for (var i = 0; i < nationalParks.length; i++) {
		//Get the position from the location array.
		var position = nationalParks[i].location;
		var title = nationalParks[i].name;
		//create a marker per location, and put into markers array
		var marker = new google.maps.Marker({
			map: map,
			position: position,
			title: title,
			icon: defaultIcon,
			animation: google.maps.Animation.DROP,
			id: i
		});
		//push the marker to our array of markers.
		markers.push(marker);
		//create an onclick event to open an infowindow at each marker
		bounds.extend(marker.position);
		marker.addListener('click', function() {
			populateInfoWindow(this, largeInfowindow);
		});
		map.fitBounds(bounds);
		marker.addListener('mouseover', function() {
			this.setIcon(highlightedIcon);
		});
		marker.addListener('mouseout', function() {
      if(largeInfowindow.marker !== this) {
        this.setIcon(defaultIcon);
      }
			
		});

	}
  $('#filter').click(function() {
    filter(largeInfowindow);
  });
  $('body').keypress(function (e) {
    if (e.which == 13) {
      filter(largeInfowindow);
      //return false;    //<---- Add this line
    }
  });


	
}
//This function will loop through the markers array and display them all.
// function showListings() {
// 	var bounds = new google.maps.LatLngBounds();
// 	for(var i = 0; i < markers.length; i++) {
// 		markers[i].setMap(map);
// 		bounds.extend(markers[i].position);
// 	}
// 	map.fitBounds(bounds);
// }

//This function will loop through the listings and hide them all
function filter(infowindow) {
  if(infowindow.marker != null) {
      infowindow.marker.setIcon(defaultIcon);
      infowindow.setMarker = null;
    }

  var inputText = document.getElementById("filter-text").value.toLowerCase();
  var bounds = new google.maps.LatLngBounds();
	for(var i = 0; i < markers.length; i++) {
    var idx = markers[i].id;
    var name = nationalParks[idx].name.toLowerCase();
    var state = nationalParks[idx].state.toLowerCase();
    if(name.indexOf(inputText) != -1 || state.indexOf(inputText) != -1){
        markers[i].setMap(map);
        bounds.extend(markers[i].position);
    } else {
        markers[i].setMap(null);
    }
		
	}
  map.fitBounds(bounds);
}

//This function polulates the infowindow when the marker is clicked. We'll only allow one infowindow which will open at
// the marker that is clicked, and populate based on that markers position.
function populateInfoWindow(marker, infowindow) {
	//check to make sure the infowindow is not already opened on this marker.
  zoomToArea(marker.position);
	if(infowindow.marker != marker) {
    if(infowindow.marker != null) {
      infowindow.marker.setIcon(defaultIcon);
    }
		infowindow.marker = marker;
    marker.setIcon(highlightedIcon);
  //   var npsUrl = 'https://developer.nps.gov/api/v0/alerts?parkCode=yell,yose';
  //   $.ajax({
  //   url: npsUrl,
  //   headers: {
  //       'Authorization':"Basic BC4714CE-007D-4E1A-997F-9DBB6C6D4DD7",
  //   },
  //   method: 'POST',
  //   dataType: 'json',
  //   success: function(data){
  //     console.log('succes: '+data);
  //   }
  // });
    // var nytimeUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + marker.title + '&sort=newest&api-key=2e155f2912fa4a80993452ef428640cf';
    // var nytContent = "<div><h3>Latest NY Times Articles</h3></div>";
    // $.getJSON(nytimeUrl, function(data){
    //   var articles = data.response.docs;
    //   for(var i = 0; i < Math.min(articles.length, 5); i++) {
    //     var article = articles[i];
    //     nytContent +='<a href="'+article.web_url+'">' + article.headline.main + '</a>';
    //   }
    // });
    var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.title + ' National Park'+ '&format=json&callback=wikiCallback';
    var url;
    $.ajax({
      async: false,
      cache: false,
      url: wikiUrl,
      dataType: 'jsonp',
      success: function(response){
        var url = response[3][0];
        console.log(url);
        infowindow.setContent('<div style=" height: 300px !important;overflow: auto !important;"><div style="font-size:22px;overflow:hidden !important;"><a target="_blank" href="' + url+ '" style="color:black;text-decoration: none;">' + marker.title + '</a></div> <div style="width:200px;overflow:hidden !important;"><img src="images/' + marker.title +'.jpg" alt=""><hr><p>' + nationalParks[marker.id].description+'</p></div></div>');
      }
    });
   
    // infowindow.setContent('<div style=" height: 300px !important;overflow: auto !important;"><div style="font-size:22px;overflow:hidden !important;"><a href="' + url + '" style="color:black;text-decoration: none;">' + marker.title + '</a></div> <div style="width:200px;overflow:hidden !important;"><img src="images/' + marker.title +'.jpg" alt=""><hr><p>' + nationalParks[marker.id].description+'</p></div></div>');
		infowindow.open(map, marker);
		//Make sure the marker property is cleared if the infowindow is closed.
		infowindow.addListener('closeclick', function() {
      infowindow.marker.setIcon(defaultIcon);
			infowindow.setMarker = null;
		});

		infowindow.open(map, marker);
	}
}

// This function takes in a COLOR, and then creates a new marker
// icon of that color. The icon will be 21 px wide by 34 high, have an origin
// of 0, 0 and be anchored at 10, 34).
function makeMarkerIcon(markerColor) {
	var markerImage = new google.maps.MarkerImage(
	'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
	'|40|_|%E2%80%A2',
	new google.maps.Size(21, 34),
	new google.maps.Point(0, 0),
	new google.maps.Point(10, 34),
	new google.maps.Size(21,34));
	return markerImage;
}


//this function takes the input value in the find nearby area text input
//locate it, and then zooms into that area. This is so that the user can
//show all listings, then decide to focus on one area of the map
function zoomToArea(location) {
  map.setCenter(location);
  map.setZoom(6);
    
}

function resizeMap() {
  var center = map.getCenter();
  google.maps.event.trigger(map, "resize");
  map.setCenter(center);
  setTimeout(resizeMap, 20);
  //open = true;
}
