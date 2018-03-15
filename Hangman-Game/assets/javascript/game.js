// Create array of words
var words = ["Jarvis Landry", "Cameron Wake", "Ryan Tanehill", "Kenyan Drake", "Reshad Jones"]
var category = ["Wide Reciever", "Defensive End", "Quarterback", "Running Back", "Strong Safety"]
var hints = ["Set the record for the most catches ever through his first four seasons", "A former Canadian Football League player and now Miami's #1 defensive end", "The Phins QB and about to take the next step", "Took over for Jay Ajayi at running back", "Most underrated strong safety in the NFL"]
var wins = 0

let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

consol.log("hello world");



var userChoiceElement = document.getElementById('userChoice')
var winsElement = document.getElementById('wins')
var lossesElement = document.getElementById('losses')

var showLives = document.getElementById("mylives");
var showCatagory = document.getElementById("scatagory");
var getHint = document.getElementById("hint");
