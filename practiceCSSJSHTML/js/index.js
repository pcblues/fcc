/* Tomato

TODO:
Display time
Count down time
Reset clock
Start/Pause clock


DONE:
Display activity length
Set activity length
Display break length
Set break length
Develop in Windows

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
http-server
Launch Chrome

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
var breaking = 0
var running = 0
var timeLeft =activityLength*60
var startText = "Start"
var stopText = "Stop"

var bar = new ProgressBar.Circle('#circlecont', {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 10,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#0a0', width: 4 },
  to: { color: '#0a0', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    //var value = Math.round(circle.value() * 100);
    var addZero = ""
    if (timeLeft % 60 <10 ) {addZero = "0" }else {addZero=""}
    var addBreakStart = ""
    var addBreakEnd = ""
    if (breaking==1) {
      addBreakStart = "["
      addBreakEnd = "]" 
    }
    value =addBreakStart+ Math.floor(timeLeft / 60) +":" +addZero+ timeLeft % 60 + addBreakEnd
    if (running == 1)   {
      if (timeLeft ===0) {
        if (breaking === 0) {
          breaking = 1
          timeLeft = breakLength*60
        } else {
          breaking = 0
          timeLeft = activityLength*60
        }
      }
      circle.setText(value);        
    } else {
      circle.setText(startText);
    }
    

  }
})

bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif'
bar.text.style.fontSize = '2rem'

$(document).ready(function() {
  $("#mo-start").html(startText)
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
    if ((timeLeft>0) && (running==1 )) {
      timeLeft-=1
    updateScreen()  
  }
}

var breakUp=function() {
  breakLength += 1
  updateScreen()
}

var breakDown=function() {
  if (breakLength>1) {
    breakLength -=1
    updateScreen()  
  }

}

var timeUp=function() {
  activityLength +=1
  reset()
}

var timeDown=function() {
  if (activityLength>1) {
    activityLength -=1
    reset()
  
  }
}

var start=function() {
  addLog($("#mo-start").html())
  if (running ===0) {
    running = 1
    $("#mo-start").html(stopText)
  } else {
    running = 0
    $("#mo-start").html(startText)
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
  if (breaking==0)
  {
    window.bar.animate(timeLeft/(activityLength*60))
  } else {
    window.bar.animate(timeLeft/(breakLength*60))
  }
}