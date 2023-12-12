document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'http://127.0.0.1:5000/api/outbreaks_by_year_type';

    // Fetch the JSON data from the API endpoint
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract unique outbreak types
            var outbreakTypes = [...new Set(data.map(item => item[0]))];

            // Add 'All' to the outbreak types
            outbreakTypes.unshift('All');

            // Initialize the Plotly plot with initial data
            var initialOutbreakType = outbreakTypes[0];
            updatePlot(data, initialOutbreakType);

            // Create a dropdown menu
            var dropdown = document.createElement('select');
            dropdown.id = 'outbreakDropdown';

            // Add options to the dropdown
            ['All', 'Enteric', 'Respiratory', 'Other'].forEach(function(type) {
                var option = document.createElement('option');
                option.value = type;
                option.text = type;
                dropdown.appendChild(option);
            });

            // Attach an event listener to the dropdown menu
            dropdown.addEventListener('change', function() {
                var selectedOutbreakType = this.value;
                updatePlot(data, selectedOutbreakType);
            });

            // Append the dropdown to the body
            document.body.appendChild(dropdown);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Function to update the Plotly plot based on selected outbreak type
    function updatePlot(data, outbreakType) {
        var plotData = [];

        if (outbreakType === 'All') {
            // If 'All' is selected, create separate traces for each outbreak type
            var outbreakTraceMap = {};
            data.forEach(item => {
                var type = item[0];
                if (!outbreakTraceMap[type]) {
                    outbreakTraceMap[type] = {
                        x: [],
                        y: [],
                        type: 'scatter',
                        mode: 'lines+markers',
                        name: type,
                        marker: {
                            size: 8,
                            symbol: 'circle',
                            line: {
                                color: 'white',
                                width: 2
                            }
                        },
                        line: {
                            width: 2,
                            color: getColorForOutbreakType(type)
                        }
                    };
                }
                outbreakTraceMap[type].x.push(item[1]);
                outbreakTraceMap[type].y.push(item[2]);
            });

            // Add traces to plotData
            plotData = Object.values(outbreakTraceMap);
        } else {
            // If a specific outbreak type is selected, create a single trace
            var filteredData = data.filter(item => item[0] === outbreakType);
            var aggregatedData = aggregateDataByYear(filteredData);

            plotData = [{
                x: aggregatedData.map(item => item[1]), 
                y: aggregatedData.map(item => item[2]), 
                type: 'scatter',
                mode: 'lines+markers',
                name: outbreakType,
                marker: {
                    size: 8,
                    symbol: 'circle',
                    line: {
                        color: 'white',
                        width: 2
                    }
                },
                line: {
                    width: 2,
                    color: getColorForOutbreakType(outbreakType)
                }
            }];
        }

        var layout = {
            title: 'Outbreaks by Year',
            xaxis: {
                title: 'Year'
            },
            yaxis: {
                title: 'Number of Outbreaks'
            }
        };

        Plotly.newPlot('outbreaksPlot', plotData, layout);
    }

    // Function to aggregate counts for each year
    function aggregateDataByYear(data) {
        var aggregatedData = [];

        data.forEach(item => {
            var year = item[1];
            var existingEntry = aggregatedData.find(entry => entry[1] === year);

            if (existingEntry) {
                // If the entry for the year exists, add the count
                existingEntry[2] += item[2];
            } else {
                // If the entry doesn't exist, create a new entry
                aggregatedData.push([item[0], year, item[2]]);
            }
        });

        return aggregatedData;
    }

    // Function to get color for each outbreak type
    function getColorForOutbreakType(outbreakType) {
        // Define colors for each outbreak type
        var colorMap = {
            
            'Enteric': '#3569c8',
            'Respiratory': 'green',
            'Other': 'orange'
        };

        // Return the color for the specified outbreak type
        return colorMap[outbreakType];
    }
});
