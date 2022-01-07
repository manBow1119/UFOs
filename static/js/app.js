//import data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody"); //tells JS to look for <tbody>

//create function to build the table
function buildTable(data){
    //clear table data 
    tbody.html("");
    //use forEach to access each data value in array and add row to table with arrow function
    data.forEach((dataRow) => {
        //variable to append row to body
        let row = tbody.append("tr");
        //loop through each data row object and add to table detail to row
        Object.values(dataRow).forEach((val) => {
            //variable to append value to each cell
            let cell = row.append("td");
            cell.txt(val);
        });
    });
}
    //utilizes D3 to listen for user input
    function handleClick() {
        //get date information
        let date = d3.select("#datetime").property("value");

        //create basic table 
        let filteredData = tableData;

        //check for date and return it if present
        if (date) { 
            //apply filter to match datetime value to filtered date value
            filteredData = filteredData.filter(row => row.datetime === date);
        };
        //build table with filtered data
        buildTable(filteredData);
    }
    //apply handle click function to button
    d3.selectAll("#filter-btn").on("click", handleClick)

    //build table from original data when page loads
    buildTable(tableData);
