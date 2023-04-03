const form = document.querySelector('#form-js');
const firstInput = document.querySelector('#name-fast');
const lastInput = document.querySelector('#name-last');
const emailInput = document.querySelector('#email-slot');
const passwordInput = document.querySelector('#password-slot');

function setErrorFor(input, message) {
  const formIntro = input.parentElement;
  const small = formIntro.querySelector('small');

  small.innerText = message;

  formIntro.className = 'form__input error';
}

function validate() {
  const firstValue = firstInput.value.trim();
  const lastValue = lastInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  function isEmail(email) {
    return /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/.test(email);
  }

  if (!firstValue) {
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

function removeError() {
  const formError = document.querySelectorAll('.error');

  formError.forEach((error) => {
    error.classList.remove('error');
    emailInput.classList.add('placeholder');
  });
}

function resetInput() {
  form.reset();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  removeError();
  validate();
  resetInput();
});
