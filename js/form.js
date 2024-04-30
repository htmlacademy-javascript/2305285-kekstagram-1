import { bodyElement } from './main.js';
import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './filters.js';

const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAG_LENGTH = 5;
const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

const imgUploadForm = document.querySelector('#upload-select-image');
const imgUploadElement = document.querySelector('.img-upload__overlay');
const uploadFileElement = document.querySelector('#upload-file');
const closeImgEditingForm = document.querySelector('#upload-cancel');
const textHashtagsField = document.querySelector('.text__hashtags');
const textDescriptionField = document.querySelector('.text__description');

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

const checkLengthHashtag = (value) => value.length <= MAX_HASHTAG_LENGTH;

const checkSymbolsHashtag = (item) => HASHTAG.test(item);

const checkRepeatHashtag = (item) => {
  const lowerHashtag = item.map((tag) => tag.toLowerCase());
  return lowerHashtag.length === new Set(lowerHashtag).size;
};

const validateHashtag = (value) => {
  const hashtags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return checkLengthHashtag(hashtags) && hashtags.every(checkSymbolsHashtag) && checkRepeatHashtag(hashtags);
};

pristine.addValidator(textHashtagsField,
  validateHashtag,
  'Хэштег введен неверно'
);

const clearForm = () => {
  imgUploadForm.reset();
  pristine.reset();
};

const closeFormModal = () => {
  clearForm();
  resetScale();
  resetEffects();
  imgUploadElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openFormModal = () => {
  imgUploadElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormModal();
  }
}

uploadFileElement.addEventListener('change', () => {
  openFormModal();
});

closeImgEditingForm.addEventListener('click', () => {
  closeFormModal();
});

imgUploadForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  } else {
    const formData = new FormData(evt.target);
  }
});
