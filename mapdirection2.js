
mapboxgl.accessToken = 'pk.eyJ1IjoibmVlbmF2IiwiYSI6ImNsbTgwZ3ZoaTA0Z2QzaW1zODNwZGh3amkifQ.cnpTAa3-XbN2NDvTK0PRDQ';
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12',
center: [-79.4512, 43.6568],
zoom: 13
});

map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-left'
);
