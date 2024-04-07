/* eslint-disable no-template-curly-in-string */
import { isEscapeKey } from './util.js';

const COMMENTS_COIN = 5;

const bodyElement = document.querySelector('body');
const bigPictureElement = document.querySelector('.big-picture');
const closeBigPictureElement = document.querySelector('.big-picture__cancel');
const commentCountElement = document.querySelector('.social__comment-count');
const commentsLoaderElement = document.querySelector('.big-picture .comments-loader');
const commentsContainerElement = bigPictureElement.querySelector('.big-picture__social .social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

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

const renderComments = (comments) => {
  commentsContainerElement.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach(({ avatar, name, message }) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentImage = commentElement.querySelector('.social__picture');
    commentImage.src = avatar;
    commentImage.alt = name;
    const commentText = commentElement.querySelector('.social__text');
    commentText.textContent = message;
    fragment.appendChild(commentElement);
  });

  commentsContainerElement.appendChild(fragment);
};

const openBigPicture = (info) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  renderBigPicture(info);
  // renderComments(info.comments);

  const comments = info.comments;
  let commentsShown = 0;

  // const onCommentsLoader = () => {
  //   // commentsContainerElement.innerHTML = '';
  //   renderComments(comments);
  // };

  commentsShown += COMMENTS_COIN;

  if (comments.length <= commentsShown) {
    commentsShown += COMMENTS_COIN;
    renderComments(comments);
    commentsLoaderElement.classList.add('hidden');
    // commentCountElement.innerHTML = '${commentsShown.length} из <span class="comments-count">${comments.length}</span> комментариев';
  } else {
    comments.length = commentsShown;
    commentsLoaderElement.classList.remove('hidden');
    renderComments(comments);
    // commentsLoaderElement.addEventListener('click', onCommentsLoader);
    // if (commentsLoaderElement.onclick) {
    //   commentsShown += COMMENTS_COIN;
    //   commentsLoaderElement.addEventListener('click', () => {
    //     commentsContainerElement.innerHTML = '';
    //     renderComments(comments);
    //   });
  }

  // const fragment = document.createDocumentFragment();
  // for (let i = 0; i < commentsShown; i++) {
  // const commentsBlock = renderComments(comments);
  // fragment.appendChild(commentsBlock);
  // }

  // commentsContainerElement.innerHTML = '';
  // commentsContainerElement.appendChild(fragment);


  // commentsLoaderElement.addEventListener('click', onCommentsLoader);
  //   if (commentsLoaderElement.onclick) {
  commentsShown += COMMENTS_COIN;
  commentsLoaderElement.addEventListener('click', () => {
    commentsContainerElement.innerHTML = '';
    renderComments(comments);
  });
};

closeBigPictureElement.addEventListener('click', () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
});

export { renderBigPicture, openBigPicture };
