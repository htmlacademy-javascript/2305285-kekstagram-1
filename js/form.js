import { bodyElement } from './main.js';
import { isEscapeKey } from './util.js';

const imgUploadElement = document.querySelector('.img-upload__overlay');
const uploadFileElement = document.querySelector('#upload-file');
const closeImgEditingForm = document.querySelector('#upload-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imgUploadElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
};

uploadFileElement.addEventListener('click', () => {
  imgUploadElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
});

closeImgEditingForm.addEventListener('click', () => {
  imgUploadElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
});
