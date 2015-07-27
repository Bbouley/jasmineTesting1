var code = require('../main.js');

describe("Hello World", function() {
  it("says 'hello, world!' when ran", function() {
    expect(code.outputHelloWorld()).toEqual("Hello, world!");
  });
});

describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calculate(1)).toEqual(0.1);
    expect(code.calculate(10)).toEqual(1);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.calculate(15)).toEqual(1.35);
  });

  it('should tax 5% on the third $10', function(){
    expect(code.calculate(30)).toEqual(2.2);
    });
  });

describe('Leap Year Calculator', function(){

    it('should return false', function(){
      expect(code.leapYear(1700)).toEqual(false);
      expect(code.leapYear(1800)).toEqual(false);
      expect(code.leapYear(1900)).toEqual(false);
    });

    it('should return true', function(){
      expect(code.leapYear(2000)).toEqual(true);
      expect(code.leapYear(1600)).toEqual(true);
    });

    it ('should return true', function(){
      expect(code.leapYear(1960)).toEqual(true);
      expect(code.leapYear(1980)).toEqual(true);
      expect(code.leapYear(1864)).toEqual(true);
      expect(code.leapYear(1816)).toEqual(true);
      expect(code.leapYear(1836)).toEqual(true);

    });

});
