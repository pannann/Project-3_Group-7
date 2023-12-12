// assign API URL to a constant
const settings_url = "http://127.0.0.1:5000/api/outbreak_settings";

// asynchronous promise function to get the data from the API url
d3.json(settings_url).then(function(data) {
    // store years in an array
    let years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 'All Years'];
    // select the drop-down element in dashboard.html and store in variable
    let select = d3.select("#selDataset");
    // loop through years in the list and append the year to the select variable
    years.forEach((year) => {
        select.append("option").text(year).property("value", year);
    });

    // initialize empty arrays for each of the 7 years and all years to hold the counts
    let setting_values_2016 = [];
    let setting_values_2017 = [];
    let setting_values_2018 = [];
    let setting_values_2019 = [];
    let setting_values_2020 = [];
    let setting_values_2021 = [];
    let setting_values_2022 = [];
    let setting_values_2023 = [];
    let setting_values_all = [];

    // initialize empty arrays for each of the 7 years and all years to hold the settings
    let settings_2016 = [];
    let settings_2017 = [];
    let settings_2018 = [];
    let settings_2019 = [];
    let settings_2020 = [];
    let settings_2021 = [];
    let settings_2022 = [];
    let settings_2023 = [];
    let settings_all = [];

    // loop through the data, add the setting and count to the corresponding year's object 
    for (let i = 0; i < data.length; i++) {
        let outbreak = data[i];
        if (outbreak[0] == '2016') {
            setting_values_2016.push(outbreak[2]);
            settings_2016.push(outbreak[1]);
        } else if (outbreak[0] == '2017') {
            setting_values_2017.push(outbreak[2]);
            settings_2017.push(outbreak[1]);
        } else if (outbreak[0] == '2018') {
            setting_values_2018.push(outbreak[2]);
            settings_2018.push(outbreak[1]);
        } else if (outbreak[0] == '2019') {
            setting_values_2019.push(outbreak[2]);
            settings_2019.push(outbreak[1]);
        } else if (outbreak[0] == '2020') {
            setting_values_2020.push(outbreak[2]);
            settings_2020.push(outbreak[1]);
        } else if (outbreak[0] == '2021') {
            setting_values_2021.push(outbreak[2]);
            settings_2021.push(outbreak[1]);
        } else if (outbreak[0] == '2022') {
            setting_values_2022.push(outbreak[2]);
            settings_2022.push(outbreak[1]);
        } else if (outbreak[0] == '2023') {
            setting_values_2023.push(outbreak[2]);
            settings_2023.push(outbreak[1]);
        } else if (outbreak[0] == 'All Years') {
            setting_values_all.push(outbreak[2]);
            settings_all.push(outbreak[1]);
        }
    }

    // function to update the chart when drop-down selection changes
    d3.selectAll('#selDataset').on('change', function() {
        updateChart();
    });

    // store first year in a variable
    let firstYear = '2016';

    // plot the initial chart with the first year data
    let settingChart = new Chart('settingsChart', {
        type: 'bar',
        data: {
            labels: settings_2016,
            datasets: [{
                data: setting_values_2016,
                backgroundColor: ['#333d29', '#414833', '#656d4a', '#a4ac86', '#b6ad90', '#a68a64', '#936639']
            }]
        },
        options: {
            plugins:{
                legend: {display: false},
                title: {
                    display: true,
                    font: {
                        size: 20
                    },
                    text: `Outbreaks by Setting for ${firstYear}`
                }
            }
        }
    });

    // create function to update the chart based on drop-down selection
    function updateChart() {
        let dropdown = d3.select('#selDataset');
        let selected_year = dropdown.property('value');

        if (selected_year == '2016') {
            settingChart.data.datasets[0].data = setting_values_2016;
            settingChart.data.labels = settings_2016;
            settingChart.options.plugins.title.text = `Outbreaks by Setting for ${selected_year}`;
            settingChart.update();
        } else if (selected_year == '2017') {
            settingChart.data.datasets[0].data = setting_values_2017;
            settingChart.data.labels = settings_2017;
            settingChart.options.plugins.title.text = `Outbreaks by Setting for ${selected_year}`;
            settingChart.update();
        } else if (selected_year == '2018') {
            settingChart.data.datasets[0].data = setting_values_2018;
            settingChart.data.labels = settings_2018;
            settingChart.options.plugins.title.text = `Outbreaks by Setting for ${selected_year}`;
            settingChart.update();
        } else if (selected_year == '2019') {
            settingChart.data.datasets[0].data = setting_values_2019;
            settingChart.data.labels = settings_2019;
            settingChart.options.plugins.title.text = `Outbreaks by Setting for ${selected_year}`;
            settingChart.update();
        } else if (selected_year == '2020') {
            settingChart.data.datasets[0].data = setting_values_2020;
            settingChart.data.labels = settings_2020;
            settingChart.options.plugins.title.text = `Outbreaks by Setting for ${selected_year}`;
            settingChart.update();
        } else if (selected_year == '2021') {
            settingChart.data.datasets[0].data = setting_values_2021;
            settingChart.data.labels = settings_2021;
            settingChart.options.plugins.title.text = `Outbreaks by Setting for ${selected_year}`;
            settingChart.update();
        } else if (selected_year == '2022') {
            settingChart.data.datasets[0].data = setting_values_2022;
            settingChart.data.labels = settings_2022;
            settingChart.options.plugins.title.text = `Outbreaks by Setting for ${selected_year}`;
            settingChart.update();
        } else if (selected_year == '2023') {
            settingChart.data.datasets[0].data = setting_values_2023;
            settingChart.data.labels = settings_2023;
            settingChart.options.plugins.title.text = `Outbreaks by Setting for ${selected_year}`;
            settingChart.update();
        } else if (selected_year == 'All Years') {
            settingChart.data.datasets[0].data = setting_values_all;
            settingChart.data.labels = settings_all;
            settingChart.options.plugins.title.text = `Outbreaks by Setting for ${selected_year}`;
            settingChart.update();
        }
    }
});




























// asynchronous promise function to get the data from the API url
// d3.json(settings_url).then(function(data) {
//     // assign drop-down element in dashboard.html to variable
//     let select = d3.select('#selDataset');
//     // append years to the drop-down
//     let years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 'All Years'];
//     // loop through years and append to the select variable
//     years.forEach((year) => {
//         select.append("option").text(year).property("value", year);
//     });
//     // function to update the chart when drop-down selection is changed
//     d3.select('#selDataset').on('change', function() {
//         updateChart();
//     });
// })

// // function to create the chart
// function createChart(year) {
//     d3.json(settings_url).then(function(data) {
//         // use .filter() to only return the data for the chosen year
//         let result = data.filter(yearObject => yearObject[0] == year)
//         // store settings in a variable
//         let settings = [];
//         result.forEach((setting) => {
//             settings.push(setting[1])
//         });
//         // store outbreak values by setting in variable
//         let setting_values = [];
//         result.forEach((value) => {
//             setting_values.push(value[2])
//         });

//         // plot initial bar chart
//         let settingsChart = new Chart('settingsChart', {
//             type: 'bar',
//             data: {
//                 labels: settings,
//                 datasets: [{
//                     data: setting_values,
//                     backgroundColor: ['#333d29', '#414833', '#656d4a', '#a4ac86', '#b6ad90', '#a68a64', '#936639']
//                 }]
//             },
//             options: {
//                 plugins: {
//                     legend: {display: false},
//                     title: {
//                         display: true,
//                         font: {
//                             size: 20
//                         },
//                         text: `Outbreaks by Setting for ${year}`
//                     }
//                 }
//             }
//         });
//     });
// }

// // function to update the chart based on drop-down selection
// function updateChart() {
//     let dropdown = d3.select('#selDataset');
//     let selected_year = dropdown.property('value');

//     createChart(selected_year);
// }