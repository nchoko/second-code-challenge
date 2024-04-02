
// function that takes in an arrray of numbers filters them and returns a new array containing the prime numbers

function filterPrimeNums(array) {                 //filterPrimeNums to take in an array of numbers as its input.
    return array.filter(num => isPrime(num));     //create new array that contain only prime numbers of the input array.
  }
 
  function isPrime(num) {                //isPrime function to take in a single num as input.
    if (num < 2) return false;           // check if the input num is less than 2 and if so ,return false.
//for loop
    for (let i = 2; i <= Math.sqrt(num); i++) {   //loop start at 2 and stop when (i) is greater than the square root of num.
      if (num % i === 0) return false;           //check if the num is divisible by the current (i) value and return false if divisible b'coz it can't be a prime number.
    }
    return true;                   //if the loop doesn't have divisors then it should return true as the num is a prime number.
  }
 
  console.log(filterPrimeNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));           //log: [ 2, 3, 5, 7 ]