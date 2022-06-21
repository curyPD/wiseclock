export const digitalClockEl = document.querySelector(
  '.modes__clock-type--digital'
);
export const analogClockEl = document.querySelector(
  '.modes__clock-type--analog'
);
const clockTypeBtns = document.querySelector('.clock-types');

export const addHandlerSwitchClockMode = function (handler) {
  clockTypeBtns.addEventListener('click', handler);
};

export const digitalClock = function () {
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
  displayTime();
  const digitalClockInterval = setInterval(displayTime, 1000);
  return digitalClockInterval;
};

export const analogClock = function () {
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
