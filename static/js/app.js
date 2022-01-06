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