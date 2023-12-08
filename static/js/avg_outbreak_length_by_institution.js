// avg_outbreak_length_by_institution.js

// Use D3 fetch to read the JSON file
const apiUrl = 'http://localhost:5000/api/data'; // Update with your API endpoint URL

d3.json(apiUrl).then(function(data) {
    console.log(data);

});

