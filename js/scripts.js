const arrowUp = document.querySelector('.sixth-block__form-services__arrow');
const servicesList = document.querySelector('.sixth-block__form-services__list');
const arrowLeft = document.querySelector('.fourth-block__cars__description__arrow-left')
const arrowRight = document.querySelector('.fourth-block__cars__description__arrow-right')
const carOne = document.querySelector('.fourth-block__cars__description-one')
const carTwo = document.querySelector('.fourth-block__cars__description-two')
const carThree = document.querySelector('.fourth-block__cars__description-three')

arrowUp.addEventListener('click', () => blockHide());
arrowLeft.addEventListener('click', () => changeSlideLeft());
arrowRight.addEventListener('click', () => changeSlideRight());


function blockHide () {
  if(servicesList.style.display == `none`) {
    servicesList.style.display = `flex`;
  }
  else {
    servicesList.style.display = `none`;
  }
}

function changeSlideLeft () {
  if(carOne.style.display == `flex`){
    carOne.style.display = `none`;
    carThree.style.display = `flex`;
  }
  else if (carThree.style.display == `flex`) {
    carThree.style.display = `none`;
    carTwo.style.display = `flex`;
  }
  else {
    carTwo.style.display = `none`;
    carOne.style.display = `flex`;
  }
}

function changeSlideRight () {
  if(carOne.style.display == `flex`){
    carOne.style.display = `none`;
    carTwo.style.display = `flex`;
  }
  else if (carTwo.style.display == `flex`) {
    carTwo.style.display = `none`;
    carThree.style.display = `flex`;
  }
  else {
    carThree.style.display = `none`;
    carOne.style.display = `flex`;
  }
}