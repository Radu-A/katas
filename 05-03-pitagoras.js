// This problem was asked by Netflix.
// Given an array of 3 integers, determine whether it contains a Pythagorean triplet. Recall that a Pythogorean triplet (a, b, c) is defined by the equation a^2+ b^2= c^2

let numArray = [5, 4, 3];

numArray = numArray.sort(function(a, b) { return a - b
});
if (numArray[0]**2 + numArray[1]**2 === numArray[2]**2) {
  console.log("It is a Pythagorean triplet");
} else {
  console.log("It is not a Pythagorean triplet");
}