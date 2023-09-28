const array1 = [0, null, undefined, NaN];
const array2 = [null, false, 1, "0"];

function isTruthy(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      return true;
    }
  }
  return false;
}

console.log(isTruthy(array1));