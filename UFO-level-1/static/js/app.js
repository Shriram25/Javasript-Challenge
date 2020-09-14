// from data.js
var tableData = data;
console.log("Helllooooooo");
console.log(tableData);

// YOUR CODE HERE!
var tbody = d3.select("tbody");
tableData.forEach(function(elements) {

    console.log(elements);
    //Append  one table row 'tr' for each UFO Sighting object
    var row = tbody.append("tr");

    //Use object entries to console.log each UFO Sighting object

   Object.entries(elements).forEach(function([key,value]) {

    console.log(key,value);

    //Append a cell  to the row for each value

    var cell = row.append("td");

    cell.text(value);
   });
});

//Select the Button
var button =d3.select("#filter-btn");
button.on("click",function() {

    tbody.html("");

    //Select the input date  get the raw html nodes
    var inputElement = d3.select("#datetime");
    //Get the value property of the input date,state,shape

    var inputValue = inputElement.property("value");
    //console.log input value

    console.log(inputValue);

    //Filter Data with datetime equal to input value

    var filteredData = tableData.filter(sighting=>sighting.datetime==inputValue);

    //console.log filter values

    console.log(filteredData);

    filteredData.forEach(function(selections) {

        console.log(selections);
        //Append one table row 'tr'for each  UFO sighting object

        var row = tbody.append("tr");

        //Use 'object  entries  to console.log each UFO sighting  value

        Object.entries(selections).forEach(function([key,value]) {

            console.log(key,value);

            //Append a cell to the row for each value

            var cell = row.append("td");
            cell.text(value);
        });
    }); 
    });

