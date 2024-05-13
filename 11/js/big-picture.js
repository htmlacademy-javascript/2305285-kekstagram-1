import { isEscapeKey } from './util.js';
import { initComments } from './comments.js';

const bigPictureElement = document.querySelector('.big-picture');
const closeBigPictureElement = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const renderBigPicture = ({ url, description, likes, comments }) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.comments-count').textContent = comments.length;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const openBigPicture = (info) => {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  renderBigPicture(info);

  initComments(info.comments);
};

closeBigPictureElement.addEventListener('click', () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
});

export { openBigPicture };
