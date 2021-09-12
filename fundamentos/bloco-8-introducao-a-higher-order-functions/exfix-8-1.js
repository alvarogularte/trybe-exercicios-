const wakeUp = () => 'Acordando!!';

const takeCoffe = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => {
  const result = func();
  console.log(func());
}
doingThings(sleep);