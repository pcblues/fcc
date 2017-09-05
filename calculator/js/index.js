/* Calculator


TODO:
Stretch displays across box
- use table?
Buttons same size
Rows/cols
Display total
Display chained commands
Process command chain

DONE:
Error: AddEventListener is not a function
Design look/font
- css buttons
- google font

TO RUN:
http-server in fcc directory
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
Run app in code
Refresh in browser

OBJECTIVE: 
Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/rLJZrA/.

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

User Story: I can add, subtract, multiply and divide two numbers.

User Story: I can clear the input field with a clear button.

User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

Remember to use Read-Search-Ask if you get stuck.

When you are finished, click the "I've completed this challenge" button and include a link to your CodePen.

You can get feedback on your project by sharing it with your friends on Facebook.


*/  
var commandString = ""
var displayString = "0"

function playButtonPress() {
      var sound = document.getElementById("buttonSound");
      sound.play();
  }

function updateScreen() {
  $(".mo-display").html(displayString) 
  $(".mo-progress").html(commandString) 
}
  
function buttClick() {
  playButtonPress();
  if (this.id=="AC") {
    displayString = "0"
    commandString = ""
    
  }  else 
  if (this.id=="PL") {
    commandString += " + "
  }  else
  if (this.id=="MI") {
    commandString += " - "    
  }  else
  if (this.id=="MU") {
    commandString += " x "
    
  }  else
  if (this.id=="DI") {
    commandString += " / "
    
  }  else
  if (this.id=="DP") {
    commandString += "."
    
  }  else
  if (this.id=="EQ") {
    commandString += " = "
  }  else {
    // a number
    commandString += this.id
    
  }
  updateScreen()
}


$(document).ready(function() {
  updateScreen()
  addLog("Document Ready")
  var butts = document.getElementsByClassName("mo-butt")
  for (a of butts) {
    a.addEventListener("click",buttClick);// addeventlistener    
  }

})

var addLog = function(msg) {
  //$(".mo-log").append(msg+"<BR>")
  
}

