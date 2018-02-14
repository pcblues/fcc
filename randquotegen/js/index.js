/* LIST

TODO:
Transition Effects:
Change colour/fade
Move bits around?
Fading text

LATER:
Look at:
- jquery ui
- bootstrap theme

DONE:
Circle button not circle
Choose font
Twitter button
Center everything
Credit link to your own name
Look at:
- fontawesome
Twitter API


*/

 function getRandomColor() {
        var letters = '789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 9)];
        }
        return color;
    };

function tweet() {
  window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text=' 
              +encodeURIComponent($("#quote").text()+$("#attrib").text() ));
};
              
function quote() {
      $.ajax({
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
    async: false,
        cache: false
  }).then(function(a) {
  $("#quote").html(a[0].content);
  $("#attrib").html(" - "+a[0].title);
        $('.mo-color').css('background', getRandomColor());
  })};

$("document").ready(
  function(){
  $(".mo-quote").html("To forgive is divine, to forget is alcohol.");
  $(".mo-attribution").html(" - Anon");
    $(".mo-color").css("background", getRandomColor());
  document.getElementById("mo-getquote").addEventListener("click",quote
  );// addeventlistener
    document.getElementById("mo-twitter").addEventListener("click",tweet
  );// addeventlistener
}); // ready