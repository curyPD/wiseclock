const stopwatchMins = document.querySelector('.stopwatch-minutes');
const stopwatchSecs = document.querySelector('.stopwatch-seconds');
const stopwatch100Secs = document.querySelector('.stopwatch-100th-seconds');
const btnStart = document.querySelector('.modes__stopwatch-btn--start');
const textBtnStart = document.querySelector('.modes__stopwatch-time');
const btnStop = document.querySelector('.modes__stopwatch-btn--stop');

export const addHandlerStartStopwatch = function (handler) {
  [btnStart, textBtnStart].forEach(el => el.addEventListener('click', handler));
};

export const addHandlerStopStopwatch = function (handler) {
  btnStop.addEventListener('click', handler);
};

export const stopStopwatchVisually = function () {
  stopwatchMins.textContent = '00';
  stopwatchSecs.textContent = '00';
  stopwatch100Secs.textContent = '00';
  btnStart
    .querySelectorAll('.modes__stopwatch-icon')
    .forEach(el => el.classList.add('hidden'));
  btnStart
    .querySelector('.modes__stopwatch-icon--play')
    .classList.remove('hidden');
};

export const switchStartBtnIcons = function () {
  btnStart
    .querySelectorAll('.modes__stopwatch-icon')
    .forEach(el => el.classList.toggle('hidden'));
};

export const runStopwatch = function (data) {
  const stopwatch = function () {
    if (data.stopwatch100Secs === 99) {
      ++data.stopwatchSecs;
      data.stopwatch100Secs = 0;
    }
    if (data.stopwatchSecs === 59) {
      ++data.stopwatchMins;
      data.stopwatchSecs = 0;
    }
    if (data.stopwatch100Secs < 99) {
      ++data.stopwatch100Secs;
    }
    stopwatchMins.textContent = `${data.stopwatchMins}`.padStart(2, '0');
    stopwatchSecs.textContent = `${data.stopwatchSecs}`.padStart(2, '0');
    stopwatch100Secs.textContent = `${data.stopwatch100Secs}`.padStart(2, '0');
  };
  stopwatch();
  const stopwatchInterval = setInterval(stopwatch, 10);
  return stopwatchInterval;
};
