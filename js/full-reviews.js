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

const divReviews = document.querySelector('.fifth-block__reviews');
const textReviewBtn = divReviews.querySelectorAll('span');

for (let i = 0; i < textReviewBtn.length; i++) {
  textReviewBtn[i].addEventListener('click', function() {
    this.innerHTML = (this.innerHTML === 'Читать полностью') ? this.innerHTML = 'Скрыть отзыв' : this.innerHTML = 'Читать полностью';
  })
}