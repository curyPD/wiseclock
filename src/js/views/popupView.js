export const renderTimerPopup = function () {
  const popup = document.createElement('div');
  popup.classList.add('timer__alert-window', 'slide-down-animation');
  popup.innerHTML = `
    <p class="timer__alert-window-text">Time's up!</p>
    <button class="timer__alert-window-btn">OK</button>
  `;
  popup
    .querySelector('.timer__alert-window-btn')
    .addEventListener('click', hidePopup);
  document.body.append(popup);
};

export const hidePopup = function (e) {
  this.closest('.timer__alert-window').classList.remove('slide-down-animation');
  this.closest('.timer__alert-window').classList.add('slide-up-animation');
  setTimeout(() => this.closest('.timer__alert-window').remove(), 300);
};
