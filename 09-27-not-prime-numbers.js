// You are given two positive integers a and b (a < b <= 20000). Complete the function which returns a list of all those numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.
// Be careful about your timing!

const primeNumber = 13;
const notPrimeNumber = 8;
const longNumber = 57632;

function isPrime(n) {
  if (n < 2) {
    return false;
  } else {
    for (i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function notPrimeMadeOfPrimes(n) {
  const primeArray = [2, 3, 5, 7];
  if (n > 21) {
    for (i = 2; i < n; i++) {
      if (n % i === 0) {
        numberArray = n
          .toString()
          .split("")
          .map((element) => parseInt(element));
        const any = numberArray.filter(
          (element) => !primeArray.includes(element)
        );
        if (any.length > 0) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
}

function listOfNotPrimeMadeOfPrimes(a, b) {
  const primeArray = [2, 3, 5, 7];
  let solutionArray = [];
  for (n = a; n <= b; n++) {
    if (n > 21) {
      for (i = 2; i < n; i++) {
        if (n % i === 0) {
          numberArray = n
            .toString()
            .split("")
            .map((element) => parseInt(element));
          // console.log(numberArray);
          let any = numberArray.filter(
            (element) => !primeArray.includes(element)
          );
          console.log(any);
        }
      }
    }
  }
  return solutionArray;
}

console.log(notPrimeMadeOfPrimes(23));
// console.log(listOfNotPrimeMadeOfPrimes(21, 30));
