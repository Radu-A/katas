//Crea una función que invierta un array de dos dimensiones//
//input
let arr = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
/*output
[
[1, 4, 7],
[2, 5, 8],
[3, 6, 9]]*/

function inversor(arr) {
  let invArray = [];
  for (let i = 0; i < arr.length; i++) {
    let linea = [];
    for (let j = 0; j < arr[i].length; j++) {
      linea.push(arr[j][i]);
    }
    invArray.push(linea);
  }
  return invArray;
}

console.log(inversor(arr));