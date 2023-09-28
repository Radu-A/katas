/*Given a sorted list of integers, square the elements and give the output in sorted order.
const arrayNum = [0, 7, 6, 3];*/

let square = arrayNum.map(element => element**2).sort(function(a, b) { return a - b});

console.log(square);