// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

const string = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income. can't";
const string2 = "  , e   .. ";
const string3 = "  //wont won't won't ";

function topThreeWords(text) {
  // const breakpoint = /\s+|\,+|\.+/
  // const breakpoint = /\W+/
  const breakpoint = /\s*(?![^']*')\W+\s*|\s+/
  const validCharacters = /[a-zA-Z]/
  let stringArray = text
    .toLowerCase()
    .split(breakpoint)
    .filter((word) => word.match(validCharacters));
  console.log(stringArray)
  let mostFrequent = []
  let iterations = 0

  if (stringArray.length < 3) {
    iterations = stringArray.length
  } else {
    iterations = 3
  }
  
  for (k = iterations; k > 0; k--) {
    let max = 0;
    let pos = 0;

    stringArray.forEach((word, j) => {
      let sum = 0

      for (i = 0; i < stringArray.length; i++) {
        if (word === stringArray[i]) {
          sum++;
        }
      }

      if (sum > max) {
        max = sum;
        pos = j;
      }
    })
    mostFrequent.push(stringArray[pos])
    stringArray = stringArray.filter(word => word !== stringArray[pos])
  }

  return mostFrequent;
}

console.log(topThreeWords(string))