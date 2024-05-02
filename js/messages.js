import { bodyElement } from './main.js';
import { isEscapeKey } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successElement = successTemplate.cloneNode(true);
const successButton = successElement.querySelector('.success__button');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorElement = errorTemplate.cloneNode(true);
const errorButton = errorElement.querySelector('.error__button');

const errorServerTemplate = document.querySelector('#error-server').content.querySelector('.error-server');
const errorServerElement = errorServerTemplate.cloneNode(true);

const onErrorKeydown = (evt) => {
  evt.stopPropagation();
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    errorElement.classList.add('hidden');
  }
};

const onSuccessKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    successElement.classList.add('hidden');
  }
};

// successElement.addEventListener('keydown', (evt) => {
//   evt.stopPropagation();
// });

// errorElement.addEventListener('keydown', (evt) => {
//   evt.stopPropagation();
// });

const openErrorMessage = () => {
  bodyElement.appendChild(errorElement);
  errorButton.addEventListener('click', () => {
    errorElement.classList.add('hidden');
  });

  document.addEventListener('keydown', onErrorKeydown);
};

const openSuccessMessage = () => {
  bodyElement.appendChild(successElement);
  successButton.addEventListener('click', () => {
    successElement.classList.add('hidden');
  });

  document.addEventListener('keydown', onSuccessKeydown);
};

document.addEventListener('click', () => {
  document.querySelector('.error').style.display = 'none';
});

document.addEventListener('click', () => {
  document.querySelector('.success').style.display = 'none';
});

const setErrorServerMessage = () => {
  bodyElement.appendChild(errorServerElement);
};

export { openErrorMessage, openSuccessMessage, setErrorServerMessage };
