// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

const string = "what time are we climbing up the volcano";

function high(x) {
  const wordsArray = x.split(" ");
  let max = 0;
  let position = 0;
  wordsArray.forEach((element, i) => {
    let count = 0;
    for (j = 0; j < element.length; j++) {
      count += element.charCodeAt(j) - 96;
    }
    if (count > max) {
      max = count;
      position = i;
    }
  });
  return wordsArray[position];
}

console.log(high(string));
