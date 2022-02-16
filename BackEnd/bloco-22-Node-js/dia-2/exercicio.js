function math(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject('Informe apenas números');

    const result = (a + b) * c;

    if (result < 50) {
      return reject('Valor muito baixo');
    }

    resolve(result);
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function callMath() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

  try {
    const result = await math(...randomNumbers)
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
