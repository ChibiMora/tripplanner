const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "url(http://i.imgur.com/D9574Cu.png)",
    restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
    activities: "url(http://i.imgur.com/WbMOfMl.png)"
};

const buildMarker = (type, coords) => {
    let url = 'url(https://placekitten.com/g/200/300'
    switch (type) {
        case 'hotel':
        url = iconURLs.hotels;
        break;
        case 'restaurants':
        url = iconURLs.restaurants;
        break;
        case 'activities':
        url = iconURLs.activities;
        break;
        default:
        url = 'url(https://placekitten.com/g/32/39)';
    }

    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = url;
   
  

const newMarker = new mapboxgl.Marker(markerDomEl).setLngLat(coords);
return newMarker;  
};
module.exports = buildMarker;
