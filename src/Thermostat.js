var Thermostat = function() {
  this.defaultTemp = 20;
  this.temp = this.defaultTemp;
  this.powerSave = true;
};


Thermostat.prototype.currentTemp = function() {
  return this.temp;
};

Thermostat.prototype.increase = function() {
  if (this.isLowerMax(this.temp)){
    return this.temp += 1;
    } else {
    return this.temp;
  };
};

Thermostat.prototype.decrease = function() {
  if (this.isAboveMin(this.temp)){
    return this.temp -= 1;
   } else {
    return this.temp;
  };
};

Thermostat.prototype.reset = function() {
  return this.temp = this.defaultTemp;
};

Thermostat.prototype.isAboveMin = function(number) {
  if (number > 10) {
  return true;
  } else {
  return false;
  };
};

Thermostat.prototype.switchMode = function() {
  if (this.powerSave === true) {
    this.powerSave = false;
  } else {
    this.powerSave = true;
  };
};

Thermostat.prototype.isLowerMax = function(number) {
    if (this.powerSave === true) {
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
