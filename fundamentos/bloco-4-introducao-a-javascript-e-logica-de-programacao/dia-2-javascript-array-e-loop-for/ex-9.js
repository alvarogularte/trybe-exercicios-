let arr = [];

for (let index = 1; index <= 25; index += 1) {
  arr.push(index)
}

let arrDiv = [];
for(let indexDiv = 0; indexDiv < arr.length; indexDiv += 1) {
  arrDiv.push(indexDiv / 2);
}
console.log(arrDiv);