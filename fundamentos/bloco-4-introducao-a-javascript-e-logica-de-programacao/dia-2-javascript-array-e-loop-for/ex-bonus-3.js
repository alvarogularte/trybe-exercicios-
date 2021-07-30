let numbers = [5, 3, 2, 4, 7, 1, 0, 6];
let numbers2 = [];
for (let index = 0; index < numbers.length; index += 1) {
  for(let secondIndex = 1; secondIndex < numbers.length; secondIndex += 1) {
    numbers2.push((numbers[index] * numbers[secondIndex]))
  }
}
console.log(numbers2);