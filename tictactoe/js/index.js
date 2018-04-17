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
  SIDE : {txt:"Choose X or O",fname:"showSide"},
  P1TURN:{txt:"Player 1 Turn",fname:"showP1Turn"},
  P2TURN:{txt:"Player 2 Turn",fname:"showP2Turn"},
  GAMEOVER:{txt:"Game Over!", fname:"showGameOver"}}
)
 
var gameState = GAMESTATE.PLAYERS
var board = [[0,0,0],[0,0,0],[0,0,0]];
var xPiece = 1;
var oPiece = 2;


var player1Score=0
var player2Score=0

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
  addLog("Document Ready")
  

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
  doTurn(window.gameState) 
})

var doTurn=function(gState) {
    showMessage(gState.txt)
    // set up visibility of appropriate elements
    window[gState.fname]
}



  var showPlayers = function() {

  }
  var showSide = function() {

  }
  var showP1Turn = function() {

  }
  var showP2Turn = function() {

  }
  var showGameOver = function() {

  }


var processSpace=function(event){

}

var processRestart = function(event) {

}

var processPlayer = function(event) {

}

var processSide = function(event) {


}

var getInput=function() {

}

var addLog = function(msg) {
  //$(".mo-log").append(msg+"<BR>")
  console.log(msg)
}

var showMessage=function(msg) {
  $(".mo-message").html(msg)  
}

