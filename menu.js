let checked = false;
let menu = document.querySelector('.burger');

document.body.dataset.menuIsOpen = 'false';
menu.addEventListener('click', () => {
  checked = !checked;
  document.body.dataset.menuIsOpen = checked;
});
