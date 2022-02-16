const fs = require('fs').promises;

async function getSimpsonById(id) {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

    const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

    if (!chosenSimpson) {
      throw new Error('id não encontrado');
    }

    return chosenSimpson;
}