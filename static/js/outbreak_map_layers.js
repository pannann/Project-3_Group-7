// create OMS tile layer
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// initialize layer groups for years
let yearLayers = {
    '2016': new L.layerGroup(),
    '2017': new L.layerGroup(),
    '2018': new L.layerGroup(),
    '2019': new L.layerGroup(),
    '2020': new L.layerGroup(),
    '2021': new L.layerGroup(),
    '2022': new L.layerGroup(),
    '2023': new L.layerGroup()
};

// create map with layers
let myMap = L.map('map', {
    center: [43.6532, -79.3832],
    zoom: 10,
    layers: [
        yearLayers['2016'],
        yearLayers['2017'],
        yearLayers['2018'],
        yearLayers['2019'],
        yearLayers['2020'],
        yearLayers['2021'],
        yearLayers['2022'],
        yearLayers['2023']
    ]
});

// add streetmap tile layer to the map
street.addTo(myMap);

// create overlays object to add to layer control
let overlayMaps = {
    '2016': yearLayers['2016'],
    '2017': yearLayers['2017'],
    '2018': yearLayers['2018'],
    '2019': yearLayers['2019'],
    '2020': yearLayers['2020'],
    '2021': yearLayers['2021'],
    '2022': yearLayers['2022'],
    '2023': yearLayers['2023']
};

// create control layer and add overlays
L.control.layers(null, overlayMaps).addTo(myMap);

// create a legend for the map
let infoLegend = L.control({
    position: 'bottomright'
});

// insert a div with class 'legend' when control layer is added
infoLegend.onAdd = function() {
    let div = L.DomUtil.create('div', 'legend');
    return div;
};

// add the legend to the map
infoLegend.addTo(myMap);



