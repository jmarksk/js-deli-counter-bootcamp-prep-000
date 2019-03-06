var katzDeli = [];



function nowServing(line) {
  if(!line.length) {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    //console.log("Currently serving " + line.shift());
    return "Currently serving " + line.shift() +".";
  }
}

function takeANumber(line, name){
  line.push(name);

  console.log("Welcome, " + name + ". You are number " + line.length + " in line.");

  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

var lineNamesandNumbers = [];

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  

  for(var i=0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ line[i]);
  }
  // console.log("The line is currently: " + lineNamesandNumbers)
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}
let array = ["Alex", "Uther"]
console.log(currentLine(array))
console.log(currentLine(array))
