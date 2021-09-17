const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let intervalId = null;
let isActive = false;

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBg() {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function onStart() {
  if (!isActive) {
    intervalId = setInterval(changeBg, 1000);
    isActive = true;
  }

  return;
}

function onStop() {
  clearInterval(intervalId);
  isActive = false;
}

refs.btnStart.addEventListener('click', onStart);
refs.btnStop.addEventListener('click', onStop);
