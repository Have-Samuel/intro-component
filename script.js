const $form = document.querySelector('.form-js');
const $firstInput = document.querySelector('.first-input-js');
const $lastInput = document.querySelector('.last-input-js');
const $emailInput = document.querySelector('.email-input-js');
const $passwordInput = document.querySelector('.password-input-js');



$form.addEventListener('submit', (event) => {
  event.preventDefault();

  validate();
});