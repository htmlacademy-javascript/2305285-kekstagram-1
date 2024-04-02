import { createComments, PHOTO_SIZE } from './data.js';

import { isEscapeKey } from './util.js';

const bodyElement = document.querySelector('body');
const bigPictureElement = document.querySelector('.big-picture');
const closeBigPictureElement = document.querySelector('.big-picture__cancel');
const commentCountElement = document.querySelector('.social__comment-count');
const commentsLoaderElement = document.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
};

const renderBigPicture = ({ url, description, likes, comments }) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.comments-count').textContent = comments.length;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const renderBigPictureComments = ({ avatar, name, message }) => {
  const socialCommentsElement = bigPictureElement.querySelector('.big-picture__social .social__comments');
  socialCommentsElement.innerHTML = '';
  const commentBlock = document.createElement('li');
  commentBlock.classList.add('social__comment');
  const commentImage = document.createElement('img');
  commentImage.classList.add('social__picture');
  commentImage.src = avatar;
  commentImage.alt = name;
  commentImage.width = PHOTO_SIZE;
  commentImage.height = PHOTO_SIZE;
  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = message;
  commentBlock.appendChild(commentImage);
  commentBlock.appendChild(commentText);
  socialCommentsElement.appendChild(commentBlock);
  return socialCommentsElement;
};

const openBigPicture = (info) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderBigPicture(info);
  // renderBigPictureComments(info.comments);
  // while
  renderBigPictureComments(createComments());
};

closeBigPictureElement.addEventListener('click', () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
});

export { renderBigPicture, openBigPicture };
