// Print all primes between range - faced this in Techolution Interview on 21-June-2018

isPrime = (num) => {

  if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) {
    return false;
  }

  let maxNumToCheck = Math.sqrt(num);

  for (let i = 2; i <= maxNumToCheck; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(8));

generatePrime = (a, b) => {

  // in case the range is given in the format whre large no is first and then the small no
  let start = ( a <= b ) ? a : b;
  let end = ( b > a ) ? b : a;

  primes = []

  for (let i = start; i <= end; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(generatePrime(1, 10));