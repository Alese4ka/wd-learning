/*Hide block*/
const arrowUp = document.querySelector('.sixth-block__form-services__arrow');
const servicesList = document.querySelector('.sixth-block__form-services__list');
const arrowBlock = document.querySelector('.sixth-block__form-services-p');

arrowUp.addEventListener('click', () => blockHide());

function blockHide() {
  if(servicesList.style.display == 'none') {
    servicesList.style.display = 'flex';
    arrowBlock.classList.toggle('hide-block');
    arrowUp.classList.toggle('hide-block-arrow');
  }
  else {
    servicesList.style.display = 'none';
    arrowBlock.classList.toggle('hide-block');
    arrowUp.classList.toggle('hide-block-arrow');
  }
}