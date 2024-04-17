import { bodyElement } from './main.js';
import { isEscapeKey } from './util.js';

const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAG_LENGTH = 5;

const imgUploadForm = document.querySelector('#upload-select-image');
const imgUploadElement = document.querySelector('.img-upload__overlay');
const uploadFileElement = document.querySelector('#upload-file');
const closeImgEditingForm = document.querySelector('#upload-cancel');
const textHashtagsField = document.querySelector('.text__hashtags');
const textDescriptionField = document.querySelector('.text__description');

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successElement = successTemplate.cloneNode(true);
const successButton = document.querySelector('.success__button');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorElement = errorTemplate.cloneNode(true);
const errorButton = document.querySelector('.error__button');

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

textHashtagsField.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

textDescriptionField.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});


const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text',
});

const validateDescription = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(textDescriptionField,
  validateDescription,
  'Максимальная длина 140 символов'
);

const validateHashtag = (value) => {
  // const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;
  const currentHashtag = value;
  const splitHashtag = currentHashtag.trim().split(' ');
  // let checkHashtag = [];


  // ЕЩЕ РАЗ ЧЕКНУТЬ ВОТ ЭТО, ДОПИСАВ В ФУНКЦИЮ ВСЕ ПУНКТЫ
  // const checkHashtag = (item) => hashtag.test(item);
  // splitHashtag.every(checkHashtag);

  // splitHashtag.forEach((item) => {
  //   hashtag.test(item);
  //   return item;
  // });

  for (let i = 0; i < splitHashtag.length; i++) {
    const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;
    if (hashtag.test(splitHashtag[i]) === true) {
      return splitHashtag;
    }
  }

  splitHashtag.lenght <= MAX_HASHTAG_LENGTH;
};

pristine.addValidator(textHashtagsField,
  validateHashtag,
  'Хэштег должен начинаться с #'
);

imgUploadForm.addEventListener('submit', (evt) => {
  // evt.preventDefault();
  // pristine.validate();

  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
    bodyElement.appendChild(errorElement);
    errorButton.addEventListener('click', () => {
      errorElement.classList.add('hidden');
      // bodyElement.appendChild(errorElement);
    });

  } else {
    evt.preventDefault();
    bodyElement.appendChild(successElement);
    successButton.addEventListener('click', () => {
      successElement.classList.add('hidden');
      // bodyElement.appendChild(successElement);
    });
  }
  // this.submit();
  // submitButton.addEventListener('click', () => {
  //   // this.submit();
  //   bodyElement.appendChild(successTemplate);
  // });
});
