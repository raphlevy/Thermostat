var Thermostat = function() {};

var defaultTemp = 20;
var temp = defaultTemp;
var powerSave = true

Thermostat.prototype.currentTemp = function() {
  return temp;
};

Thermostat.prototype.increase = function() {
  if (this.isLowerMax(temp)){
    return temp += 1;
    } else {
    return temp;
  };
};

Thermostat.prototype.decrease = function() {
  if (this.isAboveMin(temp)){
    return temp -= 1;
   } else {
    return temp;
  };
};

Thermostat.prototype.reset = function() {
  return temp = defaultTemp;
};

Thermostat.prototype.isAboveMin = function(number) {
  if (number > 10) {
  return true;
  } else {
  return false;
  };
};

Thermostat.prototype.switchMode = function() {
  if (powerSave === true) {
    powerSave = false;
  } else {
    powerSave = true;
  };
};

Thermostat.prototype.isLowerMax = function(number) {
    if (powerSave === true) {
      if (number<25) {
        return true;
      } else {
        return false;
      };
    } else {
      if (number<32) {
        return true;
      } else {
        return false;
      };
    };
 };
