// Complete the function that
// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.
// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

let numArray1 = [10, 20, 10, 2];
let numArray2 = [10, 25, 5, -2];

var solution = function(numArray1, numArray2) {
    let thirdArray = [];
    for (let i = 0; i < numArray1.length; i++) {
        thirdArray.push(numArray1[i] - numArray2[i]);
    }
    return thirdArray
                    .map(element => element**2)
                    .reduce((acc, curr) => acc += curr) / numArray1.length;
}

console.log(solution(numArray1, numArray2));

// function minimosCuadrados(arr1, arr2){
//     return arr1
//                     .map((currentV, index) => (currentV - arr2[index])**2)
//                     .reduce((acc, item) => acc + item)/arr2.length
// }
// console.log(minimosCuadrados(arr1, arr2));