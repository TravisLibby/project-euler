// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?

function primeFactors(value) {
  var factors = [],
  divisor = 2;

  while (value > 2) {
    if (value % divisor === 0) {
      factors.push(divisor);
      value /= divisor;
    } else {
      divisor += 1;
    }
  }

  return factors[factors.length - 1];
}