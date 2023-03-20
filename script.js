const form = document.querySelector('#form-js');
const firstInput = document.querySelector('#name-fast');
const lastInput = document.querySelector('#name-last');
const emailInput = document.querySelector('#email-slot');
const passwordInput = document.querySelector('#password-slot');
// const error = document.querySelectorAll('.error-js');
// const roundIcon = document.querySelector('.red-note');

function setErrorFor(input, message) {
  const formIntro = input.parentElement; // .form__input
  const small = formIntro.querySelector('small');

  // add error message inside small
  small.innerText = message;

  // add error class
  formIntro.className = 'form__input error';
}

function validate() {
  const firstValue = firstInput.value.trim();
  const lastValue = lastInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Email Validation
  function isEmail(email) {
    return /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/.test(email);
  }

  if (!firstValue) {
    // show error
    // add error class
    setErrorFor(firstInput, 'First Name cannot be empty');
  }

  if (!lastValue) {
    setErrorFor(lastInput, 'Last Name cannot be empty');
  }

  if (!emailValue) {
    setErrorFor(emailInput, 'Looks like this is not an email');
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailInput, 'Email is Invalid');
  }

  if (!passwordValue) {
    setErrorFor(passwordInput, 'Password cannot be empty');
  }
}

// reset the form
// function resetForm() {
//   form.reset();
// }

// Removing The Error Message
function removeError() {
  const formError = document.querySelectorAll('.error');

  formError.forEach((error) => {
    error.classList.remove('error');
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  removeError();
  validate();
});

// if (!firstValue) {
// else if (!lastValue) {
//   setErrorFor(lastInput, 'Last Name cannot be empty');
// } else if (!emailValue) {
//   setErrorFor(emailInput, 'Looks like this is not an email');
// } else if (!passwordValue) {
//   setErrorFor(passwordInput, 'Password cannot be empty');
// }