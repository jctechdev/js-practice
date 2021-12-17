// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let count = 0;
const decrement = () => {
  document.getElementById('count').innerText = count--;
};

document.getElementById('btn1').addEventListener('click', decrement);

const reset = () => {
  document.getElementById('count').innerText = count = 0;
};

document.getElementById('btn2').addEventListener('click', reset);

const increment = () => {
  document.getElementById('count').innerText = count++;
};

document.getElementById('btn3').addEventListener('click', increment);

let myName = document.getElementById('myName');

myName.onkeyup = () => {
  let showInput = myName.value;
  document.getElementById('name').innerText = showInput;
};
