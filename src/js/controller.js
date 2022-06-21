import * as clockView from './views/clockView.js';
import * as btnsView from './views/btnsView.js';
import * as stopwatchView from './views/stopwatchView.js';
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

const controlStartStopwatch = function (e) {
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

const controlStopStopwatch = function (e) {
  clearInterval(model.state.stopwatch);
  model.state.stopwatch = undefined;
  model.state.stopwatchRunning = false;
  model.state.stopwatch100Secs = 0;
  model.state.stopwatchSecs = 0;
  model.state.stopwatchMins = 0;
  stopwatchView.stopStopwatchVisually();
};

const init = function (epicPhrase) {
  clockView.analogClock();
  clockView.digitalClock();
  clockView.addHandlerSwitchClockMode(controlSwitchClockMode);
  btnsView.addHandlerBtnClick(controlBtnClick);
  stopwatchView.addHandlerStartStopwatch(controlStartStopwatch);
  stopwatchView.addHandlerStopStopwatch(controlStopStopwatch);
  console.log(epicPhrase);
};

init('I CAN F*CKING DO IT! AAAAAAAHHHHH!!!!!');
