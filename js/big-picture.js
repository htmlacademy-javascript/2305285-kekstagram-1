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

// let commentsShown = 0;
// let commentsContainer = [];

// const renderComments = (comments) => {
  // commentsContainerElement.innerHTML = '';
  // let commentsShown = 0;
  // let commentsContainer = [];
  // commentsShown += COMMENTS_COIN;

  // const fragment = document.createDocumentFragment();
  // for (let i = 0; i < commentsShown; i++) {
  //   comments.forEach(({ avatar, name, message }) => {
  //     const commentElement = commentTemplate.cloneNode(true);
  //     const commentImage = commentElement.querySelector('.social__picture');
  //     commentImage.src = avatar;
  //     commentImage.alt = name;
  //     const commentText = commentElement.querySelector('.social__text');
  //     commentText.textContent = message;
  //     fragment.appendChild(commentElement);
  //   });
  // };

  // for (let i = 0; i < commentsShown; i++) {
  //   comments.forEach(({ avatar, name, message }) => {
  //     const commentElement = commentTemplate.cloneNode(true);
  //     const commentImage = commentElement.querySelector('.social__picture');
  //     commentImage.src = avatar;
  //     commentImage.alt = name;
  //     const commentText = commentElement.querySelector('.social__text');
  //     commentText.textContent = message;
  //     fragment.appendChild(commentElement);
  //   });
  // };
  //  commentsContainerElement.appendChild(fragment);

  // console.log(commentsContainerElement);

  // let commentsContainer = commentsContainerElement.appendChild(fragment);
  // while (commentsContainer <= COMMENTS_COIN) {
  //   commentsContainer = commentsContainerElement.appendChild(fragment);
  // }
// };

// const onCommentsLoader = (comments) => {
//   // commentsContainerElement.innerHTML = '';
//   renderComments(comments);
// };


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
    // commentCountElement.textContent = comments.length;
  } else {
    comments.length = commentsShown;
    commentsLoaderElement.classList.remove('hidden');
    renderComments(comments);
    if (commentsLoaderElement.onclick) {
      commentsShown += COMMENTS_COIN;
      commentsLoaderElement.addEventListener('click', () => {
        commentsContainerElement.innerHTML = '';
        renderComments(comments);
      });
    }


    // if (comments.length > commentsShown) {
    //   commentsLoaderElement.addEventListener('click', onCommentsLoader());
    // }
  }
};

closeBigPictureElement.addEventListener('click', () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
});

export { renderBigPicture, openBigPicture };
