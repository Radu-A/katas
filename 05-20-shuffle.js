// Crear una función que tome un array y lo devuelva desordenado

let array = ['caca', 'culo', 'pedo', 'pis'];

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return arr;
}

console.log(shuffle(array));