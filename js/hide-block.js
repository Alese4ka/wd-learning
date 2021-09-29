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