// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function findLargestPalindrome(numDigits) {
  var palindromes = []

  function calculateMaxNum() {
    var i = 0,
    numString = '';

    for (i; i < numDigits; i += 1) {
      numString += '9';
    }
    return numString;
  }

  var maxNumber = parseInt(calculateMaxNum(), 10);

  while (maxNumber > 0) {

    var factor = 1;
  
    for (factor; factor <= maxNumber; factor += 1) {
      if ((factor * maxNumber).toString().split('').reverse().join('') === (factor * maxNumber).toString()) {
        palindromes.push(factor * maxNumber);
      }
  
    }
    maxNumber -= 1;
  }
  return Math.max.apply(null, palindromes);
}

findLargestPalindrome(3);