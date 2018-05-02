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
var soundRed="assets/beep1a.mp3"
var soundBlue="assets/beep1b.mp3"
var soundGreen="assets/beep1c.mp3"
var soundYellow="assets/beep1d.mp3"
var soundWin="assets/victory.mp3"
var soundLose="assets/upgrade.mp3"
var soundStart="assets/becomelikeus.mp3"
var soundWrong="assets/delete.mp3"

var gameScore = 0
var computerStep=0
var playerStep = 0
var gameStrict=0
var doNext=false
var playing = null
var playersTurn = false


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
  var sound=new Audio(soundStart)
  sound.play()
  window.playersTurn=false
  setTimeout(startGame,4000)
}

var startGame=function() {
  window.gamePlayback=true
  window.gameScore=0
  window.gameOrder=[]
  doNextStep()
}

var doNextStep=function() {
  newButt=getNextButt()
  window.gameOrder.push(newButt.val)
  showScore()
  playSequence()
}

var playSequence=function() {
  window.computerStep = 0
  window.playing = setInterval(playOrder,500)  
}


var playOrder=function() {
  var arrayLength =  window.gameOrder.length;
  if (window.computerStep==arrayLength) {
    clearInterval(window.playing) 
    window.playerStep = 0
    window.playersTurn = true
  } else {
    setTimeout(playNext(),500)
  }
}

var playNext=function() {
  i=window.gameOrder[window.computerStep]
  if (i==BUTTONS.RED.val) {
    $("#mo-redpress").show()
    var sound = new Audio(soundRed)
    sound.play()
  } else 
  if (i==BUTTONS.BLUE.val) {
    $("#mo-bluepress").show()
    var sound = new Audio(soundBlue)
    sound.play()
  } else 
  if (i==BUTTONS.GREEN.val) {
    $("#mo-greenpress").show()
    var sound = new Audio(soundGreen)
    sound.play()
  } else 
  if (i==BUTTONS.YELLOW.val) {
    $("#mo-yellowpress").show()
    var sound = new Audio(soundYellow)
    sound.play()
  }
  setTimeout(hidePresses,200) 
  window.computerStep+=1 
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
    var thisStep=0
    if (id=="mo-red") {
      $("#mo-redpress").show()
      var sound = new Audio(soundRed)
      sound.play()
      thisStep=BUTTONS.RED.val
    } else 
    if (id=="mo-blue") {
      $("#mo-bluepress").show()
      var sound = new Audio(soundBlue)
      sound.play()
      thisStep=BUTTONS.BLUE.val
    } else 
    if (id=="mo-green") {
      $("#mo-greenpress").show()
      var sound = new Audio(soundGreen)
      sound.play()
      thisStep=BUTTONS.GREEN.val
    } else 
    if (id="mo-yellow") {
      $("#mo-yellowpress").show()
      var sound = new Audio(soundYellow)
      sound.play()
      thisStep=BUTTONS.YELLOW.val
    }
    setTimeout(hidePresses,200)
    checkVictory(thisStep)
  }

} 

var breakTime=function() {
  window.doNext=true
}

var checkVictory=function(thisStep) {
  if (thisStep!==window.gameOrder[window.playerStep]) {
    setTimeout(function(){var sound = new Audio(soundLose);
      sound.play();},1000)
    if (window.gameStrict==1) {
      setTimeout(startNow,1000)
    } else {
      playSequence()
    }
  } else if (window.playerStep==(window.gameOrder.length)-1) {
    window.gameScore+=1
    window.playerStep+=1
    doNextStep()
  } else {
    playNext()
  }
}

var getNextButt=function(){
  var num=Math.floor((Math.random() * 4) + 1)
  for (var i in BUTTONS) {
    if (BUTTONS[i].val==num) {
      return BUTTONS[i]
    } 
  }
}

