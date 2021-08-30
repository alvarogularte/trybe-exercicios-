const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const skillsArray = Object.keys(student);
  for (let index in skillsArray) {
    console.log(`${skillsArray[index]} - Nível: ${student[skillsArray[index]]}`);
  }
}

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);