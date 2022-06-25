export const calculateNewTime = function (time) {
  const newHrs = Math.floor(time / 3600);
  const newMins = Math.floor((time % 3600) / 60);
  const newSecs = (time % 3600) % 60;
  return { newHrs, newMins, newSecs };
};

export const calculateTotalTime = function (hrs, mins, secs) {
  return hrs * 3600 + mins * 60 + secs;
};
