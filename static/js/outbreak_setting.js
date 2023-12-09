// console log data from API URL
d3.json("http://127.0.0.1:5000/api/outbreak_setting_by_year").then(function(data) {
    console.log(data);
  });


  