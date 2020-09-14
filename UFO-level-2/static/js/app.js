//Shriram Sreedhar
// Javascript-challenge homework 14
// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Display UFO Sighting value from data for each column
tableData.forEach(function(element) {
    console.log(element);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(element).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Filter the table based on multiple selection criteria

// Select the button
var button = d3.select("#filter-btn");
var button2 = d3.select("#filter-btn2");
button2.on("click",function(){
document.getElementById("input").value=""

});








button.on("click", function() {

    tbody.html("");

    // Select the input date, state, shape and get the raw HTML nodes
    var inputElement = d3.select("#input");
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    // console.log input value
    // console.log(inputValue);
    // Filter Data with datetime equal to input value or city = input value or state = input value or country = input value or shape = input Value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    // console.log filter values
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});