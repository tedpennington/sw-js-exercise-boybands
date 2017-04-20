console.log("Hello JS");

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

for(var i = 0; i < bands.length; i++) {
    var currentBand = bands[i];
    var currentVeggie = vegetables[i];
    var loopCount = i+1;
    console.log(currentBand);
    console.log(currentVeggie);
    console.log("Current loop is: ", loopCount)
    document.getElementById("loop-number").innerHTML += "<p>The current loop number is: " + loopCount + "</p>";
    document.getElementById("boy-bands").innerHTML += "<p>" + currentBand; + "</p>";
    document.getElementById("vegetables").innerHTML += "<p>" + currentVeggie; + "</p>";
}
// EXERCISE COMPLETE
// Ted comments: I should look at how I could output each iteration to the divs in respective order, such as "band 1, veg 1, current loop number is 1, band 2, veg 2, current loop number is 2", etc.




// Instruction: The number of loops to perform (what if the array changes?)
// var loopCount = 5;

// Instruction: Keep track of which band we're on in the loop
// var currentBand = "";

// Instruction: Keep track of which veggie we're on in the loop
// var currentVeggie = "";

// Instruction: Get a reference to the appropriate DOM element for bands
// var bandElement = document.getElementById("boy-bands");
// console.log("bandElement is set to: ", bandElement)

// Instruction: Get a reference to the appropriate DOM element for vegetables
// var veggieElement = document.getElementById("vegetables");

// Instruction: Start looping
// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Instruction: Add the band names into the correct <div>
  // currentBand = ???;


  // Instruction: Add the veggie names into the correct <div>
  // currentVeggie = ???;

// }
// Instruction: Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)