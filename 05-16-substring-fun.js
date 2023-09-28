// Complete the function that takes an array of words.
// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.
// For example:
// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

const words = ["yoda", "best", "has"];

// function nthChar(words) {
//     let newStr = '';
//     for (let i = 0; i < words.length; i++) {
//         newStr += words[i][i];
//     }
//     return newStr;
// }

function nthChar(words){
    return words.reduce((acc, item, index) => acc + item[index], "") 
   }

function nthChar(words) {
    return words.map((element, i)=> element[i]).join('');
}

console.log(nthChar(words));
