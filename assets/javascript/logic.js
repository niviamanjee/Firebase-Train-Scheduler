


//onclick on submit button--> dynamically create rows and columns to add information 

//firebase stuff 
// < !--The core Firebase JS SDK is always required and must be listed first-- >


// // <!--TODO: Add SDKs for Firebase products that you want to use-->
// https://firebase.google.com/docs/web/setup#available-libraries

var firebaseConfig = {
    apiKey: "AIzaSyDvWPr7OAdhltXtJYQWiY2Af2DDq04kmBw",
    authDomain: "train-scheduler-7d42e.firebaseapp.com",
    databaseURL: "https://train-scheduler-7d42e.firebaseio.com",
    projectId: "train-scheduler-7d42e",
    storageBucket: "train-scheduler-7d42e.appspot.com",
    messagingSenderId: "1085919306150",
    appId: "1:1085919306150:web:4a64b22de1cefb70c6af67"
}

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//function to push user input to the database 

$("#submit-button").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#trainNameInput").val().trim();
    var trainDestination = $("#destinationInput").val().trim();
    var trainTime = ("#trainTimeInput").val().trim();
    var frequency = $("#frequencyInput").val().trim();

    var trainTimeConverted = moment(trainTime, "hh:mm a").format("HH:mm");

    console.log(trainTimeConverted);

    var newTrain = {
        name: trainName,
        destination: trainDestination,
        time: trainTimeConverted,
        trainFrequency: frequency
    };

    database.ref().push(newTrain);

    var trainName = $("#trainNameInput").val("");
    var trainDestination = $("#destinationInput").val("");
    var trainTime = $("#trainTimeInput").val("");
    var frequency = $("#frequencyInput").val("");

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.trainFrequency);
})


//function to create new row on website and in database 

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().time;
    var frequency = childSnapshot.val().trainFrequency;

    // Employee Info




    var trainTimeConverted = moment(trainTime, "hh:mm a").format("HH:mm");

    var nextArrival = moment(trainTimeConverted).add({ minutes: frequency }).format("hh:mm A");

    // var minutesAway =




    // Create the new row
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDestination),
        $("<td>").text(frequency),
        $("<td>").text(nextArrival),
        // $("<td>").text(minutesAway),
    );

    // Append the new row to the table
    $("#table-entries").append(newRow);
});

