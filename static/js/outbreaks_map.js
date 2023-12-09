// assign API URL to a constant

const outbreaks_url = "http://127.0.0.1:5000/api/outbreaks";

// console log the data
// d3.json(outbreaks_url).then(function(data) {
//     console.log(data);
// });

// function to create the map
function createMap(outbreaks) {
    // create background tile layer - OMS tiles
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // create baseMaps object to hold street tiles layer
    let baseMaps = {
        Street: street 
    }; 

    // create overlayMaps object to hold outbreaks layer
    let overlayMaps = {
        'All Outbreaks': outbreaks
    };

    // create map with the center as the lat/lon of Toronto
    let myMap = L.map('map', {
        center: [43.6532, -79.3832],
        zoom: 10,
        layers: [
            street
        ]
    });

    // create layer control and add to map
    L.control.layers(baseMaps, overlayMaps).addTo(myMap);
}

// function to create the markers
function createMarkers(response) {
    // empty array to hold markers
    let outbreakMarkers = [];

    // loop through response
    for (let i = 0; i < response.length; i++) {
        // for each outbreak, create a marker
        let outbreak = response[i];
        // bind a popup with the outbreak's information
        outbreakMarkers.push(L.marker([outbreak[10], outbreak[9]]).bindPopup(`<h3>${outbreak[1]}</h3><hr><p>Location: ${outbreak[2]}, ${outbreak[3]}</p><hr><p>Type of Outbreak: ${outbreak[4]}, ${outbreak[5]}</p><hr><p>Start: ${outbreak[6]} End: ${outbreak[7]}</p>`));
    }

    // pass layer group from outbreakMarkers to createMap function
    createMap(L.layerGroup(outbreakMarkers));
}

// function to set marker size based on outbreak duration
function markerSize(start, end) {
    let start_date = new Date(start);
    let end_date = new Date(end);
    let difference = Math.abs(end_date - start_date);
    let duration = difference/(1000 * 3600 * 24);
    return duration / 2;
}

// function to set marker colour based on type of outbreak
function markerColour(type) {
    if (type == 'Respiratory') {
        return "#219ebc";
    } else if (type == 'Enteric') {
        return '#9d4edd';
    } else {
        return '#ffb703';
    }
}


// switch to asynchronous mode with promise function and call createMarkers function
d3.json(outbreaks_url).then(function(response) {
    createMarkers(response);
})