/* Tic Tac Toe

http-server
run chrome on test port
refresh

TODO:
Choose X or O
Graphic of game
Graphic of board
Graphic of X and O
Scoreboard
Indicator of whose turn?
Choose next turn
Game result message

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
var board = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
var xPiece = 1;
var oPiece = 0;

var nextMove=function () {
  var move = '11';

  // block possible losses
    // for each spot
      // check if adjacent with free space further
  //  block 2 threat
    // pick cornermaai
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
  //$(".mo-log").append(msg+"<BR>")
  console.log(msg)
}

