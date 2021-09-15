const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  style: document.querySelector("style"),
  startBtn: document.querySelector("[data-action=start]"),
  stopBtn: document.querySelector("[data-action=stop]"),
};

refs.startBtn.addEventListener("click", onStartBtnClick);
refs.stopBtn.addEventListener("click", onStopBtnClick);

let intervalId;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtnClick() {
  refs.startBtn.disabled = true;
  intervalId = setInterval(() => {
    const number = randomIntegerFromInterval(0, colors.length);
    refs.style.innerHTML = ` body {
      background-color: ${colors[number]};
    }`;
  }, 1000);
}

function onStopBtnClick() {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
}
