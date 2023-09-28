// This problem was asked by Google.
// Given an array of elements, return the length of the longest subarray where all its elements are distinct.
// For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 1, 3, 2, 4].

let array = [5, 1, 3, 5, 5, 2, 3, 4, 1];
    
function longest(array) {
    for (let i = 0; i < array.length; i++) {
        //con el método includes nos ahorramos el bucle
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                //podemos crear un nuevo array y usar push
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array.length;
}

console.log(longest(array));