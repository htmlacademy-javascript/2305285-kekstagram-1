import { isEscapeKey } from './util.js';

const ALERT_SHOW_TIME = 3000;

const successTemplate = document.querySelector('#success').content.querySelector('.success');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const errorServerTemplate = document.querySelector('#error-server').content.querySelector('.error-server');

let messageElement;

const closeMessage = () => {
  messageElement.remove();
  messageElement = null;
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
};

const openSuccessMessage = () => {
  messageElement = successTemplate.cloneNode(true);
  document.body.appendChild(messageElement);
  const successButtonElement = messageElement.querySelector('.success__button');
  successButtonElement.addEventListener('click', () => {
    closeMessage();
  });

  document.addEventListener('keydown', onDocumentKeydown);

  document.addEventListener('click', onDocumentClick);
};

const openErrorMessage = () => {
  messageElement = errorTemplate.cloneNode(true);
  document.body.appendChild(messageElement);
  const errorButtonElement = messageElement.querySelector('.error__button');
  errorButtonElement.addEventListener('click', () => {
    closeMessage();
  });

  document.addEventListener('keydown', onDocumentKeydown);

  document.addEventListener('click', onDocumentClick);
};

const openErrorServerMessage = () => {
  messageElement = errorServerTemplate.cloneNode(true);
  document.body.appendChild(messageElement);

  setTimeout(() => {
    closeMessage();
  }, ALERT_SHOW_TIME);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

function onDocumentClick (evt) {
  if (messageElement === evt.target) {
    closeMessage();
  }
}

export { openErrorMessage, openSuccessMessage, openErrorServerMessage };
