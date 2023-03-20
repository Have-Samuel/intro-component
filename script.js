const form = document.querySelector('.form-js');
const firstInput = document.querySelector('#name-fast');
const lastInput = document.querySelector('name-last');
const emailInput = document.querySelector('#slot-email');
const passwordInput = document.querySelector('#slot-password');
// const error = document.querySelectorAll('.error-js');
const roundIcon = document.querySelector('.red-note');

// highlight Error
const input = document.querySelector('form__input');
const heighlightError = (input, message) => {
  input.classList.add('error-js');
  input.parentElement.querySelector('.error-js').innerText = message;

  // roundIcon.classList.add('red-note');
};

const validate = () => {
  // Create the error message
  // const errorMessage = document.createElement('p');
  // errorMessage.classList.add('error-js');
  // errorMessage.innerText = 'First Name cannot be empty';

  // firstInput.append(errorMessage);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  heighlightError();
  validate();
});

// const firstValue = firstInput.value.trim();
// const lastValue = lastInput.value.trim();
// const emailValue = emailInput.value.trim();
// const passwordValue = passwordInput.value.trim();

// if (!firstValue) {
//   heighlightError(firstInput, 'First Name cannot be empty');
// } else if (!lastValue) {
//   heighlightError(lastInput, 'Last Name cannot be empty');
// } else if (!emailValue) {
//   heighlightError(emailInput, 'Looks like this is not an email');
// } else if (!passwordValue) {
//   heighlightError(passwordInput, 'Password cannot be empty');
// }