// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

var primes = [2, 3, 5, 7, 11, 13];

function isPrime(value) {
  var i = value - 1;
  for (i; i > 1; i -= 1) {
    if (value % i === 0) {
      return false;
    }
  }
  primes.push(value);
}

(function getPrimes() {
  var currNum = 14;
  while (primes.length < 10001) {
    if (currNum % 2 !== 0) { 
      isPrime(currNum);
    }
    currNum += 1;
  }
  console.log(primes.pop());
})();
