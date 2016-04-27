// JavaScript Document

// Map Script
function init_map() {
		var var_location = new google.maps.LatLng(48.198682, -114.310156);
        var var_mapoptions = {
          center: var_location,
          zoom: 14
};
		var var_marker = new google.maps.Marker({
			position: var_location,
            map: var_map,
			title:"Northwest Automotive"});
        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);
		var_marker.setMap(var_map);	
}
      google.maps.event.addDomListener(window, 'load', init_map);


// Facebook Script
(function(d, s, id) {   
	var js, fjs = d.getElementsByTagName(s)[0];   
	if (d.getElementById(id)) return;   
	js = d.createElement(s); js.id = id;   
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";   
	fjs.parentNode.insertBefore(js, fjs); 
}
	(document, 'script', 'facebook-jssdk'));













