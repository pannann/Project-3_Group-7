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

// initialize object containing icons for types of outbreaks
let outbreakIcons = {
    'Respiratory': L.ExtraMarkers.icon({
        icon: 'ion-disc-outline',
        iconColor: 'white',
        markerColor: 'purple',
        shape: 'circle'
    }),
    'Enteric': L.ExtraMarkers.icon({
        icon: 'ion-add-circle-outline',
        iconColor: 'white',
        markerColor: 'green',
        shape: 'circle'
    }),
    'Other': L.ExtraMarkers.icon({
        icon: 'ion-help-circle-outline',
        iconColor: 'white',
        markerColor: 'yellow',
        shape: 'circle'
    })
};

// create a legend for the map
let infoLegend = L.control({
    position: 'bottomright'
});

// insert a div with class 'legend' when control layer is added
infoLegend.onAdd = function() {
    let div = L.DomUtil.create('div', 'info legend');
    // add legend title to HTML
    let legendInfo = '<h3>Outbreak Types</h3>';
    div.innerHTML = legendInfo;

    // set categories
    categories = ['Respiratory', 'Enteric', 'Other']
    // loop through categories and generate a label with the colour and the type of outbreak
    for (let i = 0; i < categories.length; i++) {
        if (categories[i] == 'Respiratory') {
            let colour = 'purple';
            div.innerHTML += '<i style="background: ' + colour + '"></i> ' + categories[i] + '<br>';
        } else if (categories[i] == 'Enteric') {
            let colour = 'green';
            div.innerHTML += '<i style="background: ' + colour + '"></i> ' + categories[i] + '<br>';
        } else {
            let colour = 'yellow';
            div.innerHTML += '<i style="background: ' + colour + '"></i> ' + categories[i] + '<br>';
        } 
    }
    return div;
};

// add the legend to the map
infoLegend.addTo(myMap);

// assign API URL to a constant
const outbreaks_url = "http://127.0.0.1:5000/api/outbreaks";

// perform API call with d3
d3.json(outbreaks_url).then(function(data) {
    // initialize a key to access correct layers/icons
    let outbreakType;
    let outbreakYear;

    // loop through outbreaks
    for (let i = 0; i < data.length; i++) {
        // store outbreak in a variable
        let outbreak = data[i];

        // assign outbreaks based on type and year
        if (outbreak[4] == 'Respiratory' && outbreak[11] == '2016') {
            outbreakType = 'Respiratory';
            outbreakYear = '2016';
        } else if (outbreak[4] == 'Respiratory' && outbreak[11] == '2017') {
            outbreakType = 'Respiratory';
            outbreakYear = '2017';
        } else if (outbreak[4] == 'Respiratory' && outbreak[11] == '2018') {
            outbreakType = 'Respiratory';
            outbreakYear = '2018';
        } else if (outbreak[4] == 'Respiratory' && outbreak[11] == '2019') {
            outbreakType = 'Respiratory';
            outbreakYear = '2019';
        } else if (outbreak[4] == 'Respiratory' && outbreak[11] == '2020') {
            outbreakType = 'Respiratory';
            outbreakYear = '2020';
        } else if (outbreak[4] == 'Respiratory' && outbreak[11] == '2021') {
            outbreakType = 'Respiratory';
            outbreakYear = '2021';
        } else if (outbreak[4] == 'Respiratory' && outbreak[11] == '2022') {
            outbreakType = 'Respiratory';
            outbreakYear = '2022';
        } else if (outbreak[4] == 'Respiratory' && outbreak[11] == '2023') {
            outbreakType = 'Respiratory';
            outbreakYear = '2023';
        } else if (outbreak[4] == 'Enteric' && outbreak[11] == '2016') {
            outbreakType = 'Enteric';
            outbreakYear = '2016';
        } else if (outbreak[4] == 'Enteric' && outbreak[11] == '2017') {
            outbreakType = 'Enteric';
            outbreakYear = '2017';
        } else if (outbreak[4] == 'Enteric' && outbreak[11] == '2018') {
            outbreakType = 'Enteric';
            outbreakYear = '2018';
        } else if (outbreak[4] == 'Enteric' && outbreak[11] == '2019') {
            outbreakType = 'Enteric';
            outbreakYear = '2019';
        } else if (outbreak[4] == 'Enteric' && outbreak[11] == '2020') {
            outbreakType = 'Enteric';
            outbreakYear = '2020';
        } else if (outbreak[4] == 'Enteric' && outbreak[11] == '2021') {
            outbreakType = 'Enteric';
            outbreakYear = '2021';
        } else if (outbreak[4] == 'Enteric' && outbreak[11] == '2022') {
            outbreakType = 'Enteric';
            outbreakYear = '2022';
        } else if (outbreak[4] == 'Enteric' && outbreak[11] == '2023') {
            outbreakType = 'Enteric';
            outbreakYear = '2023';
        } else if (outbreak[4] == 'Other' && outbreak[11] == '2016') {
            outbreakType = 'Other';
            outbreakYear = '2016';
        } else if (outbreak[4] == 'Other' && outbreak[11] == '2017') {
            outbreakType = 'Other';
            outbreakYear = '2017';
        } else if (outbreak[4] == 'Other' && outbreak[11] == '2018') {
            outbreakType = 'Other';
            outbreakYear = '2018';
        } else if (outbreak[4] == 'Other' && outbreak[11] == '2019') {
            outbreakType = 'Other';
            outbreakYear = '2019';
        } else if (outbreak[4] == 'Other' && outbreak[11] == '2020') {
            outbreakType = 'Other';
            outbreakYear = '2020';
        } else if (outbreak[4] == 'Other' && outbreak[11] == '2021') {
            outbreakType = 'Other';
            outbreakYear = '2021';
        } else if (outbreak[4] == 'Other' && outbreak[11] == '2022') {
            outbreakType = 'Other';
            outbreakYear = '2022';
        } else if (outbreak[4] == 'Other' && outbreak[11] == '2023') {
            outbreakType = 'Other';
            outbreakYear = '2023';
        }

        // create new marker with icon and coordinates
        let newMarker = L.marker([outbreak[10], outbreak[9]], {
            icon: outbreakIcons[outbreakType]
        });

        // add the new marker to the correct layer
        newMarker.addTo(yearLayers[outbreakYear]);

        //bind a popup to display info about the outbreak when clicked
        newMarker.bindPopup(`<h3>${outbreak[1]}</h3><hr><p>Location: ${outbreak[2]}, ${outbreak[3]}</p><hr><p>Type of Outbreak: ${outbreak[4]}, ${outbreak[5]}</p><hr><p>Start: ${outbreak[6]} End: ${outbreak[7]}</p>`);
    }
});