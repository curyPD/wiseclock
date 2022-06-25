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

export const addHandlerHoverBtn = function () {
  btnsContainer.addEventListener('mouseover', function (e) {
    const btn = e.target.closest('.btns__btn');
    if (!btn) return;
    btn.querySelector('.btns__btn-title').classList.remove('transparent');
  });
  btnsContainer.addEventListener('mouseout', function (e) {
    const btn = e.target.closest('.btns__btn');
    if (!btn) return;
    btn.querySelector('.btns__btn-title').classList.add('transparent');
  });
};
