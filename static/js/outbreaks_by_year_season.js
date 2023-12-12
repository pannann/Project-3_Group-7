// Assign API url to a vaiable
const seasons_url = "http://127.0.0.1:5000/api/outbreaks_by_year_season";

// Get data from url using d3
d3.json(seasons_url).then(function(data){

    // Get all years data in raw format and save in season_all_years array
    let season_all_years = []
    for (let i = 0; i < data.length; i++){
        let each_data = data[i][0];
        season_all_years.push(each_data)
    };
    
    // Declare unique_years array
    let unique_years = [];

    // Declaring start and count variables
    let count = 0;

    let start = false;

    // For loop to get into season_all_years array and  get unique years and save in unique_years array
    for(let i = 0; i < season_all_years.length; i++){

        for (let j = 0; j < unique_years.length; j++) {
            if (season_all_years[i] == unique_years[j]) {
                start = true;
            }
        }
        count++;
        if (count == 1 && start == false) {
            unique_years.push(season_all_years[i]);
        }
        start = false;
        count = 0;
    }

    // select the drop-down element in dashboard.html and store in variable
    let select = d3.select("#selDataset2");
    // loop through years in the list and append the year to the select variable
    unique_years.forEach((year) => {
        select.append("option").text(year).property("value", year);
    });

    // Get all seasons data in raw format and save in all_seasons array
    let all_seasons = []
    for (let i = 0; i < data.length; i++){
        let each_data = data[i][1];
        all_seasons.push(each_data)
    }
    
    // Declare unique_seasons array
    let unique_seasons = [];

    count = 0;

    start = false;

    // For loop to get into all_seasons array and get unique seasons and save in unique_seasons array
    for(let i = 0; i < all_seasons.length; i++){

        for (let j = 0; j < unique_seasons.length; j++) {
            if (all_seasons[i] == unique_seasons[j]) {
                start = true;
            }
        }
            count++;
            if (count == 1 && start == false) {
                unique_seasons.push(all_seasons[i]);
            }
            start = false;
            count = 0;
    };

    // Declare new array variables
    let yearly_season_count = [];
    let each_season_count = [];
    count = 0;

    // For loop to save each year's season outbreak count in each_season_count array 
    // and then save that array in yearly_season_count array
    for (let i = 0; i < data.length; i++){
        let each_data = data[i][2];
        count++;
        each_season_count.push(each_data)
        if(count == 4){
            yearly_season_count.push(each_season_count);
            each_season_count = [];
            count = 0;
        };
    };

    // Reshuffle values unique_seasons array in order: Spring, Summer, Fall, Winter
    let fall_season = unique_seasons[0];
    let spring_season = unique_seasons[1];
    let summer_season = unique_seasons[2];
    let winter_season = unique_seasons[3];
    
    unique_seasons[0] = spring_season;
    unique_seasons[1] = summer_season;
    unique_seasons[2] = fall_season;
    unique_seasons[3] = winter_season;

    // For loop to reshuffle values yearly_season_count array 
    // in order: spring_count, summer_count, fall_count, winter_count
    for(let i = 0; i < yearly_season_count.length; i++){
        let each_yearly_season_count = yearly_season_count[i];
        let fall_count = each_yearly_season_count[0];
        let spring_count = each_yearly_season_count[1];
        let summer_count = each_yearly_season_count[2];
        let winter_count = each_yearly_season_count[3];
        
        each_yearly_season_count[0] = spring_count;
        each_yearly_season_count[1] = summer_count;
        each_yearly_season_count[2] = fall_count;
        each_yearly_season_count[3] = winter_count;
        console.log(each_yearly_season_count)
    };

    // Function to call updateChart() when drop-down selection is changed
    d3.select("#selDataset2").on("change", function(){
        updateChart();
    });

    // Save intial chart year into variable
    let year = unique_years[1];
    // Save initial chart seon count into variable
    let initialOutbreaks_count_by_season = yearly_season_count[1];

    // Plot intial chart and save into variable
    let myChart = new Chart("seasonsChart", {
        type: "bar",
        data: {
            labels: unique_seasons,
            datasets: [{
                data: initialOutbreaks_count_by_season,
                backgroundColor: ['#333d29', '#414833', '#656d4a', '#a4ac86']
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
                    text: `Outbreaks by Season for ${year}`
                }
            }
        }
    });

    // function to update plot based on year selected on drop-down menu
    function updateChart(){
        let dropdownMenu = d3.select("#selDataset2");
        let select_year = dropdownMenu.property("value");

        for(let i = 0; i < unique_years.length; i++){
            if (select_year === unique_years[i].toString()){
                year = select_year;
                myChart.data.datasets[0].data = yearly_season_count[i];
                myChart.options.plugins.title.text = `Outbreaks by Season for ${year}`;
                myChart.update();
            };
        };
    };
});