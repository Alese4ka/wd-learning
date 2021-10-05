/*Validation form*/
const form = document.querySelector('.sixth-block__form-order');
const submitBtn = form.querySelector('.sixth-block__form-time__main-button');
const login = form.querySelector('.sixth-block__form-contact__name');
const phone = form.querySelector('.sixth-block__form-contact__tel');

form.addEventListener('submit', function(event){
  event.preventDefault();

  if (!login.value) {
    login.style.border = '0.0625rem solid #ff352b';
  }
  if (!phone.value) {
    phone.style.border = '0.0625rem solid #ff352b';
  }
  if (login.value) {
    login.style.border = '0.0625rem solid green';
  }
  if (phone.value) {
    phone.style.border = '0.0625rem solid green';
  }
})