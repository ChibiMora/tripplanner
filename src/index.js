const buildMarker = require('./marker');
// console.log('I am running correctly!')



const mapboxgl = require("mapbox-gl");


mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5nZWwtY2hlbiIsImEiOiJjamdvNGlmZXEwMGJ1MndtbmV6YXdycDN6In0.AzNyCikZYtV9AZ9hnsapdQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "200px";
// markerDomEl.style.height = "300px";
// markerDomEl.style.backgroundImage = 'url(https://placekitten.com/g/200/300';

// const fullstackNY = new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);

const marker = buildMarker('hotel', [-74.009151, 40.705086]);
marker.addTo(map);


const kitten = buildMarker('kitten', [-87.641, 41.895]);
kitten.addTo(map);
