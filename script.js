const $form = document.querySelector('.form-js');
const $firstInput = document.querySelector('.first-name-js');
const $lastInput = document.querySelector('.last-name-js');
const $emailInput = document.querySelector('.email-input-js');
const $passwordInput = document.querySelector('.password-input-js');
const $error = document.querySelectorAll('.error-js');
const $roundIcon = document.querySelector('.red-note');

const heighlightError = ($input, errorMessage) => {
  $input.parentElement.classList.add('form__field--error');
  $roundIcon.classList.add('error-image');
  console.log($input);
  $error.innerText = errorMessage;
  // console.log($error);
};

const validate = () => {
  const firstValue = $firstInput.value.trim();
  const lastValue = $lastInput.value.trim();
  const emailValue = $emailInput.value.trim();
  const passwordValue = $passwordInput.value.trim();

  if (!firstValue) {
    heighlightError($firstInput, 'First Name cannot be empty');
  } else if (!lastValue) {
    heighlightError($lastInput, 'Last Name cannot be empty');
  } else if (!emailValue) {
    heighlightError($emailInput, 'Looks like this is not an email');
  } else if (!passwordValue) {
    heighlightError($passwordInput, 'Password cannot be empty');
  }
};

$form.addEventListener('submit', (event) => {
  event.preventDefault();

  validate();
});