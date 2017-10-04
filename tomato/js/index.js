/* Tomato

TODO:
Display activity length
Set activity length
Display break length
Set break length
Display time
Count down time
Reset clock
Start/Pause clock


DONE:

OBJECTIVE: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/aNyxXR/.

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

User Story: I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.

User Story: I can reset the clock for my next pomodoro.

User Story: I can customize the length of each pomodoro.

Remember to use Read-Search-Ask if you get stuck.

When you are finished, click the "I've completed this challenge" button and include a link to your CodePen.

You can get feedback on your project by sharing it with your friends on Facebook.

DONE:
Display activity length
Set activity length
Display break length
Set break length
Display time
Count down time
Reset clock
Start/Pause clock
*/  
var activityLength = 25
var breakLength = 5
var timeLeft = 0


$(document).ready(function() {

  updateScreen()
  document.getElementById("mo-breakUp").addEventListener("click",breakUp);// addeventlistener
  document.getElementById("mo-breakDown").addEventListener("click",breakDown  );// addeventlistener  
  document.getElementById("mo-reset").addEventListener("click",reset);// addeventlistener
  document.getElementById("mo-remaining").addEventListener("click",remaining  );// addeventlistener  
  document.getElementById("mo-timeUp").addEventListener("click",timeUp);// addeventlistener
  document.getElementById("mo-timeDown").addEventListener("click",timeDown  );// addeventlistener  
  addLog("Document Ready")
  
  
})

var breakUp=function() {

}

var breakDown=function() {
  
}

var timeUp=function() {
  
}

var timeDown=function() {
  
}

var remaining=function() {
  
}

var reset=function() {
  
}


var updateScreen = function() {
  $(".mo-breakTime").html(breakLength)
  $(".mo-timeStart").html(activityLength)
  $(".mo-remaining").html(timeLeft)
}

var addLog = function(msg) {
  $(".mo-log").append(msg+"<BR>")
  console.log(msg)
}

