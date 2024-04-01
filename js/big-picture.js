// import { miniatures } from './main.js';
// import { renderMiniatures } from './miniatures.js';
// import { createComments } from './data.js';

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

// comment.forEach(({ avatar, name, message }) => {
//   const socialCommentsElement = document.querySelector('.social__comments');
//   const commentBlock = document.createElements('li');
//   commentBlock.classList.add('social__comment');
//   const commentImage = document.createElements('img');
//   commentImage.classList.add('social__picture');
//   commentImage.src = avatar;
//   commentImage.alt = name;
//   commentImage.width = 35;
//   commentImage.height = 35;
//   const commentText = document.createElements('p');
//   commentText.classList.add('social__text');
//   commentText.textContent = message;
//   commentBlock.appendChild(commentImage, commentText);
//   socialCommentsElement.appendChild(commentBlock);
// });

const openBigPicture = (info) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderBigPicture(info);
};

closeBigPictureElement.addEventListener('click', () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
});

// const renderBigPicture = (picture) => {


//   // picture = miniatures();

//   picture.forEach(({ url, description, likes, comments }) => {
//     // const imageBigElement = document.querySelector('.big-picture__img').closest('img');
//     // imageBigElement.src = url;


//     document.querySelector('.likes-count').textContent = likes;
//     document.querySelector('.comments-count').textContent = comments.length;
//     document.querySelector('.social__caption').textContent = description;
//   });

//   // comment.forEach(({ avatar, name, message }) => {
//   //   const socialCommentsElement = document.querySelector('.social__comments');
//   //   const commentBlock = document.createElements('li');
//   //   commentBlock.classList.add('social__comment');
//   //   const commentImage = document.createElements('img');
//   //   commentImage.classList.add('social__picture');
//   //   commentImage.src = avatar;
//   //   commentImage.alt = name;
//   //   commentImage.width = 35;
//   //   commentImage.height = 35;
//   //   const commentText = document.createElements('p');
//   //   commentText.classList.add('social__text');
//   //   commentText.textContent = message;
//   //   commentBlock.appendChild(commentImage, commentText);
//   //   socialCommentsElement.appendChild(commentBlock);
//   // });

// };

// const createCommentsElement = createComments();


// createCommentsElement.forEach(({ avatar, name, message }) => {
//   const socialCommentsElement = document.querySelector('.social__comments');
//   const commentBlock = document.createElements('li');
//   commentBlock.classList.add('social__comment');
//   const commentImage = document.createElements('img');
//   commentImage.classList.add('social__picture');
//   commentImage.src = avatar;
//   commentImage.alt = name;
//   commentImage.width = 35;
//   commentImage.height = 35;
//   const commentText = document.createElements('p');
//   commentText.classList.add('social__text');
//   commentText.textContent = message;
//   commentBlock.appendChild(commentImage, commentText);
//   socialCommentsElement.appendChild(commentBlock);
//   socialCommentsElement.appendChild(commentBlock);
// });


export { renderBigPicture, openBigPicture };
