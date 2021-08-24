function createStates() {
  const states = [
    'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  const getSelect = document.getElementById('select-estado');

  for (let index = 0; index < states.length; index += 1) {
    let createStateOptions = document.createElement('option');
    getSelect.appendChild(createStateOptions).innerHTML = states[index];
    getSelect.appendChild(createStateOptions).value = states[index];
  }
}
createStates();
