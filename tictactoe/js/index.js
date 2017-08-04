/* If it floats, it's a Twitch

TODO:

DONE:

----------
Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/Myvqmo/.

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.cd ..

User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.

User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.

User Story: I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.

Hint: See an example call to Twitch.tv's JSONP API at http://forum.freecodecamp.org/t/use-the-twitchtv-json-api/19541.

Hint: The relevant documentation about this API call is here: https://dev.twitch.tv/docs/v5/reference/streams/#get-stream-by-user.

Hint: Here's an array of the Twitch.tv usernames of people who regularly stream: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

UPDATE: Due to a change in conditions on API usage explained here Twitch.tv now requires an API key, but we've built a workaround. Use https://wind-bow.gomix.me/twitch-api instead of twitch's API base URL (i.e. https://api.twitch.tv/kraken ) and you'll still be able to get account information, without needing to sign up for an API key.

Remember to use Read-Search-Ask if you get stuck.

When you are finished, click the "I've completed this challenge" button and include a link to your CodePen.

You can get feedback on your project by sharing it with your friends on Facebook.

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

