// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

(function smallestNumberEvenlyDivisibleByOneThroughTwenty() {
  // Go ahead and start with 2520
  var dividend = 2520,
  solutionNotFound = true;

  var divisors = (function () {
    divisorsArr = [];
    for (var i = 20; i > 0; i -= 1) {
      divisorsArr.push(i);
    };
    return divisorsArr;  
  })();

  while (solutionNotFound) {
    if (checkNum(dividend)) {
      return dividend; // The solution has been found
      solutionNotFound = false;
    } else {
      dividend += 1;
    }
  }

  function checkNum(value) {
    var isDivisibleByAll = divisors.every(function(x) {
      return value % x === 0;
    });
    return isDivisibleByAll;
  }

})();


