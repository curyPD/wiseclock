'use strict';

// Elements
const modeBtns = document.querySelector('.btns');

const clockTypes = document.querySelector('.clock-types');

const stopwatchTime = document.querySelector('.modes__stopwatch-time');
const stopwatchBtns = document.querySelector('.modes__stopwatch-btns');
const stopwatchBtnStart = document.querySelector(
  '.modes__stopwatch-btn--start'
);
const stopwatchBtnStop = document.querySelector('.modes__stopwatch-btn--stop');
const stopwatchMinEl = document.querySelector('.stopwatch-minutes');
const stopwatchSecEl = document.querySelector('.stopwatch-seconds');
const stopwatch100El = document.querySelector('.stopwatch-100th-seconds');

// Functions
const analogClock = function () {
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');

  let rotationS, rotationM, rotationH;

  const rotateHands = function () {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now > 12 ? now.getHours() - 12 : now.getHours();

    rotationS = seconds * 6;
    rotationM = minutes * 6 + rotationS / 60;
    rotationH = hours * 30 + rotationM / 12;

    secondHand.style.transform = `translateX(-50%) rotate(${rotationS}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${rotationM}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${rotationH}deg)`;
  };
  rotateHands();

  const analogClockInterval = setInterval(rotateHands, 1000);
  return analogClockInterval;
};

const digitalClock = function () {
  const digitalClockEl = document.querySelector('.modes__clock-type--digital');

  const displayTime = function () {
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    const time = new Intl.DateTimeFormat(navigator.language, options).format(
      now
    );

    digitalClockEl.textContent = time;
  };

  const digitalClockInterval = setInterval(displayTime, 1000);
  return digitalClockInterval;
};

let stopwatchMin, stopwatchSec, stopwatch100, stopwatchInterval;
const stopwatchInit = function () {
  stopwatchMin = 0;
  stopwatchSec = 0;
  stopwatch100 = 0;

  stopwatchMinEl.textContent = String(stopwatchMin).padStart(2, 0);
  stopwatchSecEl.textContent = String(stopwatchSec).padStart(2, 0);
  stopwatch100El.textContent = String(stopwatch100).padStart(2, 0);

  stopwatchInterval = undefined;
};

const startStopwatch = function () {
  this.querySelectorAll('.modes__stopwatch-icon').forEach(icon =>
    icon.classList.toggle('hidden')
  );

  const stopwatchCallback = function () {
    if (stopwatch100 === 99) {
      stopwatch100 = 0;
      stopwatch100El.textContent = String(stopwatch100).padStart(2, 0);

      if (stopwatchSec === 59) {
        stopwatchSec = 0;
        stopwatchSecEl.textContent = String(stopwatchSec).padStart(2, 0);

        stopwatchMin++;
        stopwatchMinEl.textContent = String(stopwatchMin).padStart(2, 0);
      } else {
        stopwatchSec++;
        stopwatchSecEl.textContent = String(stopwatchSec).padStart(2, 0);
      }
    } else {
      stopwatch100++;
      stopwatch100El.textContent = String(stopwatch100).padStart(2, 0);
    }
  };

  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(stopwatchCallback, 10);
  } else {
    clearInterval(stopwatchInterval);
    stopwatchInterval = undefined;
  }
};

const stopStopwatch = function () {
  clearInterval(stopwatchInterval);
  stopwatchInit();
  document
    .querySelector('.modes__stopwatch-icon--play')
    .classList.remove('hidden');
  document
    .querySelector('.modes__stopwatch-icon--pause')
    .classList.add('hidden');
};

// Event listeners
modeBtns.addEventListener('click', function (e) {
  // if (e.target.classList.contains('btns__btn')) {
  const modeBtn = e.target.closest('.btns__btn');
  if (!modeBtn) return;
  const { mode } = modeBtn.dataset;

  [...this.children].forEach(btn => btn.classList.remove('btns__btn--active'));
  modeBtn.classList.add('btns__btn--active');

  document
    .querySelectorAll('.mode')
    .forEach(mode => mode.classList.add('hidden'));
  document.querySelector(`.modes__${mode}`).classList.remove('hidden');

  const modeBtnTimer = e.target.closest('.btns__btn--timer');
  if (!modeBtnTimer) {
    // if (!e.target.classList.contains('btns__btn--timer')) {
    if (sum === 0 && !timerInterval) {
      // if (!timerInterval) {
      firstTime = true;
      timerTime.classList.remove('hidden');
      timerInputs.classList.add('hidden');
      timerTime.addEventListener('click', showInputs);
      timerTime.classList.add('hoverable');
      timerTimeHours.textContent = '00';
      timerTimeMinutes.textContent = '00';
      timerTimeSeconds.textContent = '00';
    }
  }
  // }
  // }
});

clockTypes.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('clock-types__type')) {
    document
      .querySelectorAll('.clock-types__type')
      .forEach(el => el.classList.remove('clock-types__type--active'));
    e.target.classList.add('clock-types__type--active');

    document
      .querySelectorAll('.modes__clock-type')
      .forEach(el => el.classList.add('hidden'));
    document
      .querySelector(`.modes__clock-type--${e.target.dataset.type}`)
      .classList.remove('hidden');
  }
});

analogClock();
digitalClock();
stopwatchInit();

stopwatchBtnStart.addEventListener('click', startStopwatch);
stopwatchBtnStop.addEventListener('click', stopStopwatch);
stopwatchTime.addEventListener('click', startStopwatch.bind(stopwatchBtnStart));

// timer
const inputHoursEl = document.querySelector('.form__input--hours');
const inputMinutesEl = document.querySelector('.form__input--minutes');
const inputSecondsEl = document.querySelector('.form__input--seconds');

const timerBtnStart = document.querySelector('.modes__timer-btn--start');
const timerBtnStop = document.querySelector('.modes__timer-btn--stop');

const timerInputs = document.querySelector('.form__inputs');
const timerTime = document.querySelector('.modes__timer-time');
const timerTimeHours = document.querySelector('.timer-time__hours');
const timerTimeMinutes = document.querySelector('.timer-time__minutes');
const timerTimeSeconds = document.querySelector('.timer-time__seconds');

let timerInterval, newInputHours, newInputMinutes, newInputSeconds;
let sum = 0;
let firstTime = true;

let hoursInitial, minutesInitial, secondsInitial;

const timerAlert = document.createElement('div');
timerAlert.classList.add('timer__alert-window');
timerAlert.innerHTML =
  '<p class="timer__alert-window-text">Time\'s up!</p><button class="timer__alert-window-btn">OK</button>';

timerAlert.addEventListener('click', function (e) {
  if (e.target.classList.contains('timer__alert-window-btn')) {
    this.remove();
  }
});

const blurCallback = function () {
  this.blur();
};

const timerInit = function () {
  clearInterval(timerInterval);
  timerInterval = undefined;
  timerTime.classList.add('hoverable');

  inputHoursEl.value = '';
  inputMinutesEl.value = '';
  inputSecondsEl.value = '';

  timerBtnStart
    .querySelector('.modes__timer-icon--play')
    .classList.remove('hidden');
  timerBtnStart
    .querySelector('.modes__timer-icon--pause')
    .classList.add('hidden');

  document.querySelectorAll('.form__input').forEach(el => {
    el.classList.remove('no-focus');
    el.removeEventListener('focus', blurCallback);
  });
};

const showInputs = function () {
  timerTime.classList.add('hidden');
  timerInputs.classList.remove('hidden');
  this.removeEventListener('click', showInputs);
};

timerTime.addEventListener('click', showInputs);
timerTime.classList.add('hoverable');

timerInputs.querySelectorAll('.form__input').forEach(el =>
  el.addEventListener('input', function () {
    if (el.value.length > 2) el.value = el.value.slice(0, 2);
  })
);

timerInputs.querySelectorAll('.form__input').forEach(el =>
  el.addEventListener('keydown', function (e) {
    if (
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace'].indexOf(
        e.key
      ) === -1
    )
      e.preventDefault();
  })
);

timerBtnStart.addEventListener('click', function (e) {
  const inputHours = +inputHoursEl.value;
  const inputMinutes = +inputMinutesEl.value;
  const inputSeconds = +inputSecondsEl.value;

  sum = inputHours * 3600 + inputMinutes * 60 + inputSeconds;

  const timerCallback = function () {
    if (sum <= 0 || !sum) {
      timerInit();
      return;
    }
    timerTime.classList.remove('hoverable');

    document.querySelectorAll('.form__input').forEach(el => {
      el.classList.add('no-focus');
      el.addEventListener('focus', blurCallback);
    });

    firstTime = false;

    newInputHours = Math.floor(sum / 3600);
    newInputMinutes = Math.floor((sum % 3600) / 60);
    newInputSeconds = Math.floor((sum % 3600) % 60);

    if (!hoursInitial && !minutesInitial && !secondsInitial) {
      hoursInitial = newInputHours;
      minutesInitial = newInputMinutes;
      secondsInitial = newInputSeconds;
    }

    document.querySelector('.form__inputs').classList.add('hidden');
    document.querySelector('.modes__timer-time').classList.remove('hidden');

    timerTimeHours.textContent = inputHoursEl.value = String(
      newInputHours
    ).padStart(2, 0);
    timerTimeMinutes.textContent = inputMinutesEl.value = String(
      newInputMinutes
    ).padStart(2, 0);
    timerTimeSeconds.textContent = inputSecondsEl.value = String(
      newInputSeconds
    ).padStart(2, 0);
  };
  timerCallback();

  sum > 0 &&
    this.querySelectorAll('.modes__timer-icon').forEach(icon =>
      icon.classList.toggle('hidden')
    );

  if (!timerInterval) {
    timerInterval = setInterval(() => {
      sum--;

      timerCallback();
      if (sum === 0) {
        document.body.prepend(timerAlert);
        document.querySelector('.form__inputs').classList.add('hidden');
        document.querySelector('.modes__timer-time').classList.remove('hidden');

        timerTime.addEventListener('click', showInputs);
        timerTimeHours.textContent = '00';
        timerTimeMinutes.textContent = '00';
        timerTimeSeconds.textContent = '00';
        inputHoursEl.value = `${hoursInitial}`.padStart(2, 0);
        inputMinutesEl.value = `${minutesInitial}`.padStart(2, 0);
        inputSecondsEl.value = `${secondsInitial}`.padStart(2, 0);
        hoursInitial = undefined;
        minutesInitial = undefined;
        secondsInitial = undefined;
      }
    }, 1000);
  } else {
    clearInterval(timerInterval);
    timerInterval = undefined;
  }
});

timerBtnStop.addEventListener('click', function () {
  timerInit();
  if (firstTime) return;
  document.querySelector('.form__inputs').classList.remove('hidden');
  document.querySelector('.modes__timer-time').classList.add('hidden');
  inputHoursEl.value = `${hoursInitial}`.padStart(2, 0);
  inputMinutesEl.value = `${minutesInitial}`.padStart(2, 0);
  inputSecondsEl.value = `${secondsInitial}`.padStart(2, 0);
});
