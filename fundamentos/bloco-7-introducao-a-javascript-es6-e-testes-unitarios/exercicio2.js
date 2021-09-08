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

  for (let index in arr) {
    total += object[arr[index]].numeroEstudantes;
  }
  return total;
}
// console.log(countStudents(allLessons));

const getValueByNumber = (object, number) => {
  return Object.values(object)[number];
}
// console.log(getValueByNumber(lesson1, 1));

const verifyPair = (object, key, value) => {
  const objectEntries = Object.entries(object);
  let isEqual = false;

  for (let index in objectEntries) {
    if (objectEntries[index][0] === key && objectEntries[index][1] === value) isEqual = true;
  }
  return isEqual;
}
// console.log(verifyPair(lesson3, 'turno', 'noite'));

const mathClass = (object) => {
  const getStudents = Object.keys(object);
  let total = 0;

  for (let index in getStudents) {
    if (object[getStudents[index]].materia === 'Matemática') {
      total += object[getStudents[index]].numeroEstudantes;
    }
  }
  return total;
}
// console.log(mathClass(allLessons));

const getInfo = (object, key) => {
  const allLessons = [];
  let allStudents = 0;
  const arr = Object.values(object);

  for (let index in arr) {
    if (arr[index].professor === key) {
      allLessons.push(arr[index].materia);
      allStudents += arr[index].numeroEstudantes;
    }
  }
  return {lessons: allLessons, estudantes: allStudents};
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
