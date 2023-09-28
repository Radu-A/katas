// This problem was asked by Amazon.

// Given a pivot x, and a list lst, partition the list into three parts.

// The first part contains all elements in lst that are less than x
// The second part contains all elements in lst that are equal to x
// The third part contains all elements in lst that are larger than x
// Ordering within a part can be arbitrary.

// For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one partition may be [9, 3, 5, 10, 10, 12, 14].

const list = lst = [9, 12, 3, 5, 14, 10, 10];
const num = 10;

// restringiendo el uso de sort
function pivot(arr, num) {
    let one = [];
    let two = [];
    let three = [];
    lst.forEach(element=>{
        if (element < num) {
            one.push(element);
        } else if (element === num) {
            two.push(element);
        } else if (element > num) {
            three.push(element);
        }
    })
    return newArr = [...one, ...two,...three];
}
// con sort
function sort(arr, num) {
    return arr.sort((a, b) => a - b);
}

console.log(pivot(list));
console.log(sort(list));
