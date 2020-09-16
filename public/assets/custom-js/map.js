// const speciesInformation = JSON.parse(
// 	document.getElementById('map').dataset.specieInformation
// );

mapboxgl.accessToken =
	'pk.eyJ1Ijoia2FuZ2FyaWFuIiwiYSI6ImNrZjIyaXcydDB5ODQycGxubWs4NWs3OWcifQ.MHLnLD6JaocTAkOjnrMcJw';

const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/kangarian/ckf4xrilg23l019n5xue9uvvg',
	center: [36.817223, -1.286389], //lon, lat
	zoom: 6,
	interactive: false,
});
