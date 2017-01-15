(function() {

	var btn = document.getElementById('local');
	var link = document.getElementsByClassName('link');

	function success(position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		var mapLink = '<a target="_blank" href="http://bing.com/maps/default.aspx?cp='+lat+'~'+lng+'">BING</a>';
		link[0].innerHTML = 'Show on the maps: ' + mapLink;
	}

	btn.onclick = function() {
		link[0].innerHTML = "Searchin\'...";
		navigator.geolocation.getCurrentPosition(success);
	};

})();
