/* 
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will b
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, .
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/  

(function evenFibsLessThanValue(value) {
  var previousNumber = 0,
  currentNumber = 1,
  sum = 0,
  tempCurrentNumber;

  while (previousNumber + currentNumber < value) {
    if ((previousNumber + currentNumber) % 2 === 0) {
      sum += previousNumber + currentNumber;
    }
    tempCurrentNumber = currentNumber;
    currentNumber += previousNumber;
    previousNumber = tempCurrentNumber;
  }

  console.log(sum);
})(4000000);





