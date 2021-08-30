const pcComponents = {
  Motherboard: 'TUF GAMING',
  Memory: 'Patriot',
  CPU: 'i3 9100F'
};

function createObject(object, key, value) {
  const newKey = key;
  const model = value;
  object[newKey] = model;

}
createObject(pcComponents, 'GPU', 'GTX 1650 EX PLUS');

console.log(pcComponents);