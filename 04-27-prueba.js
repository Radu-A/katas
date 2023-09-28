// Ejercicio 1:
// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase


function cuantasVeces(str, letra) {
  let strMin = str.toLowerCase();
  let letraMin = letra.toLowerCase();
  let num = 0;
  for (let i = 0; i < strMin.length; i++) {
  if (strMin[i] === letraMin) {
    num ++;
    }
  }
  return num;
}


// Ejercicio 2:
// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números


function imprimeImpares(num) {
  for (let i = num; i <= num + 50; i++) {
    if (i %2 != 0) {
      console.log(i);
    }
  }
}