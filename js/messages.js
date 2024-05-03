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

errorElement.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

const onErrorKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bodyElement.removeChild(errorElement);
  }
};

const onSuccessKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bodyElement.removeChild(successElement);
  }
};

// successElement.addEventListener('keydown', (evt) => {
//   evt.stopPropagation();
// });

// errorElement.addEventListener('keydown', (evt) => {
//   evt.stopPropagation();
// });

const removeErrorElement = () => errorElement.remove();
const removeSuccessElement = () => successElement.remove();

const openErrorMessage = () => {
  bodyElement.appendChild(errorElement);
  errorButton.addEventListener('click', () => {
    removeErrorElement();
  });

  document.addEventListener('click', () => {
    removeErrorElement();
  });

  document.addEventListener('keydown', onErrorKeydown);
};

const openSuccessMessage = () => {
  bodyElement.appendChild(successElement);
  successButton.addEventListener('click', () => {
    removeSuccessElement();
  });

  document.addEventListener('click', () => {
    removeSuccessElement();
  });

  document.addEventListener('keydown', onSuccessKeydown);
};

const setErrorServerMessage = () => {
  bodyElement.appendChild(errorServerElement);
};

export { openErrorMessage, openSuccessMessage, setErrorServerMessage };
