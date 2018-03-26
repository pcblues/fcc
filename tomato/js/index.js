/* Tomato

TODO:
Develop in Windows

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

TO RUN:
WINDOWS

MACOS
Open terminal
loadnvm
http-server in tomato directory
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
Browse to localhost:8080
Run app in code (Attach to Chrome)
Refresh in browser

*/  
var activityLength = 25
var breakLength = 5
var timeLeft = 0

var bar = new ProgressBar.Circle('#circlecont', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
})
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif'
bar.text.style.fontSize = '2rem'

$(document).ready(function() {
  $("#mo-start").html("Start")
  updateScreen()

  document.getElementById("mo-breakUp").addEventListener("click",breakUp);// addeventlistener
  document.getElementById("mo-breakDown").addEventListener("click",breakDown  );// addeventlistener  
  document.getElementById("mo-reset").addEventListener("click",reset);// addeventlistener
  document.getElementById("mo-start").addEventListener("click",start);// addeventlistener
  document.getElementById("mo-timeUp").addEventListener("click",timeUp);// addeventlistener
  document.getElementById("mo-timeDown").addEventListener("click",timeDown  );// addeventlistener  
  setInterval(doTimer,1000)
  addLog("Document Ready")
  
  
})

var doTimer=function() {
  if( $("#mo-start").html=="Stop"){
    if (timeLeft>0) {
      timeLeft-=1
    updateScreen()  
  }
}
}

var breakUp=function() {
  breakLength += 1
  updateScreen()
}

var breakDown=function() {
  breakLength -=1
  updateScreen()
}

var timeUp=function() {
  activityLength +=1
  reset()
}

var timeDown=function() {
  activityLength -=1
  reset()
}

var remaining=function() {
  
}

var start=function() {
  if  ( $("#mo-start").html=="Start") {
    $("#mo-start").html("Stop")
  } else if (  $("#mo-start").html=="Stop") {
    $("#mo-start").html("Start")
  }

}

var reset=function() {
  timeLeft = activityLength*60
  updateScreen()
}




var addLog = function(msg) {
  //$(".mo-log").append(msg+"<BR>")
  console.log(msg)
}

var updateScreen = function() {
  $("#mo-breakTime").html(breakLength)
  $("#mo-timeStart").html(activityLength)
  //bar.circle.setText(timeLeft)
  //bar.setInterval(1-(timeLeft/((activityLength*60))))  // Number from 0.0 to 1.0
}