/*Slider*/
const arrowLeft = document.querySelector('.fourth-block__cars__description__arrow-left');
const arrowRight = document.querySelector('.fourth-block__cars__description__arrow-right');
const carOne = document.querySelector('.fourth-block__cars__description-one');
const carTwo = document.querySelector('.fourth-block__cars__description-two');
const carThree = document.querySelector('.fourth-block__cars__description-three');
const carBtnOne = document.querySelector('.fourth-block__cars-button-one');
const carBtnTwo = document.querySelector('.fourth-block__cars-button-two');
const carBtnThree = document.querySelector('.fourth-block__cars-button-three');
const dotOne = document.querySelector('.dot-one');
const dotTwo = document.querySelector('.dot-two');
const dotThree = document.querySelector('.dot-three');

let mediaQuery = window.matchMedia('(min-width: 1211px)');

arrowLeft.addEventListener('click', () => previousSlide());
arrowRight.addEventListener('click', () => nextSlide());
carBtnOne.addEventListener('click', () => currentSlide(1));
carBtnTwo.addEventListener('click', () => currentSlide(2));
carBtnThree.addEventListener('click', () => currentSlide(3));
//carBtnOne.addEventListener('click', () => changeSlides('one'));
//carBtnTwo.addEventListener('click', () => changeSlides('two'));
//carBtnThree.addEventListener('click', () => changeSlides('three'));

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll('.slider');
  let btnSlides = document.querySelectorAll('.slider-btn');
  let dots = document.querySelectorAll('.dot');
  if (mediaQuery.matches) {
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
     slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < btnSlides.length; i++) {
      btnSlides[i].className = btnSlides[i].className.replace(' color-border', '');
    }
    slides[slideIndex - 1].style.display = 'flex';
    btnSlides[slideIndex - 1].className += ' color-border';
  }
  else {
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < btnSlides.length; i++) {
      btnSlides[i].className = btnSlides[i].className.replace(' color-border-down', '');
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' color-border-circle', '');
    }
    slides[slideIndex - 1].style.display = 'flex';
    btnSlides[slideIndex - 1].className += ' color-border-down';
    dots[slideIndex - 1].className += ' color-border-circle';
  }
}
