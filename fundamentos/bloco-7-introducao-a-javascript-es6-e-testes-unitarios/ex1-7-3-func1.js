const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// const expectedSum = sum(0, 0);
// const expectedSum = sum(5, '5');
const expectedSum = sum(4, '5');
// assert.strictEqual(expectedSum, 9);
assert.strictEqual(expectedSum, 0);
// assert.strictEqual(expectedSum, 10);
