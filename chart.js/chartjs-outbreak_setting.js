// assign API URL to a constant

const settings_url = "http://127.0.0.1:5000/api/outbreak_settings";

// console log data from API URL
// d3.json(settings_url).then(function(data) {
//     console.log(data);
//   });

function init() {
  let select = d3.select("#selDataset");
  d3.json(settings_url).then(function(data) {
    // store years in array
    let years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 'All Years'];
    // loop through years in the list and append the year to the select variable
    years.forEach((year) => {
        select.append("option").text(year).property("value", year);
    });
  
    // use the first year to build the default plots
    const firstYear = years[0];
    let result = data.filter(yearObject => yearObject[0] == firstYear)
      // store settings in a variable
      let settings = [];
      result.forEach((setting) => {
        settings.push(setting[1])
      });
      // store outbreak values by setting in variable
      let setting_values = [];
      result.forEach((value) => {
        setting_values.push(value[2])
      });
  
      let barChart = new Chart(
        document.getElementById('settings-bar'), {
          type: 'bar',
          data: {
            labels: settings,
            datasets: [{
              label: 'Outbreaks by Setting',
              data: setting_values
            }]
          }
        }
      );
    barChart.update()
  });
}



// function for default plot
// function init() {
//   // select the drop-down element in dashboard.html and store in variable
//   let select = d3.select("#selDataset");
//   // append years to the dropdown
//   d3.json(settings_url).then(function(data) {
//       // store years in array
//       let years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 'All Years'];
//       // loop through years in the list and append the year to the select variable
//       years.forEach((year) => {
//           select.append("option").text(year).property("value", year);
//       });

//       // use the first year to build the default plots
//       const firstYear = years[0];
//       updatePlots(firstYear);
//   });
// }

// function to update plot based on drop-down selection
// function updatePlots(year) {
//   d3.json(settings_url).then(function(data) {
//     // use .filter() to only return the data for the chosen year
//     let result = data.filter(yearObject => yearObject[0] == year)
//     // store settings in a variable
//     let settings = [];
//     result.forEach((setting) => {
//       settings.push(setting[1])
//     });
//     // store outbreak values by setting in variable
//     let setting_values = [];
//     result.forEach((value) => {
//       setting_values.push(value[2])
//     });
    // build bar chart
    // let trace1 = {
    //   x: settings,
    //   y: setting_values,
    //   type: "bar"
    // };
    // let bar_data = [trace1];
    // let bar_layout = {
    //   'title': `Outbreaks by Setting for ${year}`,
    //   'width': 750,
    //   'height': 500 
    // }
    // build Plotly plot with data and layout, assigned to .settings-bar id
    // Plotly.newPlot('settings-bar', bar_data, bar_layout);
    // attempt using chart.js / id = settings-bar
//     let barChart = new Chart(
//       document.getElementById('settings-bar'), {
//         type: 'bar',
//         data: {
//           labels: settings,
//           datasets: [{
//             label: 'Outbreaks by Setting',
//             data: setting_values
//           }]
//         }
//       }
//     );
//   });
// }

// function to update plot when new selection is made in the drop-down
function optionChangedSettings(newYear) {
  d3.json(settings_url).then(function(data) {
    let result = data.filter(yearObject => yearObject[0] == newYear);
    
    let settings = [];
    result.forEach((setting) => {
      settings.push(setting[1])
    });

    let setting_values = [];
    result.forEach((value) => {
      setting_values.push(value[2])
    });

    barChart.data.labels = settings;
    barChart.data.datasets[0].data = setting_values;

    barChart.update()
  })
  // updatePlots(newYear);
}

// initialize dashboard with default plot
init();
