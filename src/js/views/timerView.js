import { calculateNewTime } from '../helpers';
export const textBtn = document.querySelector('.modes__timer-time');
const timerHrsEl = document.querySelector('.timer-time__hours');
const timerMinsEl = document.querySelector('.timer-time__minutes');
const timerSecsEl = document.querySelector('.timer-time__seconds');
const formInputs = document.querySelector('.form__inputs');
const formInputHrsEl = document.querySelector('.form__input--hours');
const formInputMinsEl = document.querySelector('.form__input--minutes');
const formInputSecsEl = document.querySelector('.form__input--seconds');
const btnStart = document.querySelector('.modes__timer-btn--start');
const btnStop = document.querySelector('.modes__timer-btn--stop');
export const inputH = document.querySelector('.form__input--hours');
export const inputM = document.querySelector('.form__input--minutes');
export const inputS = document.querySelector('.form__input--seconds');

export const addHandlerTextBtnClick = function (handler) {
  textBtn.addEventListener('click', handler);
};

export const switchStartBtnIcons = function (icon = undefined) {
  if (!icon) {
    btnStart
      .querySelectorAll('.modes__timer-icon')
      .forEach(el => el.classList.toggle('hidden'));
    return;
  }
  btnStart
    .querySelectorAll('.modes__timer-icon')
    .forEach(el => el.classList.add('hidden'));
  btnStart
    .querySelector(`.modes__timer-icon--${icon}`)
    .classList.remove('hidden');
};

export const switchInputsWithTimer = function (curMode, timeToDisplay) {
  if (curMode === 'timer') {
    textBtn.classList.add('hidden');
    displayTimerTimeInInputs(timeToDisplay);
    formInputs.classList.remove('hidden');
  }
  if (curMode === 'inputs') {
    textBtn.classList.remove('hidden');
    displayTimerTime(timeToDisplay);
    formInputs.classList.add('hidden');
  }
};

export const addHandlerStartBtnClick = function (handler) {
  btnStart.addEventListener('click', handler);
};

export const addHandlerStopBtnClick = function (handler) {
  btnStop.addEventListener('click', handler);
};

export const addHandlerCheckInput = function () {
  formInputs.addEventListener('input', function (e) {
    const inputEl = e.target.closest('.form__input');
    if (!inputEl) return;
    const input = inputEl.value;
    if (e.data === '+' || e.data === '-' || e.data === '.')
      inputEl.value = input.slice(0, input.length - 1);
    if (!Number.isFinite(+input)) {
      inputEl.value = '';
      return;
    }
    if (input.length > 2) inputEl.value = input.slice(0, 2);
  });
};

export const displayTimerTime = function (time) {
  const { newHrs, newMins, newSecs } = calculateNewTime(time);
  timerHrsEl.textContent = `${newHrs}`.padStart(2, '0');
  timerMinsEl.textContent = `${newMins}`.padStart(2, '0');
  timerSecsEl.textContent = `${newSecs}`.padStart(2, '0');
};

const displayTimerTimeInInputs = function (time) {
  const { newHrs, newMins, newSecs } = calculateNewTime(time);
  if (!newHrs || !newMins || !newSecs)
    formInputHrsEl.value = formInputMinsEl.value = formInputSecsEl.value = '';
  formInputHrsEl.value = newHrs === 0 ? '' : `${newHrs}`.padStart(2, '0');
  formInputMinsEl.value = newMins === 0 ? '' : `${newMins}`.padStart(2, '0');
  formInputSecsEl.value = newSecs === 0 ? '' : `${newSecs}`.padStart(2, '0');
};
