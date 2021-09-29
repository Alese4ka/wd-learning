/*Slider*/
const arrowLeft = document.querySelector('.fourth-block__cars__description__arrow-left')
const arrowRight = document.querySelector('.fourth-block__cars__description__arrow-right')
const carOne = document.querySelector('.fourth-block__cars__description-one')
const carTwo = document.querySelector('.fourth-block__cars__description-two')
const carThree = document.querySelector('.fourth-block__cars__description-three')
const carBtnOne = document.querySelector('.fourth-block__cars-button-one');
const carBtnTwo = document.querySelector('.fourth-block__cars-button-two');
const carBtnThree = document.querySelector('.fourth-block__cars-button-three');

arrowLeft.addEventListener('click', () => changeSlideLeft());
arrowRight.addEventListener('click', () => changeSlideLeft());
carBtnOne.addEventListener('click', () => changeSlideOne());
carBtnTwo.addEventListener('click', () => changeSlideTwo());
carBtnThree.addEventListener('click', () => changeSlideThree());

function changeSlideLeft() {
  if(carOne.style.display == 'flex'){
    carOne.style.display = 'none';
    carThree.style.display = 'flex';
  }
  else if (carThree.style.display == 'flex') {
    carThree.style.display = 'none';
    carTwo.style.display = 'flex';
  }
  else {
    carTwo.style.display = 'none';
    carOne.style.display = 'flex';
  }
}

function changeSlideRight() {
  if(carOne.style.display == 'flex'){
    carOne.style.display = 'none';
    carTwo.style.display = 'flex';
  }
  else if (carTwo.style.display == 'flex') {
    carTwo.style.display = 'none';
    carThree.style.display = 'flex';
  }
  else {
    carThree.style.display = 'none';
    carOne.style.display = 'flex';
  }
}

function changeSlideOne() {
  if(carTwo.style.display == 'flex' || carThree.style.display == 'flex'){
    carOne.style.display = 'flex';
    carTwo.style.display = 'none';
    carThree.style.display = 'none';
  }
}  

function changeSlideTwo() {
  if(carOne.style.display == 'flex' || carThree.style.display == 'flex'){
    carTwo.style.display = 'flex';
    carOne.style.display = 'none';
    carThree.style.display = 'none';
  }
}  

function changeSlideThree() {
  if(carTwo.style.display == 'flex' || carOne.style.display == 'flex'){
    carThree.style.display = 'flex';
    carTwo.style.display = 'none';
    carOne.style.display = 'none';
  }
}  