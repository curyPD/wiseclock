export const btnsContainer = document.querySelector('.btns');

export const addHandlerBtnClick = function (handler) {
  btnsContainer.addEventListener('click', handler);
};

export const changeActiveBtn = function (btn) {
  [...btnsContainer.children].forEach(el =>
    el.classList.remove('btns__btn--active')
  );
  btn.classList.add('btns__btn--active');
};
