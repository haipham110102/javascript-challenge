// from data.js
console.log(data);
var ufoData = data;

// YOUR CODE HERE!
//set ref data to table body, button and form
var tbody = d3.select("tbody");
var button = d3.select("button");
var form = d3.select("form");

//Event hanlers
button.on("click", runEnter);
form.on("submit", runEnter);
//populate data
function dataPopulate(ufoData) {
    ufoData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
};

dataPopulate(ufoData);

//Prevent the page from refreshing
function runEnter() {

    // Select the input element and get the raw HTML node    
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element    
    var inputValue = inputElement.property("value");
    // Filter date      
    var filteredData = ufoData.filter(ufoSighting => ufoSighting.datetime === inputValue);
    console.log(filteredData);

    //    
    tbody.html("");
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};