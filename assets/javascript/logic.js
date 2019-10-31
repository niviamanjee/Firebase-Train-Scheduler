//psuedocode:
//create an array of two example train entries
//maybe create an object of arrays, or an object that holds the table data per row
var trainData = [
    {
        trainName: "Trenton Express",
        destination: "Trenton",
        frequency: "25",
        nextArrival: "05:35PM",
        minutesAway: "10"

    },
    {
        trainName: "Trenton Express",
        destination: "Trenton",
        frequency: "25",
        nextArrival: "05:35PM",
        minutesAway: "10"
    },
    {
        trainName: "Trenton Express",
        destination: "Trenton",
        frequency: "25",
        nextArrival: "05:35PM",
        minutesAway: "10"
    }
]
//dynamically create buttons to add entries to table
// function createInitialRows() {
//     console.log(trainData);
//     $("#table-entries").empty();


//     for (var i = 0; i < trainData.length; i++) {
//         var tableRowDiv = $("<tr>");
//         //create for loop to go through each 
//         var tableRow = $("<td>");
//         var tableRowTrainName = tableRow.text(trainData[i].trainName)
//         var tableRowDestination = tableRow.text(trainData[i].destination);
//         


//         tableRowDiv.append(tableRowTrainName, tableRowDestination.tableRowFrequency);
//     }
// }
function createInitialRows() {
    console.log(trainData);
    $("#table-entries").empty();
    for (var i = 0; i < trainData.length; i++) {

        //create the table row
        var tableRowDiv = $("<tr>");
        //create the table data
        var tableDataTrainName = $("<td>");
        tableDataTrainName.text(trainData[i].trainName);

        var tableDataDestination = $("<td>");
        tableDataDestination.text(trainData[i].destination);

        var tableDataFrequency = $("<td>")
        tableDataFrequency.text(trainData[i].frequency);

        var tableDataNextArrival = $("<td>")
        tableDataNextArrival.text(trainData[i].nextArrival);

        //add data to the table data

        //if this is just an array trainData, you do not need the .val() at the end


        //append table data to table row
        tableRowDiv.append(tableDataTrainName, tableDataDestination,
            tableDataFrequency, tableDataNextArrival)

        //append table row to the table entries

        $("#table-entries").append(tableRowDiv);
    }
}
createInitialRows();

//onclick on submit button--> dynamically create rows and columns to add information 
