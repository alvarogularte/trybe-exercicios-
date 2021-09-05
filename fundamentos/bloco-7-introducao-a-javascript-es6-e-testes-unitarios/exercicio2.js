const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addNightTurn(object, key, value) {
  object[key] = value;
}
addNightTurn(lesson2, 'turno', 'noite');

const showKeys = (object) => {
  return Object.keys(object);
}
// console.log(showKeys(lesson1));

const objectSize = (object) => {
  return Object.keys(object).length;
}
// console.log(objectSize(lesson2));

const showValues = (object) => {
  return Object.values(object)
}
// console.log(showValues(lesson2));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

const countStudents = (object) => {
  let total = 0;
  const arr = Object.keys(object);

  for (index in arr) {
    total += object[arr[index]].numeroEstudantes;
  }
  return total;
}
console.log(countStudents(allLessons));