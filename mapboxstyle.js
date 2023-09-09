const busStops = [
    



    [ -71.14150208407806, 42.39475281949548],
    [ -71.14226383141553, 42.39471320233979],
    [ -71.14252132347326, 42.395251993514435],
    [ -71.14236039093717, 42.394649814838665],
    [ -71.14098205744563,42.394678594583176],

    [ -71.14061700827276, 42.39405211806572],
    [ -71.14097105985267,42.3927526478082],
    [ -71.1414860439689, 42.39110450048743],
    [ -71.14251601220134, 42.389765348921834],
    [ -71.14331021484367, 42.388822900675514],
    [ -71.14194041256063, 42.387125301679646],
    [ -71.13953715329545, 42.386348706489564],
    [ -71.1390007115085, 42.38595248075938],
    [ -71.13744503020028, 42.38523926811139],
    [ -71.12895852091366, 42.381134175690605],
    [ -71.12739211082236, 42.38035750637471],
    [ -71.12562185292542, 42.37942232040187],
    [ -71.12438803672926, 42.37875658626854],
    [ -71.12367993357049, 42.37818595142709],
    [ -71.12243538862477, 42.376981260843756],
    [ -71.11940985694639, 42.375356477072046],
    [ -71.11927038216967, 42.373779207732554]
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoibmVlbmF2IiwiYSI6ImNsbTgwcDJrejA0cjIzcHFmaGNhb2pmYmkifQ.oCQxEOVEoQYPze-ZG8H63A';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    
    //style: 'mapbox://styles/mapbox/navigation-night-v1',//
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    //style: 'mapbox://styles/mapbox/standard-beta',//
    center: [-71.14150208407806, 42.39475281949548],
    zoom: 14,
  });
  
  var marker = new mapboxgl.Marker()
  .setLngLat( [-71.14150208407806, 42.39475281949548]).addTo(map);
  //TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    setTimeout ( ()=> {
        if (counter >= busStops.length) return;
        marker.setLngLat (busStops[counter]);
        counter++;
        move();
    }, 1000);
}



const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');
 
for (const input of inputs) {
input.onclick = (layer) => {
const layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId);
};
}