exports.outputHelloWorld = function () {
  return "Hello, world!";
};

exports.calculate = function(number){
   if (number<=10){
    var firstTen = (number/100) * 10;
    return firstTen;
  } else if (number <=20){
    var secondTen = ((number-10)/100)*7 + 1;
    return secondTen;
  } else {
    return ((number-20)/100)*5 + 1.7;
  }
};

exports.leapYear = function(number){
  if(number === 1700 || number === 1800|| number === 1900){
    return false;
  } else if(number%100 === 0 && number%400 !== 0 ){
    return true;
  } else if (number%4 === 0) {
    return true;
  }
};
