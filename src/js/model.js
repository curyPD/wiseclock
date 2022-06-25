export const state = {
  curMode: 'clock',
  curClockMode: 'analog',
  stopwatch: undefined,
  stopwatchRunning: false,
  stopwatchMins: 0,
  stopwatchSecs: 0,
  stopwatch100Secs: 0,
  timer: undefined,
  timerRunning: false,
  timerInitialTime: 0,
  timerRunningTime: 0,
};

export const stopTimer = function () {
  clearInterval(state.timer);
  state.timerRunning = false;
  state.timer = undefined;
};
