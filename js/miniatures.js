// import { bigPictureElement, openBigPicture } from './big-picture.js';
import { isEscapeKey } from './util.js';

// import { mini } from './main.js';

const containerElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderMiniatures = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach(({ url, description, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const imageElement = pictureElement.querySelector('.picture__img');
    imageElement.src = url;
    imageElement.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(pictureElement);
  });

  containerElement.appendChild(fragment);
};

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

function openBigPicture(evt) {
  if (evt.target.closest('.picture__img')) {
    evt.preventDefault();
    bigPictureElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    commentCountElement.classList.add('hidden');
    commentsLoaderElement.classList.add('hidden');


    // big();
    // const imageBigElement = document.querySelector('.big-picture__img');
    // imageBigElement.src = url;
    // document.querySelector('.likes-count').textContent = likes;
    // document.querySelector('.comments-count').textContent = comments.length;
    // document.querySelector('.social__caption').textContent = description;

    // document.addEventListener('keydown', onDocumentKeydown);
  }
}

containerElement.addEventListener('click', openBigPicture);

closeBigPictureElement.addEventListener('click', () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
});

export { renderMiniatures };
