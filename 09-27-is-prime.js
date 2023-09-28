// In this kata you will create a function to check a non-negative input to see if it is a prime number.

// The function will take in a number and will return True if it is a prime number and False if it is not.

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(n) {
    if (n === 0 || n === 1) {
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
  
  console.log(isPrime(0));