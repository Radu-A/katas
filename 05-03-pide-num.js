/*Crea una función que pida números por teclado y mételos en un array. Cuando el usuario meta un 0,dejaremos de insertar. Por último, ordena los números ordenados de menor a mayor y devuelve el array*/

const arrayNum = [];
let num = 1;
while (num != 0) {
  num = prompt("Introduce un número: ");
  arrayNum.push(num);
}
const ordenArray = arrayNum.sort(function(a, b) { return a - b });

console.log(ordenArray);