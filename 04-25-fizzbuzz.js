for (let i = 1; i <= 1000; i++) {
    if (i %3 === 0 && i %5 === 0) {
      console.log('FizzBuzz');
    } else if (i %3 === 0) {
      console.log('Fizz');
    } else if (i %5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
/*
let numArray = [[3, 2, 1], [8, 9, 7], [5, 6, 4]];
let sortArray = []

numArray.forEach((element) => {
  for (let i = 0; i < element.length; i++) {
    sortArray.push(element[i]);
  }
});

console.log(sortArray);*/