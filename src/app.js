thermostat = new Thermostat();

var temperature = document.getElementsByTagName('span')[0];
temperature.innerHTML = thermostat.temp;

Update = function() {
  temperature.innerHTML = thermostat.temp;
}

var increase_temperature = document.getElementsByTagName('input')[0];
increase_temperature.onclick = function() {
  thermostat.increase();
  Update();
};


var decrease_temperature = document.getElementsByTagName('input')[1];
decrease_temperature.onclick = function() {
  thermostat.decrease();
  Update();
};

var reset_temperature = document.getElementsByTagName('input')[2];
reset_temperature.onclick = function() {
  thermostat.resetTemp();
  Update();
};

var power_saving = document.getElementsByTagName('input')[3];
power_saving.onchange = function() {
  thermostat.switchMode();
  // Update();
};

