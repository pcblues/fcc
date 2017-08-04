/*
TODO:
Button for random wikipedia entry
Search field
Show results

DONE:
Title

----------
Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/wGqEga/.

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

User Story: I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.

User Story: I can click a button to see a random Wikipedia entry.

Hint #1: Here's a URL you can use to get a random Wikipedia article: var popup = $window.open("about:blank", "_blank");https://en.wikipedia.org/wiki/Special:Random.

Hint #2: Here's an entry on using Wikipedia's API: https://www.mediawiki.org/wiki/API:Main_page.

Hint #3: Use this link to experiment with Wikipedia's API:
https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm

*/

var randomWiki = function () {
  var win = window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank')
  if (win) {
      //Browser has allowed it to be opened
      win.focus()
  } else {
      //Browser has blocked it
      alert('Please allow popups for this website')
  }
  }
  
  var searchWiki = function(searchTerm) {
    addLog("Searching Wiki for "+searchTerm)
       // .getJSON(url,data,success)
   // jHXR .done, .fail, .always
   
  addLog("Running getJSON...");
  var CORS = "https://cors-anywhere.herokuapp.com/"
  var wikiURL = CORS+"http://en.wikipedia.org/w/api.php"
  
  addLog(wikiURL);
  $(".mo-results").html("")
  $.getJSON( wikiURL,{ action: 'query', list: 'search', srsearch: searchTerm, format: 'json' },
  function(result) 
     {
       addLog("Done 1...");  
       var search=result.query.search
       for (var result of search) {
         var resultLink = "http://en.wikipedia.org/wiki/"+result.title
         var resultBlock = "<a href=\""+resultLink+"\" target=\"_blank\">"
         resultBlock += "<div class=\"mo-box\"><p><b>"+result.title+"</b></p>"
         resultBlock += result.snippet

         resultBlock+="</div></a> "
       $(".mo-results").append(resultBlock) 
       }   
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
}


$(document).ready(function() {
  addLog("Document Ready")

  document.getElementById("mo-random").addEventListener("click",randomWiki
  )// addeventlistener
  $("#search").keypress(function(e)
  {
    if ((e.keyCode || e.which) == 13) {
      searchWiki($(this).val())
    }
  })

})

var addLog = function(msg) {
  //$(".mo-log").append(msg+"<BR>")
  console.log(msg)
}

