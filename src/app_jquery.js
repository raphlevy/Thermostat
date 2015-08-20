$(document).ready(function() {

  thermostat = new Thermostat();

$("#city_submit").click(function() {
  var city = $('#city').val();
   $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric",function(result){
       $("#weather_api").html(result.weather[0].description+": "+result.main.temp+"&#8451");
   });
 });

// $.ajax({
//   dataType:"json",
//   url: "http://api.openweathermap.org/data/2.5/weather?q=London,UK&units=metric",
//   success:function(result){
//   weather_api.innerHTML = result.weather[0].description + ": " + result.main.temp + "&#8451";
//   }
// });

// $.ajax({
//   dataType:"json",
//   url: "http://api.openweathermap.org/data/2.5/weather?q=London,UK&units=metric",
//   data:
//   success:function(result){
//   weather_api.innerHTML = result.weather[0].description + ": " + result.main.temp + "&#8451";
//   }
// });


  update = function() {
    $(".temperature").html(thermostat.temp);
    $(".temperature").attr('style', 'color:' + thermostat.colour());
  };

  update();

  $(".increase").click(function() {
    thermostat.increase();
    update();
  })

$(".decrease").click(function() {
    thermostat.decrease();
    update();
  })

$(".reset").click(function() {
    thermostat.resetTemp();
    update();
  })

$(".powersave").change(function() {
    thermostat.switchMode();
  })

});
