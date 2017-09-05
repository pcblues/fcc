/* Calculator


TODO:
Process command chain
Finish use cases

LATER:
Make default progress text blank without wrecking height of box

DONE:
Error: AddEventListener is not a function
Design look/font
- css buttons
- google font
Stretch displays across box
- use table?
Buttons same size
Rows/cols
Display total
Display chained commands

TO RUN:
http-server in fcc directory
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
Run app in code
Refresh in browser

OBJECTIVE: 
Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/rLJZrA/.

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

User Story: I can add, subtract, multiply and divide two numbers.

DONE User Story: I can clear the input field with a clear button.

User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

Remember to use Read-Search-Ask if you get stuck.

When you are finished, click the "I've completed this challenge" button and include a link to your CodePen.

You can get feedback on your project by sharing it with your friends on Facebook.


*/  
var defaultCommand="output"
var defaultDisplay = "0"
var defaultError = "error"
var commandString = defaultCommand
var displayString = defaultDisplay
var clearOutput =false

function processResult() {
  var result = 0;
  var comms=commandString.split(" ")
  var noInput = true  
  var nextEl= ""
  var el = ""
  var lastEl = ""
  for (var c=0;c<comms.length-1;c++) {
    lastEl=0
    el=(comms[c])
    if (el!="") {
      nextEl=(comms[c+1])
      if (el=="+") {
        result+=parseFloat(nextEl)
      } else if (el=="-") {
        result-=parseFloat(nextEl)
        
      } else if (el=="x") {
        result*=parseFloat(nextEl)
        
      } else if (el=="/") {
        result/=parseFloat(nextEl)
        
      } else if (el=="="){
        if (noInput==true) {
          result = parseFloat(lastEl)
        }
      } else {
        // number
        if (noInput==true) {
          result = parseFloat(el)
        }
      }
      noInput = false
      } 
    }

  
  displayString = result
  commandString+=" "+result
  clearOutput = true
}

function playButtonPress() {
      var sound = document.getElementById("buttonSound");
      sound.play();
  }

function updateScreen() {
  $(".mo-display").html(displayString) 

  $(".mo-progress").html(commandString) 
}
  
function addCommand(pCom) {
  if (clearOutput==true) {
    commandString = ""
    clearOutput =false
  }
  if (commandString==defaultCommand) {
    commandString = ""
  }
  commandString+=pCom
}
function buttClick() {
  playButtonPress();
  if (this.id=="AC") {
    displayString = defaultDisplay
    commandString = defaultCommand
  }  else 
  if (this.id=="PL") {
    addCommand(" + ")
  }  else
  if (this.id=="MI") {
    addCommand(" - ")   
  }  else
  if (this.id=="MU") {
    addCommand(" x ")
    
  }  else
  if (this.id=="DI") {
    addCommand(" / ")
    
  }  else
  if (this.id=="DP") {
    addCommand(".")
    
  }  else
  if (this.id=="EQ") {
    addCommand(" = ")
    processResult();
  }  else {
    // a number
    addCommand(this.id)
    
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
  console.log(msg)
}

