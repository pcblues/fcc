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

