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
const checker = (mynumber, number) => mynumber === number;

const raffle = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) +1);
  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Bad lucky, try again!'
};

console.log(raffle(3, checker));