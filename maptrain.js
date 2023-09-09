const trainStops = [
    


[42.39628357260986, -71.14001297451809]
[]
[]
[]
[]
[]
[]
[]
[]
[]
[]
[]
[]
]
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoibmVlbmF2IiwiYSI6ImNsbTgwcDJrejA0cjIzcHFmaGNhb2pmYmkifQ.oCQxEOVEoQYPze-ZG8H63A';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
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
        if (counter >= trainStops.length) return;
        marker.setLngLat (trainStops[counter]);
        counter++;
        move();
    }, 1000);
}
  