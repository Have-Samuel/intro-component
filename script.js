const $form = document.querySelector('.form-js');
const $firstInput = document.querySelector('.first-name-js');
const $lastInput = document.querySelector('.last-name-js');
const $emailInput = document.querySelector('.email-input-js');
const $passwordInput = document.querySelector('.password-input-js');

const validate = () => {
  const firstValue = $firstInput.value.trim();
  const lastValue = $lastInput.value.trim();
  const emailValue = $emailInput.value.trim();
  const passwordValue = $passwordInput.value.trim();

  console.log('validate', firstValue, lastValue, emailValue, passwordValue);
};

$form.addEventListener('submit', (event) => {
  event.preventDefault();

  validate();
});