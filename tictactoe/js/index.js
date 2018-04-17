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
  HUMAN ={txt:"Human"},
 COMPUTER= {txt:"Computer"})
 
 var GAMESTATE = Object.freeze(
  PLAYERS={txt:"Choose Number of Players"},
  SIDE = {txt:"Choose X or O"},
  P1TURN={txt:"Player 1 Turn"},
  P2TURN={txt:"Player 2 Turn"},
  GAMEOVER={txt:"Game Over!"}
)
 
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

var getXorO= function() {

}

$(document).ready(function() {
  addLog("Document Ready")
  getXorO()

})

var addLog = function(msg) {
  $(".mo-log").append(msg+"<BR>")
  console.log(msg)
}

