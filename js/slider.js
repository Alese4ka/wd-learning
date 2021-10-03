/*Slider*/
const arrowLeft = document.querySelector('.fourth-block__cars__description__arrow-left');
const arrowRight = document.querySelector('.fourth-block__cars__description__arrow-right');
const carOne = document.querySelector('.fourth-block__cars__description-one');
const carTwo = document.querySelector('.fourth-block__cars__description-two');
const carThree = document.querySelector('.fourth-block__cars__description-three');
const carBtnOne = document.querySelector('.fourth-block__cars-button-one');
const carBtnTwo = document.querySelector('.fourth-block__cars-button-two');
const carBtnThree = document.querySelector('.fourth-block__cars-button-three');

arrowLeft.addEventListener('click', () => previousSlide());
arrowRight.addEventListener('click', () => nextSlide());

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

let mediaQuery = window.matchMedia('(min-width: 1211px)');
carBtnOne.addEventListener('click', () => changeSlides('one'));
carBtnTwo.addEventListener('click', () => changeSlides('two'));
carBtnThree.addEventListener('click', () => changeSlides('three'));

function changeSlides(btn) {
  if (mediaQuery.matches) {
    if(btn === 'one'){
      carOne.style.display = 'flex';
      carTwo.style.display = 'none';
      carThree.style.display = 'none';
      carBtnTwo.style.border = '0.0625rem solid #ebebeb';
      carBtnThree.style.border = '0.0625rem solid #ebebeb';
      carBtnOne.style.border = '0.0625rem solid #fed100';
    }
    else if(btn === 'two'){
      carTwo.style.display = 'flex';
      carOne.style.display = 'none';
      carThree.style.display = 'none';  
      carBtnOne.style.border = '0.0625rem solid #ebebeb';
      carBtnThree.style.border = '0.0625rem solid #ebebeb';
      carBtnTwo.style.border = '0.0625rem solid #fed100';
    }
    else if(btn === 'three'){
      carThree.style.display = 'flex';
      carTwo.style.display = 'none';
      carOne.style.display = 'none';
      carBtnTwo.style.border = '0.0625rem solid #ebebeb';
      carBtnOne.style.border = '0.0625rem solid #ebebeb';
      carBtnThree.style.border = '0.0625rem solid #fed100';
    }  
  }
  else {
    if(btn === 'one'){
      carOne.style.display = 'flex';
      carTwo.style.display = 'none';
      carThree.style.display = 'none';
      carBtnTwo.style.border = 'none';
      carBtnThree.style.border = 'none';
      carBtnOne.style.border = 'none';
    }
    else if(btn === 'two'){
      carTwo.style.display = 'flex';
      carOne.style.display = 'none';
      carThree.style.display = 'none';  
      carBtnOne.style.border = '0.0625rem solid none';
      carBtnThree.style.border = '0.0625rem solid none';
      carBtnTwo.style.border = '0.0625rem solid none';
    }
    else if(btn === 'three'){
      carThree.style.display = 'flex';
      carTwo.style.display = 'none';
      carOne.style.display = 'none';
      carBtnTwo.style.border = '0.0625rem solid none';
      carBtnOne.style.border = '0.0625rem solid none';
      carBtnThree.style.border = '0.0625rem solid none';
    }
  }
}
