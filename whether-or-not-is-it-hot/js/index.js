
$( document ).ready(function() {
  document.getElementById("mo-fcButt").addEventListener("click",swapFC
  );// addeventlistener
 getTheWeather();
});
var useF = false
var addLog = function(msg) {
  $(".mo-gotgeo").append(msg+"<BR>")
}
var swapFC= function () {
  useF = !useF
  getTheWeather()
}
var getUnits = function() 
{
  var units
  if (useF) {
    units= "&units=imperial"
  } else 
  {
    units = "&units=metric"
  }
  return units
}

var getTheWeather=function() 
{
 if ("geolocation" in navigator) {
  /* geolocation is available */
  addLog("Getting location...<br>");  
  navigator.geolocation.getCurrentPosition(
    // success callback
    function(position) {
   var longStr = position.coords.longitude.toString();
   var latStr = +position.coords.latitude.toString();
  addLog("Location acquired...<br>");  
  posText =  "Latitude: "+latStr + "<br> Longitude: " + longStr+"<br>";
  addLog(posText);  
  var OWMAPI = "&APPID=a13590991752f796619e30cac6e26550";
   //var finalWeatherURL = "https://api.darksky.net/forecast/c98673d4fc9c1c2c94d970b2b22bcadf/"+latStr+","+longStr;
   var CORS = "https://cors-anywhere.herokuapp.com/"
   var finalWeatherURL=CORS+"http://api.openweathermap.org/data/2.5/weather?lat="+latStr+"&lon="+longStr+OWMAPI+getUnits();
   
   // .getJSON(url,data,success)
   // jHXR .done, .fail, .always
  addLog("Running getJSON...<br>");
  addLog(finalWeatherURL+"<br>");
  $.getJSON(finalWeatherURL,{},function(forecast) 
     {
       addLog("Done 1...<br>");
       var weatherReport = "";
      /* Get these:
      weather.main
      weather.description
      weather.icon
      main.temp
      main.humidity
      main.temp_min
      main.temp_max
      wind.speed
      name (location)
      */
      
      var unitsDesc = "Here is the weather in "
      var weatherLocation = "Location: "+forecast.name+"<BR>";
      if (useF) { unitsDesc+="Imperial"} else {unitsDesc+="Metric"}
      unitsDesc +=" units:<BR>"
      weatherReport += unitsDesc
      weatherReport += weatherLocation
      var weather = forecast.weather[0]
      var weatherPic = weather.icon
      var weatherURL = "http://openweathermap.org/img/w/"+weatherPic+".png";     
      addLog(weatherURL)

      var main = forecast.main
      var temperature = "Temperature: "+main.temp+" degrees " 
      if (useF) { temperature+="Fahrenheit" } else { temperature+="Celcius" }
      temperature += "<BR>"
      weatherReport += temperature
      humidity = "Humidity: "+ main.humidity+"%<BR>"
      weatherReport += humidity
      wind = forecast.wind
      windSpeed = "Wind speed: "+wind.speed
      if (useF) {windSpeed+=" Mph"} else {windSpeed+=" Kph"}
      windSpeed += "<BR>"
      weatherReport+= windSpeed


      $(".mo-weather-text").html(weatherReport)
      $(".mo-icon").css('background-image', 'url("' + weatherURL + '")')      
     })
   .done(
     //function() {addLog("Done 2...<br>");}
   )
  .fail(
         function( jqXHR, textStatus, errorThrown ){
          var errText = "Fail...<BR>"+textStatus+"<BR>"+errorThrown+"<BR>";           

           addLog(errText);
        } 
  )
  .always(     
    //function() {addLog("Always...<br>");}
  );},
  // error callback
  function(posError){addLog("getCurrentPosition Fail...<br>"+posError.message );}
  )
} else {
  /* geolocation IS NOT available */
  addLog("Browser does not have geolocation services.")

}

}