window.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.js-toggleMenu');

  menuBtn?.addEventListener('click', (evt) => {
    const menuId = evt.currentTarget.dataset.menu;
    const menu = document.getElementById(menuId);

    menuBtn.classList.toggle('burger--is-active');
    menu?.classList.toggle('menu__wrapper--open');
  });
});
