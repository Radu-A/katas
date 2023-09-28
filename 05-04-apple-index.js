// A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.
// For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.
const array1 = [-6, 0, 2, 40];
const array2 = [1, 5, 7, 8];

function isFixed(array) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (num === i) {
      result.push(num);
    }
  }
  if (result.length !== 0) {
      return result;
  } else {
      return false;
  }
}

console.log(isFixed(array1));