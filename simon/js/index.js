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
  var listStreams = function() {
    addLog("Listing streams")
   
  addLog("Running getJSON...");
  var CORS = "https://cors-anywhere.herokuapp.com/"
  var twitchBaseURL = "https://wind-bow.gomix.me/twitch-api/"
  var twitchURL = CORS+twitchBaseURL
  var twitchTV = "https://www.twitch.tv/"
  var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin432","comster404324"]

  $(".mo-results").html("")
  $.each(streamers,function(x,streamer) { 
    
    var thisTwitchChannel = twitchURL+"channels/"+streamer+"/"
    addLog(thisTwitchChannel);
  
  $.getJSON( thisTwitchChannel,{},
  function(result) 
     {
      addLog("Done 1...")
      addLog(result)  
      var channel = result
      var channelName = ""
      var channelGame = ""
      var channelStatus = ""
      var channelLogoURL = ""
      var channelFollowers = ""
      var channelViewers = ""
      if (channel) {
        channelName = channel.display_name
        channelGame = channel.game
        channelStatus = channel.status
        channelViews = channel.views
        channelFollowers = channel.followers
        channelLogoURL = channel.logo
      }
      // links.channel and links.self need left/twitchURLing.
      //var resultBlock = "<a href=\""+links+"\" target=\"_blank\">"
      var resultBlock = "<div class=\"mo-box\">"
        resultBlock += "<b>"+streamer+"</b>"
      if (channelGame) {
        resultBlock += " - " + channelGame
      }
        resultBlock +="<br>"
      if (channelLogoURL) {
              resultBlock += "<img class=\"mo-logo\"src=\""+channelLogoURL+"\"></img><br>  "
      }
      if (channelStatus=="404") {
        resultBlock += "User does not exist<br>"
      }
      else if (channelStatus) {        
        resultBlock += "Views: "+channelViews+ " Followers: "+channelFollowers
        resultBlock += "<a href=\""+twitchTV+streamer+"\" target=\"_blank\"><p>"+channelStatus+"</p></a>"
      } else {
        resultBlock+="Offline<BR>"
      }
      resultBlock+="</div>"
      $(".mo-results").append(resultBlock) 
       
     })
   .done(
     //function() {addLog("Done 2...");}
   )
  .fail(
         function( jqXHR, textStatus, errorThrown )
         {
          var errText = "Fail...<BR>"+textStatus+"<BR>"+errorThrown+"<BR>"
           addLog(errText)
        } 
  )
  .always(     
    //function() {addLog("Always...");}
  )
  })

  }

$(document).ready(function() {
  addLog("Document Ready")
  listStreams()
})

var addLog = function(msg) {
  //$(".mo-log").append(msg+"<BR>")
  console.log(msg)
}

