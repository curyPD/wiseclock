import * as clockView from './views/clockView.js';
import * as btnsView from './views/btnsView.js';
import * as stopwatchView from './views/stopwatchView.js';
import * as timerView from './views/timerView.js';
import { calculateTotalTime } from './helpers.js';
import { renderTimerPopup, hidePopup } from './views/popupView.js';
import * as model from './model.js';

const controlSwitchClockMode = function (e) {
  const btn = e.target.closest('.clock-types__type');
  if (!btn) return;
  const { type } = btn.dataset;
  model.state.curClockMode = type;
  this.querySelectorAll('.clock-types__type').forEach(el =>
    el.classList.remove('clock-types__type--active')
  );
  btn.classList.add('clock-types__type--active');
  [clockView.digitalClockEl, clockView.analogClockEl].forEach(el =>
    el.classList.toggle('hidden')
  );
};

const controlBtnClick = function (e) {
  const btn = e.target.closest('.btns__btn');
  if (!btn) return;
  const { mode } = btn.dataset;
  document.querySelectorAll('.mode').forEach(el => el.classList.add('hidden'));
  document.querySelector(`.modes__${mode}`).classList.remove('hidden');
  btnsView.changeActiveBtn(btn);
};

const controlStartStopwatch = function () {
  if (!model.state.stopwatchRunning) {
    model.state.stopwatch = stopwatchView.runStopwatch(model.state);
    model.state.stopwatchRunning = true;
  } else if (model.state.stopwatchRunning) {
    clearInterval(model.state.stopwatch);
    model.state.stopwatch = undefined;
    model.state.stopwatchRunning = false;
  }
  stopwatchView.switchStartBtnIcons();
};

const controlStopStopwatch = function () {
  clearInterval(model.state.stopwatch);
  model.state.stopwatch = undefined;
  model.state.stopwatchRunning = false;
  model.state.stopwatch100Secs = 0;
  model.state.stopwatchSecs = 0;
  model.state.stopwatchMins = 0;
  stopwatchView.stopStopwatchVisually();
};

const controlTimerClick = function () {
  if (model.state.timerRunning) return;
  timerView.switchInputsWithTimer('timer');
};

const controlStartTimer = function (e) {
  if (
    !Number(timerView.inputH.value) &&
    !Number(timerView.inputM.value) &&
    !Number(timerView.inputS.value)
  ) {
    timerView.switchInputsWithTimer('inputs', model.state.timerRunningTime);
    model.stopTimer();
    model.state.timerRunningTime = 0;
    timerView.textBtn.classList.add('hoverable');
    return;
  }
  if (!model.state.timer && !model.state.timerRunning) {
    const totalTime = calculateTotalTime(
      +timerView.inputH.value,
      +timerView.inputM.value,
      +timerView.inputS.value
    );
    model.state.timerInitialTime = model.state.timerRunningTime = totalTime;
    timerView.switchInputsWithTimer('inputs', totalTime);
    timerView.switchStartBtnIcons();
    runTimer();
    timerView.textBtn.classList.remove('hoverable');
    model.state.timerRunning = true;
    return;
  }
  if (model.state.timer && model.state.timerRunning) {
    clearInterval(model.state.timer);
    timerView.switchStartBtnIcons();
    model.state.timer = undefined;
    return;
  }
  if (!model.state.timer && model.state.timerRunning) {
    runTimer(false);
    timerView.switchStartBtnIcons();
    return;
  }
};

const controlStopTimer = function () {
  if (!model.state.timer && !model.state.timerRunning) {
    timerView.switchInputsWithTimer('inputs', model.state.timerRunningTime);
    timerView.textBtn.classList.add('hoverable');
    return;
  }
  clearInterval(model.state.timer);
  timerView.switchStartBtnIcons('play');
  model.state.timer = undefined;
  model.state.timerRunning = false;
  model.state.timerRunningTime = 0;
  timerView.switchInputsWithTimer('timer', model.state.timerInitialTime);
};

const runTimer = function (runImmediately = true) {
  if (document.querySelector('.timer__alert-window'))
    hidePopup.call(document.querySelector('.timer__alert-window'));
  const timer = () => {
    if (model.state.timerRunningTime === 0) {
      model.stopTimer();
      timerView.switchInputsWithTimer('timer', model.state.timerInitialTime);
      timerView.switchStartBtnIcons('play');
      renderTimerPopup();
      return;
    }
    timerView.displayTimerTime(model.state.timerRunningTime);
    --model.state.timerRunningTime;
  };
  runImmediately && timer();
  model.state.timer = setInterval(timer, 1000);
};

const init = function () {
  clockView.analogClock();
  clockView.digitalClock();
  clockView.addHandlerSwitchClockMode(controlSwitchClockMode);
  btnsView.addHandlerBtnClick(controlBtnClick);
  btnsView.addHandlerHoverBtn();
  stopwatchView.addHandlerStartStopwatch(controlStartStopwatch);
  stopwatchView.addHandlerStopStopwatch(controlStopStopwatch);
  timerView.addHandlerTextBtnClick(controlTimerClick);
  timerView.addHandlerStartBtnClick(controlStartTimer);
  timerView.addHandlerStopBtnClick(controlStopTimer);
  timerView.addHandlerCheckInput();
};

init();
