let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smaller = 10;

for (let index = 0; index < numbers.length; index += 1) {
  if (smaller > numbers[index]) {
    smaller = numbers[index];
  }
}
console.log(smaller);