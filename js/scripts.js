/*Hide block and slider*/
const arrowUp = document.querySelector('.sixth-block__form-services__arrow');
const servicesList = document.querySelector('.sixth-block__form-services__list');
const arrowLeft = document.querySelector('.fourth-block__cars__description__arrow-left')
const arrowRight = document.querySelector('.fourth-block__cars__description__arrow-right')
const carOne = document.querySelector('.fourth-block__cars__description-one')
const carTwo = document.querySelector('.fourth-block__cars__description-two')
const carThree = document.querySelector('.fourth-block__cars__description-three')
const carBtnOne = document.querySelector('.fourth-block__cars-button-one');
const carBtnTwo = document.querySelector('.fourth-block__cars-button-two');
const carBtnThree = document.querySelector('.fourth-block__cars-button-three');

arrowUp.addEventListener('click', () => blockHide());
arrowLeft.addEventListener('click', () => changeSlideLeft());
arrowRight.addEventListener('click', () => changeSlideRight());
carBtnOne.addEventListener('click', () => changeSlideOne());
carBtnTwo.addEventListener('click', () => changeSlideTwo());
carBtnThree.addEventListener('click', () => changeSlideThree());

function blockHide () {
  if(servicesList.style.display == 'none') {
    servicesList.style.display = 'flex';
  }
  else {
    servicesList.style.display = 'none';
  }
}

function changeSlideLeft () {
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

function changeSlideRight () {
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

function changeSlideOne () {
  if(carTwo.style.display == 'flex' || carThree.style.display == 'flex'){
    carOne.style.display = 'flex';
    carTwo.style.display = 'none';
    carThree.style.display = 'none';
  }
}  

function changeSlideTwo () {
  if(carOne.style.display == 'flex' || carThree.style.display == 'flex'){
    carTwo.style.display = 'flex';
    carOne.style.display = 'none';
    carThree.style.display = 'none';
  }
}  

function changeSlideThree () {
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

/*Add option !!!!!READ*/
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

