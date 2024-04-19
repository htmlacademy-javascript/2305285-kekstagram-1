import { bodyElement } from './main.js';
import { isEscapeKey } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successElement = successTemplate.cloneNode(true);
const successButton = successElement.querySelector('.success__button');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorElement = errorTemplate.cloneNode(true);
const errorButton = errorElement.querySelector('.error__button');

const onErrorKeydown = (evt) => {
  // const errorSection = document.querySelector('.error');
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
    errorElement.classList.add('hidden');
  }
};

const openErrorMessage = () => {
  bodyElement.appendChild(errorElement);
  errorButton.addEventListener('click', () => {
    errorElement.classList.add('hidden');
  });

  // errorElement.addEventListener('keydown', (evt) => {
  //   if (isEscapeKey(evt)) {
  //     evt.stopPropagation();
  //   }
  // });

  // const errorSection = document.querySelector('.error-inner');
  // errorSection.addEventListener('keydown', onErrorKeydown);
  errorElement.addEventListener('keydown', onErrorKeydown);
};

const openSuccessMessage = () => {
  bodyElement.appendChild(successElement);
  successButton.addEventListener('click', () => {
    successElement.classList.add('hidden');

    // imgUploadElement.classList.add('hidden');
  });

  // successElement.addEventListener('keydown', (evt) => {
  //   if (isEscapeKey(evt)) {
  //     evt.stopPropagation();
  //   }
  // });
};

openErrorMessage();
openSuccessMessage();

// imgUploadForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   // const isValid = pristine.validate();
//   // if (!isValid) {
//   //   openErrorMessage();
//   // } else {
//   //   openSuccessMessage();
//   // }
//   // this.submit();
// });
