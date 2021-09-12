// // Requisito 1
// const employees = (name) => {
//   const email = name.toLowerCase().split(' ').join('_');
//   return { name, email: `${email}@trybe.com`};
// }
// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees(employees));

// Requisito 2
// const checker = (mynumber, number) => mynumber === number;

// const raffle = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) +1);
//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Bad lucky, try again!'
// };

// console.log(raffle(3, checker));

// Requisito 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answersChecker = (rightAnswers, studentAnswers, action) => {
  let counter = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionResult = action(rightAnswers[index], studentAnswers[index]);
    counter += actionResult;
  }
  return `Resultado final: ${counter} corretas`;
}

console.log(answersChecker(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));
