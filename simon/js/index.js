/* Simon

TODO:
Design game board
- button colour / highlight colour
- restart botton
- toggle switch for strict mode
- game name
Design sounds
- red
- blue
- green
- yellow
- lose
- start
- victory

Show four colours
Start a chain of button presses
Sound for each colour
Display button sequence
If wrong, replay sequence
Show current length of sequence
Reset button
20 steps wins
Mode selection - one error auto-restart, no auto-restart

DONE:

OBJECTIVE: 
Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/obYBjE.

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

User Story: I am presented with a random series of button presses.

User Story: Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.

User Story: I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.

User Story: If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.

User Story: I can see how many steps are in the current series of button presses.

User Story: If I want to restart, I can hit a button to do so, and the game will return to a single step.

User Story: I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.

User Story: I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.

Hint: Here are mp3s you can use for each button: https://s3.amazonaws.com/freecodecamp/simonSound1.mp3, https://s3.amazonaws.com/freecodecamp/simonSound2.mp3, https://s3.amazonaws.com/freecodecamp/simonSound3.mp3, https://s3.amazonaws.com/freecodecamp/simonSound4.mp3.

Remember to use Read-Search-Ask if you get stuck.

When you are finished, click the "I've completed this challenge" button and include a link to your CodePen.

You can get feedback on your project by sharing it with your friends on Facebook.

DONE:

*/  

var gameScore = 0
var computerStep=0
var playerStep = 0
var gameStrict=0
var doNext=false
var playing = null
var playersTurn = false
var thisStep = 0


var gameOrder=[]
var BUTTONS = Object.freeze({
  RED:{val:1},
  BLUE: {val:2},
  GREEN:{val:3},
  YELLOW:{val:4}})
var gamePlayback = false

$(document).ready(function() {
  showScore()
  showStrict()
  hidePresses()
  document.getElementById("mo-red").addEventListener("click",flashButton)
  document.getElementById("mo-blue").addEventListener("click",flashButton)
  document.getElementById("mo-green").addEventListener("click",flashButton)
  document.getElementById("mo-yellow").addEventListener("click",flashButton)
  document.getElementById("mo-start").addEventListener("click",startNow)
  document.getElementById("mo-stricton").addEventListener("click",toggleStrict)
  document.getElementById("mo-strictoff").addEventListener("click",toggleStrict)
  addLog("Document Ready")
})

var hidePresses=function() {
    $("#mo-bluepress").hide()
    $("#mo-greenpress").hide()
    $("#mo-redpress").hide()
    $("#mo-yellowpress").hide()
}

var toggleStrict=function(){
  window.gameStrict=Math.abs(window.gameStrict-1)
  showStrict()
}

var showStrict=function()  {
  if (window.gameStrict==0) {
    $("#mo-strictoff").show()
    $("#mo-stricton").hide()
  } else {
    $("#mo-stricton").show()
    $("#mo-strictoff").hide()    
  }
}

var addLog = function(msg) {
  //$(".mo-log").append(msg+"<BR>")
  console.log(msg)
}


// Computer game
var startNow=function() {
  window.playersTurn=false
  playStartSound()
}

var startGame=function() {
  window.gamePlayback=true
  window.gameScore=0
  window.gameOrder=[]
  showScore()
  doNextStep()
}

var doNextStep=function() {
  showScore()
  newButt=getNextButt()
  window.gameOrder.push(newButt.val)
  playSequence()
}

var playSequence=function() {
  window.computerStep = 0
  playOrder()  
}


var playOrder=function() {
  var arrayLength =  window.gameOrder.length;
  hidePresses()
  if (window.computerStep==arrayLength) {
    window.playerStep = 0
    window.playersTurn = true
  } else {
    playNext()
  }
}

var playNext=function() {
  i=window.gameOrder[window.computerStep]
  window.computerStep+=1 
  if (i==BUTTONS.RED.val) {
    $("#mo-redpress").show()
    playSound("soundRed",playOrder)
  } else 
  if (i==BUTTONS.BLUE.val) {
    $("#mo-bluepress").show()
    playSound("soundBlue",playOrder)
  } else 
  if (i==BUTTONS.GREEN.val) {
    $("#mo-greenpress").show()
    playSound("soundGreen",playOrder)
  } else 
  if (i==BUTTONS.YELLOW.val) {
    $("#mo-yellowpress").show()
    playSound("soundYellow",playOrder)
  }
   
}

var showScore=function() {
  $(".mo-num1s").hide()
  $(".mo-num10s").hide()
  tens=Math.floor(window.gameScore / 10)
  ones=window.gameScore % 10
  $("#mo-n"+ones).show()
  $("#mo-n"+tens+"t").show()
}

// PLAYER TURN

var flashButton= function(event) {
  if (window.playersTurn==true) {
    var id = event.target.id
    window.thisStep=0
    if (id=="mo-red") {
      $("#mo-redpress").show()
      window.thisStep=BUTTONS.RED.val
      playSound("soundRed",checkVictory)
    } else 
    if (id=="mo-blue") {
      $("#mo-bluepress").show()
      window.thisStep=BUTTONS.BLUE.val
      playSound("soundBlue",checkVictory)
    } else 
    if (id=="mo-green") {
      $("#mo-greenpress").show()
      window.thisStep=BUTTONS.GREEN.val
      playSound("soundGreen",checkVictory)
    } else 
    if (id="mo-yellow") {
      $("#mo-yellowpress").show()
      window.thisStep=BUTTONS.YELLOW.val
      playSound("soundYellow",checkVictory)
    }
    
  }

} 

var checkVictory=function() {
  hidePresses()
  if (window.thisStep!==window.gameOrder[window.playerStep]) {
    
    if (window.gameStrict==1) {
      playLoseSound()
      window.playersTurn=false      
    } else {
      playWrongSound()
    }

  } else if (window.playerStep==20) {
    playWinSound()
    window.playersTurn=false 
    
  } else if (window.playerStep==(window.gameOrder.length)-1) {
    window.gameScore+=1
    window.playersTurn=false
    doNextStep()
  } else {
    window.playerStep+=1
  } 
}

var playLoseSound=function() {
  var aud = document.getElementById("soundLose");
  aud.play()
}
var playWinSound=function() {
  var aud = document.getElementById("soundWin");
  aud.play()
}
var playWrongSound=function() {
  var aud = document.getElementById("soundWrong");
  aud.play()
  aud.onended = playSequence
}
var playStartSound=function() {
  var aud = document.getElementById("soundStart");
  aud.play()
  aud.onended = startGame
}

var playSound=function(sound,callback) {
  var aud = document.getElementById(sound);
  aud.play()
  aud.onended = callback
}

var getNextButt=function(){
  var num=Math.floor((Math.random() * 4) + 1)
  for (var i in BUTTONS) {
    if (BUTTONS[i].val==num) {
      return BUTTONS[i]
    } 
  }
}

