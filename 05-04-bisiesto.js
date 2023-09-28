/*Ejercicio bisiesto
Escriba un programa que pida un año y que escriba si es bisiesto o no.
Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo son, aunque los múltiplos de 400 sí.*/

const año = 400;

if (año %4 === 0) {
  if (año %100 === 0) {
    if (año %400 === 0) {
      console.log("Es bisiesto");
    } else {
      console.log("No es bisiesto");
    }
  } else {
    console.log("Es bisieto");
  }
} else {
  console.log("No es bisiesto");
}