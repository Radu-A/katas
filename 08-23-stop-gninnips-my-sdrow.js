// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

const string = "Hey fellow warriors";

function spinWords(string) {
  const stringArray = string.split(" ");
  const reversedArray = stringArray.map((element) => {
    if (element.length > 4) {
      element = element.split("").reverse().join("");
    }
    return element;
  });
  return reversedArray.join(" ");
}

function spinWords2(string) {
  const stringArray = string.split(" ");
  const reversedArray = stringArray.map((element) => {
    if (element.length > 4) {
      let reversedElement = "";
      for (let i = element.length; i > 0; i--) {
        reversedElement = reversedElement + element[i - 1]
        console.log(element[i - 1]);
      }
      element = reversedElement;
    }
    return element;
  });
  return reversedArray.join(" ");
}

console.log(spinWords2(string));
