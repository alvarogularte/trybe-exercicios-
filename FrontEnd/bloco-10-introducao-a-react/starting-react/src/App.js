import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Wake up', 'Take coffe', 'Brushing teeth', 'Go to work']

function App() {
  return (
  <ul>{ tasks.map(task => Task(task)) }</ul>
  );
}

export default App;
