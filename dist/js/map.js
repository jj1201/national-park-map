function initMap(){var e=new google.maps.StyledMapType([{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],{name:"Styled Map"});(map=new google.maps.Map(document.getElementById("map"),{center:{lat:40.7413549,lng:-73.9980244},zoom:13,mapTypeControlOptions:{mapTypeIds:["roadmap","satellite","hybrid","terrain","styled_map"]}})).mapTypes.set("styled_map",e),map.setMapTypeId("styled_map"),largeInfowindow=new google.maps.InfoWindow;var t=new google.maps.LatLngBounds;defaultIcon={url:"images/defaultIcon.png",scaledSize:new google.maps.Size(30,30),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(15,30)},highlightedIcon={url:"images/highlightedIcon.png",scaledSize:new google.maps.Size(30,30),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(15,30)};new google.maps.drawing.DrawingManager({drawingMode:google.maps.drawing.OverlayType.POLYGON,drawingControl:!0,drawingControlOptions:{position:google.maps.ControlPosition.TOP_LEFT,drawingModes:[google.maps.drawing.OverlayType.POLYGON]}});for(var o=0;o<nationalParks.length;o++){var a=nationalParks[o].location,l=nationalParks[o].name,r=new google.maps.Marker({map:map,position:a,title:l,icon:defaultIcon,animation:google.maps.Animation.DROP,id:o});markers.push(r),t.extend(r.position),r.addListener("click",function(){populateInfoWindow(this,largeInfowindow)}),map.fitBounds(t),r.addListener("mouseover",function(){this.setIcon(highlightedIcon)}),r.addListener("mouseout",function(){largeInfowindow.marker!==this&&this.setIcon(defaultIcon)})}document.getElementById("filter").addEventListener("click",function(){filter(largeInfowindow)})}function filter(e){null!=e.marker&&(e.marker.setIcon(defaultIcon),e.setMarker=null);for(var t=document.getElementById("filter-text").value.toLowerCase(),o=new google.maps.LatLngBounds,a=0;a<markers.length;a++){var l=markers[a].id,r=nationalParks[l].name.toLowerCase(),n=nationalParks[l].state.toLowerCase();-1!=r.indexOf(t)||-1!=n.indexOf(t)?(markers[a].setMap(map),o.extend(markers[a].position)):markers[a].setMap(null)}map.fitBounds(o)}function populateInfoWindow(e,t){zoomToArea(e.position),t.marker!=e&&(null!=t.marker&&t.marker.setIcon(defaultIcon),t.marker=e,e.setIcon(highlightedIcon),t.setContent('<div style="font-size:22px">'+e.title+'</div> <div style="width:200px"><img src="images/'+e.title+'.jpg" alt=""><hr><p>'+nationalParks[e.id].description+"</p></div>"),t.open(map,e),t.addListener("closeclick",function(){t.marker.setIcon(defaultIcon),t.setMarker=null}),t.open(map,e))}function makeMarkerIcon(e){return new google.maps.MarkerImage("http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|"+e+"|40|_|%E2%80%A2",new google.maps.Size(21,34),new google.maps.Point(0,0),new google.maps.Point(10,34),new google.maps.Size(21,34))}function zoomToArea(e){map.setCenter(e),map.setZoom(7)}var map,markers=[],defaultIcon,highlightedIcon,largeInfowindow;