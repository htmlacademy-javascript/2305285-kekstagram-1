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
  commentsShown += COMMENTS_COIN;

  if (commentsShown >= comments.length) {
    commentsShown = comments.length;
    // commentsShown += COMMENTS_COIN;
    renderComments(comments);
    commentsLoaderElement.classList.add('hidden');
    commentCountElement.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;
  } else {
    // comments.length = commentsShown;
    // commentsShown = comments.length;
    // renderComments(comments);
    commentsLoaderElement.classList.remove('hidden');
    // commentsLoaderElement.addEventListener('click', () => {
    //   const fragment = document.createDocumentFragment();
    //   for (let i = 0; i < commentsShown; i++) {
    //     const commentsBlock = renderComments(comments);
    //     fragment.appendChild(commentsBlock);
    //   }
    //   commentsContainerElement.innerHTML = '';
    //   commentsContainerElement.appendChild(fragment);
    // });

    // const fragment = document.createDocumentFragment();
    // for (let i = 0; i < commentsShown; i++) {
    //   const commentsBlock = renderComments(comments);
    //   fragment.appendChild(commentsBlock);
    // }
    // commentsContainerElement.innerHTML = '';
    // commentsContainerElement.appendChild(fragment);
  }

  // const fragment = document.createDocumentFragment();
  // comments.length = commentsShown;
  // for (let i = 0; i < commentsShown; i++) {
  //   const commentsBlock = renderComments(comments);
  //   fragment.appendChild(commentsBlock);
  // }
  // commentsContainerElement.innerHTML = '';
  // commentsContainerElement.appendChild(fragment);

  // comments.length = 5;

  // commentsShown = comments.length;
  commentsLoaderElement.addEventListener('click', () => {
    commentsShown = comments.length;
    renderComments(comments);
    // commentsContainerElement.innerHTML = '';

    // const fragment = document.createDocumentFragment();
    // const commentsBlock = renderComments(comments);
    // fragment.appendChild(commentsBlock);
    // commentsContainerElement.innerHTML = '';
    // commentsContainerElement.appendChild(fragment);

    // const fragment = document.createDocumentFragment();
    // for (let i = 0; i < commentsShown; i++) {
    //   const commentsBlock = renderComments(comments);
    //   fragment.appendChild(commentsBlock);
    // }
    // commentsContainerElement.innerHTML = '';
    // commentsContainerElement.appendChild(fragment);
  });

  // commentsContainerElement.innerHTML = '';

  // commentCountElement.innerHTML = `${commentsShown + COMMENTS_COIN} из <span class="comments-count">${comments.length}</span> комментариев`;
};

closeBigPictureElement.addEventListener('click', () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
});

export { renderBigPicture, openBigPicture };
