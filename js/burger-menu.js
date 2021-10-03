/*Burger menu*/
const burgerBtn = document.querySelector('.header-block__hamburger-menu__button');
const burgerLinesMenu = document.querySelector('.header-block__hamburger-menu__lines');
const burgerMenu = document.querySelector('.header-block__hamburger-main-menu');
const burgerMenuOverlay = document.querySelector('.header-block__hamburger-menu__overlay');

burgerBtn.addEventListener('click', () => menuShowHide());
burgerMenu.addEventListener('click', () => menuShowHide());
burgerMenuOverlay.addEventListener('click', () => menuShowHide());
  
function menuShowHide() {
  burgerBtn.classList.toggle('active');
  burgerLinesMenu.classList.toggle('active');
  burgerMenu.classList.toggle('animate');
  burgerMenuOverlay.classList.toggle('animate');
}