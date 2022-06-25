export const renderTimerPopup = function () {
  const popup = document.createElement('div');
  popup.classList.add('timer__alert-window', 'slide-down-animation');
  popup.innerHTML = `
    <p class="timer__alert-window-text">Time's up!</p>
    <button class="timer__alert-window-btn">OK</button>
  `;
  popup.addEventListener('click', function (e) {
    const btn = e.target.closest('.timer__alert-window-btn');
    if (!btn) return;
    this.classList.remove('slide-down-animation');
    this.classList.add('slide-up-animation');
    setTimeout(() => this.remove(), 300);
  });
  document.body.append(popup);
};
