var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
  return document.getElementById(id);
};

// Create a function name displayResults. List all varibles and set them to 0
function displayResults() {
  var num = 0;
  var max = 0;
  var avg = 0;

  // Using for loops to loop through an array's elements. This process will repeat until the number is equal to the scores' length
  for (var i = 0; i < scores.length; i += 1) {
    num += parseFloat(scores[i]); // When this for loops is executed, take each element inside scores' array and add them up, convert it to a float number and store in num
    avg = (num / scores.length).toFixed(2); // To get the average score, take varible num and divide by the scores' length and round it to 2 decimal places

    // Using if statement to find the highest score
    if (scores[i] >= scores[max]) {
      max = i; // If the elements inside scores' array is greater than or equal to max, make that element equal to max. At the same time set max and i to the same index value
    }
  }

  // Using DOM with innerHTML property to display results link with html #results
  $("results").innerHTML =
    "<h2>" +
    "Results" +
    "</h2>" +
    "Average score = " +
    avg +
    "<br>" +
    "High Score = " +
    names[max] +
    " with a score of " +
    scores[max];
}

// Create a function name displayScore
function displayScores() {
  var table = ""; // Set varible table to a string

  table =
    "<table>" +
    "<tr align='left'><th><h2>Scores</h2></tr></th>" +
    "<tr align='left'> <th>Name</th> <th>Score</th> </tr>"; // Creating a table using <h2> for Scores. Name and Score as table head. Aligned table row to left

  // Using for loops to loop through arrays. When for loops is executed, add names and scores to table and store them in varible table
  for (var i = 0; i < scores.length; i += 1) {
    table +=
      "<tr><td>" +
      names[i] +
      "</td><td>" +
      scores[i] +
      "</td></tr>" +
      "</table>";
  }

  $("scores_table").innerHTML = table; // Using DOM with innerHTML property to display table link with html #scores_table
}

// Creat a function name addScore
function addScore() {
  var nameValue = $("name").value; // Set varible nameValue to get #name value from user input
  var scoreValue = $("score").value; // Set varible scoreValue to get #score value from user input
  var alertMessage = ""; // Set variable alertMessage to an empty string

  // Validating entries using if else if statements
  if (nameValue == "") {
    alertMessage = "Please Input A Name"; // If name entry is empty then alert this message
    $("name").focus(); // And focus the cursor to Name field
  } else if (scoreValue == "") {
    alertMessage = "Please Input A Score"; // If score value is empty then alert this message
    $("score").focus(); // And focus the cursor to Score field
  } else if (isNaN(scoreValue) || scoreValue < 0 || scoreValue > 100) {
    alertMessage = "Score value must be a number between 0 - 100"; // If score entry is not a number or score value is less than 0 and greater than 100, then alert this message
    $("score").focus(); // And focus the cursor to Score field
  }

  // Using if else statements to alert error messages
  if (alertMessage == "") {
    names.push(nameValue); // If var alertMessage is empty, then add user entry to the end of names' array
    scores.push(scoreValue); // If var alertMessage is empty, then add user entry to the end of score' array
    $("name").focus(); // Focus cursor to Name field afterwards
  } else {
    alert(alertMessage); // Else if alertMessage is not empty, then alert the alertMessage
  }
}

window.onload = function () {
  $("add").onclick = addScore; // On click, call function addScore and execute add user input to the end of arrays
  $("display_results").onclick = displayResults; // On click, call function displayResults and execute display results of average score and high score
  $("display_scores").onclick = displayScores; // On click, call function displayScores and execute display Scores/Table
  $("name").focus(); // Focus cursor to Name field when application starts
};
