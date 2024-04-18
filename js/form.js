import { bodyElement } from './main.js';
import { isEscapeKey } from './util.js';

const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAG_LENGTH = 5;
const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

const imgUploadForm = document.querySelector('#upload-select-image');
const imgUploadElement = document.querySelector('.img-upload__overlay');
const uploadFileElement = document.querySelector('#upload-file');
const closeImgEditingForm = document.querySelector('#upload-cancel');
const textHashtagsField = document.querySelector('.text__hashtags');
const textDescriptionField = document.querySelector('.text__description');

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successElement = successTemplate.cloneNode(true);
const successButton = successElement.querySelector('.success__button');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorElement = errorTemplate.cloneNode(true);
const errorButton = errorElement.querySelector('.error__button');

const clearForm = () => {
  uploadFileElement.value = '';
  textHashtagsField.value = '';
  textDescriptionField.value = '';

  // imgUploadForm.reset();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imgUploadElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
};

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

const checkLangthHashtag = (value) => value.length <= MAX_HASHTAG_LENGTH;

const checkSimbolsHashtag = (item) => HASHTAG.test(item);

const checkRepeatHashtag = (item) => {
  const lowerHashtag = item.map((tag) => tag.toLowerCase());
  return lowerHashtag.length === new Set(lowerHashtag).size;
};

const validateHashtag = (value) => {
  const splitHashtag = value.trim().split(' ');
  return checkLangthHashtag(splitHashtag) && splitHashtag.every(checkSimbolsHashtag) && checkRepeatHashtag(splitHashtag);
};

pristine.addValidator(textHashtagsField,
  validateHashtag,
  'Хэштег введен неверно'
);

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
    clearForm();
    imgUploadElement.classList.add('hidden');
  });

  // successElement.addEventListener('keydown', (evt) => {
  //   if (isEscapeKey(evt)) {
  //     evt.stopPropagation();
  //   }
  // });
};

uploadFileElement.addEventListener('change', () => {
  imgUploadElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  pristine.reset();
  // clearForm();

  document.addEventListener('keydown', onDocumentKeydown);
});

closeImgEditingForm.addEventListener('click', () => {
  imgUploadElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
});

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (!isValid) {
    openErrorMessage();
  } else {
    openSuccessMessage();
  }
  // this.submit();
});
