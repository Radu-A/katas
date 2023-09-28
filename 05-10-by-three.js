// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well. 
// Given a series of digits as a string, determine if the number represented by the string is divisible by three.
// Example:
// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false

const num1 = 100853;
const num2 = 33333333;

function byThree(num) {
    let arrayNum = num.toString().split('');
    arrayNum = arrayNum.map(element=>parseInt(element));
    while (arrayNum.length > 1) {
        arrayNum = arrayNum.reduce((acc, curr) => acc += curr);
    }
    let num3 = arrayNum[0];
    if (num3 === 3 || num3 === 6 || num3 === 9) {
        return true;
    } else { 
        return false;
    }
}

console.log(byThree(num2));

//falta el último condicional
