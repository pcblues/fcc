/* Tic Tac Toe

http-server
run chrome on test port
refresh

TODO:
Draw board
Reset game
Choose 1 or 2 players
Choose X or O
Graphic of game
Graphic of board
Graphic of X and O
Scoreboard
Indicator of whose turn?
Choose next turn
Game result message
Font

DONE:


OBJECTIVE: 
Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/KzXQgy/.

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

User Story: I can play a game of Tic Tac Toe with the computer.

User Story: My game will reset as soon as it's over so I can play again.

User Story: I can choose whether I want to play as X or O.

Remember to use Read-Search-Ask if you get stuck.

When you are finished, click the "I've completed this challenge" button and include a link to your CodePen.

You can get feedback on your project by sharing it with your friends on Facebook.

DONE:

*/  
var PLAYERSPECIES = Object.freeze(
  {HUMAN :{txt:"Human"},
 COMPUTER: {txt:"Computer"}})
 
 var GAMESTATE = Object.freeze({
  PLAYERS:{txt:"Choose Number of Players",fname:"showPlayers"},
  SIDE : {txt:"Choose Side",fname:"showSide"},
  P1TURN:{txt:"Player 1 Turn",fname:"showP1Turn"},
  P2TURN:{txt:"Player 2 Turn",fname:"showP2Turn"},
  GAMEOVER:{txt:"Game Over!", fname:"showGameOver"}}
)
 
var gameState = GAMESTATE.PLAYERS
var board = [[0,0,0],[0,0,0],[0,0,0]];
var xPiece = "art/x.png"
var oPiece = "art/o.png"

var numPlayers = 1
var player1Score=0
var player2Score=0

var player1Side = 0
var player2Side = 0

var player1Species = 0
var player2Species = 0
/*
var HINTS = Object.freeze(
  {"Player 1 is going to win!":1},
  {"Player 2 is going to win!":2},
    {"Player 1 has won!":3},
    {"Player 2 has won!":4}  
)
*/

// Why are state machines bad?
var nextState=function(gState) {
  if (gState==GAMESTATE.PLAYERS) {
    return(GAMESTATE.SIDE)
  } else if (gState==GAMESTATE.SIDE) {
    return GAMESTATE.P1TURN
  } else if (gState==GAMESTATE.P1TURN) {
    if (checkGameOver()==true) {
      return GAMESTATE.GAMEOVER
    } else {return P2TURN}
  } else if (gstate===GAMESTATE.P2TURN) {
    if (checkGameOver()==true) {
      return GAMESTATE.GAMEOVER
    } else {return GAMESTATE.P1TURN}
  } else if (gstate==GAMESTATE.GAMEOVER) {
    return GAMESTATE.PLAYERS
  }
}

var nextMove=function () {
  var move = '11';

  // block possible losses
    // for each spot
      // check if adjacent with free space further
  //  block 2 threat
    // pick corner
  //  check for pincer
  //  build threat
  //  take middle then corners then side
  // cannot choose taken spot 
}

$(document).ready(function() {
  

  document.getElementById("mo-11").addEventListener("click",processSpace)
  document.getElementById("mo-12").addEventListener("click",processSpace)
  document.getElementById("mo-13").addEventListener("click",processSpace)
  document.getElementById("mo-21").addEventListener("click",processSpace)
  document.getElementById("mo-22").addEventListener("click",processSpace)
  document.getElementById("mo-23").addEventListener("click",processSpace)
  document.getElementById("mo-31").addEventListener("click",processSpace)
  document.getElementById("mo-32").addEventListener("click",processSpace)
  document.getElementById("mo-33").addEventListener("click",processSpace)
  document.getElementById("mo-restart").addEventListener("click",processRestart)
  document.getElementById("mo-1P").addEventListener("click",processPlayer)
  document.getElementById("mo-2P").addEventListener("click",processPlayer)  
  document.getElementById("mo-X").addEventListener("click",processSide)
  document.getElementById("mo-O").addEventListener("click",processSide)
  document.getElementById("mo-lines").addEventListener("click",processClick)


  doTurn(window.gameState) 
  addLog("Document Ready")
})

var doTurn=function() {
    showMessage(window.gameState.txt)
    // set up visibility of appropriate elements
    var fname = window.gameState.fname
    window[window.gameState.fname]()
}



  var showPlayers = function() {
    $("#mo-restart").hide();
    $("#mo-1P").show();
    $("#mo-2P").show();
    $("#mo-X").hide();
    $("#mo-O").hide();
  }
  var showSide = function() {
    $("#mo-restart").hide();
    $("#mo-1P").hide();
    $("#mo-2P").hide();
    $("#mo-X").show();
    $("#mo-O").show();

  }
  var showP1Turn = function() {
    $("#mo-restart").show();
    $("#mo-1P").hide();
    $("#mo-2P").hide();
    $("#mo-X").hide();
    $("#mo-O").hide();

  }
  var showP2Turn = function() {
    $("#mo-restart").show();
    $("#mo-1P").hide();
    $("#mo-2P").hide();
    $("#mo-X").hide();
    $("#mo-O").hide();

  }
  var showGameOver = function() {
    $("#mo-restart").show();
    $("#mo-1P").hide();
    $("#mo-2P").hide();
    $("#mo-X").hide();
    $("#mo-O").hide();

  }



var processSpace=function(event){
  var butt = document.getElementById(event.target.id)
  if (butt.src.indexOf("blank.png")!==-1) {
    if (window.gameState==GAMESTATE.P1TURN) {
      butt.src=window.player1Side
      window.gameState = GAMESTATE.P2TURN
    } else if (window.gameState==GAMESTATE.P2TURN){
      butt.src=window.player2Side
      window.gameState = GAMESTATE.P1TURN
    }
    doTurn()
      
  }
}

var processClick=function(event)
{
  var imge = document.getElementById(event.target.id)
  addLog(imge.id)
  imge.hidden=true
  var undr = document.elementFromPoint(event.clientX, event.clientY)
  undr.click()
  imge.hidden = false
  addLog(undr.id)
}

var processRestart = function(event) {
  window.gameState = GAMESTATE.PLAYERS
  document.getElementById("mo-11").src="art/blank.png"
  document.getElementById("mo-12").src="art/blank.png"
  document.getElementById("mo-13").src="art/blank.png"
  document.getElementById("mo-21").src="art/blank.png"
  document.getElementById("mo-22").src="art/blank.png"
  document.getElementById("mo-23").src="art/blank.png"
  document.getElementById("mo-31").src="art/blank.png"
  document.getElementById("mo-32").src="art/blank.png"
  document.getElementById("mo-33").src="art/blank.png"
  doTurn()
}

var processPlayer = function(event) {
  if (event.target.id == "mo-1P") {
    window.numPlayers=1
    window.player1Species = PLAYERSPECIES.HUMAN
    window.player2Species = PLAYERSPECIES.COMPUTER
    
  } else {
    window.numPlayers=2
    window.player1Species = PLAYERSPECIES.HUMAN
    window.player2Species = PLAYERSPECIES.HUMAN
  }
  window.gameState = GAMESTATE.SIDE
  doTurn()

}

var processSide = function(event) {
  if (event.target.id == "mo-X") {
    window.player1Side = window.xPiece
    window.player2Side = window.oPiece
  } else {
    window.player1Side = window.oPiece
    window.player2Side = window.xPiece    
  }
  window.gameState = GAMESTATE.P1TURN
  doTurn()
}


var addLog = function(msg) {
  //$(".mo-log").append(msg+"<BR>")
  console.log(msg)
}

var showMessage=function(msg) {
  $(".mo-message").html(msg)  
}

