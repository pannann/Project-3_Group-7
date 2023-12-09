// assign API URL to a constant

const outbreaks_url = "http://127.0.0.1:5000/api/outbreaks";

// console log the data
// d3.json(outbreaks_url).then(function(data) {
//     console.log(data);
// });

// code from https://developers.google.com/maps/documentation/javascript/overview#javascript
// let map;

// async function initMap() {
//   const { Map } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map_div"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// initMap();

// function to draw map
// function drawMap() {
//     d3.json(outbreaks_url).then(function(response) {
//         // store response in a variable
//         let data = response;
//         // store coordinates in an array of arrays
//         let points = [];
//         data.forEach((value) => {
//             points.push([value[10], value[9]])
//         });
//         let trace2 = google.visualization.arrayToDataTable(points);
//         let map = new google.visualization.Map(document.getElementById('map_div'));
//         map.draw(trace2, {
//             showTooltip: true,
//             showInfoWindow: true
//         });
//     })
// }
