describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
    // defaultTemp = 20;
    // temp = defaultTemp;
    // powerSave = true
  });

  describe('checks temp', function() {
    it ('returns a default temp 20', function() {
      expect(thermostat.currentTemp()).toEqual(thermostat.defaultTemp);
    });
  });

  describe('changes temp', function() {
    it ('can increase the temp', function() {
      var tempTest = thermostat.temp;
      expect(thermostat.increase()).toEqual(tempTest+1);
    });
    it ('can decrease the temp', function() {
      var tempTest = thermostat.temp;
      expect(thermostat.decrease()).toEqual(tempTest-1);
    });
    it ('can reset the temp to default temperature', function() {
      var tempTest = thermostat.temp+1;
      expect(thermostat.reset()).toEqual(thermostat.defaultTemp);
    });
  });

  describe('temp limits', function() {

    it ('knows temp is above minimum 10', function() {
      expect(thermostat.isAboveMin(thermostat.temp)).toBe(true);
    });
    it ('know temps is lower than minimum 10', function() {
      expect(thermostat.isAboveMin(8)).toBe(false);
    });

    it ('does not reduce temp below 10', function() {
      thermostat.temp = 10
      expect(thermostat.decrease()).toEqual(10);
    });

    it ('can switch mode', function() {
      thermostat.switchMode()
      expect(thermostat.powerSave).toBe(false);
    });

     it ('knows temp is lower than max 25 when saving mode is on', function() {
      expect(thermostat.isLowerMax(thermostat.temp)).toBe(true);
    });
     it ('knows temp is above max 32 when saving mode is off', function() {
      thermostat.powerSave = false
      expect(thermostat.isLowerMax(thermostat.temp)).toBe(true);
    });

    it ('knows temp is above max 25 when saving mode is on', function() {
      thermostat.temp = 26
      expect(thermostat.isLowerMax(thermostat.temp)).toBe(false);
    });
    it ('knows temp is above max 32 when saving mode is off', function() {
      thermostat.powerSave = false
      thermostat.temp = 33
      expect(thermostat.isLowerMax(thermostat.temp)).toBe(false);
    });

  });

});