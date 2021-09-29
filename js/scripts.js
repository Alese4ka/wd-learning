/*Hide block*/
const arrowUp = document.querySelector('.sixth-block__form-services__arrow');
const servicesList = document.querySelector('.sixth-block__form-services__list');

arrowUp.addEventListener('click', () => blockHide());

function blockHide() {
  if(servicesList.style.display == 'none') {
    servicesList.style.display = 'flex';
  }
  else {
    servicesList.style.display = 'none';
  }
}

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
arrowRight.addEventListener('click', () => changeSlideRight());
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

/*Timer*/
function startTimer() { 
  let countDownDate = new Date();
  countDownDate.setHours(countDownDate.getHours() + 6);
  
  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById('timer').innerHTML = 'Время вышло';
    }
  }, 1000);
}

window.onload = function () {
  startTimer();
};

/*Validation form*/
const form = document.querySelector('.sixth-block__form-order');
const submitBtn = form.querySelector('.sixth-block__form-time__main-button');
const login = form.querySelector('.sixth-block__form-contact__name');
const phone = form.querySelector('.sixth-block__form-contact__tel');

form.addEventListener('submit', function(event){
  event.preventDefault();

  if (!login.value) {
    login.style.border = '1px solid #ff352b';
  }
  if (!phone.value) {
    phone.style.border = '1px solid #ff352b';
  }
  if (login.value) {
    login.style.border = '1px solid green';
  }
  if (phone.value) {
    phone.style.border = '1px solid green';
  }
})

/*Add option*/
const selectList = document.querySelector('#select');
const newOption = document.querySelector('#name');

newOption.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    const option = new Option(newOption.value, newOption.value);
    selectList.add(option, undefined);
    newOption.value = '';
    newOption.focus();
  }   
})

/*Share social links*/
Share = {
  vkontakte: function(purl, ptitle, pimg, text) {
    url  = 'http://vkontakte.ru/share.php?';
    url += 'url='          + encodeURIComponent(purl);
    url += '&title='       + encodeURIComponent(ptitle);
    url += '&description=' + encodeURIComponent(text);
    url += '&image='       + encodeURIComponent(pimg);
    url += '&noparse=true';
    Share.popup(url);
  },
  facebook: function(purl, ptitle, pimg, text) {
    url  = 'http://www.facebook.com/sharer.php?';
    url += '&p[title]='     + encodeURIComponent(ptitle);
    url += '&p[summary]='   + encodeURIComponent(text);
    url += '&p[url]='       + encodeURIComponent(purl);
    url += '&p[images][0]=' + encodeURIComponent(pimg);
    Share.popup(url);
  },
  
  me : function(el){
    console.log(el.href);                
    Share.popup(el.href);
    return false;                
  },

  popup: function(url) {
    window.open(url,'','toolbar=0,status=0,width=626,height=436');
  }
};

/*Burger menu*/
const burgerBtn = document.querySelector('.header-block__hamburger-menu__button');
const burgerLinesMenu = document.querySelector('.header-block__hamburger-menu__lines');
const burgerMenu = document.querySelector('.header-block__hamburger-main-menu');
const burgerMenuOverlay = document.querySelector('.header-block__hamburger-menu__overlay');

burgerBtn.addEventListener('click', () => menuShowHide());
burgerMenu.addEventListener('click', () => menuShowHide());
burgerMenuOverlay.addEventListener('click', () => menuShowHide());
  
function menuShowHide() {
  burgerLinesMenu.classList.toggle('active');
  burgerMenu.classList.toggle('animate');
  burgerMenuOverlay.classList.toggle('animate');
}

/*Full reviews*/
const reviewBtnOne = document.querySelector('.fifth-block__open-reviews-one');
const reviewBtnTwo = document.querySelector('.fifth-block__open-reviews-two');
const reviewBtnThree = document.querySelector('.fifth-block__open-reviews-three');
const reviewBlockOne = document.querySelector('.fifth-block__text-reviews-full-one');
const reviewBlockTwo = document.querySelector('.fifth-block__text-reviews-full-two');
const reviewBlockThree = document.querySelector('.fifth-block__text-reviews-full-three');
const hideBlockOne = document.querySelector('.fifth-block__text-reviews-one');
const hideBlockTwo = document.querySelector('.fifth-block__text-reviews-two');
const hideBlockThree = document.querySelector('.fifth-block__text-reviews-three');

reviewBtnOne.addEventListener('click', () => openReview('one'));
reviewBtnTwo.addEventListener('click', () => openReview('two'));
reviewBtnThree.addEventListener('click', () => openReview('three'));

function openReview(number) {
  if (number === 'one'){
    reviewBlockOne.classList.toggle('show');
    hideBlockOne.classList.toggle('hidden');
  }
  else if (number === 'two'){
    reviewBlockTwo.classList.toggle('show');
    hideBlockTwo.classList.toggle('hidden');
  }
  else if (number === 'three'){
    reviewBlockThree.classList.toggle('show');
    hideBlockThree.classList.toggle('hidden');
  }
}

const textReviewBtn = document.querySelectorAll('div > span');

for (let i = 0; i < textReviewBtn.length; i++) {
  textReviewBtn[i].addEventListener('click', function() {
    this.innerHTML = (this.innerHTML === 'Читать полностью') ? this.innerHTML = 'Скрыть отзыв' : this.innerHTML = 'Читать полностью';
  })
}