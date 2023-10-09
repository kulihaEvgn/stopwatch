const timeDisplay = document.querySelector(".stopwatch_time");
const stopBtn = document.querySelector(".stop");
const playBtn = document.querySelector(".play");

let timerId = null;
let counter = 0;
let ms = 0;
let sec = 0;
let min = 0;
const renderTime = (time) => {
  timeDisplay.innerHTML = time;
};
const resetAll = () => {
  timerId = null;
  counter = 0;
  ms = 0;
  sec = 0;
  min = 0;
  timeDisplay.classList.add("stopped");
  renderTime(`00:00:00`);
};
const stopwatch = (milSec) => {
  ms = milSec;

  if (ms === 99) {
    sec++;
  }

  if (sec === 60) {
    min++;
    sec = 0;
  }

  const milliSec = ms < 10 ? `0${ms}` : ms;
  const second = sec < 10 ? `0${sec}` : sec;
  const minute = min < 10 ? `0${min}` : min;

  return `${minute}:${second}:${milliSec}`;
};

stopBtn.addEventListener("click", () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    stopBtn.innerText = "CLEAR";
    playBtn.innerText = "PLAY";
  } else {
    stopBtn.innerText = "STOP";
    resetAll();
  }
});
playBtn.addEventListener("click", () => {
  if (!timerId) {
    timeDisplay.classList.remove("stopped");
    playBtn.innerText = "PAUSE";
    stopBtn.innerText = "STOP";
    timerId = setInterval(() => {
      counter++;
      if (counter === 100) {
        counter = 0;
      }
      const time = stopwatch(counter);
      renderTime(time);
    }, 7);
  } else {
    if (sec === 10 && ms >= 0 && ms <= 20) {
      alert("catch");
    }
    playBtn.innerText = "PLAY";
    stopBtn.innerText = "CLEAR";
    clearInterval(timerId);
    timerId = null;
  }
});
