
if ( rlUrl.indexOf('purehairsherborne.co.uk') >= 0){
    var myCenter=new google.maps.LatLng(50.946682,-2.515463);
}
else if ( rlUrl.indexOf('beautybaryeovil.co.uk') >= 0){
    var myCenter=new google.maps.LatLng(50.942141,-2.636674);
}
else if ( rlUrl.indexOf('unisexyeovil.co.uk') >= 0){
    var myCenter=new google.maps.LatLng(50.941594,-2.634125);
}
else if ( rlUrl.indexOf('hairandcare4u.co.uk') >= 0){
    var myCenter=new google.maps.LatLng(50.942141,-2.636674);
}

function initialize()
{
  var mapProp = {
    center: myCenter,
    zoom:16,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    // scaleControl: false,
    // draggable: false,
    mapTypeId: google.maps.MapTypeId.TERRAIN
    };

  var map = new google.maps.Map(document.getElementById("map"),mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
    title:'Click to zoom'
    });

  marker.setMap(map);

  // Zoom to 9 when clicking on marker
  google.maps.event.addListener(marker,'click',function() {
    map.setZoom(19);
    map.setCenter(marker.getPosition());
    });

  google.maps.event.addListener(map,'center_changed',function() {
  // 3 seconds after the center of the map has changed, pan back to the marker
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
  },2000);
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
